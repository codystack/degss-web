import { notFound } from "next/navigation";
import ServiceForm from "../../ServiceForm";
import { updateServiceAction } from "../../actions";
import { serviceContent } from "@/data/service-content";
import { getServiceById, type Service } from "@/lib/data/services";

// Services seeded from the original site keep their page text in code, keyed
// by slug. Pre-fill any blank field with it so the first save copies it into
// the database; after that the slug can be renamed without losing content.
function withBuiltInContent(service: Service): Service {
  const builtIn = serviceContent[service.slug];
  if (!builtIn) return service;
  return {
    ...service,
    description: service.description || builtIn.tagline,
    heroImage: service.heroImage || builtIn.heroImage,
    intro: service.intro || builtIn.intro,
    features: service.features.length > 0 ? service.features : builtIn.features,
  };
}

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = await getServiceById(id);

  if (!service) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Edit service</h1>
      <div className="mt-6">
        <ServiceForm
          service={withBuiltInContent(service)}
          action={updateServiceAction.bind(null, service.id)}
        />
      </div>
    </div>
  );
}

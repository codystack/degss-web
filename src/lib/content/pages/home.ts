import { CONTENT_ICON_OPTIONS } from "../iconOptions";
import { definePage, FORMATTING_HINT } from "../schema";

const LINES_HINT = "One item per line.";

export const homePage = definePage({
  key: "home",
  label: "Home",
  group: "pages",
  description: "Hero text and buttons, plus every section of the homepage.",
  viewPath: "/",
  revalidate: [{ path: "/" }],
  sections: [
    {
      title: "Hero",
      description: "The slideshow images are managed under Hero slides.",
      fields: [
        { key: "heroTitle", label: "Heading", type: "textarea", rows: 2, hint: FORMATTING_HINT },
        { key: "heroText", label: "Text", type: "textarea", rows: 3 },
        { key: "heroPrimaryLabel", label: "Main button label", type: "text" },
        { key: "heroPrimaryHref", label: "Main button link", type: "link" },
        { key: "heroSecondaryLabel", label: "Second button label", type: "text" },
        { key: "heroSecondaryHref", label: "Second button link", type: "link" },
      ],
    },
    {
      title: "Opening thought",
      fields: [
        { key: "introHeading", label: "Heading", type: "text" },
        { key: "introSubheading", label: "Subheading", type: "text", optional: true },
        { key: "introBody", label: "Text", type: "textarea", rows: 5, hint: "Leave a blank line between paragraphs." },
      ],
    },
    {
      title: "What we do",
      fields: [
        { key: "whatWeDoEyebrow", label: "Small label", type: "text" },
        { key: "whatWeDoHeading", label: "Heading", type: "text" },
        { key: "whatWeDoText", label: "Text", type: "textarea", rows: 3 },
        {
          key: "pillars",
          label: "Slides",
          type: "list",
          itemLabel: "Slide",
          maxItems: 8,
          fields: [
            { key: "label", label: "Title", type: "text" },
            { key: "image", label: "Image", type: "image" },
            { key: "paragraph", label: "Text", type: "textarea", rows: 3 },
            { key: "highlights", label: "Highlights", type: "textarea", rows: 3, hint: LINES_HINT },
            { key: "cta", label: "Button label", type: "text" },
            { key: "href", label: "Button link", type: "text", hint: "e.g. /services/development" },
          ],
        },
      ],
    },
    {
      title: "Experience more",
      fields: [
        { key: "experienceEyebrow", label: "Small label", type: "text" },
        { key: "experienceHeading", label: "Heading", type: "text" },
        { key: "experienceSubheading", label: "Subheading", type: "text", optional: true },
        { key: "experienceBody", label: "Text", type: "textarea", rows: 6 },
        { key: "experienceVideoUrl", label: "YouTube video URL", type: "link" },
        { key: "experienceVideoPoster", label: "Video cover image", type: "image" },
      ],
    },
    {
      title: "Why DEGSS",
      fields: [
        { key: "whyEyebrow", label: "Small label", type: "text" },
        { key: "whyHeading", label: "Heading", type: "text" },
        {
          key: "whyItems",
          label: "Cards",
          type: "list",
          itemLabel: "Card",
          maxItems: 12,
          fields: [
            { key: "icon", label: "Icon", type: "select", options: CONTENT_ICON_OPTIONS },
            { key: "heading", label: "Heading", type: "text" },
            { key: "description", label: "Text", type: "textarea", rows: 3 },
          ],
        },
      ],
    },
    {
      title: "Core values",
      fields: [
        { key: "valuesEyebrow", label: "Small label", type: "text" },
        { key: "valuesHeading", label: "Heading", type: "text" },
        { key: "valuesImage1", label: "Large image", type: "image" },
        { key: "valuesImage2", label: "Small image", type: "image" },
        {
          key: "values",
          label: "Values",
          type: "list",
          itemLabel: "Value",
          maxItems: 10,
          fields: [
            { key: "icon", label: "Icon", type: "select", options: CONTENT_ICON_OPTIONS },
            { key: "heading", label: "Heading", type: "text" },
            { key: "description", label: "Text", type: "textarea", rows: 2 },
          ],
        },
      ],
    },
    {
      title: "Featured properties",
      description: "The three newest properties are shown automatically.",
      fields: [
        { key: "featuredEyebrow", label: "Small label", type: "text" },
        { key: "featuredHeading", label: "Heading", type: "text" },
        { key: "featuredButtonLabel", label: "Button label", type: "text" },
      ],
    },
    {
      title: "Journal banner",
      fields: [
        { key: "journalEyebrow", label: "Small label", type: "text" },
        { key: "journalHeading", label: "Heading", type: "text", hint: FORMATTING_HINT },
        { key: "journalText", label: "Text", type: "textarea", rows: 4 },
        { key: "journalLinkLabel", label: "Link label", type: "text" },
        { key: "journalImage", label: "Background image", type: "image" },
      ],
    },
    {
      title: "Testimonials",
      description: "The testimonials themselves are managed under Testimonials.",
      fields: [
        { key: "testimonialsEyebrow", label: "Small label", type: "text" },
        { key: "testimonialsHeading", label: "Heading", type: "text" },
      ],
    },
  ],
  defaults: {
    heroTitle: "Welcome to\nMore.",
    heroText:
      "Real estate should give you more than somewhere to put your money. It should create room for life, wealth, possibility and legacy.",
    heroPrimaryLabel: "Explore properties",
    heroPrimaryHref: "/properties",
    heroSecondaryLabel: "Get in touch",
    heroSecondaryHref: "/contact",
    introHeading: "What if land could do more?",
    introSubheading: "We think about land differently.",
    introBody:
      "Not simply as something to own, but as something that can create. We see land that feeds. Spaces that bring people together. Places that grow in value while giving people room to grow too.\n\nThat is the idea behind DEGSS.",
    whatWeDoEyebrow: "What we do",
    whatWeDoHeading: "More than real estate.",
    whatWeDoText:
      "From productive land to thoughtfully planned communities, we create opportunities around one simple belief: real estate should work harder for people.",
    pillars: [
      {
        label: "Agro",
        href: "/services/agro-farming",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
        paragraph:
          "Agricultural land that creates food, income and long-term value — connecting productive land with thoughtful investment.",
        highlights:
          "Productive land positioned for long-term value\nFood, income and employment opportunities\nHands-on agro-real-estate management",
        cta: "Explore Agro",
      },
      {
        label: "Residential",
        href: "/properties",
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1600&auto=format&fit=crop",
        paragraph:
          "Residential environments built for everyday life — space, planning and a real sense of community.",
        highlights:
          "Homes planned around how you actually live\nA real sense of neighbourhood and community\nOwnership that feels like more than an address",
        cta: "Explore Residential",
      },
      {
        label: "Development",
        href: "/services/development",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
        paragraph:
          "Thoughtfully designed developments, built to stay valuable, useful and alive for years to come.",
        highlights:
          "Infrastructure and shared spaces done right\nDesigned for what a place can become\nBuilt to hold its value long-term",
        cta: "Explore Development",
      },
      {
        label: "Landbanking (Prime Circle)",
        href: "/services/prime-circle",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
        paragraph:
          "Structured landbanking that positions investors around emerging growth and long-term appreciation.",
        highlights:
          "Positioned ahead of emerging growth\nStructured entry into landbanking deals\nLong-term appreciation focus",
        cta: "Explore Landbanking",
      },
    ],
    experienceEyebrow: "Experience more",
    experienceHeading: "Real estate, with more to it.",
    experienceSubheading: "Not a bigger plot. A fuller purpose.",
    experienceBody:
      "We don’t think of land as something you simply hold. We think of it as something that works — land that feeds a family, land that houses one, land that quietly compounds into wealth while a community grows up around it. We’re interested in living systems: ground that earns, spaces that gather people, ownership that outlives the person who signed for it. That’s the difference between buying land and building a legacy.",
    experienceVideoUrl: "https://www.youtube.com/watch?v=OIPfnC1mHpk",
    experienceVideoPoster: "/abt-img.jpg",
    whyEyebrow: "Why DEGSS",
    whyHeading: "Because what you own should work for you.",
    whyItems: [
      { icon: "target", heading: "Purposeful Assets", description: "We look for opportunities where land has a real role to play. In wealth creation, agriculture, housing, development and community." },
      { icon: "horizon", heading: "Long-Horizon Thinking", description: "We are interested in what a place can become, not just what it looks like today." },
      { icon: "compass", heading: "Thoughtful Development", description: "Nothing is overcrowded or rushed. Every site is planned for how it will feel to live in, not just how fast it can sell." },
      { icon: "branch", heading: "Diversified Opportunities", description: "From agro-real estate and landbanking to residential and development, DEGSS creates different pathways into real estate, and more than one way to grow." },
      { icon: "people", heading: "People First", description: "You’re not a unit number to us. You’re a future partner in a community we’re both building." },
      { icon: "shield", heading: "Clarity & Trust", description: "Good investment should not feel like a guessing game. We believe in clear conversations, thoughtful guidance and a considered ownership experience." },
    ],
    valuesEyebrow: "Our core values",
    valuesHeading: "The values behind every decision.",
    valuesImage1: "/abt-hero.jpg",
    valuesImage2: "/team-hero.jpg",
    values: [
      { icon: "star", heading: "Excellence", description: "We care about quality, competence and delivery." },
      { icon: "refresh", heading: "Transformation", description: "We turn land, capital and ideas into lasting value." },
      { icon: "heart", heading: "Humanity", description: "We consider the people who live, work and invest in the places we create." },
      { icon: "scale", heading: "Integrity", description: "We believe trust is built through honesty, transparency and consistency." },
      { icon: "group", heading: "Community", description: "We create environments where people can connect and grow." },
    ],
    featuredEyebrow: "Properties",
    featuredHeading: "Explore our featured properties",
    featuredButtonLabel: "View all properties",
    journalEyebrow: "The DEGSS journal",
    journalHeading: "Thinking *beyond* the plot.",
    journalText:
      "Real estate is changing. The opportunities are changing with it. From emerging trends to shifting buyer behaviour, market movements and the ideas shaping the future of real estate, we look beyond the obvious to understand what matters, and what comes next.",
    journalLinkLabel: "Explore insights",
    journalImage: "/hme-cta.jpg",
    testimonialsEyebrow: "Testimonials",
    testimonialsHeading: "What our clients say.",
  },
});

// Icon components for the keys in src/lib/content/iconOptions.ts.
import type { ContentIconKey } from "@/lib/content/iconOptions";

type IconProps = { className?: string };

function TargetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

function HorizonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 16a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M2 16h20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 5v2.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CompassIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BranchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8 6.8c3 0 3 4.4 8 5.2M8 17.2c3 0 3-4.4 8-5.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PeopleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M15.5 5.3c1.4.4 2.4 1.7 2.4 3.2 0 1.5-1 2.8-2.4 3.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M16.5 14.2c2.3.5 4 2.3 4 4.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.2l2 2 4-4.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3.5L14.6 9.1L20.5 9.8L16.1 13.8L17.4 19.8L12 16.7L6.6 19.8L7.9 13.8L3.5 9.8L9.4 9.1L12 3.5Z" />
    </svg>
  );
}

function RefreshIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z" />
    </svg>
  );
}

function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 20s-7.5-4.6-9.8-9.3C.7 7.3 2.4 4 5.8 4c2 0 3.5 1 6.2 3.6C14.7 5 16.2 4 18.2 4c3.4 0 5.1 3.3 3.6 6.7C19.5 15.4 12 20 12 20Z" />
    </svg>
  );
}

function ScaleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="11.25" y="2.5" width="1.5" height="18.5" rx="0.75" />
      <rect x="7" y="20" width="10" height="1.5" rx="0.75" />
      <rect x="4.5" y="4.3" width="14.5" height="1.5" rx="0.75" />
      <circle cx="12" cy="5" r="1.4" />
      <path d="M2 8.2 5 7.4l3 .8-1.4 5.1a3 3 0 0 1-1.6 1-3 3 0 0 1-1.6-1L2 8.2Z" />
      <path d="M16 8.2l3-.8 3 .8-1.4 5.1a3 3 0 0 1-1.6 1 3 3 0 0 1-1.6-1L16 8.2Z" />
    </svg>
  );
}

function GroupIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="9" cy="12" r="5.5" />
      <circle cx="15" cy="12" r="6.7" fill="#39548b" />
      <circle cx="15" cy="12" r="5.5" />
    </svg>
  );
}

const contentIcons: Record<ContentIconKey, (props: IconProps) => React.JSX.Element> = {
  target: TargetIcon,
  horizon: HorizonIcon,
  compass: CompassIcon,
  branch: BranchIcon,
  people: PeopleIcon,
  shield: ShieldCheckIcon,
  star: StarIcon,
  refresh: RefreshIcon,
  heart: HeartIcon,
  scale: ScaleIcon,
  group: GroupIcon,
};

/** Icon component for a stored icon key; unknown keys fall back to Target. */
export function getContentIcon(key: string): (props: IconProps) => React.JSX.Element {
  return contentIcons[key as ContentIconKey] ?? TargetIcon;
}

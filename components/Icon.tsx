type IconProps = {
  name: string;
  className?: string;
};

// Lightweight inline SVG icon set — no external icon library needed.
const paths: Record<string, React.ReactNode> = {
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  hand: (
    <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2m0 0V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2m0 0a2 2 0 1 0-4 0v6m0 0v3a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V8a2 2 0 1 0-4 0v3" />
  ),
  wave: (
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  spine: (
    <path d="M12 2v20M9 5h6M8.5 9h7M8 13h8M8.5 17h7" />
  ),
  medal: (
    <>
      <circle cx="12" cy="15" r="6" />
      <path d="M9 9 7 2h10l-2 7M12 13v4M10 15h4" />
    </>
  ),
  chart: <path d="M3 3v18h18M7 14l3-3 3 3 5-6" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  mapPin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  star: (
    <path d="M12 2l2.9 6.9L22 9.6l-5.4 4.7L18.2 22 12 18.1 5.8 22l1.6-7.7L2 9.6l7.1-.7L12 2z" />
  ),
  document: (
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h8M8 9h2" />
  ),
};

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.activity}
    </svg>
  );
}

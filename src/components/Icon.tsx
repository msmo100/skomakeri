type Props = { name: string; className?: string };

// Enkla linje-ikoner. stroke = currentColor så de tar färg från texten.
const paths: Record<string, React.ReactNode> = {
  shoe: (
    <>
      <path d="M2 16h15c2.5 0 4-1.2 4-3 0-1.2-.8-1.9-2.2-2.4l-4.3-1.6c-.8-.3-1.2-.7-1.7-1.4L11 5c-.4-.6-1-.9-1.6-.7-.7.2-1 .8-1 1.6 0 2 .1 4.3.2 6.1" />
      <path d="M2 16v-3.5M6 13v2.5M10 13.2V16M14 14.2V16" />
      <path d="M2 16v2.5h19V16" />
    </>
  ),
  key: (
    <>
      <circle cx="7.5" cy="7.5" r="4.5" />
      <path d="M10.8 10.8 21 21M17 17l2.5-2.5M19.5 19.5 22 17" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M8.5 8.5 21 21M8.5 15.5 21 3M12 12l3 3" />
    </>
  ),
  hanger: (
    <>
      <path d="M12 6a2 2 0 1 1 1.5 1.9c-.6.2-.9.6-.9 1.2v.9" />
      <path d="M12.6 10 3.5 15.5c-.9.6-.5 2 .6 2h15.8c1.1 0 1.5-1.4.6-2L11.4 10" />
    </>
  ),
  bed: (
    <>
      <path d="M2 18V8M2 12h20v6M22 18v-4a3 3 0 0 0-3-3h-7v3" />
      <path d="M6 12v-1.5A1.5 1.5 0 0 1 7.5 9H9a1.5 1.5 0 0 1 1.5 1.5V12" />
      <path d="M2 18h20" />
    </>
  ),
  rug: (
    <>
      <rect x="3.5" y="6" width="17" height="12" rx="1" />
      <path d="M3.5 6 2 4.5M20.5 6 22 4.5M3.5 18 2 19.5M20.5 18 22 19.5" />
      <path d="M7 9.5h10M7 12h10M7 14.5h10" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5c-1 0-2 .8-2.2 1.8-.3 1.6.2 4 2.4 7.3 2.2 3.3 4.2 4.8 5.7 5.6 1 .5 2.2.2 2.8-.7l.8-1.2c.4-.6.2-1.4-.4-1.8l-2-1.3c-.5-.3-1.2-.2-1.6.2l-.6.6c-1-.6-1.9-1.5-2.6-2.6l.6-.6c.4-.4.5-1 .2-1.6L10.5 6c-.3-.6-1-.9-1.7-.7" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22c4.5-4.3 7-8 7-11a7 7 0 1 0-14 0c0 3 2.5 6.7 7 11Z" />
      <circle cx="12" cy="11" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export default function Icon({ name, className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  );
}

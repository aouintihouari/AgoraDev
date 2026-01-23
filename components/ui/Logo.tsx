const Logo = () => {
  return (
    <svg
      className="-mt-1.25"
      width="30"
      height="30"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M60 10L105 45H15L60 10Z" fill="var(--logo-secondary)" />
      <rect x="15" y="95" width="90" height="15" rx="4" fill="var(--logo-secondary)" />
      <path d="M42 55L32 85" stroke="var(--logo-primary)" strokeWidth="10" strokeLinecap="round" />
      <path d="M65 55L55 85" stroke="var(--logo-primary)" strokeWidth="10" strokeLinecap="round" />
      <path d="M88 55L78 85" stroke="var(--logo-primary)" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
};

export default Logo;

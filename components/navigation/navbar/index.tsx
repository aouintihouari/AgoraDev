import Link from "next/link";
import ModeToggle from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full gap-5 p-6 sm:px-12 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
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

        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          <span className="text-logo-secondary font-bold">AGORA</span>
          <span className="text-logo-primary ml-1 font-semibold italic">dev</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className="flex-between gap-5">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

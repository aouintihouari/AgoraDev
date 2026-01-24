import Link from "next/link";
import ModeToggle from "./Theme";
import Logo from "@/components/ui/Logo";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full gap-5 p-6 sm:px-12 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Logo />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          <span className="text-logo-secondary font-bold">AGORA</span>
          <span className="text-logo-primary ml-1 font-semibold italic">dev</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <ModeToggle />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;

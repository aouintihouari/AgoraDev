import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="hamburger menu icon"
          className="invert-colors cursor-pointer sm:hidden" // Correction "cursor-pointe" -> "pointer"
        />
      </SheetTrigger>

      <SheetContent side="left" className="background-light900_dark200 border-none pt-[3%]">
        <SheetTitle className="hidden">Navigation</SheetTitle>

        <Link href="/" className="ml-4 flex items-center gap-1">
          <Logo />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 sm:hidden">
            <span className="text-logo-secondary font-bold">AGORA</span>
            <span className="text-logo-primary ml-1 font-semibold italic">dev</span>
          </p>
        </Link>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <section className="flex flex-col gap-6 pt-16">
            <NavLinks isMobileNav={true} />
          </section>

          <div className="mx-4 flex flex-col gap-3 pb-6">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-12 w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium btn-secondary min-h-12 w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Sign Up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;

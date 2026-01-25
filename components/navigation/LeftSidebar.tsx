// LeftSidebar.tsx
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./navbar/NavLinks";
import ROUTES from "@/constants/routes";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  return (
    <section className="background-light900_dark200 shadow-light-300 sticky top-0 left-0 flex h-full min-h-screen w-fit flex-col justify-between overflow-y-auto border-r p-6 pt-36 max-sm:hidden lg:w-66.5">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks isMobileNav={false} />
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <Button asChild className="small-medium btn-secondary min-h-11.5 w-full rounded-lg px-4 py-3 shadow-none">
          <Link href={ROUTES.SIGN_IN}>
            <Image className="invert-colors lg:hidden" src="/icons/account.svg" alt="account" width={20} height={20} />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button asChild className="small-medium btn-secondary min-h-11.5 w-full rounded-lg px-4 py-3 shadow-none">
          <Link href={ROUTES.SIGN_UP}>
            <Image className="invert-colors lg:hidden" src="/icons/sign-up.svg" alt="sign-up" width={20} height={20} />
            <span className="primary-text-gradient max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;

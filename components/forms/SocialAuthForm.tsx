"use client";

import Image from "next/image";

import { Button } from "../ui/button";
import { signInWithGithub, signInWithGoogle } from "@/lib/actions/auth.action";

const SocialAuthForm = () => {
  // Correction: Remplacement de 'background-dark400_light900' par 'bg-white dark:bg-dark-400'
  // Cela force le blanc pur en light mode pour bien détacher les boutons du fond beige
  const btnClass =
    "bg-white dark:bg-dark-400 rounded-2 text-foreground body-medium min-h-12 flex-1 px-4 py-3.5 border light-border-2";

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <form action={signInWithGithub} className="flex-1">
        <Button className={`w-full ${btnClass}`} type="submit">
          <Image
            className="invert-colors mr-2.5 object-contain"
            src="/icons/github.svg"
            width={20}
            height={20}
            alt="GitHub Logo"
          />
          <span>Log in with GitHub</span>
        </Button>
      </form>

      <form action={signInWithGoogle} className="flex-1">
        <Button className={`w-full ${btnClass}`} type="submit">
          <Image className="mr-2.5 object-contain" src="/icons/google.svg" width={20} height={20} alt="Google Logo" />
          <span>Log in with Google</span>
        </Button>
      </form>
    </div>
  );
};

export default SocialAuthForm;

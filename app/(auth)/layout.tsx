import { ReactNode } from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-auth-light dark:bg-auth-dark flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-130 sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-foreground">Join AgoraDev</h1>
            <p className="paragraph-regular text-muted-foreground">To get your questions answered</p>
          </div>
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default layout;

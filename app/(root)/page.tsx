import { auth, signOut } from "@/auth";

import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";

const page = async () => {
  const session = await auth();

  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </div>
  );
};

export default page;

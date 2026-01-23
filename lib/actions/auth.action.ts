"use server";

import { signIn } from "@/auth";
import ROUTES from "@/constants/routes";

export async function signInWithGithub() {
  await signIn("github", { redirectTo: ROUTES.HOME });
}

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: ROUTES.HOME });
}

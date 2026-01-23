"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const page = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ username: "", name: "", email: "", password: "", confirmPassword: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default page;

import { z } from "zod";

export const SignInSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(30, { message: "Username cannot exceed 30 characters" })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Username can only contain letters, numbers, and underscores",
      }),
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .max(50, { message: "Name cannot exceed 50 characters" })
      .regex(/^[a-zA-Z\s\u00C0-\u00FF]+$/, {
        message: "Name can only contain letters and spaces",
      }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(100)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
        message: "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character",
      }),
    confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const AskQuestionSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title cannot exceed 100 characters." }),
  content: z.string().min(1, { message: "Content is required" }),
  tags: z
    .array(z.string())
    .min(1, { message: "At least one tag is required." })
    .max(3, { message: "You cannot add more than 3 tags." }),
});

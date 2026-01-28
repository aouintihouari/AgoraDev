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

export const UserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
  email: z.email({ message: "Invalid email address" }),
  bio: z.string().optional(),
  image: z.url({ message: "Invalid image URL" }).optional(),
  location: z.string().optional(),
  portfolio: z.url({ message: "Invalid portfolio URL" }).optional(),
  reputation: z.number().optional(),
});

export const AccountSchema = z
  .object({
    userId: z.uuid({ message: "Invalid User ID format." }).optional(),
    name: z.string().trim().min(2, { message: "Name must be at least 2 characters." }),
    image: z.url().optional().or(z.literal("")),
    email: z.email({ message: "Invalid email address." }),
    provider: z.enum(["credentials", "google", "github"], {
      message: "Invalid provider. Allowed: credentials, google, github.",
    }),
    providerAccountId: z.string().optional(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(100)
      .regex(/[A-Z]/, { message: "At least one uppercase letter." })
      .regex(/[a-z]/, { message: "At least one lowercase letter." })
      .regex(/[0-9]/, { message: "At least one number." })
      .regex(/[^a-zA-Z0-9]/, { message: "At least one special character." })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.provider === "credentials") {
      if (!data.password) {
        ctx.addIssue({
          code: "custom",
          path: ["password"],
          message: "Password is required for credentials login.",
        });
      }
    }
    if (data.provider !== "credentials" && !data.providerAccountId) {
      ctx.addIssue({
        code: "custom",
        path: ["providerAccountId"],
        message: "Provider Account ID is required for OAuth.",
      });
    }
  });

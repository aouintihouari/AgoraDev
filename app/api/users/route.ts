import { NextResponse } from "next/server";

import dbConnect from "@/lib/mongoose";
import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { SignUpSchema } from "@/lib/validations";
import { ConflictError } from "@/lib/http-errors";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();

    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (e) {
    return handleError(e, "api") as APIErrorResponse;
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const validatedData = SignUpSchema.parse(body);
    const { email, username } = validatedData;

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new ConflictError("User with this email already exists");

    const existingUsername = await User.findOne({ username });
    if (existingUsername) throw new ConflictError("Username is already taken");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...userData } = validatedData;

    const newUser = await User.create(userData);

    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (e) {
    return handleError(e, "api") as APIErrorResponse;
  }
}

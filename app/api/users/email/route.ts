import dbConnect from "@/lib/mongoose";
import handleError from "@/lib/handlers/error";
import { ValidationError, NotFoundError } from "@/lib/http-errors";
import { UserSchema } from "@/lib/validations";
import User from "@/database/user.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    await dbConnect();

    const validatedData = UserSchema.pick({ email: true }).parse({ email });

    if (!validatedData) throw new ValidationError({ email: ["Email is required"] });

    const user = await User.findOne({ email });
    if (!user) throw new NotFoundError("User");

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (e) {
    return handleError(e, "api") as APIErrorResponse;
  }
}

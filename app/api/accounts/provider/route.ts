import { NextResponse } from "next/server";

import { NotFoundError } from "@/lib/http-errors";
import { AccountSchema } from "@/lib/validations";
import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import dbConnect from "@/lib/mongoose";

export async function POST(request: Request) {
  const { providerAccountId } = await request.json();

  try {
    await dbConnect();

    const validatedData = AccountSchema.parse({ providerAccountId });
    if (!validatedData) throw new Error("Invalid data");

    const account = await Account.findOne({ providerAccountId });
    if (!account) throw new NotFoundError("Account not found");

    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (e) {
    return handleError(e, "api") as APIErrorResponse;
  }
}

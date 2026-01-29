import { NextResponse } from "next/server";
import { z } from "zod";

import { NotFoundError } from "@/lib/http-errors";
import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import dbConnect from "@/lib/mongoose";

export async function POST(request: Request) {
  const { providerAccountId } = await request.json();

  try {
    await dbConnect();

    const validatedData = z
      .object({
        providerAccountId: z.string().min(1, "Provider Account ID is required"),
      })
      .parse({ providerAccountId });

    const account = await Account.findOne({ providerAccountId: validatedData.providerAccountId });
    if (!account) throw new NotFoundError("Account not found");

    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (e) {
    return handleError(e, "api") as APIErrorResponse;
  }
}

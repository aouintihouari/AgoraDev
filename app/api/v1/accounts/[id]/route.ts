import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import dbConnect from "@/lib/mongoose";
import { NotFoundError, UnauthorizedError } from "@/lib/http-errors";
import { AccountSchema } from "@/lib/validations";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) throw new NotFoundError("Account");

  try {
    await dbConnect();

    const account = await Account.find();
    if (!account) throw new NotFoundError("Account");

    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (e) {
    return handleError(e, "api") as APIErrorResponse;
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) throw new NotFoundError("Account");

  try {
    await dbConnect();

    const session = await auth();
    if (!session) throw new UnauthorizedError();

    const body = await request.json();
    const validatedData = AccountSchema.partial().parse(body);

    const updatedAccount = await Account.findByIdAndUpdate(id, validatedData, { new: true });
    if (!updatedAccount) throw new NotFoundError("Account");

    return NextResponse.json({ success: true, data: updatedAccount }, { status: 200 });
  } catch (e) {
    return handleError(e, "api") as APIErrorResponse;
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) throw new NotFoundError("Account");

  try {
    await dbConnect();

    const account = await Account.findByIdAndDelete(id);
    if (!account) throw new NotFoundError("Account");

    return NextResponse.json({ success: true, data: account }, { status: 204 });
  } catch (e) {
    return handleError(e, "api") as APIErrorResponse;
  }
}

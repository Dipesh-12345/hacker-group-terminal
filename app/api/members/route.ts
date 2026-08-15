import { NextResponse } from "next/server";
import { normalizeMember, readMembers, writeMembers } from "../../../lib/members";

export async function GET() {
  const members = await readMembers();
  return NextResponse.json({ members });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const member = normalizeMember(body);

  if (!member) {
    return NextResponse.json(
      { error: "Handle and role are required." },
      { status: 400 }
    );
  }

  const members = await readMembers();
  const nextMembers = [member, ...members];

  await writeMembers(nextMembers);

  return NextResponse.json({ member, members: nextMembers }, { status: 201 });
}

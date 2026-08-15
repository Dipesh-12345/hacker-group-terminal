import { promises as fs } from "fs";
import path from "path";

export type Member = {
  handle: string;
  role: string;
  status: string;
};

export const defaultMembers: Member[] = [
  { handle: "root-01", role: "admin / disclosure lead", status: "online" },
  { handle: "cipher", role: "crypto notes", status: "watch" },
  { handle: "packet", role: "network lab", status: "away" },
  { handle: "nullbyte", role: "textfile editor", status: "online" }
];

const dataDirectory = path.join(process.cwd(), "data");
const membersFile = path.join(dataDirectory, "members.json");

export async function readMembers(): Promise<Member[]> {
  try {
    const file = await fs.readFile(membersFile, "utf8");
    const members = JSON.parse(file) as Member[];

    if (!Array.isArray(members)) {
      return defaultMembers;
    }

    return members.filter(isMember);
  } catch {
    return defaultMembers;
  }
}

export async function writeMembers(members: Member[]) {
  await fs.mkdir(dataDirectory, { recursive: true });
  await fs.writeFile(membersFile, `${JSON.stringify(members, null, 2)}\n`, "utf8");
}

export function normalizeMember(input: unknown): Member | null {
  if (!input || typeof input !== "object") {
    return null;
  }

  const payload = input as Record<string, unknown>;
  const handle = String(payload.handle ?? "").trim().slice(0, 24);
  const role = String(payload.role ?? "").trim().slice(0, 48);
  const status = String(payload.status ?? "online").trim().slice(0, 16) || "online";

  if (!handle || !role) {
    return null;
  }

  return { handle, role, status };
}

function isMember(value: unknown): value is Member {
  if (!value || typeof value !== "object") {
    return false;
  }

  const member = value as Record<string, unknown>;
  return (
    typeof member.handle === "string" &&
    typeof member.role === "string" &&
    typeof member.status === "string"
  );
}

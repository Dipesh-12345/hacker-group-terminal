import { MembersClient } from "./members-client";
import { readMembers } from "../../lib/members";

export default async function MembersPage() {
  const members = await readMembers();

  return <MembersClient initialMembers={members} />;
}

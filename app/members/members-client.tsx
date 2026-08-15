"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import type { Member } from "../../lib/members";

type MembersResponse = {
  members: Member[];
  error?: string;
};

export function MembersClient({ initialMembers }: { initialMembers: Member[] }) {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [draft, setDraft] = useState<Member>({
    handle: "",
    role: "",
    status: "online"
  });
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function addMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");

    const response = await fetch("/api/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(draft)
    });
    const data = (await response.json()) as MembersResponse;

    setIsSaving(false);

    if (!response.ok) {
      setMessage(data.error ?? "Could not add member.");
      return;
    }

    setMembers(data.members);
    setDraft({ handle: "", role: "", status: "online" });
    setMessage("Member added to backend registry.");
  }

  return (
    <main className="site-shell route-shell">
      <div className="scanlines" />
      <div className="screen-glow" />

      <header className="page-header">
        <Link className="back-link" href="/">
          &lt; back to index
        </Link>
        <p className="eyebrow">member registry</p>
        <h1>Browse member list</h1>
        <p>Members are loaded from the Next.js backend API at /api/members.</p>
      </header>

      <section className="member-section">
        <article className="panel member-list-panel">
          <p className="eyebrow">backend data</p>
          <h2>Current members</h2>
          {message ? <p className="console-message">{message}</p> : null}
          <div className="member-list">
            {members.map((member, index) => (
              <div className="member-row" key={`${member.handle}-${member.role}-${index}`}>
                <div>
                  <strong>{member.handle}</strong>
                  <span>{member.role}</span>
                </div>
                <span className="status-pill">{member.status}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel admin-panel">
          <p className="eyebrow">admin console</p>
          <h2>Add member</h2>
          <form className="member-form" onSubmit={addMember}>
            <label htmlFor="member-handle">
              handle
              <input
                id="member-handle"
                maxLength={24}
                onChange={(event) => setDraft({ ...draft, handle: event.target.value })}
                placeholder="operator"
                required
                value={draft.handle}
              />
            </label>
            <label htmlFor="member-role">
              role
              <input
                id="member-role"
                maxLength={48}
                onChange={(event) => setDraft({ ...draft, role: event.target.value })}
                placeholder="research / admin"
                required
                value={draft.role}
              />
            </label>
            <label htmlFor="member-status">
              status
              <select
                id="member-status"
                onChange={(event) => setDraft({ ...draft, status: event.target.value })}
                value={draft.status}
              >
                <option value="online">online</option>
                <option value="watch">watch</option>
                <option value="away">away</option>
                <option value="offline">offline</option>
              </select>
            </label>
            <button disabled={isSaving} type="submit">
              {isSaving ? "saving..." : "add member"}
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}

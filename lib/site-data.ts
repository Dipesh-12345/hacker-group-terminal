export type NavLink = {
  label: string;
  href: string;
};

export type ContentCard = {
  eyebrow: string;
  title: string;
  body: string;
};

export type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: ContentCard[];
};

export const primaryLinks: NavLink[] = [
  { label: "learn about us", href: "/about" },
  { label: "browse member list", href: "/members" },
  { label: "read textfiles", href: "/textfiles" },
  { label: "check our apps", href: "/apps" },
  { label: "discover hacktivism", href: "/hacktivism" },
  { label: "view source", href: "/source" }
];

export const secondaryLinks: NavLink[] = [
  { label: "read our manifesto", href: "/manifesto" },
  { label: "see outreach", href: "/outreach" },
  { label: "watch home movies", href: "/movies" },
  { label: "listen to tunes", href: "/tunes" },
  { label: "contact securely", href: "/contact" }
];

export const pageContent = {
  about: {
    eyebrow: "about the collective",
    title: "Old-web energy, modern frontend discipline.",
    intro:
      "HACKER GROUP is presented as an ethical security research collective: public notes, careful disclosure, small defensive tools, and a strong preference for plain text over noise.",
    cards: [
      {
        eyebrow: "disclosure",
        title: "Responsible reports",
        body: "Findings are documented, reproduced, and disclosed with clear mitigation notes."
      },
      {
        eyebrow: "education",
        title: "Public learning",
        body: "Short explainers and practical checklists for builders, admins, and new learners."
      },
      {
        eyebrow: "practice",
        title: "Consent first",
        body: "The project language stays focused on lawful defense, transparency, and user safety."
      }
    ]
  },
  textfiles: {
    eyebrow: "archive",
    title: "Read textfiles",
    intro: "A low-bandwidth archive for research notes, disclosure summaries, and field checklists.",
    cards: [
      {
        eyebrow: "release",
        title: "Disclosure template",
        body: "A simple structure for reporting impact, affected versions, reproduction steps, and fixes."
      },
      {
        eyebrow: "notes",
        title: "Network hygiene",
        body: "Plain notes on inventory, exposed services, logging, backups, and safe defaults."
      },
      {
        eyebrow: "mirror",
        title: "Offline friendly",
        body: "The format is readable in terminals, small browsers, and low-bandwidth mirrors."
      }
    ]
  },
  apps: {
    eyebrow: "tools",
    title: "Check our apps",
    intro: "Small defensive utilities for logs, inventory, privacy review, and local audits.",
    cards: [
      {
        eyebrow: "scanner",
        title: "Inventory board",
        body: "Track assets, owners, services, and review dates without hiding the basics."
      },
      {
        eyebrow: "logs",
        title: "Log lens",
        body: "A place to summarize suspicious events, response notes, and evidence links."
      },
      {
        eyebrow: "privacy",
        title: "Config checklist",
        body: "Simple checks for permissions, sharing, exposed tokens, and retention settings."
      }
    ]
  },
  hacktivism: {
    eyebrow: "ethics",
    title: "Discover hacktivism",
    intro: "A lawful, consent-first view of digital rights, security education, and public-interest research.",
    cards: [
      {
        eyebrow: "line",
        title: "No unauthorized access",
        body: "The site frames activism as education, documentation, and responsible reporting."
      },
      {
        eyebrow: "rights",
        title: "Digital autonomy",
        body: "Privacy, transparency, and user agency are treated as practical engineering goals."
      },
      {
        eyebrow: "community",
        title: "Teach in public",
        body: "Share fixes, context, and accessible explanations before chasing spectacle."
      }
    ]
  },
  source: {
    eyebrow: "code",
    title: "View source",
    intro: "The frontend is organized as a GitHub-ready Next.js, React, and TypeScript app.",
    cards: [
      {
        eyebrow: "frontend",
        title: "Next.js app router",
        body: "Each terminal link is now a real route instead of an anchor section on one page."
      },
      {
        eyebrow: "backend",
        title: "Members API",
        body: "The member registry is backed by API routes and a JSON data file for easy local use."
      },
      {
        eyebrow: "upload",
        title: "GitHub ready",
        body: "The separate project folder contains source, config, README, and package files."
      }
    ]
  },
  manifesto: {
    eyebrow: "manifesto",
    title: "Rules of engagement",
    intro: "A concise operating note for safe public-interest research.",
    cards: [
      {
        eyebrow: "one",
        title: "Respect consent",
        body: "Do not test systems without permission, and do not publish material that enables harm."
      },
      {
        eyebrow: "two",
        title: "Publish to fix",
        body: "Share enough detail for defenders to understand impact and mitigation."
      },
      {
        eyebrow: "three",
        title: "Stay readable",
        body: "Use open formats, clear language, and simple pages that work on slow machines."
      }
    ]
  },
  outreach: {
    eyebrow: "community",
    title: "See outreach",
    intro: "Workshops, public notes, and practical security literacy material for new learners.",
    cards: [
      {
        eyebrow: "session",
        title: "Beginner briefings",
        body: "Short introductions to passwords, backups, updates, phishing, and account recovery."
      },
      {
        eyebrow: "clinic",
        title: "Small team reviews",
        body: "Simple checklists for projects that need safer defaults before launch."
      },
      {
        eyebrow: "library",
        title: "Public handouts",
        body: "Reusable textfiles that explain practical defense without drama."
      }
    ]
  },
  movies: {
    eyebrow: "media",
    title: "Watch home movies",
    intro: "A future slot for short demos, conference clips, and screen recordings from the lab.",
    cards: [
      {
        eyebrow: "demo",
        title: "Terminal tour",
        body: "A short walkthrough of the site, routes, and backend member registry."
      },
      {
        eyebrow: "lab",
        title: "Safe practice",
        body: "Screen recordings should use toy systems, local labs, or intentionally vulnerable demos."
      },
      {
        eyebrow: "archive",
        title: "Mirror clips",
        body: "Keep media downloadable and accompanied by text summaries."
      }
    ]
  },
  tunes: {
    eyebrow: "radio",
    title: "Listen to tunes",
    intro: "Terminal radio, ambient loops, and low-fi audio drops for late-night documentation sessions.",
    cards: [
      {
        eyebrow: "track",
        title: "Green phosphor",
        body: "A placeholder for a calm loop that matches the terminal interface."
      },
      {
        eyebrow: "mix",
        title: "Night audit",
        body: "Low-key music for reading logs, writing notes, and shipping fixes."
      },
      {
        eyebrow: "archive",
        title: "Open formats",
        body: "Prefer downloadable audio with clear licenses and mirrors."
      }
    ]
  },
  contact: {
    eyebrow: "contact",
    title: "Contact securely",
    intro: "Use verified keys, signed messages, and clear disclosure details before sending sensitive reports.",
    cards: [
      {
        eyebrow: "email",
        title: "Security inbox",
        body: "Publish a dedicated address for vulnerability reports and expected response times."
      },
      {
        eyebrow: "keys",
        title: "Public keys",
        body: "List current fingerprints, rotation dates, and signed replacement notices."
      },
      {
        eyebrow: "scope",
        title: "Report format",
        body: "Ask for impact, reproduction steps, affected assets, timestamps, and proposed fixes."
      }
    ]
  }
} satisfies Record<string, PageContent>;

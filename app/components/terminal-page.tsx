import Link from "next/link";
import type { PageContent } from "../../lib/site-data";

export function TerminalPage({ content }: { content: PageContent }) {
  return (
    <main className="site-shell route-shell">
      <div className="scanlines" />
      <div className="screen-glow" />

      <header className="page-header">
        <Link className="back-link" href="/">
          &lt; back to index
        </Link>
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
      </header>

      <section className="resource-grid route-grid" aria-label={`${content.title} details`}>
        {content.cards.map((card) => (
          <article className="panel" key={card.title}>
            <p className="eyebrow">{card.eyebrow}</p>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

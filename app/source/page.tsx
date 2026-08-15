import { TerminalPage } from "../components/terminal-page";
import { pageContent } from "../../lib/site-data";

export default function SourcePage() {
  return <TerminalPage content={pageContent.source} />;
}

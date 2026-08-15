import { TerminalPage } from "../components/terminal-page";
import { pageContent } from "../../lib/site-data";

export default function ManifestoPage() {
  return <TerminalPage content={pageContent.manifesto} />;
}

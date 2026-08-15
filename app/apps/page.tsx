import { TerminalPage } from "../components/terminal-page";
import { pageContent } from "../../lib/site-data";

export default function AppsPage() {
  return <TerminalPage content={pageContent.apps} />;
}

import { TerminalPage } from "../components/terminal-page";
import { pageContent } from "../../lib/site-data";

export default function TextfilesPage() {
  return <TerminalPage content={pageContent.textfiles} />;
}

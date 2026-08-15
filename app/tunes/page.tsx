import { TerminalPage } from "../components/terminal-page";
import { pageContent } from "../../lib/site-data";

export default function TunesPage() {
  return <TerminalPage content={pageContent.tunes} />;
}

import { TerminalPage } from "../components/terminal-page";
import { pageContent } from "../../lib/site-data";

export default function AboutPage() {
  return <TerminalPage content={pageContent.about} />;
}

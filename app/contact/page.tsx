import { TerminalPage } from "../components/terminal-page";
import { pageContent } from "../../lib/site-data";

export default function ContactPage() {
  return <TerminalPage content={pageContent.contact} />;
}

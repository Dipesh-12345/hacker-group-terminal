import { TerminalPage } from "../components/terminal-page";
import { pageContent } from "../../lib/site-data";

export default function MoviesPage() {
  return <TerminalPage content={pageContent.movies} />;
}

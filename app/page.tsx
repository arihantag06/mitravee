import { PageSections } from "@/components/page-sections";
import { homePage } from "@/lib/pages";

export default function Home() {
  return <PageSections sections={homePage.sections} />;
}

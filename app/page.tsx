import { Introduction } from "@/components/introduction";
import { Resume } from "@/components/resume";
import { TechStacks } from "@/components/tech-stacks";
import { QuickLinks } from "@/components/quick-links";

export default function Home() {
  return (
    <div>
      <Introduction />
      <Resume />
      <TechStacks />
      <QuickLinks />
    </div>
  );
}

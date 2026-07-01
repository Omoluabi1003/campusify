import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function ResearchPage() {
  const module = getPlatformModule("research");

  if (!module) return null;

  return <ModulePage module={module} />;
}

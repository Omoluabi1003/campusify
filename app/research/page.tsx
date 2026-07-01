import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function ResearchPage() {
  const platformModule = getPlatformModule("research");

  if (!platformModule) return null;

  return <ModulePage module={platformModule} />;
}

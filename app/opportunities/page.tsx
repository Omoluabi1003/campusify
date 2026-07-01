import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function OpportunitiesPage() {
  const platformModule = getPlatformModule("opportunities");

  if (!platformModule) return null;

  return <ModulePage module={platformModule} />;
}

import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function ProfilesPage() {
  const platformModule = getPlatformModule("profiles");

  if (!platformModule) return null;

  return <ModulePage module={platformModule} />;
}

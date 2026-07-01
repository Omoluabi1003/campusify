import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function ProfilesPage() {
  const module = getPlatformModule("profiles");

  if (!module) return null;

  return <ModulePage module={module} />;
}

import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function DirectoryPage() {
  const platformModule = getPlatformModule("directory");

  if (!platformModule) return null;

  return <ModulePage module={platformModule} />;
}

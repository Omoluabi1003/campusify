import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function LanguagePage() {
  const platformModule = getPlatformModule("language");

  if (!platformModule) return null;

  return <ModulePage module={platformModule} />;
}

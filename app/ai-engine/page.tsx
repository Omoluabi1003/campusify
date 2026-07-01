import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function AiEnginePage() {
  const platformModule = getPlatformModule("ai-engine");

  if (!platformModule) return null;

  return <ModulePage module={platformModule} />;
}

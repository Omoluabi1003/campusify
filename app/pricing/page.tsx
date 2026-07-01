import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function PricingPage() {
  const platformModule = getPlatformModule("pricing");

  if (!platformModule) return null;

  return <ModulePage module={platformModule} />;
}

import { notFound } from "next/navigation";
import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function AiEnginePage() {
  const module = getPlatformModule("ai-engine");

  if (!module) {
    notFound();
  }

  return <ModulePage module={module} />;
}

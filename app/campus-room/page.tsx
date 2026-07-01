import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function CampusRoomPage() {
  const platformModule = getPlatformModule("campus-room");

  if (!platformModule) return null;

  return <ModulePage module={platformModule} />;
}

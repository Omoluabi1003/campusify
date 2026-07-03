import Image from "next/image";

export function CampusitoryLogo() {
  return <Image src="/branding/campusitory-logo.png" alt="Campusitory" width={40} height={40} className="h-10 w-10 object-contain" priority />;
}

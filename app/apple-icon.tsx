import { ImageResponse } from "next/og";

import { readFile } from "node:fs/promises";
import { join } from "node:path";

async function getLogoDataUrl() {
  const logo = await readFile(join(process.cwd(), "public/branding/campusitory-logo.png"));
  return `data:image/png;base64,${logo.toString("base64")}`;
}

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const logoUrl = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A2240",
        }}
      >
        <img src={logoUrl} alt="Campusitory" style={{ width: 148, height: 148, objectFit: "contain" }} />
      </div>
    ),
    size,
  );
}

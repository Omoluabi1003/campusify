import { ImageResponse } from "next/og";

import { readFile } from "node:fs/promises";
import { join } from "node:path";

async function getLogoDataUrl() {
  const logo = await readFile(join(process.cwd(), "public/branding/campusitory-logo.png"));
  return `data:image/png;base64,${logo.toString("base64")}`;
}

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default async function Icon() {
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
        <img src={logoUrl} alt="Campusitory" style={{ width: 420, height: 420, objectFit: "contain" }} />
      </div>
    ),
    size,
  );
}

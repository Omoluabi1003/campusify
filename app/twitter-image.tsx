import { ImageResponse } from "next/og";

export const alt = "Campusitory — Knowledge in Motion";
export const size = {
  width: 1200,
  height: 675,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0A2240 0%, #0A2240 56%, #D6682C 100%)",
          color: "#F7F4ED",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 104,
              height: 104,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              background: "rgba(255, 255, 255, 0.16)",
              border: "2px solid rgba(255, 255, 255, 0.38)",
              fontSize: 52,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>Campusitory</div>
            <div style={{ fontSize: 36, color: "#F7F4ED", marginTop: 8 }}>Knowledge in Motion</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 30, color: "#F7F4ED" }}>Designed and Developed by ETL GIS Consulting LLC</div>
          <div style={{ fontSize: 30, color: "#F7F4ED" }}>Platform Architecture by Paul A. K. Iyogun</div>
        </div>
      </div>
    ),
    size,
  );
}

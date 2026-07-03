import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 52%, #14b8a6 100%)",
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 178,
          fontWeight: 700,
          letterSpacing: -16,
        }}
      >
        C
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
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
          background: "linear-gradient(135deg, #0f141c 0%, #06080c 100%)",
          borderRadius: 8,
          border: "2px solid #d4ff00",
          boxShadow: "0 0 10px rgba(212, 255, 0, 0.7)",
          fontFamily: "monospace",
          fontWeight: 900,
          fontSize: 16,
          color: "#d4ff00",
          letterSpacing: -1,
        }}
      >
        MM
      </div>
    ),
    {
      ...size,
    }
  );
}


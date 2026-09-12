import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0e121a 0%, #06080c 100%)",
          borderRadius: 44,
          border: "6px solid #d4ff00",
          boxShadow: "0 0 50px rgba(212, 255, 0, 0.4)",
          color: "#d4ff00",
          fontSize: 88,
          fontWeight: 900,
          fontFamily: "monospace",
          letterSpacing: -4,
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


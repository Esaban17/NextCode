import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = "NextCode - Desarrollo Web Profesional";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(34,211,238,0.18), transparent 45%), radial-gradient(circle at 75% 75%, rgba(168,85,247,0.18), transparent 45%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            backgroundImage: "linear-gradient(90deg, #22d3ee, #a855f7)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 44,
            fontWeight: 600,
            marginTop: 16,
            color: "#e5e7eb",
          }}
        >
          Desarrollo Web Profesional
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: 24,
            color: "#9ca3af",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

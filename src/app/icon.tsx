import { ImageResponse } from "next/og";

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
          backgroundColor: "#0a0a0f",
          borderRadius: 6,
          color: "#22d3ee",
          fontSize: 24,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        N
      </div>
    ),
    {
      ...size,
    }
  );
}

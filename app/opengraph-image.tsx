import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Anchor Systems";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(180deg, #081325 0%, #0b1c3b 45%, #17377a 100%)",
          color: "white",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 24,
              backgroundColor: "white",
              color: "#0b1c3b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.2em"
            }}
          >
            AS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, opacity: 0.74, letterSpacing: "0.2em" }}>
              ANCHOR SYSTEMS
            </div>
            <div style={{ fontSize: 26, opacity: 0.8 }}>
              Premium AI operating system for service businesses
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900
            }}
          >
            Capture more leads. Automate follow-up. Book more jobs.
          </div>
          <div style={{ fontSize: 28, opacity: 0.76, maxWidth: 880 }}>
            Built for service businesses that need stronger responsiveness,
            cleaner pipeline visibility, and a better customer experience.
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}

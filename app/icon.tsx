import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32
};

export const contentType = "image/png";
export const runtime = "edge";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, #0a1526 0%, #10213a 100%)",
          color: "white",
          borderRadius: "10px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 1,
            borderRadius: 9,
            background:
              "linear-gradient(135deg, rgba(97,168,255,0.28), rgba(143,211,255,0.08))"
          }}
        />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width="18"
          height="18"
          style={{ position: "relative" }}
          stroke="#f7faff"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="5.5" r="1.75" />
          <path d="M12 7.25v10.5" />
          <path d="M7.25 11.75h9.5" />
          <path d="M4 15.5h3.2" />
          <path d="M16.8 15.5H20" />
          <path d="M6 15.5c1.25 3.1 3.75 4.75 6 4.75s4.75-1.65 6-4.75" />
        </svg>
      </div>
    ),
    {
      ...size
    }
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Expecto Digital Agency — Website Design India Starting ₹1,999";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f1216",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(56,189,248,0.12)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(129,140,248,0.10)",
            filter: "blur(80px)",
          }}
        />

        {/* Top row — brand + location */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "rgba(56,189,248,0.15)",
                border: "1px solid rgba(56,189,248,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: 800,
                color: "#38bdf8",
              }}
            >
              E
            </div>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#f8fafc", letterSpacing: "-0.5px" }}>
              EXPECTO
            </span>
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#94a3b8",
              border: "1px solid rgba(248,250,252,0.08)",
              padding: "6px 16px",
              borderRadius: 100,
              letterSpacing: "0.08em",
            }}
          >
            BALLIA, INDIA • expecto.online
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 13, color: "#38bdf8", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Digital Agency
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.0,
              letterSpacing: "-2px",
            }}
          >
            Websites. Apps.
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-2px",
              background: "linear-gradient(90deg, #38bdf8, #818cf8)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            SaaS. Growth.
          </div>
          <div style={{ fontSize: 20, color: "#94a3b8", marginTop: 8, maxWidth: 600 }}>
            Starting ₹1,999 · 7-Day Delivery · 50+ Projects · 100% Satisfaction
          </div>
        </div>

        {/* Bottom row — stat pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            "🚀 7-Day Delivery",
            "💰 From ₹1,999",
            "✅ 50+ Projects",
            "🏆 100% Satisfaction",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: 14,
                color: "#f8fafc",
                border: "1px solid rgba(248,250,252,0.10)",
                background: "rgba(248,250,252,0.04)",
                padding: "10px 20px",
                borderRadius: 100,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}

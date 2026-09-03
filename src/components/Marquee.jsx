import React from "react";

export default function Marquee({ children, reverse }) {
  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden", padding: "16px 0" }}>
      <div
        style={{
          display: "flex",
          gap: 32,
          width: "max-content",
          animation: `${reverse ? "stv-marquee-reverse" : "stv-marquee"} 32s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

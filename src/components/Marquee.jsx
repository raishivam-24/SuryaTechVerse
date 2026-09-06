import React from "react";

export default function Marquee({ children, reverse }) {
  return (
    <div className="stv-marquee-viewport" style={{ position: "relative", width: "100%", overflow: "hidden", padding: "16px 0" }}>
      <div className={`stv-marquee-track ${reverse ? "stv-marquee-track--reverse" : "stv-marquee-track--normal"}`}>
        {children}
        {children}
      </div>
    </div>
  );
}

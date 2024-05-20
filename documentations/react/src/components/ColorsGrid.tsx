import { colors } from "@saturn/pack-tokens";
import { getContrast } from "polished";

export const ColorsGrid = () => {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            padding: "1.5rem",
            color: getContrast(color, "#ffffff") < 3.5 ? "#000000" : "#ffffff",
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
};

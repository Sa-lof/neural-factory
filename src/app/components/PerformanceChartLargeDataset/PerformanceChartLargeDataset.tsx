import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { useTheme } from "@mui/material";

// Define the type for each data item
interface DataItem {
  name: string;
  time: number | null;
  color: string;
  lightColor: string;
  comparison: string;
}

const data: DataItem[] = [
  {
    name: "MEGALADATA",
    time: 117,
    color: "#FFC300",
    lightColor: "#00A8C1",
    comparison: "",
  },
  {
    name: "RAPIDMINER",
    time: 197,
    color: "#FFEB99",
    lightColor: "#99E0FF",
    comparison: "12 times slower than Megaladata",
  },
  {
    name: "PENTAHO",
    time: 1495,
    color: "#FFEB99",
    lightColor: "#99E0FF",
    comparison: "1.6 times slower",
  },
  {
    name: "ALTERYX",
    time: null,
    color: "#FFEB99",
    lightColor: "#99E0FF",
    comparison: "",
  },
  {
    name: "KNIME",
    time: null,
    color: "#FFEB99",
    lightColor: "#99E0FF",
    comparison: "",
  },
];

// Define the type for the Tooltip payload
interface CustomTooltipProps {
  payload: {
    payload: DataItem;
  }[];
}

// Custom Tooltip component with typed payload
const CustomTooltip: React.FC<CustomTooltipProps> = ({ payload }) => {
  const theme = useTheme();
  const backgroundColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300";
  const textColor = theme.palette.mode === "light" ? "#000000" : "#0D0D0D";

  if (payload && payload.length) {
    const { name, comparison } = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor,
          color: textColor,
          padding: "10px",
          borderRadius: "5px",
          fontSize: "clamp(0.70rem, 0.70vw + 0.5rem, 1rem)",
        }}
      >
        <p>{`${name}: ${comparison}`}</p>
      </div>
    );
  }
  return null;
};

const PerformanceChartLargeDataset: React.FC = () => {
  const theme = useTheme();
  const labelColor = theme.palette.mode === "light" ? "#000000" : "#f5f5f5";

  return (
    <div style={{ width: "100%", maxWidth: "1000px", margin: "auto", position: "relative", paddingRight: 34 }}>
      <h3 style={{ color: labelColor, textAlign: "center", fontSize: "24px" }}>
        Desempeño con 14.5 gB
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data.map((item) => ({ ...item, time: item.time ?? 0 }))}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
          barSize={50}
        >
          <XAxis
            type="number"
            tickFormatter={(value) => `${value} sec`}
            tick={{ fill: labelColor, fontSize: 14 }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: labelColor, fontSize: 14 }}
          />
          <Tooltip content={<CustomTooltip payload={[]} />} cursor={{ fill: "transparent" }} />
          <Bar dataKey="time" isAnimationActive animationDuration={800}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={theme.palette.mode === "light" ? entry.lightColor : entry.color}
              />
            ))}
            <LabelList
              dataKey="time"
              position="right"
              formatter={(value: number) =>
                value === 0 ? "More than two hours or not loaded" : `${value} sec`
              }
              style={{
                fontSize: "clamp(0.70rem, 0.70vw + 0.5rem, 1rem)",
                fill: labelColor,
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChartLargeDataset;

import React, { useState, useEffect } from "react";
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
import megaladata from "../../assets/graphs/megaladata.png";

interface DataItem {
  name: string;
  time: number | null;
  color: string;
  lightColor: string;
  comparison: string;
  image?: string;
}

const data: DataItem[] = [
  {
    name: "MEGALADATA",
    time: 117,
    color: "#FFC300",
    lightColor: "#00A8C1",
    comparison: "",
    image: megaladata.src,
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

interface CustomTooltipProps {
  payload: {
    payload: DataItem;
  }[];
}

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

  // Hook para manejar el tamaño de la imagen
  const [imageSize, setImageSize] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      const newSize = Math.min(135, window.innerWidth / 3); // Ajusta el factor según sea necesario
      setImageSize(newSize);
    };

    // Configura el tamaño inicial y agrega el evento de redimensionamiento
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            tick={({ x, y, payload }) => {
              const item = data.find(d => d.name === payload.value);
              const xOffset = -imageSize * 1; // Posición horizontal ajustada en función del tamaño
              const yOffset = -imageSize / 2; // Posición vertical ajustada en función del tamaño

              return (
                <g transform={`translate(${x},${y})`}>
                  {item?.image ? (
                    <image x={xOffset} y={yOffset} width={imageSize} height={imageSize} xlinkHref={item.image} />
                  ) : (
                    <text x={-10} y={5} dy={0} fill={labelColor} fontSize="14" textAnchor="end">
                      {payload.value}
                    </text>
                  )}
                </g>
              );
            }}
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

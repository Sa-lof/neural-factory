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
  
  const data = [
    {
      name: "MEGALADATA",
      time: 117,
      color: "#FFC300",
      comparison: "LOWER IS FASTER",
    },
    {
      name: "PENTAHO",
      time: 197,
      color: "#FFEB99",
      comparison: "1.6 times slower than Megaladata",
    },
    {
      name: "RAPIDMINER",
      time: 1495,
      color: "#FFEB99",
      comparison: "12 times slower than Megaladata",
    },
    {
      name: "ALTERYX",
      time: null, // Indicates "More than two hours or not loaded"
      color: "#FF6347",
      comparison: "More than two hours or not loaded",
    },
    {
      name: "KNIME",
      time: null, // Indicates "More than two hours or not loaded"
      color: "#FF6347",
      comparison: "More than two hours or not loaded",
    },
  ];
  
  // Custom Tooltip component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const { name, comparison } = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "#FFC300",
            color: "#0D0D0D",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>{`${name}: ${comparison}`}</p>
        </div>
      );
    }
    return null;
  };
  
  const PerformanceChartLargeDataset: React.FC = () => {
    return (
      <div style={{ width: "100%", maxWidth: "1000px", margin: "auto" }}>
        <h3 style={{ color: "#f5f5f5", textAlign: "center", fontSize: "24px" }}>
          Desempeño con 14.5 gB
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
            barSize={50}
          >
            <XAxis
              type="number"
              tickFormatter={(value) => (value ? `${value} sec` : "")}
              tick={{ fill: "#f5f5f5", fontSize: 14 }}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#f5f5f5", fontSize: 14 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="time" isAnimationActive animationDuration={800}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <LabelList
                dataKey="time"
                position="right"
                formatter={(value: any) =>
                  value ? (
                    <tspan fill="#000">{`${value} sec`}</tspan>
                  ) : (
                    <tspan fill="#FF6347">More than two hours or not loaded</tspan>
                  )
                }
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default PerformanceChartLargeDataset;
  
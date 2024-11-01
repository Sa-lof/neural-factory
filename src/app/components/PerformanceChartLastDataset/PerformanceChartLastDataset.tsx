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
      time: 226,
      color: "#FFC300",
      comparison: "",
    },
    {
      name: "RAPIDMINER",
      time: 5270,
      color: "#FFEB99",
      comparison: "23 times slower than Megaladata",
    },
    {
      name: "PENTAHO",
      time: null,
      color: "#FFEB99",
      comparison: "",
    },
    {
      name: "ALTERYX",
      time: null,
      color: "#FFEB99",
      comparison: "",
    },
    {
      name: "KNIME",
      time: null,
      color: "#FFEB99",
      comparison: "",
    },
  ];
  
  // Custom Tooltip component (sin mostrar el tooltip por hover)
  const CustomTooltip = ({ active, payload }: any) => {
    if (payload && payload.length) {
      const { name, comparison } = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "#FFC300",
            color: "#0D0D0D",
            padding: "10px",
            borderRadius: "5px",
            fontSize: 'clamp(0.70rem, 0.70vw + 0.5rem, 1rem)',
          }}
        >
          <p>{`${name}: ${comparison}`}</p>
        </div>
      );
    }
    return null;
  };
  
  const PerformanceChartLastDataset: React.FC = () => {
    return (
      <div style={{ width: "100%", maxWidth: "1000px", margin: "auto", position: "relative", paddingRight:34}}>
        <h3 style={{ color: "#f5f5f5", textAlign: "center", fontSize: "24px"}}>
          Desempeño con 58 gB
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data.map(item => ({ ...item, time: item.time ?? 0 }))}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
            barSize={50}
          >
            <XAxis
              type="number"
              tickFormatter={(value) => `${value} sec`}
              tick={{ fill: "#f5f5f5", fontSize: 14 }}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#f5f5f5", fontSize: 14 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
            <Bar dataKey="time" isAnimationActive animationDuration={800}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
                <LabelList
                    dataKey="time"
                    position="right"
                    formatter={(value: any) => (value === 0 ? "More than two hours or not loaded" : `${value} sec`)}
                    style={{
                    fontSize: 'clamp(0.70rem, 0.70vw + 0.5rem, 1rem)',
                    margin: '0 auto',
                    }}
                />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default PerformanceChartLastDataset;
  
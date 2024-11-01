import React, { useState, useEffect } from "react";
import { Box, Typography, Fade, IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle"; // Importa un ícono circular para los indicadores
import PerformanceChart from "../PerformanceChart/PerformanceChart";
import PerformanceChartLargeDataset from "../PerformanceChartLargeDataset/PerformanceChartLargeDataset";
import PerformanceChartLastDataset from "../PerformanceChartLastDataset/PerformanceChartLastDataset";

const charts = [
  { component: <PerformanceChart /> },
  { component: <PerformanceChartLargeDataset /> },
  { component: <PerformanceChartLastDataset /> },
];

const PerformanceCarousel: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = charts.length;

  const handleNext = () => setActiveStep((prevStep) => (prevStep + 1) % maxSteps);

  const handleStepChange = (step: number) => setActiveStep(step);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: "auto",
        textAlign: "center",
        py: 4,
        position: "relative",
        paddingBottom: 15,
      }}
    >
      {charts.map((chart, index) => (
        <Fade key={index} in={index === activeStep} timeout={600}>
          <Box
            sx={{
              display: index === activeStep ? "block" : "none",
              height: 400,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {chart.component}
          </Box>
        </Fade>
      ))}

      {/* Indicadores de navegación en círculo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          gap: 1,
        }}
      >
        {charts.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleStepChange(index)}
            sx={{
              color: index === activeStep ? "#FFC300" : "gray",
              transition: "color 0.3s",
            }}
          >
            <CircleIcon sx={{ fontSize: 12 }} />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default PerformanceCarousel;

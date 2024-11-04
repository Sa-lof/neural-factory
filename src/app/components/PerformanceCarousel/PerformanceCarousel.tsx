import React, { useState, useEffect } from "react";
import { Box, Fade, IconButton, useTheme } from "@mui/material";
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
  const theme = useTheme();

  const activeColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en claro, amarillo en oscuro
  const inactiveColor = theme.palette.mode === "light" ? "gray" : "#f5f5f5"; // Gris en claro, blanco en oscuro

  const handleNext = () => setActiveStep((prevStep) => (prevStep + 1) % maxSteps);

  const handleStepChange = (step: number) => setActiveStep(step);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

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
              color: index === activeStep ? activeColor : inactiveColor,
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

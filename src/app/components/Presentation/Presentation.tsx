import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Presentation: React.FC = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en claro, amarillo en oscuro
  const textColor = theme.palette.mode === "light" ? "#000000" : "#f5f5f5"; // Negro en claro, blanco en oscuro

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "4rem 2rem",
        color: textColor,
        alignItems: "center",
        alignContent: "center",
        height: "100vh",
        paddingTop: { xs: "0.6rem", sm: "0.8rem", md: "1rem", lg: "1rem" },
      }}
    >
      {/* Título principal */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: textColor,
          marginBottom: "2rem",
          fontFamily: "Exo, sans-serif",
          fontSize: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
        }}
      >
        ¿Qué es <span style={{ color: primaryColor }}>Neural Factory</span>?{" "}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "0.8rem", sm: "1rem", md: "1.3rem", lg: "1.5rem" },
          lineHeight: "1.75",
          maxWidth: "1600px",
          margin: "0 auto",
          color: textColor,
          fontFamily: "Exo, sans-serif",
          fontWeight: 300,
        }}
      >
        Neural Factory empodera a empresas de diversas industrias para
        aprovechar el poder transformador de la Inteligencia Artificial.
        Ofrecemos soluciones de vanguardia en Aprendizaje Automático,
        Aprendizaje Profundo y Visión por Computadora, diseñadas para optimizar
        sus operaciones, mejorar la toma de decisiones e impulsar el
        crecimiento. Nuestro enfoque colaborativo garantiza que cada solución se
        alinee perfectamente con sus necesidades y objetivos comerciales únicos.
      </Typography>
    </Box>
  );
};

export default Presentation;

import React from "react";
import { Box, Typography } from "@mui/material";

const Presentation: React.FC = () => {
  return (
    <Box
    sx={{
      textAlign: "center",
      padding: "4rem 2rem",
      color: "#f5f5f5",
      alignItems: "center",
      alignContent: "center",
      height: "100vh",
      paddingTop: { xs: "0.6rem", sm: "0.8rem", md: "1rem", lg: "1rem" }, // Reducir margen superior aquí
    }}
    >
      {/* Título principal */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "#FFF",
          marginBottom: "2rem", // Espaciado inferior
          fontFamily: "Exo, sans-serif",
          fontSize: { xs: "40px", sm:"60px", md: "80px", lg:"100px"},
        }}
      >
        ¿Que es <span style={{ color: "#FFC300" }}>Neural Factory</span>?{" "}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "0.8rem", sm:"1rem", md: "1.3rem", lg:"1.5rem"},
          lineHeight: "1.75", // Altura de línea para mayor legibilidad
          maxWidth: "1600px", // Ancho máximo para que el texto no ocupe todo el ancho
          margin: "0 auto", // Centrar el texto
          color: "#f5f5f5", // Color del texto
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

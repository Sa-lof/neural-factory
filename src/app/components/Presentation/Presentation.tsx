import React from "react";
import { Box, Typography } from "@mui/material";

const Presentation: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "4rem 2rem", // Espaciado adecuado para darle margen al contenido
        color: "#f5f5f5", // Color de texto claro
        alignItems: "center",
        alignContent: "center",
        height: "100vh", // Ajustar la altura al 100% del viewport
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
          fontSize: "100px",
        }}
      >
        ¿Que es <span style={{ color: "#FFC300" }}>Neural Factory</span>?{" "}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: "32px", // Tamaño de fuente un poco más grande
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

import React from "react";
import { Box, Typography } from "@mui/material";

interface AboutCardProps {
  image: string; // Ruta de la imagen
  number: string; // Número de la tarjeta
  title: string; // Título de la tarjeta
  description: string; // Descripción de la tarjeta
}

const AboutCard: React.FC<AboutCardProps> = ({
  image,
  number,
  title,
  description,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid #f5f5f5", // Borde blanco
        padding: "1.5rem",
        borderRadius: "8px",
        textAlign: "left",
        color: "#f5f5f5",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)", // Efecto hover para escalar la tarjeta
        },
      }}
    >
      {/* Imagen */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: "150px",
          objectFit: "contain",
          marginBottom: "1rem",
        }}
      />

      {/* Número y título */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#FFC300", // Color amarillo
            marginBottom: "0.5rem",
            fontFamily: "Exo, sans-serif",
            fontSize: "36px",
            marginRight: "0.5rem",
          }}
        >
          {number}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "#f5f5f5", // Color amarillo
            marginBottom: "0.5rem",
            fontFamily: "Exo, sans-serif",
            fontSize: "24px",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Descripción */}
      <Typography
        variant="body2"
        sx={{
          color: "#f5f5f5",
          fontFamily: "Exo, sans-serif",
          fontWeight: 300,
          fontSize: "16px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default AboutCard;

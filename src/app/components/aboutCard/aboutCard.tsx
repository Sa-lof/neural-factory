import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

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
    <Card
      sx={{
        border: "1px solid #f5f5f5", // Borde blanco
        padding: { xs: "0.8rem", sm:"1rem", md: "1.3rem", lg:"1.5rem"},
        borderRadius: "8px",
        textAlign: "left",
        color: "#f5f5f5",
        transition: "transform 0.3s ease-in-out",
        height: "100%",
        "&:hover": {
          transform: "scale(1.05)", // Efecto hover para escalar la tarjeta
        },
        backgroundColor: "transparent", // Fondo transparente si es necesario
      }}
    >
      {/* Imagen */}
      <CardMedia
        component="img"
        src={image}
        alt={title}
        sx={{
          height: "150px",
          objectFit: "cover", // Hace que la imagen cubra completamente el espacio
          marginBottom: "1rem",
        }}
      />

      {/* Número y título */}
      <CardContent sx={{ padding: "0" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#FFC300", // Color amarillo
            marginBottom: "0.5rem",
            fontFamily: "Exo, sans-serif",
            fontSize: { xs: "1.6rem", sm:"1.7rem", md: "1.8rem", lg:"1.9rem"},
            marginRight: "0.5rem",
          }}
        >
          {number}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "#f5f5f5", // Color del texto
            marginBottom: "0.5rem",
            fontFamily: "Exo, sans-serif",
            fontSize: { xs: "1.2rem", sm:"1.3rem", md: "1.4rem", lg:"1.5rem"},
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#f5f5f5",
            fontFamily: "Exo, sans-serif",
            fontWeight: 300,
            fontSize: { xs: "0.8rem", sm:"0.9rem", md: "1.0rem", lg:"1.1rem"},
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutCard;

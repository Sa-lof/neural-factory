import React from "react";
import { Card, CardContent, CardMedia, Typography, useTheme } from "@mui/material";

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
  const theme = useTheme();
  const borderColor = theme.palette.mode === "light" ? "#000000" : "#f5f5f5"; // Negro en claro, blanco en oscuro
  const textColor = theme.palette.mode === "light" ? "#000000" : "#f5f5f5"; // Negro en claro, blanco en oscuro
  const highlightColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en claro, amarillo en oscuro

  return (
    <Card
      sx={{
        border: `1px solid ${borderColor}`,
        padding: { xs: "0.8rem", sm: "1rem", md: "1.3rem", lg: "1.5rem" },
        borderRadius: "8px",
        textAlign: "left",
        color: textColor,
        transition: "transform 0.3s ease-in-out",
        height: "100%",
        "&:hover": {
          transform: "scale(1.05)",
        },
        backgroundColor: "transparent",
      }}
    >
      {/* Imagen */}
      <CardMedia
        component="img"
        src={image}
        alt={title}
        sx={{
          height: "150px",
          objectFit: "cover",
          marginBottom: "1rem",
        }}
      />

      {/* Número y título */}
      <CardContent sx={{ padding: "0" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: highlightColor,
            marginBottom: "0.5rem",
            fontFamily: "Exo, sans-serif",
            fontSize: { xs: "1.6rem", sm: "1.7rem", md: "1.8rem", lg: "1.9rem" },
            marginRight: "0.5rem",
          }}
        >
          {number}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: textColor,
            marginBottom: "0.5rem",
            fontFamily: "Exo, sans-serif",
            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem", lg: "1.5rem" },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: textColor,
            fontFamily: "Exo, sans-serif",
            fontWeight: 300,
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1.0rem", lg: "1.1rem" },
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutCard;

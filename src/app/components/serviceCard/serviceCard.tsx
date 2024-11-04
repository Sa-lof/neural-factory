"use client";
import { Box, Typography, useTheme } from "@mui/material";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function ServiceCard({
  title,
  description,
  imageUrl,
}: ServiceCardProps) {
  const theme = useTheme();
  const primaryColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en modo claro, amarillo en oscuro
  const textColor = theme.palette.mode === "light" ? "#000000" : "#f5f5f5"; // Negro en claro, blanco en oscuro
  const borderColor = theme.palette.mode === "light" ? "#000000" : "#f5f5f5"; // Negro en modo claro, blanco en oscuro

  return (
    <Box
      sx={{
        border: `1px solid ${borderColor}`,
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "16px",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Exo, sans-serif",
      }}
    >
      {/* Image Container (optional) */}
      <Box
        component="img"
        src={imageUrl || "https://via.placeholder.com/150x50"}
        alt={title}
        sx={{
          width: "100%",
          borderRadius: "8px",
          objectFit: "cover",
          marginBottom: "16px",
        }}
      />

      <Typography
        variant="h6"
        sx={{
          fontFamily: "Exo, sans-serif",
          fontWeight: 700,
          color: primaryColor, // Cambia a azul en modo claro, amarillo en oscuro
          marginBottom: "8px",
          fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem", lg: "1.5rem" },
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Exo, sans-serif",
          color: textColor, // Cambia a negro en modo claro, blanco en oscuro
          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1.0rem", lg: "1.1rem" },
          fontWeight: 300,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

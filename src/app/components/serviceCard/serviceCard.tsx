"use client";
import { Box, Typography } from "@mui/material";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional if you want to add an image in the future
}

export default function ServiceCard({
  title,
  description,
  imageUrl,
}: ServiceCardProps) {
  return (
    <Box
      sx={{
        border: "1px solid #f5f5f5",
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
        src={imageUrl || "https://via.placeholder.com/150x50"} // Fallback to placeholder if no imageUrl is provided
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
          color: "#FFC300",
          marginBottom: "8px",
          fontSize: { xs: "1.2rem", sm:"1.3rem", md: "1.4rem", lg:"1.5rem"},
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "Exo, sans-serif",
          color: "#f5f5f5",
          fontSize: { xs: "0.8rem", sm:"0.9rem", md: "1.0rem", lg:"1.1rem"},
          fontWeight: 300,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

"use client";
import { Box, Typography } from "@mui/material";

interface IndustryCardProps {
  title: string;
  imageUrl: string;
}

const IndustryCard = ({ imageUrl }: IndustryCardProps) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#0D0D0D",
        fontFamily: "Exo, sans-serif",
        fontWeight: 700,
        fontSize: "24px",
        height: "100%", // Ensures the card takes up the full grid space
        width: "100%",
      }}
    ></Box>
  );
};

export default function Industries() {
  const industryCards = [
    {
      title: "IMAGEN",
      imageUrl: "https://via.placeholder.com/600x400",
    },
    {
      title: "IMAGEN",
      imageUrl: "https://via.placeholder.com/600x400",
    },
    {
      title: "IMAGEN",
      imageUrl: "https://via.placeholder.com/600x400",
    },
    {
      title: "IMAGEN",
      imageUrl: "https://via.placeholder.com/600x400",
    },
    {
      title: "IMAGEN",
      imageUrl: "https://via.placeholder.com/600x400",
    },
    {
      title: "IMAGEN",
      imageUrl: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Full viewport height
        paddingTop: 4,
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Exo, sans-serif",
          color: "#f5f5f5",
          fontWeight: 500,
          fontSize: "52px",
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        Hemos trabajado con clientes de diversas industrias, ayudando a
        optimizar su logística, marketing y operaciones.
      </Typography>

      {/* Grid layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
          gridTemplateRows: "repeat(2, 300px)", // 2 rows, each with a fixed height of 300px
          gap: "16px",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {industryCards.map((card, index) => (
          <IndustryCard
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
          />
        ))}
      </Box>
    </Box>
  );
}

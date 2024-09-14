import React from "react";
import { Box, Grid } from "@mui/material";
import AboutCard from "../aboutCard/aboutCard";

interface AboutGridProps {
  cards: {
    image: string;
    number: string;
    title: string;
    description: string;
    size: { xs: number; sm: number; md: number }; // Tamaño personalizado de la tarjeta
  }[];
}

const AboutGrid: React.FC<AboutGridProps> = ({ cards }) => {
  return (
    <Box
      sx={{
        marginRight: 12,
        marginLeft: 12,
        height: "100vh",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid
            item
            xs={card.size.xs}
            sm={card.size.sm}
            md={card.size.md}
            key={index}
          >
            <AboutCard
              image={card.image}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutGrid;
"use client";
import { CardStack } from "../ui/card-stack";
import { Box, Typography } from "@mui/material";

// Small utility to highlight the content of specific section of a testimonial content
const CARDS = [
  {
    id: 0,
    name: "Daniel Núñez (Científico de Datos)",
    avatar: "/path/to/avatar1.jpg",
    socialLink: "https://twitter.com/daniel", // Editable social media link
    content: (
      <>
        Daniel es científico de datos con experiencia en IA, big data y
        ciberseguridad. Ha desarrollado sistemas IoT seguros y modelos
        predictivos. Se actualiza con certificaciones y metodologías ágiles para
        resolver desafíos empresariales con soluciones basadas en datos.
      </>
    ),
  },
  {
    id: 1,
    name: "Ricardo López",
    avatar: "/path/to/avatar2.jpg",
    socialLink: "https://linkedin.com/in/maria", // Editable social media link
    content: (
      <>
        Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Curabitur blandit tempus porttitor.
      </>
    ),
  },
  {
    id: 2,
    name: "Efraín",
    avatar: "/path/to/avatar3.jpg",
    socialLink: "https://facebook.com/carlos", // Editable social media link
    content: (
      <>
        Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur.
      </>
    ),
  },
];

export function CardStackDemo() {
  return (
    <Box
      sx={{
        marginTop: 24,
        marginBottom: 72,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontFamily: "Exo, sans-serif",
          color: "#f5f5f5",
          fontWeight: 700,
          fontSize: "52px",
          marginBottom: 8,
        }}
      >
        Conoce a nuestros NF&apos;s
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CardStack items={CARDS} />
      </Box>
    </Box>
  );
}

"use client";
import { CardStack } from "../ui/card-stack";
import { Box, Typography, useTheme } from "@mui/material";

// Small utility to highlight the content of a specific section of testimonial content
const CARDS = [
  {
    id: 0,
    name: "Daniel Núñez (Científico de Datos)",
    avatar: "/assets/presentation/Daniel.jpg",
    socialLink: "#",
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
    avatar: "/assets/presentation/Richi.jpeg",
    socialLink: "#",
    content: (
      <>
        Científico de Datos con formación en Nanotecnología y Ciencia de Datos,
        especializado en redes neuronales y optimización de procesos.
        Experiencia en industrias farmacéutica y tecnológica, desarrollando
        modelos predictivos para mejorar la gestión y toma de decisiones
        estratégicas.
      </>
    ),
  },
  {
    id: 2,
    name: "Efraín",
    avatar: "/assets/presentation/Efrain.jpg",
    socialLink: "#",
    content: (
      <>
        Actuario por la UNAM con estudios en Modelación Matemática,
        especializado en optimización y modelos determinísticos y
        probabilísticos de inventarios. Experiencia en Ciencia de Datos
        aplicando análisis matemático y modelación para optimizar la gestión de
        recursos empresariales.
      </>
    ),
  },
];

export function CardStackDemo() {
  const theme = useTheme();
  const titleColor = theme.palette.mode === "light" ? "#000000" : "#f5f5f5"; // Negro en claro, blanco en oscuro

  return (
    <Box
      sx={{
        marginTop: { xs: 12, sm: 16, md: 20, lg: 24 },
        marginBottom: { xs: 60, sm: 60, md: 70, lg: 70 },
        marginLeft: 3,
        marginRight: 3,
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
          color: titleColor, // Dinámico según el modo
          fontWeight: 700,
          fontSize: { xs: "28px", sm: "36px", md: "44px", lg: "52px" },
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

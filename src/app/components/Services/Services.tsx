"use client";
import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ServiceCard from "../serviceCard/serviceCard";
import service1 from "../../assets/services/analisis.png";
import service2 from "../../assets/services/automatizacion.png";
import service3 from "../../assets/services/service_3.png";
import service4 from "../../assets/services/gestionProyectos.png";
import service5 from "../../assets/services/service_5.jpg";

const servicesData = [
  {
    title: "Análisis de Datos para Soluciones Personalizadas",
    imageUrl: service1.src,
    description:
      "Desarrollamos soluciones a medida con una capacidad superior de integración, aprovechando al máximo el potencial de tus datos.",
  },
  {
    title: "Automatización de Procesos para una Mayor Eficiencia",
    imageUrl: service2.src,
    description:
      "Reduce tiempos de procesamiento y costos operativos, optimizando tus procesos con soluciones de automatización a medida.",
  },
  {
    title:
      "Ciencia de Datos y Redes Neuronales: Soluciones Avanzadas para la Toma de Decisiones",
    imageUrl: service3.src,
    description:
      "Aprovecha el poder de la inteligencia artificial con nuestras soluciones en visión por computadora, procesamiento del lenguaje natural, series de tiempo, aprendizaje por refuerzo y otras áreas de especialización.",
  },
  {
    title: "Gestión de Proyectos de IA: Implementa la IA con Éxito",
    imageUrl: service4.src,
    description:
      "Te acompañamos en la gestión de tus proyectos de IA, la integración en la producción, la formación en herramientas como ChatGPT y la automatización del machine learning con AutoML.",
  },
  {
    title: "Pasantías Universitarias",
    imageUrl: service5.src,
    description:
      "Nuestro programa de pasantías ofrece a los estudiantes experiencia práctica en proyectos reales, impulsando la innovación y el desarrollo de soluciones a través de un enfoque por etapas, desde la definición del caso de uso hasta la implementación y optimización.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("Active Index:", activeIndex);
  const theme = useTheme();
  const primaryColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en modo claro, amarillo en oscuro
  const textColor = theme.palette.mode === "light" ? "#000000" : "#f5f5f5"; // Negro en claro, blanco en oscuro

  // Handle scrolling and reveal each card based on the scroll position.
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const cardHeight = window.innerHeight / servicesData.length;

    const currentIndex = Math.floor(scrollTop / cardHeight);
    setActiveIndex(currentIndex);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Exo, sans-serif",
        marginRight: 12,
        marginLeft: 12,
        width: "90%",
        margin: "0 auto",
        flexDirection: { xs: "column", md: "row" },
      }}
      onScroll={handleScroll}
    >
      {/* Left Section with Description */}
      <Box
        sx={{
          flex: 1,
          marginRight: "52px",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Exo, sans-serif",
            fontWeight: 700,
            color: primaryColor, // Azul en modo claro, amarillo en oscuro
            marginBottom: "16px",
            fontSize: { xs: "28px", sm: "36px", md: "44px", lg: "52px" },
          }}
        >
          En NF te ofrecemos los mejores servicios
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Exo, sans-serif",
            color: textColor, // Negro en claro, blanco en oscuro
            marginBottom: "28px",
            fontWeight: 300,
          }}
        >
          En Neural Factory, nuestro enfoque es entregar soluciones innovadoras
          y personalizadas que optimizan tus procesos y maximizan el rendimiento
          empresarial. Desde análisis de datos hasta automatización avanzada,
          nuestra misión es ayudar a tu negocio a tomar decisiones más
          inteligentes y eficientes.
        </Typography>
      </Box>

      {/* Right Section with Sticky Scrolling Cards */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
        onScroll={handleScroll}
      >
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </Box>
    </Box>
  );
}

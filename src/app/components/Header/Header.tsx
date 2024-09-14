"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../customButton/customButton";
import net from "../../assets/net.png";
import { ArrowDownward } from "@mui/icons-material";

const Header: React.FC = () => {
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 64px)", // Ajustar la altura restando la altura de la barra de navegación
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Imagen de fondo */}
      <Box
        sx={{
          position: "absolute",
          top: "50%", // Para centrar la imagen verticalmente
          left: "50%", // Para centrar la imagen horizontalmente
          transform: "translate(-50%, -50%)", // Centrala tanto vertical como horizontalmente
          width: "95%", // Ajusta el ancho para hacer la imagen más pequeña
          height: "95%", // Ajusta la altura para mantener la proporción o el tamaño deseado
          backgroundImage: `url(${net.src})`, // Usa la imagen importada
          backgroundSize: "contain", // Cambiar a "contain" para que la imagen encaje dentro del contenedor
          backgroundRepeat: "no-repeat", // Asegúrate de que la imagen no se repita
          backgroundPosition: "center", // Mantén la imagen centrada
          zIndex: 0,
          opacity: 0.3, // Ajusta la opacidad para hacer que la imagen sea menos prominente
        }}
      />

      {/* Contenido */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "#FFF",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "3rem", md: "152px" }, // Tamaño de fuente responsivo
            fontWeight: 900,
            color: "#FFC300",
            paddingBottom: 8,
            fontFamily: "Exo, sans-serif",
          }}
        >
          Neural <br />
          Factory
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: { xs: "1rem", md: "24px" }, // Tamaño de fuente responsivo
            maxWidth: "800px", // Ancho máximo aumentado para que el texto esté más expandido
            lineHeight: { xs: "1.6", md: "1.8" }, // Ajusta la altura de línea para mejorar la legibilidad
            letterSpacing: { xs: "0.5px", md: "0.8px" }, // Aumenta ligeramente el espaciado de letras
            margin: "0 auto",
            color: "white",
            paddingBottom: 8,
            fontWeight: 400,
            fontFamily: "Exo, sans-serif",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          porta sem, sed porttitor ante. Nunc vulputate enim sapien, eget
          feugiat risus finibus quis.
        </Typography>

        <CustomButton
          href="/contact"
          borderColor="#FFC300"
          textColor="#FFC300"
          hoverBackgroundColor="#FFC300"
          hoverTextColor="#F5F5F5"
        >
          Contacta a NF
        </CustomButton>
      </Box>

      {/* Indicador de desplazamiento hacia abajo */}
      <Box
        sx={{
          position: "absolute",
          bottom: "2rem",
          zIndex: 1,
          color: "#FFF",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            animation: "bounce 2s infinite",
            color: "#ffc300",
            fontSize: "32px",
          }}
        >
          <ArrowDownward fontSize="large" /> 
        </Typography>
      </Box>

      {/* Animación de rebote */}
      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </Box>
  );
};

export default Header;
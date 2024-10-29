"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import net from "../../assets/net.png";
import { ArrowDownward } from "@mui/icons-material";

const Header: React.FC = () => {
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
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
          paddingBottom:{ xs:0, sm:0, md:0, lg:4},
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "3rem", sm:"5rem", md: "7rem", lg:"9rem"},
            fontWeight: 900,
            color: "#FFC300",
            paddingBottom: 4,
            paddingTop: 10,
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
            fontSize: { xs: "1rem", sm:"1.4rem", md: "1.8rem", lg:"2.1rem"},
            maxWidth: "1100px", // Ancho máximo aumentado para que el texto esté más expandido
            lineHeight: { xs: "1.6", md: "1.8" }, // Ajusta la altura de línea para mejorar la legibilidad
            letterSpacing: { xs: "0.5px", md: "0.8px" }, // Aumenta ligeramente el espaciado de letras
            margin: "0 auto",
            color: "white",
            paddingBottom: 8,
            fontWeight: 400,
            fontFamily: "Exo, sans-serif",
          }}
        >
          Desbloqueando el Potencial de la IA para su Negocio.
          <br />
          <Typography
            variant="body1"
            component="span"
            sx={{
              fontSize: { xs: "0.8rem", sm:"1rem", md: "1.2rem", lg:"1.3rem"},
              maxWidth: "900px", // Ancho máximo aumentado para que el texto esté más expandido
              lineHeight: { xs: "1.6", md: "1.8" }, // Ajusta la altura de línea para mejorar la legibilidad
              letterSpacing: { xs: "0.5px", md: "0.8px" }, // Aumenta ligeramente el espaciado de letras
              margin: "0 auto",
              color: "white",
              paddingBottom: 8,
              fontWeight: 300,
              fontFamily: "Exo, sans-serif",
            }}
          >
            Contáctenos hoy mismo para explorar cómo nuestras soluciones de IA
            pueden transformar sus operaciones e impulsar el crecimiento.
          </Typography>
        </Typography>
      </Box>

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

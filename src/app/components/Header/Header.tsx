import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import net from "../../assets/net.png";
import net2 from "../../assets/net2.png"; // Imagen para el modo claro
import { ArrowDownward } from "@mui/icons-material";

const Header: React.FC = () => {
  const theme = useTheme();
  const backgroundImage = theme.palette.mode === "light" ? net2.src : net.src; // Usa net2 en modo claro y net en modo oscuro
  const primaryColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300";
  const textColor = theme.palette.mode === "light" ? "#000000" : "#FFFFFF";

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
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "95%",
          height: "95%",
          backgroundImage: `url(${backgroundImage})`, // Imagen cambia según el modo
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.3,
        }}
      />

      {/* Contenido */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: textColor,
          paddingBottom: { xs: 0, sm: 0, md: 0, lg: 4 },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "3rem", sm: "5rem", md: "7rem", lg: "9rem" },
            fontWeight: 900,
            color: primaryColor,
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
            fontSize: { xs: "1rem", sm: "1.4rem", md: "1.8rem", lg: "2.1rem" },
            maxWidth: "1100px",
            lineHeight: { xs: "1.6", md: "1.8" },
            letterSpacing: { xs: "0.5px", md: "0.8px" },
            margin: "0 auto",
            color: textColor,
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
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem", lg: "1.3rem" },
              maxWidth: "900px",
              lineHeight: { xs: "1.6", md: "1.8" },
              letterSpacing: { xs: "0.5px", md: "0.8px" },
              margin: "0 auto",
              color: textColor,
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
          color: textColor,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            animation: "bounce 2s infinite",
            color: primaryColor,
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

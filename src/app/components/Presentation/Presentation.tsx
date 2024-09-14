import React from "react";
import { Box, Typography } from "@mui/material";

const Presentation: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "4rem 2rem", // Espaciado adecuado para darle margen al contenido
        color: "#f5f5f5", // Color de texto claro
        alignItems: "center",
        alignContent: "center",
        height: "100vh", // Ajustar la altura al 100% del viewport
      }}
    >
      {/* Título principal */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "#FFF",
          marginBottom: "2rem", // Espaciado inferior
          fontFamily: "Exo, sans-serif",
          fontSize: "100px",
        }}
      >
        ¿Que es <span style={{ color: "#FFC300" }}>Neural Factory</span>?{" "}
        {/* Subrayado en amarillo */}
      </Typography>

      {/* Texto descriptivo */}
      <Typography
        variant="body1"
        sx={{
          fontSize: "32px", // Tamaño de fuente un poco más grande
          lineHeight: "1.75", // Altura de línea para mayor legibilidad
          maxWidth: "1400px", // Ancho máximo para que el texto no ocupe todo el ancho
          margin: "0 auto", // Centrar el texto
          color: "#f5f5f5", // Color del texto
          fontFamily: "Exo, sans-serif",
          fontWeight: 300,
        }}
      >
        Maecenas ipsum augue, posuere eu risus quis, vulputate rutrum tortor.
        Vestibulum aliquet sed urna euismod convallis. Cras sed semper justo.
        Sed sit amet erat tincidunt, finibus lectus id, imperdiet felis. Nunc
        consequat erat sapien. Phasellus vitae diam rutrum, lacinia elit vitae,
        vestibulum urna.
      </Typography>
    </Box>
  );
};

export default Presentation;

"use client";
import { Box, Typography, Grid } from "@mui/material";
import banca from "../../assets/industries/banca.jpg";
import educacion from "../../assets/industries/education.jpg";
import energias from "../../assets/industries/energias.jpg";
import gobierno from "../../assets/industries/gobierno.png";
import logistics from "../../assets/industries/logistics.jpg";
import manufactura from "../../assets/industries/manufactura.jpg";
import retail from "../../assets/industries/retail.jpg";
import salud from "../../assets/industries/salud.png";
import seguros from "../../assets/industries/seguros.jpg";
import telecom from "../../assets/industries/telecom.jpg";

interface IndustryCardProps {
  title: string;
  imageUrl: string;
}

const IndustryCard = ({ title, imageUrl }: IndustryCardProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px",
        height: "200px", // Altura fija para que todas las tarjetas sean visibles
        width: "100%",
        overflow: "hidden", // Asegura que los bordes no se salgan
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)", // Efecto de zoom al hacer hover
        },
      }}
    >
      {/* Overlay con el título que aparece en hover */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo negro semitransparente
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0, // Oculto por defecto
          transition: "opacity 0.3s ease-in-out", // Transición suave
          "&:hover": {
            opacity: 1, // Aparece en hover
          },
        }}
      >
        <Typography
          sx={{
            color: "#FFC300", // Color amarillo para el título
            fontFamily: "Exo, sans-serif",
            fontWeight: "bold",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default function Industries() {
  const industryCards = [
    {
      title: "Banca",
      imageUrl: banca.src,
    },
    {
      title: "Educación",
      imageUrl: educacion.src,
    },
    {
      title: "Energías",
      imageUrl: energias.src,
    },
    {
      title: "Gobierno",
      imageUrl: gobierno.src,
    },
    {
      title: "Logística",
      imageUrl: logistics.src,
    },
    {
      title: "Manufactura",
      imageUrl: manufactura.src,
    },
    {
      title: "Retail",
      imageUrl: retail.src,
    },
    {
      title: "Salud",
      imageUrl: salud.src,
    },
    {
      title: "Seguros",
      imageUrl: seguros.src,
    },
    {
      title: "",
      imageUrl: "",
    },
    {
      title: "Telecomunicaciones",
      imageUrl: telecom.src,
    },
    {
      title: "",
      imageUrl: "",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 4,
        height: "100vh",
        mt: 20,
      }}
    >
      {/* Título de la sección */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Exo, sans-serif",
          color: "#f5f5f5",
          fontWeight: 500,
          fontSize: "52px",
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Hemos trabajado con clientes de diversas industrias, ayudando a
        optimizar su logística, marketing y operaciones.
      </Typography>

      {/* Grid layout simple */}
      <Grid container spacing={2} sx={{ maxWidth: "1200px", width: "100%" }}>
        {industryCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <IndustryCard title={card.title} imageUrl={card.imageUrl} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

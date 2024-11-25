"use client";

import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import banca from "../../assets/industries/banca.png";
import educacion from "../../assets/industries/education.jpg";
import energias from "../../assets/industries/energias.png";
import gobierno from "../../assets/industries/gobierno.png";
import logistics from "../../assets/industries/logistics.png";
import manufactura from "../../assets/industries/manufacture.png";
import retail from "../../assets/industries/retail.png";
import salud from "../../assets/industries/salud.png";
import seguros from "../../assets/industries/seguros.png";
import telecom from "../../assets/industries/telecom.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface IndustryCardProps {
  title: string;
  imageUrl: string;
}

const IndustryCard = ({ title, imageUrl }: IndustryCardProps) => {
  const theme = useTheme();
  const titleColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en claro, amarillo en oscuro

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px",
        height: "200px",
        width: "100%",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Typography
          sx={{
            color: titleColor,
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
  const theme = useTheme();
  const textColor = theme.palette.mode === "light" ? "#000000" : "#f5f5f5"; // Negro en claro, blanco en oscuro
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const industryCards = [
    { title: "Banca", imageUrl: banca.src },
    { title: "Educación", imageUrl: educacion.src },
    { title: "Energías", imageUrl: energias.src },
    { title: "Gobierno", imageUrl: gobierno.src },
    { title: "Logística", imageUrl: logistics.src },
    { title: "Manufactura", imageUrl: manufactura.src },
    { title: "Retail", imageUrl: retail.src },
    { title: "Salud", imageUrl: salud.src },
    { title: "Seguros", imageUrl: seguros.src },
    { title: "Telecomunicaciones", imageUrl: telecom.src },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 4,
        minHeight: { xs: "30vh", md: "auto" },
        mt: { xs: 0, md: 8 },
      }}
    >
      {/* Título de la sección */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Exo, sans-serif",
          color: textColor,
          fontWeight: 500,
          fontSize: { xs: "28px", sm: "36px", md: "44px", lg: "52px" },
          textAlign: "center",
          marginBottom: 12,
          marginTop: { xs: 10, sm: 9, md: 0, lg: 0 },
        }}
      >
        Hemos trabajado con clientes de diversas industrias, ayudando a optimizar su logística, marketing y operaciones.
      </Typography>

      {/* Vista móvil: Swiper */}
      {isMobile ? (
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}" style="background-color: #FFC300; width: 12px; height: 12px; border-radius: 50%; margin: 0 4px;"></span>`,
          }}
          spaceBetween={16}
          slidesPerView={1.2}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          {industryCards.map((card, index) => (
            <SwiperSlide key={index}>
              <IndustryCard title={card.title} imageUrl={card.imageUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        /* Vista en desktop: Grid */
        <Grid container spacing={2} sx={{ maxWidth: "1200px", width: "100%" }}>
          {industryCards.map((card, index) => {
            const isLastItem = index === industryCards.length - 1;
            const itemsInLastRow = industryCards.length % 3;
            const centerLastItem = isLastItem && itemsInLastRow === 1;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  ...(centerLastItem && {
                    marginLeft: "auto",
                    marginRight: "auto",
                  }),
                }}
              >
                <IndustryCard title={card.title} imageUrl={card.imageUrl} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}

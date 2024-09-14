"use client";
import Slider from "react-slick";
import { Box } from "@mui/material";

// Importar estilos de slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lista de partners (puedes agregar imágenes o nombres de partners)
const partners = [
  "partner 1",
  "partner 2",
  "partner 3",
  "partner 4",
  "partner 5",
  "partner 6",
];

export default function Partners() {
  // Configuración de react-slick
  const settings = {
    dots: false, // No se muestran puntos de navegación
    infinite: true, // Ciclo infinito
    speed: 500, // Velocidad de la transición
    slidesToShow: 5, // Número de elementos visibles
    slidesToScroll: 1, // Número de elementos que se desplazan al hacer scroll
    autoplay: true, // Activar desplazamiento automático
    autoplaySpeed: 2000, // Velocidad del autoplay en milisegundo
    arrows: false, // No se muestran flechas de navegación
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Verificar que los items de partners se están renderizando
  console.log("Partners:", partners);

  return (
    <Box
      sx={{
        padding: "20px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", // Asegurar que el contenedor ocupe todo el ancho
        marginBottom: 20,
      }}
    >
      <Box sx={{ width: "95%" }}>
        {" "}
        {/* Asegurar que el slider tenga un ancho definido */}
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                padding: "10px",
                color: "#fff",
                fontFamily: "Exo, sans-serif",
                fontSize: "36px",
                fontWeight: 700,
                textTransform: "none",
              }}
            >
              {partner}
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

"use client";
import Slider from "react-slick";
import { Box } from "@mui/material";
import Image from "next/image";
import partner1 from "../../assets/partners/partner_1.png";

// Importar estilos de slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lista de partners (reemplazar con las URLs de las imágenes de los partners)
const partners = [
  partner1,
  partner1,
  partner1,
  partner1,

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

  return (
    <Box
      sx={{
        padding: "20px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", // Asegurar que el contenedor ocupe todo el ancho
        marginBottom: 14, 
      }}
    >
      <Box sx={{ width: "95%" }}>
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                padding: "10px",
              }}
            >
              <Image
                src={partner}
                alt={`Partner ${index + 1}`}
                width={150} // Especificar el ancho de la imagen
                height={150} // Especificar la altura de la imagen
                style={{ margin: "0 auto", objectFit: "contain" }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

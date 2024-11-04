"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

export const HoverText = ({ text }: { text: string }) => {
  const theme = useTheme();
  const strokeColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en modo claro, amarillo en oscuro
  const fillColorHover = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en modo claro, amarillo en oscuro

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex justify-center items-center w-full h-[20vh] sm:pt-[10vh] lg:pt-[40vh] pb-[5vh]"
    >
      <motion.h1
        className="font-bold relative text-[10vw] sm:text-[120px] lg:text-[240px]"
        style={{
          color: "transparent",
          WebkitTextStroke: `2px ${strokeColor}`, // Color del contorno dinámico
        }}
        variants={{
          rest: {
            WebkitTextFillColor: "transparent", // Mantiene el relleno transparente inicialmente
          },
          hover: {
            WebkitTextFillColor: fillColorHover, // Cambia el relleno en hover
            transition: {
              duration: 2.5, // Duración de la animación
              ease: [0.25, 0.1, 0.25, 1], // Easing suave
            },
          },
        }}
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};

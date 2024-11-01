"use client";
import React from "react";
import { motion } from "framer-motion";

export const HoverText = ({ text }: { text: string }) => {
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
          WebkitTextStroke: "2px #FFC300", // Color del contorno
        }}
        variants={{
          rest: {
            WebkitTextFillColor: "transparent", // Mantiene el relleno transparente inicialmente
          },
          hover: {
            WebkitTextFillColor: "#FFC300", // Se rellena con amarillo al hacer hover
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

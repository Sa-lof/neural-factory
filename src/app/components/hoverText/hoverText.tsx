"use client";
import React from "react";
import { motion } from "framer-motion";

export const HoverText = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex justify-center items-center w-full"
      style={{ height: "20%" }} // Ajustamos la altura para que ocupe el 20% del contenedor padre
    >
      <motion.h1
        className="text-[240px] font-bold relative"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px #FFC300", // Outline color
        }}
        variants={{
          rest: {
            WebkitTextFillColor: "transparent", // Mantiene el relleno transparente inicialmente
          },
          hover: {
            WebkitTextFillColor: "#FFC300", // Se rellena con amarillo al hacer hover
            transition: {
              duration: 2.5, // Aumentamos la duración para hacerlo más lento
              ease: [0.25, 0.1, 0.25, 1], // Mantenemos el easing suave
            },
          },
        }}
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};

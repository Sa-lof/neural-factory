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
      className="flex justify-center items-center"
    >
      <motion.h1
        className="font-bold text-[80px] sm:text-[120px] lg:text-[240px]" // Removed the lg class for testing
        style={{
          color: "transparent",
          fontSize: "200px", // Explicitly set for troubleshooting
          WebkitTextStroke: `2px ${strokeColor}`, // Dynamic stroke color
        }}
        variants={{
          rest: {
            WebkitTextFillColor: "transparent", // Keeps the fill transparent initially
          },
          hover: {
            WebkitTextFillColor: fillColorHover, // Changes fill on hover
            transition: {
              duration: 2.5, // Animation duration
              ease: [0.25, 0.1, 0.25, 1], // Smooth easing
            },
          },
        }}
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};

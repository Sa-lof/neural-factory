import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

interface CustomButtonProps {
  children: React.ReactNode;
  href?: string;
  borderColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  borderRadius?: string;
  onClick?: () => void; // Añadimos la propiedad onClick
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  href = "#", // Valor predeterminado si no se pasa href
  borderColor = "#FFC300",
  textColor = "#FFC300",
  hoverBackgroundColor = "#FFC300",
  hoverTextColor = "#F5F5F5",
  borderRadius = "10px",
  onClick, // Capturamos la función onClick
}) => {
  return (
    <Link href={href} passHref>
      <Button
        onClick={onClick} // Asignamos el evento onClick al botón
        variant="outlined"
        sx={{
          fontFamily: "Exo, sans-serif",
          borderColor: borderColor,
          color: textColor,
          textTransform: "none",
          borderRadius: borderRadius,
          fontWeight: 700,
          fontSize: { xs: "0.8rem", md: "1rem" }, // Smaller font size on mobile
          padding: { xs: "5px 10px", md: "10px 20px" }, // Adjust padding for mobile and desktop
          "&:hover": {
            backgroundColor: hoverBackgroundColor,
            color: hoverTextColor,
          },
        }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default CustomButton;

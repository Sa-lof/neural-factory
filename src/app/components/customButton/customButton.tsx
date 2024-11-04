import React from "react";
import { Button, useTheme } from "@mui/material";

interface CustomButtonProps {
  children: React.ReactNode;
  borderColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  borderRadius?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  borderColor,
  textColor,
  hoverBackgroundColor,
  hoverTextColor,
  borderRadius = "10px",
  onClick,
}) => {
  const theme = useTheme();
  const defaultBorderColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en claro, amarillo en oscuro
  const defaultTextColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en claro, amarillo en oscuro
  const defaultHoverBackgroundColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en claro, amarillo en oscuro
  const defaultHoverTextColor = theme.palette.mode === "light" ? "#000000" : "#F5F5F5"; // Negro en claro, blanco en oscuro

  return (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        fontFamily: "Exo, sans-serif",
        borderColor: borderColor || defaultBorderColor,
        color: textColor || defaultTextColor,
        textTransform: "none",
        borderRadius: borderRadius,
        fontWeight: 700,
        fontSize: { xs: "0.8rem", md: "1rem" },
        padding: { xs: "5px 10px", md: "10px 20px" },
        "&:hover": {
          backgroundColor: hoverBackgroundColor || defaultHoverBackgroundColor,
          color: hoverTextColor || defaultHoverTextColor,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

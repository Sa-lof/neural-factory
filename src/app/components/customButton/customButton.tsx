// Componente CustomButton sin Link
import React from "react";
import { Button } from "@mui/material";

interface CustomButtonProps {
  children: React.ReactNode;
  borderColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  borderRadius?: string;
  onClick?: () => void;
  href?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  borderColor = "#FFC300",
  textColor = "#FFC300",
  hoverBackgroundColor = "#FFC300",
  hoverTextColor = "#F5F5F5",
  borderRadius = "10px",
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        fontFamily: "Exo, sans-serif",
        borderColor: borderColor,
        color: textColor,
        textTransform: "none",
        borderRadius: borderRadius,
        fontWeight: 700,
        fontSize: { xs: "0.8rem", md: "1rem" },
        padding: { xs: "5px 10px", md: "10px 20px" },
        "&:hover": {
          backgroundColor: hoverBackgroundColor,
          color: hoverTextColor,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

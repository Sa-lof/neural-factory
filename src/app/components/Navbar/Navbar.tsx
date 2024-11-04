import React from "react";
import { AppBar, Toolbar, Box, IconButton, useTheme } from "@mui/material";
import Image from "next/image";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png"; // Logo alternativo para el modo claro

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  const theme = useTheme();
  const iconColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en claro, amarillo en oscuro
  const logoSrc = theme.palette.mode === "light" ? logo2 : logo; // Selecciona logo2 en modo claro y logo en oscuro
  const buttonColor = theme.palette.mode === "light" ? "#00A8C1" : "inherit"; // Azul en modo claro, color hereda en oscuro

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        padding: { xs: "5px 0", md: "10px 0" },
        height: { xs: "56px", md: "64px" },
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          margin: { xs: "0 16px", md: "0 52px" },
        }}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <Image
            src={logoSrc}
            alt="Logo"
            width={40}
            height={40}
            style={{ height: "auto", width: "auto" }}
          />
        </Box>

        {/* LinkedIn SVG Icon y Botón de Cambio de Modo */}
        <Box display="flex" alignItems="center" gap={1}>
          <a
            href="https://www.linkedin.com/company/neuralfactory/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: iconColor, display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill={iconColor}
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.806-1.75-1.8s.784-1.8 1.75-1.8c.967 0 1.75.806 1.75 1.8s-.783 1.8-1.75 1.8zm13.5 11.268h-3v-5.6c0-1.341-.028-3.066-1.868-3.066-1.87 0-2.157 1.461-2.157 2.971v5.695h-3v-10h2.881v1.367h.042c.401-.756 1.379-1.553 2.841-1.553 3.039 0 3.6 2.001 3.6 4.6v5.586z"/>
            </svg>
          </a>
          <IconButton
            onClick={toggleDarkMode}
            sx={{ color: buttonColor }}
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

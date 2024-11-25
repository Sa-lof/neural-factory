"use client";
import React from "react";
import { Box, Typography, Grid, Link, useTheme } from "@mui/material";
import { HoverText } from "../hoverText/hoverText";

export default function Footer() {
  const theme = useTheme();
  const primaryColor = theme.palette.mode === "light" ? "#00A8C1" : "#FFC300"; // Azul en claro, amarillo en oscuro
  const textColor = theme.palette.mode === "light" ? "#000000" : "#f5f5f5"; // Negro en claro, blanco en oscuro

  const emails = [
    // { label: "Recursos Humanos", email: "rh@neural-factory.com" },
    // { label: "Finanzas y Contabilidad", email: "finanzas@neural-factory.com" },
    // { label: "Desarrollo de Negocios", email: "negocios@neural-factory.com" },
    // { label: "Marketing", email: "marketing@neural-factory.com" },
    // { label: "Ventas", email: "ventas@neural-factory.com" },
    // { label: "Investigación y Desarrollo (I+D)", email: "investigacion@neural-factory.com" },
    // { label: "Tecnología e Innovación", email: "tecnologia@neural-factory.com" },
    // { label: "Atención al Cliente", email: "atencion.cliente@neural-factory.com" },
    // { label: "Desarrollo de Proyectos IA/ML", email: "proyectos@neural-factory.com" },
    { label: "Ricardo López", email: "ricardo.lopez@neural-factory.com" },
    { label: "Daniel Núñez", email: "daniel.nunez@neural-factory.com" },
    { label: "Efraín Pantoja", email: "efrain.pantoja@neural-factory.com" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        color: textColor,
        fontFamily: "Exo, sans-serif",
        gap: "20px",
        width: "100%",
        paddingRight: "20px",
        paddingLeft: "20px",
        height: {xs: "60vh", md: "100vh"},
        boxSizing: "border-box",
        paddingTop: 4,
      }}
    >
      {/* Email Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Exo, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "30px", sm: "33px", md: "50px", lg: "70px" },
            color: textColor,
            whiteSpace: "nowrap",
          }}
        >
          info
        </Typography>
        <Typography
          component="span"
          sx={{
            color: primaryColor,
            fontSize: { xs: "30px", sm: "33px", md: "50px", lg: "70px" },
            fontWeight: 700,
            marginLeft: { xs: "2px", sm: "4px", md: "6px", lg: "8px" },
            marginRight: { xs: "2px", sm: "4px", md: "6px", lg: "8px" },
          }}
        >
          @
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Exo, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "30px", sm: "33px", md: "50px", lg: "70px" },
            color: textColor,
            whiteSpace: "nowrap",
          }}
        >
          neural-factory.com
        </Typography>
      </Box>
      {/* Email Grid Section in 3 Columns */}
      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          maxWidth: "100%",
          paddingBottom: 0,
          marginBottom: 0,
          justifyContent: "center",
        }}
      >
        {emails.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ textAlign: "center" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Exo, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "16px", md: "32px" },
                color: textColor,
                textAlign: "center",
              }}
            >
              {item.label}
            </Typography>
            <Link
              href={`mailto:${item.email}`}
              target="_blank"
              sx={{
                fontFamily: "Exo, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "16px", md: "20px" },
                color: primaryColor,
                textDecoration: "none",
                textAlign: "center",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {item.email}
            </Link>
          </Grid>
        ))}
      </Grid>
      {/* Large Title Neural Factory */}
      <HoverText text="neural factory" />
      <Typography
        sx={{
          color: textColor,
          textAlign: "center",
          fontSize: { xs: "12px", md: "16px" },
          marginBottom: 2
        }}
      >
        Todos los derechos reservados &copy; 2024 |{" "}
        <Link
          href="https://www.amoxtli.tech"
          target="_blank"
          rel="noreferrer"
          sx={{
            color: textColor,
            textDecoration: "none",
            "&:hover": { color: primaryColor },
          }}
        >
          Desarrollado por Amoxtli Web Developers
        </Link>
      </Typography>
    </Box>
  );
}

"use client";
import { Box, Typography, Grid, Link } from "@mui/material";
import { HoverText } from "../hoverText/hoverText";

export default function Footer() {
  const emails = [
    { label: "Recursos Humanos", email: "rh@neural-factory.com" },
    { label: "Finanzas y Contabilidad", email: "finanzas@neural-factory.com" },
    { label: "Desarrollo de Negocios", email: "negocios@neural-factory.com" },
    { label: "Marketing", email: "marketing@neural-factory.com" },
    { label: "Ventas", email: "ventas@neural-factory.com" },
    { label: "Investigación y Desarrollo (I+D)", email: "investigacion@neural-factory.com" },
    { label: "Tecnología e Innovación", email: "tecnologia@neural-factory.com" },
    { label: "Atención al Cliente", email: "atencion.cliente@neural-factory.com" },
    { label: "Desarrollo de Proyectos IA/ML", email: "proyectos@neural-factory.com" },
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
        color: "#f5f5f5",
        fontFamily: "Exo, sans-serif",
        gap: "40px",
        width: "100%",
        paddingRight: "40px",
        paddingLeft: "40px",
        height: "100vh",
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
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Exo, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "20px", sm:"33px", md: "50px", lg:"70px"},
            color: "#f5f5f5",
            whiteSpace: "nowrap",
          }}
        >
          direccion.general
        </Typography>
        <Typography
          component="span"
          sx={{
            color: "#FFC300",
            fontSize: { xs: "20px", sm:"33px", md: "50px", lg:"70px"},
            fontWeight: 700,
            marginLeft: { xs: "2px", sm:"4px", md: "6px", lg:"8px"},
            marginRight: { xs: "2px", sm:"4px", md: "6px", lg:"8px"},
          }}
        >
          @
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Exo, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "20px", sm:"33px", md: "50px", lg:"70px"},
            color: "#f5f5f5",
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
          flexGrow: 1,
        }}
      >
        {emails.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{textAlign: "center", mb: 4}}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Exo, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "16px", md: "20px" },
                color: "#f5f5f5",
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
                fontSize: { xs: "16px", md: "18px" },
                color: "#FFC300",
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
    </Box>
  );
}

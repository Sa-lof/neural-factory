"use client";
import { Box, Typography, Grid } from "@mui/material";
import { HoverText } from "../hoverText/hoverText";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between", // Distribuye el espacio de manera uniforme
        color: "#f5f5f5",
        fontFamily: "Exo, sans-serif",
        gap: "40px",
        width: "100%",
        paddingRight: "40px",
        paddingLeft: "40px",
        height: "100vh", // Full height
        boxSizing: "border-box", // Para asegurar que padding no afecte el tamaño
        paddingTop: 16,
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
          flexGrow: 1, // Deja que esta sección crezca si es necesario
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Exo, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "48px", md: "116px" },
            color: "#f5f5f5",
            whiteSpace: "nowrap",
          }}
        >
          contacto
        </Typography>
        <Typography
          component="span"
          sx={{
            color: "#FFC300",
            fontSize: { xs: "48px", md: "116px" },
            fontWeight: 700,
            marginLeft: "8px",
          }}
        >
          @
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Exo, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "48px", md: "116px" },
            color: "#f5f5f5",
            whiteSpace: "nowrap",
          }}
        >
          neural-factory.com
        </Typography>
      </Box>

      {/* Phone and additional text section using Grid */}
      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          maxWidth: "100%",
          paddingBottom: 0,
          marginBottom: 0,
          justifyContent: "space-between",
          flexGrow: 1, // Deja que esta sección crezca si es necesario
        }}
      >
        {/* Phone Number */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Exo, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "48px", md: "64px" },
              color: "#FFC300",
              textAlign: "left",
            }}
          >
            55 5567 7890
          </Typography>
        </Grid>

        {/* Placeholder Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Exo, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "24px", md: "64px" },
              color: "#FFC300",
              textAlign: "right",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
      </Grid>

      {/* Large Title Neural Factory */}
      <HoverText text="neural factory" />
    </Box>
  );
}

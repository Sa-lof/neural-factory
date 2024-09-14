"use client";
import { Box, Typography, Button, TextField } from "@mui/material";
import CustomButton from "../customButton/customButton";

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Exo, sans-serif",
        padding: "40px",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: "#f5f5f5",
          fontWeight: 500,
          fontSize: "52px",
          textAlign: "center",
          marginBottom: "16px",
          fontFamily: "Exo, sans-serif",
        }}
      >
        Trabaja con los mejores <br />
        <Typography
          component="span"
          sx={{
            color: "#FFC300",
            fontWeight: 500,
            fontSize: "52px",
            fontFamily: "Exo, sans-serif",
          }}
        >
          Neural Factory
        </Typography>
      </Typography>

      {/* Formulario */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "800px",
          marginBottom: "16px",
        }}
      >
        {/* Nombre */}
        <TextField
          variant="outlined"
          placeholder="Nombre"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              fontFamily: "Exo, sans-serif",
              color: "#f5f5f5",
              backgroundColor: "transparent",
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "#f5f5f5",
              },
              "&:hover fieldset": {
                borderColor: "#FFC300",
              },
            },
            marginBottom: "16px", // Espacio entre los campos
          }}
        />

        {/* Correo Electrónico */}
        <TextField
          variant="outlined"
          placeholder="Correo electrónico"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              fontFamily: "Exo, sans-serif",
              color: "#f5f5f5",
              backgroundColor: "transparent",
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "#f5f5f5",
              },
              "&:hover fieldset": {
                borderColor: "#FFC300",
              },
            },
            marginBottom: "16px", // Espacio entre los campos
          }}
        />

        {/* Mensaje */}
        <TextField
          variant="outlined"
          placeholder="Mensaje"
          multiline
          rows={4} // Ajustar a las líneas visibles
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              fontFamily: "Exo, sans-serif",
              color: "#f5f5f5",
              backgroundColor: "transparent",
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "#f5f5f5",
              },
              "&:hover fieldset": {
                borderColor: "#FFC300",
              },
            },
            marginBottom: "16px", // Espacio entre los campos
          }}
        />

        {/* Botón Enviar */}
        <Typography
          variant="body1"
          sx={{
            color: "#f5f5f5",
            fontWeight: 400,
            fontSize: "20px",
            textAlign: "center",
            fontFamily: "Exo, sans-serif",
            marginBottom: 4,
          }}
        >
          Llena el{" "}
          <Typography
            component="span"
            sx={{ color: "#FFC300", fontWeight: 400, fontSize: "20px" }}
          >
            formulario
          </Typography>{" "}
          con tus datos de contacto
        </Typography>
        <CustomButton>Enviar</CustomButton>
      </Box>
    </Box>
  );
}

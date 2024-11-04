import { useState } from "react";
import { Box, Typography, TextField, Snackbar, Alert, AlertColor } from "@mui/material";
import CustomButton from "../customButton/customButton";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<AlertColor>("success");

  const handleSendEmail = () => {
    if (!name || !email || !message) {
      setToastMessage("Por favor, completa todos los campos antes de enviar.");
      setToastSeverity("warning");
      setToastOpen(true);
      return;
    }

    const templateParams = {
      from_name: name,
      to_name: "Amoxtli",
      message: message,
      reply_to: email,
    };

    emailjs.send(
      'service_ubsgsvg',
      'template_zn6u2za',
      templateParams,
      'tZVc3eIb9FZ4G9W6A'
    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setToastMessage("Email enviado exitosamente!");
       setToastSeverity("success");
       setToastOpen(true);
       setName("");
       setEmail("");
       setMessage("");
    }, (err) => {
       console.error('FAILED...', err);
       setToastMessage("Error al enviar el email. Inténtalo de nuevo más tarde.");
       setToastSeverity("error");
       setToastOpen(true);
    });
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

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
          fontSize: { xs: "28px", sm: "36px", md: "44px", lg: "52px" },
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
            fontSize: { xs: "28px", sm: "36px", md: "44px", lg: "52px" },
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
            marginBottom: "16px",
          }}
        />

        {/* Correo Electrónico */}
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
            marginBottom: "16px",
          }}
        />

        {/* Mensaje */}
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          placeholder="Mensaje"
          multiline
          rows={4}
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
            marginBottom: "16px",
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
        <CustomButton onClick={handleSendEmail}>Enviar</CustomButton>

        {/* Toast de MUI en esquina superior derecha */}
        <Snackbar 
          open={toastOpen} 
          autoHideDuration={6000} 
          onClose={handleToastClose} 
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleToastClose} severity={toastSeverity} sx={{ width: '100%' }}>
            {toastMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

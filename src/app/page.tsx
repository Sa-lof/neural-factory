"use client";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"; 
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Presentation from "./components/Presentation/Presentation";
import AboutGrid from "./components/aboutGrid/aboutGrid";
import { CardStackDemo } from "./components/teamCard/teamCard";
import Services from "./components/Services/Services";
import Industries from "./components/Industries/Industries";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import about1 from "./assets/about/quienesSomos.png";
import about2 from "./assets/about/historia.png";
import about3 from "./assets/about/mision.png";
import about4 from "./assets/about/vision.png";
import about5 from "./assets/about/valores.png";
import PerformanceCarousel from "./components/PerformanceCarousel/PerformanceCarousel";
import { useEffect, useState } from "react";

const cards = [
  {
    image: about1.src,
    number: "01",
    title: "¿Quiénes somos?",
    description:
      "Transformamos los procesos empresariales a través de soluciones avanzadas de Inteligencia Artificial (IA) y Machine Learning (ML). Nos enfocamos en ofrecer tecnología de vanguardia que maximiza la eficiencia y la productividad, sin comprometer el presupuesto.",
    size: { xs: 12, sm: 6, md: 4 },
  },
  {
    image: about2.src,
    number: "02",
    title: "Historia",
    description:
      "Neural Factory se fundó sobre el principio de hacer que la IA sea accesible para todas las empresas. Estamos en continua evolución para mantenernos a la vanguardia de la innovación en IA.",
    size: { xs: 12, sm: 6, md: 4 },
  },
  {
    image: about3.src,
    number: "03",
    title: "Misión",
    description:
      "Acelerar la transformación digital de las empresas mediante soluciones accesibles de IA y ML, optimizando recursos y garantizando un alto retorno de la inversión.",
    size: { xs: 12, sm: 6, md: 4 },
  },
  {
    image: about4.src,
    number: "04",
    title: "Visión",
    description:
      "Convertirnos en líderes del desarrollo de IA/ML, ofreciendo herramientas tecnológicas efectivas que permitan a las empresas evolucionar sin incurrir en costos significativos.",
    size: { xs: 12, sm: 12, md: 6 },
  },
  {
    image: about5.src,
    number: "05",
    title: "Valores",
    description:
      "Eficiencia, Asequibilidad, Innovación, Colaboración",
    size: { xs: 12, sm: 12, md: 6 },
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true); // Inicia en modo oscuro

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#FFFFFF",
      },
      primary: {
        main: darkMode ? "#FFC300" : "#0000FF",
      },
    },
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Box sx={{ overflowX: "hidden", minHeight: "100vh", bgcolor: "background.default" }}>
        <Header />
        <Presentation />
        <AboutGrid cards={cards} />
        <CardStackDemo />
        <PerformanceCarousel />
        <Services />
        <Industries />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

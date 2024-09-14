import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"; // Ensure the correct path
import { Box } from "@mui/material";
import Presentation from "./components/Presentation/Presentation";
import AboutGrid from "./components/aboutGrid/aboutGrid";
import { CardStackDemo } from "./components/teamCard/teamCard";
import Partners from "./components/Partners/Partners";
import Services from "./components/Services/Services";
import Industries from "./components/Industries/Industries";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const cards = [
  {
    image: "/path/to/image1.jpg",
    number: "01",
    title: "¿Quiénes somos?",
    description:
      "Maecenas ipsum augue, posuere eu risus quis, vulputate rutrum tortor. Vestibulum aliquet sed urna euismod convallis.",
    size: { xs: 12, sm: 6, md: 4 }, // Tarjetas superiores más pequeñas
  },
  {
    image: "/path/to/image2.jpg",
    number: "02",
    title: "Historia",
    description:
      "Maecenas ipsum augue, posuere eu risus quis, vulputate rutrum tortor. Vestibulum aliquet sed urna euismod convallis.",
    size: { xs: 12, sm: 6, md: 4 }, // Tarjetas superiores más pequeñas
  },
  {
    image: "/path/to/image3.jpg",
    number: "03",
    title: "Misión",
    description:
      "Maecenas ipsum augue, posuere eu risus quis, vulputate rutrum tortor. Vestibulum aliquet sed urna euismod convallis.",
    size: { xs: 12, sm: 6, md: 4 }, // Tarjetas superiores más pequeñas
  },
  {
    image: "/path/to/image4.jpg",
    number: "04",
    title: "Visión",
    description:
      "Maecenas ipsum augue, posuere eu risus quis, vulputate rutrum tortor. Vestibulum aliquet sed urna euismod convallis.",
    size: { xs: 12, sm: 12, md: 6 }, // Tarjetas inferiores más grandes
  },
  {
    image: "/path/to/image5.jpg",
    number: "05",
    title: "Valores",
    description:
      "Maecenas ipsum augue, posuere eu risus quis, vulputate rutrum tortor. Vestibulum aliquet sed urna euismod convallis.",
    size: { xs: 12, sm: 12, md: 6 }, // Tarjetas inferiores más grandes
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Box>
        <Header />
        <Presentation />
        <AboutGrid cards={cards} />
        <CardStackDemo />
        <Partners />
        <Services />
        <Industries />
        <Contact />
        <Footer />
      </Box>
    </>
  );
}

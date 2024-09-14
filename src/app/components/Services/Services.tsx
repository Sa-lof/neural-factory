"use client";
import { Box, Typography } from "@mui/material";
import ServiceCard from "../serviceCard/serviceCard";
import { useState } from "react";

const servicesData = [
  {
    title: "Service 1",
    imageUrl: "/path/to/image1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non porta sem, sed porttitor ante.",
  },
  {
    title: "Service 2",
    imageUrl: "/path/to/image2.jpg",
    description:
      "Vestibulum aliquet sed urna euismod convallis. Cras sed semper justo.",
  },
  {
    title: "Service 3",
    imageUrl: "/path/to/image3.jpg",
    description:
      "Donec placerat nulla id sapien convallis, at ultrices risus vulputate.",
  },
  {
    title: "Service 4",
    imageUrl: "/path/to/image4.jpg",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("Active Index:", activeIndex);

  // Handle scrolling and reveal each card based on the scroll position.
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const cardHeight = window.innerHeight / servicesData.length;

    const currentIndex = Math.floor(scrollTop / cardHeight);
    setActiveIndex(currentIndex);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Full height of the viewport
        fontFamily: "Exo, sans-serif",

        marginRight: 12,
        marginLeft: 12,
        width: "90%",

        margin: "0 auto", // Center container on the page
      }}
      onScroll={handleScroll}
    >
      {/* Left Section with Description */}
      <Box
        sx={{
          flex: 1,
          marginRight: "52px",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Exo, sans-serif",
            fontWeight: 700,
            color: "#FFC300",
            marginBottom: "16px",
            fontSize: "52px",
          }}
        >
          En NF te ofrecemos los mejores servicios
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Exo, sans-serif",
            color: "#f5f5f5",
            marginBottom: "28px",
            fontWeight: 300,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          porta sem, sed porttitor ante.
        </Typography>
      </Box>

      {/* Right Section with Sticky Scrolling Cards */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
        onScroll={handleScroll}
      >
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl=""
          />
        ))}
      </Box>
    </Box>
  );
}

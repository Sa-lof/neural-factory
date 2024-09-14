"use client";
import { CardStack } from "../ui/card-stack";
import { Box, Typography } from "@mui/material";

// Small utility to highlight the content of specific section of a testimonial content
const CARDS = [
  {
    id: 0,
    name: "Daniel",
    avatar: "/path/to/avatar1.jpg",
    socialLink: "https://twitter.com/daniel", // Editable social media link
    content: (
      <>
        Maecenas vitae velit sit amet velit facilisis lacinia. Suspendisse ac
        dapibus risus, id aliquam purus. Nulla rhoncus nisl quam, id mollis dui
        ornare at. Morbi aliquam varius rutrum. Sed ac orci ac enim placerat
        scelerisque.
      </>
    ),
  },
  {
    id: 1,
    name: "Maria",
    avatar: "/path/to/avatar2.jpg",
    socialLink: "https://linkedin.com/in/maria", // Editable social media link
    content: (
      <>
        Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Curabitur blandit tempus porttitor.
      </>
    ),
  },
  {
    id: 2,
    name: "Carlos",
    avatar: "/path/to/avatar3.jpg",
    socialLink: "https://facebook.com/carlos", // Editable social media link
    content: (
      <>
        Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur.
      </>
    ),
  },
];

export function CardStackDemo() {
  return (
    <Box
      sx={{
        marginTop: 24,
        marginBottom: 72,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontFamily: "Exo, sans-serif",
          color: "#f5f5f5",
          fontWeight: 700,
          fontSize: "52px",
          marginBottom: 8,
        }}
      >
        Conoce a nuestros NF's
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CardStack items={CARDS} />
      </Box>
    </Box>
  );
}

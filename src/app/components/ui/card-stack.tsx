"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typography, Box, Avatar, Button } from "@mui/material";

let interval: NodeJS.Timeout;

type Card = {
  id: number;
  name: string;
  avatar: string;
  content: React.ReactNode;
  socialLink: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 20; 
  const SCALE_FACTOR = scaleFactor || 0.05;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <Box
      className="relative w-full max-w-5xl" 
      sx={{ fontFamily: "Exo, sans-serif", paddingBottom:4}}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-[#FFC300] h-96 w-full max-w-5xl rounded-xl p-2 shadow-lg flex flex-row items-center space-x-3"
          style={{
            transformOrigin: "top center",
            borderRadius: "16px",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <Avatar
            alt={`${card.name}'s avatar`}
            src={card.avatar}
            sx={{
              width:{ xs:90, sm:160, md:180, lg:200},
              height:{ xs:90, sm:160, md:180, lg:200},
              backgroundColor: "#0D0D0D",
              marginRight: 0,
              marginLeft:{ xs:1, sm:4, md:6, lg:8},
            }}
          />
          <Box sx={{ textAlign: "left", color: "#0D0D0D", maxWidth: "80%" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: "Exo, sans-serif",
                fontSize: { xs: "1rem", sm:"1.4rem", md: "1.8rem", lg:"2.1rem"},
              }}
            >
              ¡Hola yo soy {card.name}!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.82rem", sm:"1.1rem", md: "1.2rem", lg:"1.3rem"},
                mb: 4,
                fontFamily: "Exo, sans-serif",
                color: "#0D0D0D",
                fontWeight: 300,
                lineHeight: "1.6",
              }}
            >
              {card.content}
            </Typography>
            <Button
              variant="text"
              color="primary"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "0.8rem", sm:"1rem", md: "1.3rem", lg:"1.5rem"},
                fontFamily: "Exo, sans-serif",
                textTransform: "none",
                backgroundColor: "#FFC300",
                color: "#0D0D0D",
                "&:hover": {
                  color: "#f5f5f5",
                },
              }}
              href={card.socialLink}
              target="_blank"
            >
              Saludar a {card.name}{" "}
              <span
                role="img"
                aria-label="wave"
                style={{ marginLeft: "8px" }}
              >
                👋
              </span>
            </Button>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

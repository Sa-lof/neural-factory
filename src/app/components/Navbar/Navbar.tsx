import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/logo.png"; // Adjust the path to your logo
import CustomButton from "../customButton/customButton";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        padding: { xs: "5px 0", md: "10px 0" },
        height: { xs: "56px", md: "64px" },
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          margin: { xs: "0 16px", md: "0 52px" },
        }}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <Image
            src={logo}
            alt="Logo"
            width={40} // Smaller logo for mobile
            height={40}
            style={{ height: "auto", width: "auto" }}
          />
        </Box>

        {/* Responsive Button */}
        <Box>
          <CustomButton
            href="/contact"
            borderColor="#FFC300"
            textColor="#FFC300"
            hoverBackgroundColor="#FFC300"
            hoverTextColor="#F5F5F5"
          >
            Contacto
          </CustomButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

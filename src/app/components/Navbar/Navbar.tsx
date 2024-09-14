import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/logo.png"; // Adjust the path to your logo
import CustomButton from "../customButton/customButton";

const Navbar = () => {
  return (
    <AppBar
      position="fixed" // Use fixed instead of sticky
      sx={{ backgroundColor: "transparent", padding: "10px 0", height: "64px" }} // Adjust the height of the navbar
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: "space-between", margin: "0 52px" }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <Image
            src={logo}
            alt="Logo"
            width={50} // Adjust the size as needed
            height={50}
          />
        </Box>

        {/* Button */}
        <CustomButton
          href="/contact"
          borderColor="#FFC300"
          textColor="#FFC300"
          hoverBackgroundColor="#FFC300"
          hoverTextColor="#F5F5F5"
        >
          Contacto
        </CustomButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

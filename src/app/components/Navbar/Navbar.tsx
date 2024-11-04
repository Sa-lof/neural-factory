import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/logo.png"; // Adjust the path to your logo

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

        {/* LinkedIn SVG Icon */}
        <Box>
          <a
            href="https://www.linkedin.com/company/neuralfactory/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FFC300", display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#FFC300" // Adjust color as needed
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.806-1.75-1.8s.784-1.8 1.75-1.8c.967 0 1.75.806 1.75 1.8s-.783 1.8-1.75 1.8zm13.5 11.268h-3v-5.6c0-1.341-.028-3.066-1.868-3.066-1.87 0-2.157 1.461-2.157 2.971v5.695h-3v-10h2.881v1.367h.042c.401-.756 1.379-1.553 2.841-1.553 3.039 0 3.6 2.001 3.6 4.6v5.586z"/>
            </svg>
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

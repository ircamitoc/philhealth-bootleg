import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Button,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import RememberMeRoundedIcon from "@mui/icons-material/RememberMeRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import MedicalInformationRoundedIcon from "@mui/icons-material/MedicalInformationRounded";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import YellowHoverButton from "../styles/YellowHoverButton";
import { useNavigate, useLocation } from "react-router-dom";

const appBarStyle = {
  backgroundColor: "#3e5c00",
};

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const goToAboutUs = function () {
    navigate("/about-us");
  };

  const goToMembers = function () {
    navigate("/members");
  };

  const goToOurPartners = function () {
    navigate("/our-partners");
  };

  const goToOnlineServices = function () {
    navigate("/online-services");
  };

  const goToHome = function () {
    navigate("/");
  };

  const goToDownloads = function () {
    navigate("/downloads");
  };

  const homeButtonAboutUs =
    location.pathname === "/about-us" ? (
      <Button
        onClick={goToHome}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <YellowHoverButton>Home</YellowHoverButton>
      </Button>
    ) : null;

  const homeButtonMembers =
    location.pathname === "/members" ? (
      <Button
        onClick={goToHome}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <YellowHoverButton>Home</YellowHoverButton>
      </Button>
    ) : null;

  const homeButtonOurPartners =
    location.pathname === "/our-partners" ? (
      <Button
        onClick={goToHome}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <YellowHoverButton>Home</YellowHoverButton>
      </Button>
    ) : null;

  const homeButtonOnlineServices =
    location.pathname === "/online-services" ? (
      <Button
        onClick={goToHome}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <YellowHoverButton>Home</YellowHoverButton>
      </Button>
    ) : null;

  const homeButtonDownloads =
    location.pathname === "/downloads" ? (
      <Button
        onClick={goToHome}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <YellowHoverButton>Home</YellowHoverButton>
      </Button>
    ) : null;

  return (
    <AppBar position="static" style={appBarStyle}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {homeButtonAboutUs}
            {homeButtonMembers}
            {homeButtonOurPartners}
            {homeButtonOnlineServices}
            {homeButtonDownloads}
            <Button
              onClick={goToAboutUs}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <YellowHoverButton>About Us</YellowHoverButton>
            </Button>
            <Button
              onClick={goToMembers}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <YellowHoverButton>Members</YellowHoverButton>
            </Button>
            <Button
              onClick={goToOurPartners}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <YellowHoverButton>Our Partners</YellowHoverButton>
            </Button>
            <Button
              onClick={goToOnlineServices}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <YellowHoverButton>Online Services</YellowHoverButton>
            </Button>
            <Button
              onClick={goToDownloads}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <YellowHoverButton>Downloads</YellowHoverButton>
            </Button>
          </Box>
          {/*Hamburger*/}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton color="inherit" onClick={toggleMobileMenu} edge="end">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Drawer anchor="left" open={mobileMenuOpen} onClose={toggleMobileMenu}>
        <List style={appBarStyle}>
          <ListItem disablePadding>
            <ListItemButton onClick={goToAboutUs}>
              <ListItemIcon>
                <PeopleAltRoundedIcon sx={{ color: "#FEFBF7" }} />
              </ListItemIcon>
              <YellowHoverButton>
                <ListItemText primary="About Us" />
              </YellowHoverButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={goToMembers}>
              <ListItemIcon>
                <RememberMeRoundedIcon sx={{ color: "#FEFBF7" }} />
              </ListItemIcon>
              <YellowHoverButton>
                <ListItemText primary="Members" />
              </YellowHoverButton>{" "}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={goToOurPartners}>
              <ListItemIcon>
                <HandshakeRoundedIcon sx={{ color: "#FEFBF7" }} />
              </ListItemIcon>
              <YellowHoverButton>
                <ListItemText primary="Our Partners" />
              </YellowHoverButton>{" "}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={goToOnlineServices}>
              <ListItemIcon>
                <MedicalInformationRoundedIcon sx={{ color: "#FEFBF7" }} />
              </ListItemIcon>
              <YellowHoverButton>
                <ListItemText primary="Online Services" />
              </YellowHoverButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={goToDownloads}>
              <ListItemIcon>
                <GetAppRoundedIcon sx={{ color: "#FEFBF7" }} />
              </ListItemIcon>
              <YellowHoverButton>
                <ListItemText primary="Downloads" />
              </YellowHoverButton>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;

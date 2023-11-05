import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const appBarStyle = {
  backgroundColor: "#FEFBF7",
};

const HeaderContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "10px 0 10px 0",
});

const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

function Header() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
        <HeaderContainer>
          <LogoContainer>
            <img
              src="https://www.philhealth.gov.ph/images/ph_logo0.png"
              alt="philhealth-logo"
              loading="lazy"
            />
            <img
              src="https://www.philhealth.gov.ph/images/bagong_pilipinas_logo3.png"
              alt="bagong-pilipinas"
              loading="lazy"
            />
          </LogoContainer>
        </HeaderContainer>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
        >
          <MenuItem onClick={handleMobileMenuClose}>Item 1</MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>Item 2</MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>Item 3</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

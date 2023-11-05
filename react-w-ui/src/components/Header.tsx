import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
} from "@mui/material";

const appBarStyle = {
  // backgroundColor: "#FEFBF7",
  backgroundColor: "#0E460E"
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
  return (
    <AppBar position="sticky" style={appBarStyle}>
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
      </Toolbar>
    </AppBar>
  );
}

export default Header;

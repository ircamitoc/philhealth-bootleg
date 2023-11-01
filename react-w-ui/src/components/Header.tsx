import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import { SearchBar } from "../styles/search-bar/SearchBar";
import { SearchIconWrapper } from "../styles/search-bar/SearchIconWrapper";
import { StyledInputBase } from "../styles/search-bar/StyledInputBase";

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
  const theme = useTheme();

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
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchBar>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </SearchBar>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </HeaderContainer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

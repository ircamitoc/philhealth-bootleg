import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Drawer,
  IconButton,
  styled,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { NavigationItem, getNavigation } from "../services/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavigationBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [navigationData, setNavigationData] = useState<NavigationItem[]>([]);
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
  });

  const isMobileOrTablet = useMediaQuery("(max-width: 100px)");
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsSticky(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    getNavigation().then((data) => setNavigationData(data));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const LogoContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    backgroundColor: isSticky
      ? "rgba(246, 246, 233, 1)"
      : "rgba(246, 246, 233, 1)",
    borderRadius: "20px",
    paddingRight: isSticky ? 15 : 0,
    paddingLeft: isSticky ? 13 : 0,
    transition: "max-width 0.6s",
  });

  const LogoImage = styled("img")({
    maxWidth: isSticky ? "120px" : "150px",
    transition: "max-width 0.3s",
    marginRight: 2,
    marginTop: isSticky ? 3 : 5,
  });

  const BagongPilipinasLogo = styled("img")({
    maxWidth: isSticky ? "50px" : "55px",
    transition: "max-width 0.3s",
    marginTop: isSticky ? -2 : 6,
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: isSticky ? "#0E460E" : "rgba(246, 246, 233, 1)",
          transition: "background-color 0.3s",
          height: isSticky ? "65px" : "75px",
        }}
      >
        <Toolbar>
          <LogoContainer>
            <a href="/">
              <LogoImage
                src="https://www.philhealth.gov.ph/images/ph_logo0.png"
                alt="philhealth-logo"
                loading="lazy"
                style={{ display: "inline-block", verticalAlign: "middle" }}
              />
            </a>

            <BagongPilipinasLogo
              src="https://www.philhealth.gov.ph/images/bagong_pilipinas_logo3.png"
              alt="bagong-pilipinas"
              loading="lazy"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </LogoContainer>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              marginTop: isSticky ? 0 : 5,
            }}
          >
            {isMobileOrTablet ? (
              <IconButton
                color="inherit"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              navigationData.map((item: NavigationItem) => (
                <div key={item.text}>
                  {item.route ? (
                    <Link to={item.route as string} style={{ textDecoration: "none" }}>
                      <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        style={{
                          margin: "0 10px",
                          color: isSticky ? "rgba(246, 246, 233, 1)" : "#0E460E",
                          fontWeight: "bold",
                          fontSize: "1rem",
                        }}
                      >
                        {item.text}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                      style={{
                        margin: "0 10px",
                        color: isSticky ? "rgba(246, 246, 233, 1)" : "#0E460E",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      {item.text}
                    </Button>
                  )}

                  {item.subitems && (
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {item.subitems.map((subitem: NavigationItem) => (
                        <Link
                          to={subitem.route as string}
                          key={subitem.text}
                          style={{
                            textDecoration: "none",
                            fontWeight: "bold",
                            fontSize: "1rem",
                          }}
                        >
                          <MenuItem
                            onClick={handleClose}
                            sx={{
                              color: "#0E460E",
                            }}
                          >
                            {subitem.text}
                          </MenuItem>
                        </Link>
                      ))}
                    </Menu>
                  )}
                </div>
              ))
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {/* Add your navigation links and items here */}
        {navigationData.map((item: NavigationItem) => (
          <Link to={item.route as string} key={item.text} style={{ textDecoration: "none" }}>
            <MenuItem onClick={() => setDrawerOpen(false)}>
              {item.text}
            </MenuItem>
          </Link>
        ))}
      </Drawer>
    </ThemeProvider>
  );
};

export default NavigationBar;

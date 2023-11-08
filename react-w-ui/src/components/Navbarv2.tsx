import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Drawer,
  IconButton,
  createTheme,
  ThemeProvider,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { NavigationItem, getNavigation } from "../services/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled, { keyframes } from "styled-components";

const fadeDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-30px) scale(0.9);
    }
    100% {
        opacity: 1;
        transform: translateY(0px) scale(1);
    }
`;

const AnimationContainer = styled.div`
  animation: ${fadeDown} 0.5s;
`;

const NavigationBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [navigationData, setNavigationData] = useState<NavigationItem[]>([]);
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [subItemOpen, setSubItemOpen] = useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
  });

  const isMobileOrTablet = useMediaQuery("(max-width: 1170px)");

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

  const handleSubItemClick = () => {
    setSubItemOpen(!subItemOpen);
  };

  navigationData.sort((a, b) => {
    const order = [
      "about us",
      "members",
      "our partners",
      "online services",
      "downloads",
      "updates",
    ];

    const positionA = order.indexOf(a.text.toLowerCase());
    const positionB = order.indexOf(b.text.toLowerCase());

    return positionA - positionB;
  });

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
        <AnimationContainer>
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
                  onClick={() => setDrawerOpen(true)}
                  style={{
                    color: isSticky ? "rgba(246, 246, 233, 1)" : "#0E460E",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                navigationData.map((item: NavigationItem) => (
                  <div key={item.text}>
                    {item.route ? (
                      <Link
                        to={item.route as string}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={handleClick}
                          style={{
                            margin: "0 10px",
                            color: isSticky
                              ? "rgba(246, 246, 233, 1)"
                              : "#0E460E",
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
                          color: isSticky
                            ? "rgba(246, 246, 233, 1)"
                            : "#0E460E",
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
                        {isMobileOrTablet ? (
                          <div>
                            <ListItem onClick={handleSubItemClick}>
                              <ListItemText
                                primary={item.text}
                                primaryTypographyProps={{
                                  color: "primary",
                                  variant: "button",
                                }}
                              />
                              {subItemOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse
                              in={subItemOpen}
                              timeout="auto"
                              unmountOnExit
                            >
                              <List>
                                {item.subitems.map(
                                  (subitem: NavigationItem) => (
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
                                  )
                                )}
                              </List>
                            </Collapse>
                          </div>
                        ) : (
                          item.subitems.map((subitem: NavigationItem) => (
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
                          ))
                        )}
                      </Menu>
                    )}
                  </div>
                ))
              )}
            </div>
          </Toolbar>
        </AnimationContainer>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {navigationData.map((item: NavigationItem) => (
          <div key={item.text}>
            {item.route ? (
              <Link
                to={item.route as string}
                style={{ textDecoration: "none" }}
              >
                <ListItem onClick={() => setDrawerOpen(false)}>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      color: "#0E460E",
                      variant: "button",
                      fontWeight: "bold",
                    }}
                  />
                </ListItem>
              </Link>
            ) : (
              <ListItem onClick={handleSubItemClick}>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    color: "#0E460E",
                    variant: "button",
                    fontWeight: "bold",
                  }}
                />
                {subItemOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            )}

            {item.subitems && (
              <Collapse in={subItemOpen} timeout="auto" unmountOnExit>
                <List>
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
                      <ListItem onClick={() => setDrawerOpen(false)}>
                        <ListItemText
                          primary={subitem.text}
                          primaryTypographyProps={{
                            color: "#0E460E",
                            variant: "button",
                            fontWeight: "bold",
                            paddingLeft: "20px",
                          }}
                        />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </Drawer>
    </ThemeProvider>
  );
};

export default NavigationBar;

import React from "react";
import Navbar2 from "../components/Navbarv2";
import Footer from "../components/Footer";
import {
  Box,
  Divider,
  Grid,
  Icon,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

function AboutUs() {
  return (
    <div className="AboutUs">
      <Navbar2 />
      <ThemeProvider theme={theme}>
        <Paper
          sx={{
            borderRadius: "20px",
            position: "relative",
            color: "fff",
            mb: 4,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url("https://www.philhealth.gov.ph/about_us/images/abt_bnnr.jpg")`,
            "@media (max-width: 600px)": {
              flexDirection: "column", // Change direction for smaller screens
              textAlign: "center",
            },
          }}
        >
          <img
            style={{ display: "none" }}
            src="https://www.philhealth.gov.ph/about_us/images/abt_bnnr.jpg"
            alt=""
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(14, 70, 40, 0.6)",
            }}
          />
          <Grid container>
            <Grid
              item
              md={12}
              sx={{
                color: "#f6f6e9",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  pl: { md: 0 }, // Adjust padding for smaller screens
                  "@media (max-width: 600px)": {
                    textAlign: "center",
                  },
                }}
              >
                <Typography
                  component="h1"
                  variant="h4"
                  color="inherit"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "2rem", // Adjust font size for smaller screens
                    "@media (max-width: 600px)": {
                      fontSize: "1.5rem", // Adjust font size for smaller screens
                    },
                  }}
                  gutterBottom
                >
                  CONTACT INFORMATION
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  component="h6"
                  variant="h6"
                  color="inherit"
                  gutterBottom
                >
                  Callback Channel: 0917-898-7442 (PHIC)
                </Typography>
                <>
                  <Typography
                    component="body"
                    variant="body1"
                    color="inherit"
                    gutterBottom
                  >
                    Text "PHICcallback [space] Mobile No. or Metro Manila
                    landline [space]
                  </Typography>
                </>
                <Typography
                  component="body"
                  variant="body1"
                  color="inherit"
                  gutterBottom
                >
                  details of your concern" and we will call you during office
                  hours, weekdays only.
                </Typography>
                <Typography
                  component="body"
                  variant="body1"
                  color="inherit"
                  gutterBottom
                >
                  (Callback requests will expire after 72 hours.)
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  component="h6"
                  variant="h6"
                  color="inherit"
                  gutterBottom
                >
                  Call Center Hotline 84417442 (PHIC)
                </Typography>
                <Typography
                  component="body"
                  variant="body1"
                  color="inherit"
                  gutterBottom
                >
                  (Self-help only; agent assistance temporarily not available)
                </Typography>
                <Typography
                  component="body"
                  variant="body1"
                  color="inherit"
                  sx={{
                    display: { md: "flex" },
                    alignItems: "center",
                    color: "#f6f6f9",
                  }}
                  gutterBottom
                >
                  <Icon sx={{ marginRight: "5px", marginTop: -0.75 }}>
                    <EmailIcon />
                  </Icon>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="mailto:actioncenter@philhealth.gov.ph"
                    target="_blank"
                    rel="noreferrer"
                  >
                    actioncenter@philhealth.gov.ph
                  </a>
                </Typography>
                <IconButton>
                  <a
                    href="https://www.facebook.com/PhilHealthOfficial/"
                    style={{ textDecoration: "none", color: "inherit" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon
                      sx={{
                        backgroundColor: "#f6f6e9",
                        color: "#1877F2",
                        padding: 1,
                        borderRadius: 5,
                        marginRight: "8px",
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a
                    href="https://twitter.com/teamphilhealth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon
                      sx={{
                        backgroundColor: "#f6f6e9",
                        color: "#26a7de",
                        padding: 1,
                        borderRadius: 5,
                        marginRight: "8px",
                      }}
                    />
                  </a>
                </IconButton>

                <Typography
                  component="h6"
                  variant="h6"
                  color="inherit"
                  sx={{
                    color: "#f6f6f9",
                    textDecoration: "underline",
                  }}
                  gutterBottom
                >
                  <a
                    href="https://www.philhealth.gov.ph/about_us/map/regional.htm"
                    style={{ textDecoration: "none", color: "inherit" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    REGIONAL OFFICES {">"}
                    {">"}
                  </a>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Grid container sx={{ paddingX: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Profile
          </Typography>
          <Grid item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
          <Typography variant="h6">
            The call to serve the rural indigents echoed since the early '60s
            when the Philippine Medical Association introduced the MARIA Project
            which prioritized aid to communities in need of medical assistance.
          </Typography>
        </Grid>
      </ThemeProvider>
      <Footer />
    </div>
  );
}

export default AboutUs;

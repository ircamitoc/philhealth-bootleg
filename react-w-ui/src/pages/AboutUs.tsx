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
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
    }
    100% {
        opacity: 1;
        transform: translateY(0px) scale(1);
    }
`;

const AnimationContainer = styled.div`
  animation: ${fadeUp} 0.5s;
`;

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

const data = [
  {
    image: "https://www.philhealth.gov.ph/about_us/images/issa.jpg",
    text: "ISSA",
    link: "https://www.issa.int/",
  },
  {
    image: "https://www.philhealth.gov.ph/about_us/images/assa.jpg",
    text: "ASSA",
    link: "https://www.asean-ssa.org/",
  },
  {
    image: "https://www.philhealth.gov.ph/about_us/images/philssa.jpg",
    text: "PHILSSA",
    link: "https://philssa.org.ph/",
  },
];

function AboutUs() {
  return (
    <div className="AboutUs">
      <Navbar2 />
      <ThemeProvider theme={theme}>
        <AnimationContainer>
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

        <Grid
          container
          sx={{ paddingX: { md: 20, xs: 7 }, paddingY: { md: 4, xs: 5} }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", lineHeight: 2 }}>
            Profile
          </Typography>
          <Grid item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
          <Typography variant="h5" sx={{ lineHeight: 3 }}>
            HISTORY
          </Typography>
          <Typography variant="h6" sx={{ lineHeight: 1.5 }}>
            The call to serve the rural indigents echoed since the early '60s
            when the Philippine Medical Association introduced the MARIA Project
            which prioritized aid to communities in need of medical assistance.
          </Typography>
          <li style={{ listStyle: "none" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 20,
                color: "#2C9B00",
              }}
            >
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/mandate.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Agency's Mandate And Functions
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/vis_mis_core.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Vision, Mission, and Core Values
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/bod.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Board of Directors
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/eos.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Executive Officers
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/PhilHealth'sOrganizationalStructure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Organizational Structure
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/VisualBrandIdentityElements.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Visual Brand and Identity Elements
                  </Typography>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/about_us/transparency/#iso"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    ISO Certification
                  </Typography>
                </a>
              </li>
            </ul>
          </li>
          <Typography variant="h6" sx={{ lineHeight: 1.5 }}>
            Affiliations - An attached agency of the Department of Health and a
            proud member of the following:
          </Typography>
          <Grid container spacing={2} sx={{ paddingY: 2 }}>
            {data.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={0} sx={{ textAlign: "justify" }}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} alt={`${index + 1}`} />
                  </a>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
          <Typography variant="h3" sx={{ fontWeight: "bold", lineHeight: 2 }}>
            References
          </Typography>
          <Grid item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#2C9B00",
              color: "#F6F6F9",
              fontWeight: "bold",
              paddingX: 2,
              borderRadius: "20px",
              marginY: 2,
            }}
          >
            <Typography variant="h5" sx={{ lineHeight: 3, fontWeight: "bold" }}>
              ENABLING LAWS
            </Typography>
          </Grid>
          <li style={{ listStyle: "none" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 20,
                color: "#2C9B00",
              }}
            >
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/ra7875.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    R.A. 7875 And IRR
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/ra9241.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    R.A. 9241 And IRR
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/ra10606.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    R.A. 10606
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/IRR_NHIAct_2013.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Revised IRR Of The National Health Insurance Act Of 2013
                    (R.A. 7875 As Amended By R.A. 9241 And 10606)
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/RA11223_UHC.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    R.A. 11223 (Universal Health Care Act)
                  </Typography>
                </a>
              </li>
              <li>
                <a
                  href="https://www.philhealth.gov.ph/about_us/UHC-IRR_Signed.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    UHC-IRR
                  </Typography>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/about_us/IRR_RA11228.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    IRR Of R.A. 11228
                  </Typography>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/about_us/AnnexA_PBRNo2571-PROAC.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    PhilHealth Rules On Administrative Cases (PROAC) Involving
                    Health Care Providers, Members And PhilHealth Employees
                  </Typography>
                </a>
              </li>
            </ul>
          </li>
          <Grid item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#2C9B00",
              color: "#F6F6F9",
              fontWeight: "bold",
              paddingX: 2,
              borderRadius: "20px",
              marginY: 2,
            }}
          >
            <a
              href="https://www.philhealth.gov.ph/about_us/studies/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h5"
                sx={{
                  lineHeight: 3,
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                PhilHealth STUDIES
              </Typography>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#2C9B00",
              color: "#F6F6F9",
              fontWeight: "bold",
              paddingX: 2,
              borderRadius: "20px",
              marginY: 2,
            }}
          >
            <a
              href="https://www.philhealth.gov.ph/about_us/annual_report/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h5"
                sx={{
                  lineHeight: 3,
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Annual Reports
              </Typography>
            </a>
          </Grid>
          <li style={{ listStyle: "none" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 20,
                color: "#2C9B00",
              }}
            >
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/about_us/annual_report/AR2021.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    2021
                  </Typography>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/about_us/annual_report/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Archives
                  </Typography>
                </a>
              </li>
            </ul>
          </li>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#2C9B00",
              color: "#F6F6F9",
              fontWeight: "bold",
              paddingX: 2,
              borderRadius: "20px",
              marginY: 2,
            }}
          >
            <a
              href="https://www.philhealth.gov.ph/about_us/statsncharts/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h5"
                sx={{
                  lineHeight: 3,
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Stats and Charts
              </Typography>
            </a>
          </Grid>
          <li style={{ listStyle: "none" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 20,
                color: "#2C9B00",
              }}
            >
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/about_us/statsncharts/snc2023_1stSem.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    2023
                  </Typography>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/about_us/statsncharts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Archives
                  </Typography>
                </a>
              </li>
            </ul>
          </li>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#2C9B00",
              color: "#F6F6F9",
              fontWeight: "bold",
              paddingX: 2,
              borderRadius: "20px",
              marginY: 2,
            }}
          >
            <a
              href="https://www.philhealth.gov.ph/about_us/transparency/PhilHealthStratplan2021-23.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h5"
                sx={{
                  lineHeight: { md: 3, xs: 1.8 },
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                PhilHealth Strategic Plan for 2021-2023
              </Typography>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#2C9B00",
              color: "#F6F6F9",
              fontWeight: "bold",
              paddingX: 2,
              borderRadius: "20px",
              marginY: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                lineHeight: 3,
                fontWeight: "bold",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Medical Literature
            </Typography>
          </Grid>
          <li style={{ listStyle: "none" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 20,
                color: "#2C9B00",
              }}
            >
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/partners/providers/pdf/PNF-EML_11022022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Philippine National Formulary (PNF) Essential Medicines List
                    (EML) (As Of November 2, 2022)
                  </Typography>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/partners/providers/pdf/hta_forum_v4n1-2006.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    HTA Forum (2006)
                  </Typography>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/partners/providers/pdf/NTCP_MoP2014.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    National TB Control Program Manual
                  </Typography>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/partners/providers/pdf/ComprehensiveUnifiedPolicy_TB.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Comprehensive And Unified Policy For TB Control
                  </Typography>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/partners/providers/pdf/Leptospirosis_Policy_Statements.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Policy Recommendations On Leptospirosis
                  </Typography>
                </a>
              </li>
            </ul>
          </li>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#2C9B00",
              color: "#F6F6F9",
              fontWeight: "bold",
              paddingX: 2,
              borderRadius: "20px",
              marginY: 2,
            }}
          >
            <a
              href="https://www.philhealth.gov.ph/about_us/statsncharts/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h5"
                sx={{
                  lineHeight: 3,
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Forum Materials
              </Typography>
            </a>
          </Grid>
          <li style={{ listStyle: "none" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 20,
                color: "#2C9B00",
              }}
            >
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/2018policyforum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    2018
                  </Typography>
                </a>
              </li>
            </ul>
          </li>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#2C9B00",
              color: "#F6F6F9",
              fontWeight: "bold",
              paddingX: 2,
              borderRadius: "20px",
              marginY: 2,
            }}
          >
            <a
              href="https://www.philhealth.gov.ph/about_us/PhilHealthCorporateDataDictionary10052022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h5"
                sx={{
                  lineHeight: { md: 3, xs: 1.8 },
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                PhilHealth Corporate Data Dictionary (As of October 5, 2022)
              </Typography>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#2C9B00",
              color: "#F6F6F9",
              fontWeight: "bold",
              paddingX: 2,
              borderRadius: "20px",
              marginY: 2,
            }}
          >
            <a
              href="https://www.philhealth.gov.ph/about_us/NationalHealthDataRepositoryFramework03282022.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h5"
                sx={{
                  lineHeight: { md: 3, xs: 1.8 },
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                National Health Data Repository Framework (As of March 28, 2022)
              </Typography>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#2C9B00",
              color: "#F6F6F9",
              fontWeight: "bold",
              paddingX: 2,
              borderRadius: "20px",
              marginY: 2,
            }}
          >
            <a
              href="https://www.philhealth.gov.ph/about_us/app/2023/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h5"
                sx={{
                  lineHeight: { md: 3, xs: 1.8 },
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Annual Procurement Plan
              </Typography>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#2C9B00",
              color: "#F6F6F9",
              fontWeight: "bold",
              paddingX: 2,
              borderRadius: "20px",
              marginY: 2,
            }}
          >
              <Typography
                variant="h5"
                sx={{
                  lineHeight: { md: 3, xs: 1.8 },
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Privacy Notices
              </Typography>
          </Grid>
          <li style={{ listStyle: "none" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 20,
                color: "#2C9B00",
              }}
            >
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/privacy/mbr_hcp.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Members and Health Care Professionals
                  </Typography>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/privacy/splr_cnslt.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Suppliers and Consultants
                  </Typography>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.philhealth.gov.ph/privacy/applcnts_emplys.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: 2,
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Applicants And Employees
                  </Typography>
                </a>
              </li>
            </ul>
          </li>
        </Grid>
        </AnimationContainer>
        
      </ThemeProvider>
      <Footer />
    </div>
  );
}

export default AboutUs;

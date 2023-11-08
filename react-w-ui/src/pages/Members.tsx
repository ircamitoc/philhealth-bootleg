import React from "react";
import Navbar2 from "../components/Navbarv2";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
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

function Members() {
  return (
    <div className="Members">
      <Navbar2 />
      <ThemeProvider theme={theme}>
        <AnimationContainer>
        <Grid
          container
          sx={{
            display: "flex",
            paddingX: {
              md: 8,
              xs: 2, // Adjust left and right padding for smaller screens
            },
            paddingY: {
              md: 4,
              xs: 3,
            },
            backgroundColor: "rgba(246, 246, 233, 1)",

          }}
        >
          <Grid xs={12}>
            <img
              src="https://www.philhealth.gov.ph/members/images/mbrs_bnnr.jpg"
              alt="member-img"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Grid>
          <Grid xs={12} md={6} sx={{ padding: { xs: 3, md: 4 } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#0e460e",
                textAlign: "center",
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              Direct Contribution
            </Typography>
            <Grid
              xs={12}
              style={{
                backgroundColor: "#e0e0e0",
                padding: 2,
                borderRadius: "20px",
                marginTop: 2,
              }}
            >
              <Typography variant="h6">
                <ul>
                  <a
                    href="https://www.philhealth.gov.ph/members/formal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline", color: "inherit" }}
                  >
                    <li>Employees with formal employment</li>
                  </a>
                  <li>Kasambahays</li>
                  <a
                    href="https://www.philhealth.gov.ph/members/informal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline", color: "inherit" }}
                  >
                    <li>Self-earning individuals; Professional practitioners</li>
                  </a>
                  <li>Overseas Filipino Workers</li>
                  <li>Filipinos living abroad and those with dual citizenship</li>
                  <a
                    href="https://www.philhealth.gov.ph/members/lifetime/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline", color: "inherit" }}
                  >
                    <li>Lifetime members</li>
                  </a>
                  <li>
                    All Filipinos aged 21 years and above with the capacity to
                    pay
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>

          <Grid xs={12} md={6} sx={{ padding: { xs: 3, md: 4 } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#0e460e",
                textAlign: "center",
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              Indirect Contribution
            </Typography>
            <Grid
              xs={12}
              style={{
                backgroundColor: "#e0e0e0",
                padding: 2,
                borderRadius: "20px",
                marginTop: 2,
              }}
            >
              <Typography variant="h6">
                <ul>
                  <a
                    href="https://www.philhealth.gov.ph/members/sponsored/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline", color: "inherit" }}
                  >
                    <li>Indigents identified by the DSWD</li>
                  </a>
                  <li>Beneficiaries of Pantawid Pamilyang Pilipino Program</li>
                  <a
                    href="https://www.philhealth.gov.ph/members/senior/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline", color: "inherit" }}
                  >
                    <li>Senior citizens</li>
                  </a>
                  <li>Persons with disabilities</li>
                  <li>Sangguniang Kabataan officials</li>
                  <li>
                    Previously identified at point-of-service / sponsored by LGUs
                  </li>
                  <li>
                    Filipinos aged 21 years old and above without the capacity to
                    pay premiums
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </AnimationContainer>
      </ThemeProvider>
      <Footer />
    </div>
  );
}

export default Members;

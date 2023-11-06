import React from "react";
import Navbar2 from "../components/Navbarv2";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

function OurPartners() {
  return (
    <>
      <Navbar2 />
      <ThemeProvider theme={theme}>
        <div className="Members">
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              paddingX: {
                md: 8,
                xs: 5,
              },
              paddingY: {
                md: 4,
                xs: 3,
              },
              backgroundColor: "rgba(246, 246, 233, 1)",
            }}
          >
            <Grid item xs={12}>
              <img
                src="https://www.philhealth.gov.ph/partners/providers/images/hcp_bnnr.jpg"
                alt="member-img"
                style={{ width: "100%", height: "auto", borderRadius: "20px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  backgroundColor: "#e0e0e0",
                  padding: 20,
                  borderRadius: "20px",
                  marginTop: 10,
                }}
              >
                <Typography variant="h4">Healthcare Providers</Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  backgroundColor: "#e0e0e0",
                  padding: 20,
                  borderRadius: "20px",
                  marginTop: 10,
                }}
              >
                <Typography variant="h4">Employers</Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  backgroundColor: "#e0e0e0",
                  padding: 20,
                  borderRadius: "20px",
                  marginTop: 10,
                }}
              >
                <Typography variant="h4">Collecting Partners</Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  backgroundColor: "#e0e0e0",
                  padding: 20,
                  borderRadius: "20px",
                  marginTop: 10,
                }}
              >
                <Typography variant="h4">Service Providers</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default OurPartners;

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
            <Grid item xs={6}>
              <div
                style={{
                  borderRadius: "20px",
                  marginTop: 50,
                }}
              >
                <img
                  src="https://www.philhealth.gov.ph/images/hcp_main.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  padding: 40,
                  borderRadius: "20px",
                  marginTop: 50,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ marginTop: { md: 4 }, fontWeight: "bold" }}
                >
                  Healthcare Providers
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    paddingY: { md: 4, lineHeight: 2, textAlign: "justify" },
                  }}
                >
                  We forge partnerships with only the best in the industry to
                  fulfil our mandate of providing all Filipinos with accessible,
                  available, acceptable and affordable health care services that
                  will lead to better health outcomes and improved quality of
                  life.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  padding: 40,
                  borderRadius: "20px",
                  marginTop: 50,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ marginTop: { md: 4 }, fontWeight: "bold" }}
                >
                  Employers
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    paddingY: { md: 4, lineHeight: 2, textAlign: "justify" },
                  }}
                >
                  We partner with employers in the government and private
                  sectors to ensure that all their employees are provided with
                  social health insurance coverage as mandated by law.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  borderRadius: "20px",
                  marginTop: 50,
                }}
              >
                <img
                  src="https://www.philhealth.gov.ph/partners/images/emplyr_main.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  borderRadius: "20px",
                  marginTop: 50,
                }}
              >
                <img
                  src="https://www.philhealth.gov.ph/partners/images/collect_main.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  padding: 40,
                  borderRadius: "20px",
                  marginTop: 50,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ marginTop: { md: 4 }, fontWeight: "bold" }}
                >
                  Collecting Partners
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    paddingY: { md: 4, lineHeight: 2, textAlign: "justify" },
                  }}
                >
                  We have tapped the services and networks of bank and non-bank
                  institutions to make premium remittance more convenient for
                  our members and employers. This section provides a complete
                  list of these partners and their branch locations, and also
                  includes basic information for collecting agencies that might
                  be interested to partner with us in premium remittance.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  borderRadius: "20px",
                  marginTop: 50,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Service Providers
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    paddingX: { md: 30 },
                    marginTop: { md: 2 },
                    lineHeight: 1.5,
                  }}
                >
                  We are moving towards electronic transactions and to help us
                  achieve our goal, we have entered into partnerships with
                  Health IT Providers for our e-claims and related processes.
                </Typography>
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

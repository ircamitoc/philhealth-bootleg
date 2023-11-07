import React from "react";
import Navbar2 from "../components/Navbarv2";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

function OnlineServices() {
  return (
    <ThemeProvider theme={theme}>
      <div className="OnlineServices">
        <Navbar2 />
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            paddingX: {
              md: 8,
              xs: 5,
            },
            paddingY: {
              md: 30,
              xs: 3,
            },
            backgroundColor: "rgba(246, 246, 233, 1)",
          }}
        >
          <Grid item xs={12} sx={{ marginTop: { md: -25 } }}>
            <img
              src="https://www.philhealth.gov.ph/services/images/os_banner.jpg"
              alt="member-img"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                paddingY: { md: 5 },
                textAlign: "center",
              }}
            >
              Membership
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div
                style={{
                  backgroundColor: "#CE6D0E",
                  borderRadius: "20px",
                  color: "#f6f6f9",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      paddingTop: { md: 4 },
                      paddingX: { md: 5 },
                    }}
                  >
                    Member Portal
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ paddingTop: { md: 3 }, paddingX: { md: 5 } }}
                  >
                    Enables members to check on the accuracy of their membership
                    details.
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  href="https://memberinquiry.philhealth.gov.ph/member/"
                  sx={{
                    marginX: { md: 5 },
                    marginY: { md: 3 },
                    borderRadius: 20,
                    backgroundColor: "#0E460E",
                  }}
                  disableElevation
                >
                  Register/Login
                </Button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  backgroundColor: "#32AA0C",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      paddingTop: { md: 4 },
                      paddingX: { md: 5 },
                    }}
                  >
                    Electronic Group Enrollment System
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ paddingTop: { md: 3 }, paddingX: { md: 5 } }}
                  >
                    Facilitates registration and billing of Organized Groups.
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  href="https://egroup03.philhealth.gov.ph/"
                  sx={{
                    marginX: { md: 5 },
                    marginY: { md: 3 },
                    borderRadius: 20,
                    backgroundColor: "#0E460E",
                  }}
                  disableElevation
                >
                  Login
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                paddingY: { md: 5 },
                textAlign: "center",
              }}
            >
              Benefits
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div
                style={{
                  backgroundColor: "#428BCA",
                  borderRadius: "20px",
                  color: "#f6f6f9",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      paddingTop: { md: 4 },
                      paddingX: { md: 5 },
                    }}
                  >
                    Case Rates Search
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ paddingTop: { md: 3 }, paddingX: { md: 5 } }}
                  >
                    Provides members with information on PhilHealth's benefit
                    packages.
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  href="https://www.philhealth.gov.ph/services/acr/"
                  sx={{
                    marginX: { md: 5 },
                    marginY: { md: 3 },
                    borderRadius: 20,
                    backgroundColor: "#0E460E",
                  }}
                  disableElevation
                >
                  Begin Search
                </Button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  backgroundColor: "#6DCEFF",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      paddingTop: { md: 4 },
                      paddingX: { md: 5 },
                    }}
                  >
                    Claims Eligibility Checking
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ paddingTop: { md: 3 }, paddingX: { md: 5 } }}
                  >
                    Enables providers to ascertain the benefit availment
                    eligibility of members.
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  href="https://cec.philhealth.gov.ph/"
                  sx={{
                    marginX: { md: 5 },
                    marginY: { md: 3 },
                    borderRadius: 20,
                    backgroundColor: "#0E460E",
                  }}
                  disableElevation
                >
                  Login
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid xs={4} style={{ padding: "20px" }}>
            {" "}
            {/* CONTRIBUTION */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: { md: 7 },
                  paddingX: { md: 5 },
                }}
              >
                Contribution
              </Typography>
            </div>
            <div
              style={{
                marginTop: -150,
                backgroundColor: "#5EC1AE",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: { md: 5 },
                }}
              >
                Electronic Premium Remittance System
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  marginX: { md: 3 },
                  marginY: { md: 3 },
                }}
              >
                Enables employers to remit their premium contributions online
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 70,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="https://eprs01.philhealth.gov.ph/"
                  sx={{
                    marginX: 2,
                    borderRadius: 20,
                    backgroundColor: "#0E460E",
                    padding: "7px 60px",
                  }}
                  disableElevation
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  href="https://memberinquiry.philhealth.gov.ph/member/"
                  sx={{
                    marginX: 2,
                    borderRadius: 20,
                    backgroundColor: "#0E460E",
                    padding: "7px 60px",
                  }}
                  disableElevation
                >
                  ePOAF
                </Button>
              </div>
            </div>
          </Grid>
          <Grid xs={4} style={{ padding: "20px" }}>
            {" "}
            {/* COLLECTION */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: { md: 7 },
                  paddingX: { md: 5 },
                }}
              >
                Collection
              </Typography>
            </div>
            <div
              style={{
                marginTop: -150,
                backgroundColor: "#79A54C",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: { md: 5 },
                }}
              >
                Electronic Collection Reporting System
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  marginX: { md: 3 },
                  marginY: { md: 3 },
                }}
              >
                Enables PhilHealth Accredited Collecting Agents to submit daily
                RF2 reports online.
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 90,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="https://ecrs.philhealth.gov.ph/"
                  sx={{
                    marginX: 2,
                    borderRadius: 20,
                    backgroundColor: "#0E460E",
                    padding: "7px 60px",
                  }}
                  disableElevation
                >
                  Login
                </Button>
              </div>
            </div>
          </Grid>
          <Grid xs={4} style={{ padding: "20px" }}>
            {" "}
            {/* ACCREDITATION */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: { md: 7 },
                  paddingX: { md: 5 },
                }}
              >
                Accreditation
              </Typography>
            </div>
            <div
              style={{
                marginTop: -150,
                backgroundColor: "#678DC3",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: { md: 5 },
                }}
              >
                Health Care Institutions
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  marginX: { md: 3 },
                  marginY: { md: 3 },
                }}
              >
                Shows the complete list of HCIs including accreditation status
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 70,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="https://ihcp.philhealth.gov.ph/"
                  sx={{
                    marginX: 0.8,
                    borderRadius: 20,
                    backgroundColor: "#0E460E",
                    padding: "7px 40px",
                  }}
                  disableElevation
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  href="https://www.philhealth.gov.ph/services/hci/"
                  sx={{
                    marginX: 1,
                    borderRadius: 20,
                    backgroundColor: "#0E460E",
                    padding: "7px 35px",
                  }}
                  disableElevation
                >
                  How to Register
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default OnlineServices;

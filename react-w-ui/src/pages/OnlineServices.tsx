import React from "react";
import Navbar2 from "../components/Navbarv2";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";

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

function OnlineServices() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar2 />
      <AnimationContainer>
        <div className="OnlineServices">
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              paddingX: {
                md: 8,
                xs: 3,
              },
              paddingY: {
                md: 7,
                xs: 5,
              },
              backgroundColor: "rgba(246, 246, 233, 1)",
            }}
          >
            <Grid item xs={12}>
              <img
                src="https://www.philhealth.gov.ph/services/images/os_banner.jpg"
                alt="member-img"
                style={{ width: "100%", height: "auto", borderRadius: "20px" }}
              />
            </Grid>
            {/* MEMBERSHIP HEADER */}
            <Grid item xs={12}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  paddingY: 4,
                  textAlign: "center",
                }}
              >
                Membership
              </Typography>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                textAlign: { xs: "center", md: "left" },
                marginLeft: { xs: 0.5 },
              }}
            >
              <Grid item xs={12} md={6}>
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
                        paddingTop: 3,
                        paddingX: { md: 3 },
                      }}
                    >
                      Member Portal
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ paddingTop: 3, paddingX: { md: 3, xs: 1.5 } }}
                    >
                      Enables members to check on the accuracy of their
                      membership details.
                    </Typography>
                  </div>
                  <Button
                    variant="contained"
                    size="large"
                    href="https://memberinquiry.philhealth.gov.ph/member/"
                    sx={{
                      marginX: 3,
                      marginY: 3,
                      borderRadius: 20,
                      backgroundColor: "#0E460E",
                    }}
                    disableElevation
                  >
                    Register/Login
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
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
                        paddingTop: 3,
                        paddingX: { md: 3 },
                      }}
                    >
                      Electronic Group Enrollment System
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ paddingTop: 3, paddingX: { md: 3, xs: 1.5 } }}
                    >
                      Facilitates registration and billing of Organized Groups.
                    </Typography>
                  </div>
                  <Button
                    variant="contained"
                    size="large"
                    href="https://egroup03.philhealth.gov.ph/"
                    sx={{
                      marginX: 3,
                      marginY: 3,
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
            {/* BENEFITS HEADER*/}
            <Grid item xs={12}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  paddingY: 4,
                  textAlign: "center",
                }}
              >
                Benefits
              </Typography>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                textAlign: { xs: "center", md: "left" },
                marginLeft: { xs: 1 },
              }}
            >
              <Grid item xs={12} md={6} sx={{ paddingX: 2 }}>
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
                        paddingTop: 3,
                        paddingX: 3,
                      }}
                    >
                      Case Rates Search
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ paddingTop: 3, paddingX: 3 }}
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
                      marginX: 3,
                      marginY: 3,
                      borderRadius: 20,
                      backgroundColor: "#0E460E",
                    }}
                    disableElevation
                  >
                    Begin Search
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sx={{ paddingX: 2 }}>
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
                        paddingTop: 3,
                        paddingX: 3,
                      }}
                    >
                      Claims Eligibility Checking
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ paddingTop: 3, paddingX: 3 }}
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
                      marginX: 3,
                      marginY: 3,
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
            {/* CONTRIBUTION, COLLECTION, & ACCREDITATION HEADER */}
            <Grid item xs={12}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  paddingY: 4,
                  textAlign: "center",
                }}
              >
                Contribution, Collection, & Accreditation
              </Typography>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                textAlign: { xs: "center", md: "left" },
                marginLeft: { xs: 1 },
              }}
            >
              <Grid item xs={12} md={4} sx={{ paddingX: 2 }}>
                <div
                  style={{
                    backgroundColor: "#5EC1AE",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        paddingTop: 3,
                        paddingX: 3,
                      }}
                    >
                      Electronic Premium Remittance System
                    </Typography>
                    <Typography variant="h6" sx={{ paddingY: 3, paddingX: 3 }}>
                      Enables employers to remit their premium contributions
                      online.
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: 15,
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
                      href="https://epoaf.philhealth.gov.ph/employer/"
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
              <Grid item xs={12} md={4} sx={{ paddingX: 2 }}>
                <div
                  style={{
                    backgroundColor: "#79A54C",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        paddingTop: 3,
                        paddingX: 3,
                      }}
                    >
                      Electronic Collection Reporting System
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ paddingTop: 3, paddingX: 3 }}
                    >
                      Enables PhilHealth Accredited Collecting Agents to submit
                      daily RF2 reports online.
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: 15,
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      href="https://ecrs.philhealth.gov.ph/"
                      sx={{
                        marginTop: { xs: 3 },
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
              <Grid item xs={12} md={4} sx={{ paddingX: 2 }}>
                <div
                  style={{
                    backgroundColor: "#678DC3",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        paddingTop: 3,
                        paddingX: 3,
                      }}
                    >
                      Health Care Institutions
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ paddingTop: 3, paddingX: 3 }}
                    >
                      Shows the complete list of HCIs including accreditation
                      status.
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: 15,
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      href="https://ihcp.philhealth.gov.ph/"
                      sx={{
                        marginTop: { xs: 3, md: 0.8 },
                        borderRadius: 20,
                        marginRight: 1,
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
                        marginTop: { xs: 3, md: 0.8 },
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
          </Grid>

          <Footer />
        </div>
      </AnimationContainer>
    </ThemeProvider>
  );
}

export default OnlineServices;

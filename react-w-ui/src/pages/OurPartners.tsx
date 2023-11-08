import React from "react";
import Navbar2 from "../components/Navbarv2";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
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

function OurPartners() {
  return (
    <>
      <Navbar2 />
      <ThemeProvider theme={theme}>
        <AnimationContainer>
          <div className="Members">
            <Grid
              container
              spacing={1}
              sx={{
                display: "flex",
                paddingX: {
                  md: 8,
                  xs: 3,
                },
                paddingY: {
                  md: 7,
                  xs: 3,
                },
                backgroundColor: "rgba(246, 246, 233, 1)",
              }}
            >
              <Grid item xs={12}>
                <img
                  src="https://www.philhealth.gov.ph/partners/providers/images/hcp_bnnr.jpg"
                  alt="member-img"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}>
                {" "}
                {/* HEALTHCARE PROVIDERS*/}
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
              <Grid
                item
                xs={12}
                md={6}
                sx={{ marginBottom: 2, marginTop: { md: 10 } }}
              >
                {" "}
                {/* HEALTHCARE PROVIDERS*/}
                <div
                  style={{
                    padding: 10,
                    borderRadius: "20px",
                  }}
                >
                  <a
                    href="https://www.philhealth.gov.ph/partners/providers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        marginTop: { md: 4, xs: 1 },
                        marginBottom: { xs: 3 },
                        fontWeight: "bold",
                        textAlign: { md: "left", xs: "center" },
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Healthcare Providers
                    </Typography>
                  </a>

                  <Typography
                    variant="h6"
                    sx={{
                      paddingY: { md: 4, lineHeight: 2, textAlign: "justify" },
                    }}
                  >
                    We forge partnerships with only the best in the industry to
                    fulfil our mandate of providing all Filipinos with
                    accessible, available, acceptable and affordable health care
                    services that will lead to better health outcomes and
                    improved quality of life.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}>
                {" "}
                {/* EMPLOYERS */}
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
              <Grid
                item
                xs={12}
                md={6}
                sx={{ marginBottom: 2, marginTop: { md: 10 } }}
              >
                {" "}
                {/* EMPLOYERS */}
                <div
                  style={{
                    padding: 10,
                    borderRadius: "20px",
                  }}
                >
                  <a
                    href="https://www.philhealth.gov.ph/partners/employers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        marginTop: { md: 4, xs: 1 },
                        marginBottom: { xs: 3 },
                        fontWeight: "bold",
                        textAlign: { md: "left", xs: "center" },
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Employers
                    </Typography>
                  </a>
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
              <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}>
                {" "}
                {/* COLLECTING PARTNERS */}
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
              <Grid
                item
                xs={12}
                md={6}
                sx={{ marginBottom: 2, marginTop: { md: 10 } }}
              >
                {" "}
                {/* COLLECTING PARTNERS */}
                <div
                  style={{
                    padding: 10,
                    borderRadius: "20px",
                  }}
                >
                  <a
                    href="https://www.philhealth.gov.ph/partners/collecting/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        marginTop: { md: 4, xs: 1 },
                        marginBottom: { xs: 3 },
                        fontWeight: "bold",
                        textAlign: { md: "left", xs: "center" },
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Collecting Partners
                    </Typography>
                  </a>
                  <Typography
                    variant="h6"
                    sx={{
                      paddingY: { md: 4, lineHeight: 2, textAlign: "justify" },
                    }}
                  >
                    We have tapped the services and networks of bank and
                    non-bank institutions to make premium remittance more
                    convenient for our members and employers. This section
                    provides a complete list of these partners and their branch
                    locations, and also includes basic information for
                    collecting agencies that might be interested to partner with
                    us in premium remittance.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sx={{ marginBottom: 2 }}>
                {" "}
                {/* SERVICE PROVIDERS */}
                <div
                  style={{
                    borderRadius: "20px",
                    marginTop: 50,
                  }}
                >
                  <img
                    src="https://newsinfo.inquirer.net/files/2023/06/490448.jpeg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ marginBottom: 2, marginTop: { md: 10 } }}
              >
                {" "}
                {/* SERVICE PROVIDERS */}
                <div
                  style={{
                    padding: 10,
                    borderRadius: "20px",
                  }}
                >
                  <a
                    href="https://www.philhealth.gov.ph/partners/csp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        marginTop: { md: 4, xs: 1 },
                        marginBottom: { xs: 3 },
                        fontWeight: "bold",
                        textAlign: { md: "left", xs: "center" },
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Service Providers
                    </Typography>
                  </a>
                  <Typography
                    variant="h6"
                    sx={{
                      paddingY: { md: 4, lineHeight: 2, textAlign: "justify" },
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
        </AnimationContainer>
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default OurPartners;

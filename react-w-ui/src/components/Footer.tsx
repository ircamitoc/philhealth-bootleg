import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/footerGoogleMap.css";
import DisclaimerModal from "./DisclaimerModal";

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }} style={footerStyle}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", padding: { md: 6, xs: 5 } }}
        >
          {" "}
          <Grid xs={12} md={5} lg={4}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bolder",
                color: "#ffb700",
              }}
            >
              PhilHealth
            </Typography>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.453183090515!2d121.05844617957295!3d14.573233741437951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d30069d461fb%3A0x107fe3e2039631d1!2sPhilHealth%20Head%20Office!5e0!3m2!1sen!2sph!4v1699200179622!5m2!1sen!2sph"
                width="350"
                height="200"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Responsive Google Map"
              ></iframe>
            </div>
          </Grid>
          <Grid container xs={12} md={7} lg={8} spacing={4}>
            <Grid xs={12} sm={6} lg={3} mdOffset={1.5}>
              <Box
                component="ul"
                aria-labelledby="category-a"
                sx={{
                  pl: 1,
                  listStyleType: "none",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <li style={{ marginBottom: "45px" }}>
                  <a
                    href="https://www.philhealth.gov.ph/about_us/map/regional.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    <Typography variant="h5">Contact us</Typography>
                  </a>
                </li>
                <li style={{ marginBottom: "45px" }}>
                  <a
                    href="https://www.philhealth.gov.ph/sitemap.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    <Typography variant="h5">Sitemap</Typography>
                  </a>
                </li>
                <li style={{ marginBottom: "45px" }}>
                  <DisclaimerModal />
                </li>
                <li>
                  <a
                    href="https://www.philhealth.gov.ph/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    <Typography variant="h5">Privacy Notice</Typography>
                  </a>
                </li>
              </Box>
            </Grid>
            <Grid xs={6} lg={3} mdOffset={1.5}>
              <Box
                id="category-c"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              ></Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 1 }}>
                <a
                  href="https://www.philhealth.gov.ph/konsulta/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.philhealth.gov.ph/konsulta/images/konsulta_bnnr_sml.jpg"
                    alt=""
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                    }}
                  />
                </a>
                <a
                  href="https://www.philhealth.gov.ph/about_us/map/regional.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/contact_btn.jpg"
                    alt=""
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                    }}
                  />
                </a>
                <a
                  href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwicnPu-q62CAxXv2TgGHfdLDOAQFnoECAgQAQ&url=https%3A%2F%2Fwww.philhealth.gov.ph%2Fuhc%2FLibreNaBa.pdf&usg=AOvVaw3pRzy7M5pvC8hm4v7VmCY3&opi=89978449"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/uhc_btn.jpg"
                    alt=""
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                    }}
                  />
                </a>
              </Box>
            </Grid>
            <Grid xs={6} lg={3}>
              <Box
                id="category-d"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              ></Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 1 }}>
                <a
                  href="https://www.philhealth.gov.ph/arta/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/arta_bnnr_sml.jpg"
                    alt=""
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                    }}
                  />
                </a>
                <a
                  href="https://www.philhealth.gov.ph/unclaimedrefunds/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/UnclaimedRefunds.jpg"
                    alt=""
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                    }}
                  />
                </a>
                <a
                  href="https://www.philhealth.gov.ph/about_us/transparency/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/transparency_seal.png"
                    alt=""
                    style={{
                      width: "33%",
                    }}
                  />
                </a>
                <a
                  href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiQrOTkrK2CAxVVyzgGHS1HA6UQFnoECAoQAQ&url=https%3A%2F%2Fwww.philhealth.gov.ph%2Fabout_us%2Ftransparency%2FGOCC_Scorecard.pdf&usg=AOvVaw3caFv2EGAeemu4UZe69OI0&opi=89978449"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/corp_gov.png"
                    alt=""
                    style={{
                      width: "33%",
                    }}
                  />
                </a>

                <a
                  href="https://www.foi.gov.ph/requests?agency=PH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.philhealth.gov.ph/images/foi_logo.png"
                    alt=""
                    style={{
                      width: "33%",
                    }}
                  />
                </a>
              </Box>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            container
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ xs: "column", sm: "row" }}
            sx={{ fontSize: "12px", paddingTop: { md: 4 } }}
          >
            <Grid sx={{ order: { xs: 2, sm: 1 } }}>
              <Typography
                variant="body1"
                style={{ fontSize: "1rem", color: "#ffb700" }}
              >
                © 2014 Philippine Health Insurance Corporation
              </Typography>
            </Grid>
            <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
              <Grid>
                <a
                  href="https://www.facebook.com/PhilHealthOfficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  <FacebookIcon
                    style={{
                      backgroundColor: "#4267B2",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  />
                </a>
              </Grid>
              <Grid>
                <a
                  href="https://twitter.com/teamphilhealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  {" "}
                  <TwitterIcon
                    style={{
                      backgroundColor: "#1DA1F2",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  />
                </a>
              </Grid>
              <Grid>
                <a
                  href="https://www.youtube.com/user/teamphilhealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  <YouTubeIcon
                    style={{
                      backgroundColor: "#FF0000",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;

const footerStyle = {
  backgroundColor: "#0e460e",
  color: "rgba(246, 246, 233, 1)",
};

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

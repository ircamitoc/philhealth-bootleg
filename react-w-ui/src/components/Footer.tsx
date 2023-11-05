import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }} style={footerStyle}>
      <Grid container spacing={2} sx={{display: "flex", padding: { md: 7, xs: 5 }}}>
        <Grid xs={12} md={5} lg={4}>
          <Typography variant="h3">PhilHealth</Typography>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
              <Box
                id="category-a"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              ></Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li>Circulars</li>
                <li>Advisories</li>
                <li>News</li>
                <li>Official Statements</li>
              </Box>
          </Grid>
          <Grid xs={6} lg={3}>
              <Box
                id="category-b"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              ></Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                <li>ITB</li>
                <li>Job Vacancies</li>
                <li>Joint Issuances</li>
              </Box>
          </Grid>
          <Grid xs={6} lg={3}>
              <Box
                id="category-c"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              ></Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <img
                  src="https://www.philhealth.gov.ph/konsulta/images/konsulta_bnnr_sml.jpg"
                  alt=""
                  style={{
                    borderRadius: "20px",
                    width: "175px"
                  }}
                />
                <img
                  src="https://www.philhealth.gov.ph/images/contact_btn.jpg"
                  alt=""
                  style={{
                    borderRadius: "20px",
                    width: "175px"
                  }}
                />
                <img
                  src="https://www.philhealth.gov.ph/images/uhc_btn.jpg"
                  alt=""
                  style={{
                    borderRadius: "20px",
                    width: "175px"
                  }}
                />
              </Box>
          </Grid>
          <Grid xs={6} lg={3}>
              <Box
                id="category-d"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              ></Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <img
                  src="https://www.philhealth.gov.ph/images/arta_bnnr_sml.jpg"
                  alt=""
                  style={{
                    borderRadius: "20px",
                    width: "175px"
                  }}
                />
                <img
                  src="https://www.philhealth.gov.ph/images/UnclaimedRefunds.jpg"
                  alt=""
                  style={{
                    borderRadius: "20px",
                    width: "175px"
                  }}
                />
              </Box>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
              © 2014 Philippine Health Insurance Corporation | Citystate Centre,
              709 Shaw Boulevard 1603 Pasig City | Action Center 8441-7442
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <YouTubeIcon />
            </Grid>
            <Grid>
              <FacebookIcon />
            </Grid>
            <Grid>
              <TwitterIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;

const footerStyle = {
  backgroundColor: "#3e5c00",
};

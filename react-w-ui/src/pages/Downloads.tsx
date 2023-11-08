import React from "react";
import Navbar2 from "../components/Navbarv2";
import Footer from "../components/Footer";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { keyframes } from '@mui/system';

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

const AnimationContainer = styled('div')`
  animation: ${fadeUp} 0.5s;
`;

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.5rem", color: "#FFB700" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function Downloads() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <ThemeProvider theme={theme}>
      <Navbar2 />
      <AnimationContainer>
      <div className="Downloads">
        <Grid
          container
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
          <Grid xs={12}>
            <img
              src="https://www.philhealth.gov.ph/downloads/images/downloads.jpg"
              alt="member-img"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Grid>
          <Grid xs={12}>
            <Grid
              xs={12}
              style={{
                borderRadius: "20px",
                marginTop: 10,
              }}
              sx={{paddingY: {md: 8, xs: 4}}}
            >
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{
                  backgroundColor: "#0E460E",
                  padding: "20px",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20
                }}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography variant="h4" style={{fontWeight: "bold", color: "#f6f6e9"}}>Forms</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: "#E0E0E0"}}>
                  <a
                    href="https://www.philhealth.gov.ph/downloads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box component="img"
                      src="https://www.philhealth.gov.ph/downloads/images/Forms.png"
                      alt=""
                      sx={{width: {xs: "100%", md: "30%"}}}
                    />
                  </a>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={{
                  backgroundColor: "#0E460E",
                  padding: "20px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography variant="h4" style={{fontWeight: "bold", color: "#f6f6e9"}}>Accreditation Documents</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: "#E0E0E0"}}>
                  <a
                    href="https://www.philhealth.gov.ph/downloads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box component="img"
                      src="https://www.philhealth.gov.ph/downloads/images/Accreditation.png"
                      alt=""
                      sx={{width: {xs: "100%", md: "30%"}}}
                    />
                  </a>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                sx={{
                  backgroundColor: "#0E460E",
                  padding: "20px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography variant="h4" style={{fontWeight: "bold", color: "#f6f6e9"}}>Z Benefit Documents</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: "#E0E0E0"}}>
                <a
                    href="https://www.philhealth.gov.ph/downloads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box component="img"
                      src="https://www.philhealth.gov.ph/downloads/images/ZBenefits.png"
                      alt=""
                      sx={{width: {xs: "100%", md: "30%"}}}
                    />
                  </a>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                sx={{
                  backgroundColor: "#0E460E",
                  padding: "20px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel4d-content"
                  id="panel3d-header"
                >
                  <Typography variant="h4" style={{fontWeight: "bold", color: "#f6f6e9"}}>Konsulta</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: "#E0E0E0"}}>
                <a
                    href="https://www.philhealth.gov.ph/downloads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box component="img"
                      src="https://www.philhealth.gov.ph/downloads/images/Konsulta.png"
                      alt=""
                      sx={{width: {xs: "100%", md: "30%"}}}
                    />
                  </a>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                sx={{
                  backgroundColor: "#0E460E",
                  padding: "20px",
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20
                }}
              >
                <AccordionSummary
                  aria-controls="panel5d-content"
                  id="panel5d-header"
                >
                  <Typography variant="h4" style={{fontWeight: "bold", color: "#f6f6e9"}}>IEC Materials</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: "#E0E0E0"}}>
                <a
                    href="https://www.philhealth.gov.ph/downloads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box component="img"
                      src="https://www.philhealth.gov.ph/downloads/images/IECmats.png"
                      alt=""
                      sx={{width: {xs: "100%", md: "30%"}}}
                    />
                  </a>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
      </AnimationContainer>
      
    </ThemeProvider>
  );
}

export default Downloads;

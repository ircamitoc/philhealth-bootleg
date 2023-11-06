import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
interface HeroProps {
  title?: string;
  subTitle?: string;
  header?: string;
  body1?: string;
  image: string;
}

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

const Hero = (props: HeroProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sm={12}
        md={6}
        sx={{
          display: "flex",
          padding: { md: 0.5, xs: 5 },
          backgroundColor: "rgba(246, 246, 233, 1)",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(246, 246, 233, 1)",
            marginX: {
              md: 4,
            },
            paddingY: {
              md: 6,
              xs: 1,
            },
            marginY: {
              xs: 1,
            },
            paddingX: {
              md: 7,
              xs: 1,
            },
            display: "flex",
            flexDirection: "column",
            textAlign: "justify",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingBottom: "75%",
              marginBottom: "2.5rem",
            }}
          >
            <img
              src={props.image}
              alt={props.title}
              style={{
                maxWidth: "100%",
                borderRadius: "20px",
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <Box>{props.header && <Box>{props.header}</Box>}</Box>
          <Box>
            {props.title && (
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                }}
              >
                {props.title}
              </Typography>
            )}
            {props.subTitle && (
              <Typography variant="h6">{props.subTitle}</Typography>
            )}
            {props.body1 && (
              <Typography variant="body1" style={{ marginTop: "1rem" }}>
                {props.body1}
              </Typography>
            )}
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Hero;

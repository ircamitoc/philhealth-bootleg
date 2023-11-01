import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface HeroProps {
  title?: string;
  subTitle?: string;
  header?: string;
  body1?: string;
  image: string;
}

const Hero = (props: HeroProps) => {
  return (
    <Grid container sm={12} md={6} sx={{ display: "flex" }}>
      <Box
        borderRadius={20}
        sx={{
          backgroundColor: "rgba(254, 251, 247, 1)",
          marginX: {
            md: 8,
          },
          paddingY: 6,
          marginY: 1,
          paddingX: {
            md: 6,
          },
          display: "flex",
          flexDirection: "column",
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
          {props.title && <Typography variant="h3">{props.title}</Typography>}
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
  );
};

export default Hero;

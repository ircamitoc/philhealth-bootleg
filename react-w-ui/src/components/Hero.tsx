import { Box, Typography, Grid } from "@mui/material";

interface HeroProps {
  title?: string;
  subTitle?: string;
  header?: string;
  body1?: string;
  // image: string;
}
 

const Hero = (props: HeroProps) => {
  return (
    <Grid sm={12} md={6}>
      <Box
        boxShadow={3}
        borderRadius={5}
        sx={{
          backgroundColor: "rgba(250, 250, 250, .8)",
          marginX: {
            md: 2,
          },
          paddingY: 5,
          marginY: 1,
          paddingX: {
            md: 2,
          },
        }}
      >
        {/* <img src={props.image} alt={props.title} style={{ maxWidth: "100%" }} /> */}

        <Box>{props.header && <Box>{props.header}</Box>}</Box>
        <Box>
          {props.title && <Typography variant="h4">{props.title}</Typography>}
          {props.subTitle && (
            <Typography variant="h6">{props.subTitle}</Typography>
          )}
          {props.body1 && (
            <Typography variant="body1">{props.body1}</Typography>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default Hero;

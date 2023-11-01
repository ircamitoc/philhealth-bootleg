import styled from "@emotion/styled";
import { Button } from "@mui/material";

const YellowHoverButton = styled(Button)(({ theme }) => ({
  color: "white",
  fontSize: 16,
  fontWeight: 900,
  display: "block",
  "&:hover": {
    color: "#FFCC33",
  },
}));

export default YellowHoverButton;

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
      }}
      component="footer"
    >
      <Container
        maxWidth="sm"
        backgroundColor="black"
        style={{ height: "100px" }}
      >
        <Typography
          variant="body2"
          color="white"
          align="center"
          style={{ paddingTop: "50px" }}
        >
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}

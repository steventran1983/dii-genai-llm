import { Container, Typography, Box } from "@mui/material";
import React from "react";
import quantumImg from "../../assets/images/quantum.png";
const Main = () => {
  return (
    <Container maxWidth="xl">
      <img src={quantumImg} alt="iphone" height="50px" width="50px" />
      <Typography variant="h4">
        Welcome To DII Generative AI Tool - Future of problem-solving
      </Typography>
      <Typography variant="h4">
        Your challenges transformed into solutions. Dive in and experience the
        revolution
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          🤔 <Typography>Ask complex questions</Typography>{" "}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          🤔 <Typography>Get better answers</Typography>{" "}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          🤔 <Typography>Ask complex questions</Typography>{" "}
        </Box>
      </Box>
    </Container>
  );
};

export default Main;

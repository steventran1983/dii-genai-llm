import {
  Container,
  Typography,
  Card,
  CardContent,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Box } from "@mui/material";
import { CardActionArea } from "@mui/material";
import React from "react";
import quantumImg from "../../assets/images/quantum.png";
import { colorTheme } from "../../../data";
//Color theme
const Main = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "5rem",
      }}
    >
      <img src={quantumImg} alt="iphone" height="100px" width="100px" />
      <Typography
        variant="h4"
        sx={{
          color: `${colorTheme.text}`,
          marginTop: "4rem",
        }}
      >
        Welcome To DII Generative AI Tool - Future of problem-solving
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: `${colorTheme.text}`,
          marginTop: "1rem",
        }}
      >
        Experience the future with our Generative AI: Your challenges
        transformed into solutions
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          columnGap: "2rem",
          marginTop: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            🤔{" "}
            <Typography
              variant="h6"
              sx={{
                color: `${colorTheme.text}`,
              }}
            >
              Ask complex questions
            </Typography>{" "}
          </Box>
          <Card sx={{ maxWidth: 345, marginTop: "1rem" }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body1">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            🙂{" "}
            <Typography
              variant="h6"
              sx={{
                color: `${colorTheme.text}`,
              }}
            >
              Get better answers
            </Typography>{" "}
          </Box>
          <Card sx={{ maxWidth: 345, marginTop: "1rem" }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            💡{" "}
            <Typography
              variant="h6"
              sx={{
                color: `${colorTheme.text}`,
              }}
            >
              Get creative inspriration
            </Typography>{" "}
          </Box>
          <Card sx={{ maxWidth: 345, marginTop: "1rem" }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "60%", margin: "2rem" }}>
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: `${colorTheme.text}`,
          }}
        >
          With our state-of-the-art Generative AI tool, your challenges are not
          just addressed. They're transformed into innovative solutions.
        </Typography>
      </Box>
      <Typography>Choose a conversation based on job domain</Typography>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>Software Engineer</Button>
        <Button>Data Engineer</Button>
        <Button>Management Team</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Main;

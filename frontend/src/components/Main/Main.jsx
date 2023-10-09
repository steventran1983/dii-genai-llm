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
        paddingTop: "4rem",
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
          <Card
            elevation={3}
            sx={{
              maxWidth: 345,
              marginTop: "1rem",
              oxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography variant="body1">
                  Write a SQL query to find the total revenue for each customer
                  in the year 2022, sorted by revenue in descending order.
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
          <Card
            elevation={3}
            sx={{
              maxWidth: 345,
              marginTop: "1rem",
              oxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Can you walk me through a step-by-step process to design and
                  implement a robust data ingestion pipeline into Snowflake?
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
          <Card
            elevation={3}
            sx={{
              maxWidth: 345,
              marginTop: "1rem",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Address the challenges of ingesting real-time streaming data
                  versus traditional batch-based data sources into ADF?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "60%", margin: "3rem" }}>
        <Typography
          align="center"
          sx={{
            color: `${colorTheme.text}`,
          }}
        >
          With our state-of-the-art Generative AI tool, your challenges are not
          just addressed. They're transformed into innovative solutions.
        </Typography>
      </Box>
      <Typography
        sx={{
          color: `${colorTheme.text}`,
        }}
      >
        Choose a conversation based on job domain
      </Typography>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{
          marginTop: "1rem",
        }}
      >
        <Button
          sx={{
            padding: "1rem",
            background: `${colorTheme.magenta}`,
            color: `${colorTheme.white}`,
          }}
        >
          Software Engineer
        </Button>
        <Button
          sx={{
            padding: "1rem",
            background: `${colorTheme.magenta}`,
            color: `${colorTheme.white}`,
          }}
        >
          Data Engineer
        </Button>
        <Button
          sx={{
            padding: "1rem",
            background: `${colorTheme.magenta}`,
            color: `${colorTheme.white}`,
          }}
        >
          Management Team
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Main;

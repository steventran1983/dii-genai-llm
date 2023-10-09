import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  InputAdornment,
  NativeSelect,
} from "@mui/material";
import React from "react";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import SendIcon from "@mui/icons-material/Send";
import { colorTheme } from "../../../data";
const options = [
  "Bing Search",
  "ChatGPT",
  "Azure SQL",
  "Azure Search for documents",
  "Azure Search for books knowledge",
];
import "./footer.css";

const Copyright = () => {
  return (
    <Typography
      variant="body1"
      sx={{
        color: `${colorTheme.text}`,
        marginBottom: "1rem",
      }}
    >
      {"Copyright © "}
      NSE EIA - Data Intelligence And Innovation Team {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  const handleClick = () => {
    console.log("This is function for get all info in form");
  };
  const [value, setValue] = React.useState("Bing Search");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container maxWidth="xl" className="footer" sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          columnGap: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #000",
            borderRadius: "2rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            background: `${colorTheme.magenta}`,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Button
            sx={{
              color: `${colorTheme.white}`,
            }}
          >
            <MapsUgcIcon />
            <Typography variant="h6">New Topic</Typography>
          </Button>
        </Box>

        <TextField
          label="Select a right API to start your conversation"
          variant="outlined"
          sx={{
            width: "70%",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NativeSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={value}
                  label="Age"
                  onChange={handleChange}
                >
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </NativeSelect>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <SendIcon
                  onClick={handleClick}
                  style={{
                    color: `${colorTheme.magenta}`,
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Copyright />
    </Container>
  );
};

export default Footer;

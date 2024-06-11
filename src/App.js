import "./App.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DiscordService from "./DiscordService.js";

function App() {
  const [state, setState] = useState({
    checkedWhatsApp: true,
    checkedTelegram: true,
    checkedDiscord: true,
  });

  const { checkedWhatsApp, checkedTelegram, checkedDiscord } = state;
  const theme = createTheme({
    palette: {
      ochre: {
        main: "#E3D026",
        light: "#E9DB9F",
        dark: "#A29415",
        contrastText: "#242105",
      },
    },
  });
  const textRef = useRef();
  const sendAnnouncement = () => {
    const temp = textRef.current.value.replace(/ /g, "");
    const announcementText = textRef.current.value;
    if (!textRef.current.value || temp === "") {
      return;
    }

    console.log(textRef.current.value);
    textRef.current.value = "";
    if (checkedDiscord) {
      DiscordService.send(announcementText);
      console.log("Discord");
    }
    if (checkedTelegram) {
      console.log("Telegram");
    }
    if (checkedWhatsApp) {
      console.log("WhatsApp");
    }
  };
  const handleCheck = (event) => {
    setState(
      event.target.checked
        ? { ...state, [event.target.name]: event.target.checked }
        : { ...state, [event.target.name]: event.target.checked }
    );
  };
  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    color: "yellow",
  };
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              inputRef={textRef}
              id="announcement-text"
              label="Announcement"
              type="search"
              color="ochre"
              sx={{
                "& label": {
                  color: "ochre.dark",
                },
                "& label.Mui-focused": {
                  color: "ochre.light",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "yellow",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "ochre.dark",
                  },
                },
                input: {
                  color: "ochre.light",
                },
              }}
            />
            <Button
              variant="contained"
              color="ochre"
              onClick={sendAnnouncement}
            >
              Send
            </Button>
          </Box>
          <FormGroup style={flexContainer}>
            <FormControlLabel
              control={
                <Checkbox
                  color="ochre"
                  checked={checkedDiscord}
                  onChange={handleCheck}
                  name="checkedDiscord"
                />
              }
              label="Discord"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="ochre"
                  checked={checkedTelegram}
                  onChange={handleCheck}
                  name="checkedTelegram"
                />
              }
              label="Telegram"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="ochre"
                  checked={checkedWhatsApp}
                  onChange={handleCheck}
                  name="checkedWhatsApp"
                />
              }
              label="WhatsApp"
            />
          </FormGroup>
        </ThemeProvider>
        <p style={{ color: "yellow" }}>
          <code>Waiting for announcements . . .</code>
        </p>
        <a
          className="App-link"
          href="https://Eliteoptions.com"
          target="_blank"
          rel="noopener noreferrer"
          color="ochre"
        >
          Eliteoptions.com
        </a>
      </header>
    </div>
  );
}

export default App;

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./announcement.css";
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import EmojiPicker from 'emoji-picker-react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function addEmoji(emojiData, event) {
  const textRef = document.getElementById("announcement-text");
  console.log(emojiData.emoji);
  textRef.value += emojiData.emoji;
}

function Announcement() {
  const [state, setState] = useState({
    checkedTelegram: true,
    checkedDiscord: true,
    type: "both"
  });

  const { checkedTelegram, checkedDiscord } = state;
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
  const navigate = useNavigate();
  const sendAnnouncement = () => {
    const temp = textRef.current.value.replace(/ /g, "");
    const announcementText = textRef.current.value;
    if (!textRef.current.value || temp === "") {
      return;
    }
    textRef.current.value = "";
    const token = Cookies.get('token');
    if (!token || token === 'undefined') {
      navigate('/');
      return;
    }
    const creds = JSON.stringify({
      "message": announcementText,
      "discord": checkedDiscord ? "true" : "false",
      "telegram": checkedTelegram ? "true" : "false",
      "token": token,
      "type": state.type
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.rollintrades.com:1809/announcement',
      headers: {
      },
      data: creds
    };
    axios.request(config).then(response => {
      if (response.status !== 200) {
        navigate('/');
        return;
      }
    }).catch(console.log);
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
          <h1 style={{ color: "yellow" }}>Announcement</h1>
          <p style={{ color: "yellow" }}>
            <code>Send announcements to Discord and Telegram</code>
          </p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >

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
                multiline
                rows={4}
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
                  "& input": {
                    color: "ochre.light",
                  },
                  "& textarea": {
                    color: "ochre.light",
                  },
                }}
              />
              <EmojiPicker theme="dark" open={true} onEmojiClick={addEmoji} height="12em" width="15em" />
            </Box>
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
            <InputLabel sx={{ color: "ochre" }} id="demo-simple-select-label" >Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.type}
              label="Type"
              color="ochre"
              sx={{
                color: "ochre"
              }}
              onChange={(event) => setState({ ...state, type: event.target.value })}
            >
              <MenuItem value={"both"}>Both</MenuItem>
              <MenuItem value={"aggresive"}>Aggresive</MenuItem>
              <MenuItem value={"safe"}>Safe</MenuItem>
            </Select>
            {/* <FormControlLabel
              control={
                <Checkbox
                  color="ochre"
                  checked={checkedWhatsApp}
                  onChange={handleCheck}
                  name="checkedWhatsApp"
                />
              }
              label="WhatsApp"
            /> */}
          </FormGroup>
        </ThemeProvider>
        {/* <p style={{ color: "yellow" }}>
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
        </a> */}
      </header>
    </div >
  );
}

export default Announcement;

import "./App.css";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import { useRef } from "react";
// import { useState } from "react";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import DiscordService from "./Announcement/DiscordService.js";
// import TelegramUpdates from "./Announcement/TelegramService.js";
// import WhatsAppService from "./Announcement/WhatsAppService.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/home.js";
import Announcement from "./Announcement/announcement.js";

function App() {
  return (
    <Routes>
      <Route exact path="/">
        {" "}
        component={Home}{" "}
      </Route>
      <Route path="/announcement"> component={Announcement} </Route>
    </Routes>
  );
}

export default App;

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/500.css";

/*
 Add new color object "addWorkBtn" for AddWorkExperience component
*/
declare module "@mui/material/styles" {
  interface Palette {
    addWorkBtn: Palette["primary"];
  }

  interface PaletteOptions {
    addWorkBtn?: PaletteOptions["primary"];
  }
}
/*
 Append it to the color prop type
*/
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    addWorkBtn: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#7791F2",
      light: "#B9D4FF",
    },
    addWorkBtn: {
      main: "#B9D4FF", // button background color
      light: "#E9DB5D", // unused
      dark: "#B9D4FF", // hover color
      contrastText: "#1A3082", // text color
    },
  },
  spacing: 10, // 10px
  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontSize: "32px",
      fontWeight: 700,
      color: "#1A3082",
      lineHeight: "39px",
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "22px",
      fontWeight: 500,
      color: "#4988EE",
      lineHeight: "26px",
    },
    h3: {
      // labels
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 700,
      color: "#1A3082",
      lineHeight: "17px",
    },
    body1: {
      // text inside text inputs
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 500,
      color: "#4B4B4B",
      lineHeight: "17px",
    },
    body2: {
      // text inside select options
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontWeight: 500,
      color: "#4B4B4B",
      lineHeight: "19.5px",
    },
    button: {
      // text inside buttons
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontWeight: 500,
      color: "#1A3082",
      lineHeight: "26px",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);

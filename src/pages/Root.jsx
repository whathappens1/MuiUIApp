// @ts-nocheck
import React, { useState } from "react";
import Header from "../components/Header"
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getDesignTokens from "../context/customTheme";

function Root() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header {...{setMode}} />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default Root;

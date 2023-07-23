import React from "react";
import "./styles/header.css";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { Box, useTheme } from "@mui/material";

function Header({ setMode }) {
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "5vh 0",
        }}
      >
        <Button
          variant="contained"
          color="info"
          sx={{ margin: "10px 20px" }}
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            setMode(theme.palette.mode === "dark" ? "light" : "dark");
          }}
        >
          {i18n.language === "en" ? "تغيير الوضع" : "Change Mode"}
        </Button>
        <br />

        <Button
          variant="contained"
          color="info"
          sx={{ margin: "10px 20px" }}
          onClick={() => {
            i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
          }}
        >
          {i18n.language === "en" ? "تغيير اللغة" : "Change Language"}
        </Button>
      </Box>
    </>
  );
}

export default Header;

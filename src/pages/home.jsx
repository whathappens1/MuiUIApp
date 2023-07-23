/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Helmet } from "react-helmet-async";
import "./styles/home.css";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";

function home() {
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <div className={`App ${theme.palette.mode}`}>
        <Helmet>
          <title>
            {i18n.language === "en"
              ? "React App برنامج الـ"
              : "React App"}
          </title>
          <meta
            name="description"
            content="description"
          />
        </Helmet>
        <main id="main">

        </main>
      </div>
    </>
  );
}

export default home;

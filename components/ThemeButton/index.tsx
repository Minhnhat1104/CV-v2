"use client";

import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton, Switch } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import React from "react";

const ThemeButton = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  return (
    <>
      <IconButton onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
        {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
      </IconButton>
    </>
  );
};

export default ThemeButton;

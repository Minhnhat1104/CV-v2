"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  Container,
  GridLegacy as Grid,
  Typography,
  Box,
  Divider,
  Link,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import avatar from "./avatar.jpg";

export default function AvatarHeader() {
  return (
    <Box
      sx={{
        position: "relative",
        width: 200,
        height: 200,
        backgroundColor: "#8fa1b3",
        overflow: "hidden",
      }}
    >
      {/* dotted pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* abstract shapes */}
      <Box
        sx={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          backgroundColor: "#f2c6b6",
          bottom: -200,
          left: -160,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          top: -260,
          right: -260,
        }}
      />

      {/* avatar */}
      <Box
        sx={{
          position: "absolute",
          left: 120,
          top: "50%",
          transform: "translateY(-50%)",
          width: 140,
          height: 140,
          borderRadius: "50%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        }}
      >
        <Box
          component="img"
          src={avatar.src}
          alt="avatar"
          sx={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
}

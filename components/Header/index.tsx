import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import avatar from "./avatar.jpg";

const Header = () => {
  const theme = useTheme();
  return (
    <Stack direction="row">
      {/* avatar */}
      <Box
        sx={{
          width: 160,
          height: 160,
          p: 0.75,
          margin: "auto",
          my: 3,
          borderRadius: "50%",
          backgroundColor: theme.palette.background.paper,
          transition: "background 0.3s ease-in-out",
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
            width: 1,
            height: 1,
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </Stack>
  );
};

export default Header;

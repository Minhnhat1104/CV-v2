import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import avatar from "./avatar.jpg";

const Header = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      // sx={{
      //   position: "relative",
      //   "&::before": {
      //     backgroundImage:
      //       "url(data:image/png;base64,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)",
      //     backgroundSize: 396,
      //     backgroundRepeat: "no-repeat",
      //     content: `""`,
      //     position: "absolute",
      //     width: 421,
      //     height: 272,
      //     top: 0,
      //     left: 0,
      //     zIndex: 2,
      //   },

      //   "&::after": {
      //     content: `""`,
      //     position: "absolute",
      //     backgroundColor: theme.palette.primary.main,
      //     width: 100,
      //     height: 285,
      //     top: 0,
      //     left: 0,
      //     zIndex: 1,
      //     borderBottomRightRadius: 999,
      //   },
      // }}
    >
      {/* avatar */}
      <Box
        sx={{
          width: 160,
          height: 160,
          p: 0.75,
          margin: "auto",
          // my: 3,
          borderRadius: "50%",
          backgroundColor: theme.palette.background.paper,
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

// After
// .cv-section-main.creative #cvb-section-content:after {
//     content: " ";
//     position: absolute;
//     background-color: var(--text-primary-color);
//     width: 100px;
//     height: 285px;
//     top: 0px;
//     left: 0px;
//     z-index: 1;
//     border-bottom-right-radius: 94px;
// }

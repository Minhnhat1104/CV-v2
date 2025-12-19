import { Stack, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

interface PrintPaperProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}

const PrintPaper = ({ leftPanel, rightPanel }: PrintPaperProps) => {
  const theme = useTheme();
  return (
    <Stack
      className="print-page"
      sx={{
        width: "210mm",
        height: "297mm",
        background: theme.palette.background.paper,
        transition: "background 0.3s ease-in-out",
        margin: "auto",
        flexShrink: 0,
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        p: 3,
      }}
    >
      <Stack direction="row" spacing={3}>
        <Stack sx={{ flex: 4 }}>{leftPanel}</Stack>
        <Stack sx={{ flex: 8 }}>{rightPanel}</Stack>
      </Stack>
    </Stack>
  );
};

export default PrintPaper;

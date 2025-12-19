import { Stack, SxProps, Typography, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  sx?: SxProps;
}

const Section = ({ title, children, sx }: SectionProps) => {
  const theme = useTheme();
  return (
    <Stack sx={{ mt: 2, ...sx }}>
      <Typography
        variant="h2"
        sx={{
          py: 1,
          width: "fit-content",
          borderBottom: `2px solid ${theme.palette.text.secondary}`,
        }}
      >
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default Section;

import { GitHub, LanguageOutlined } from "@mui/icons-material";
import { Stack, SxProps, Typography, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

interface WebUIItemProps {
  title: string;
  github: ReactNode;
  demo: ReactNode;
  sx?: SxProps;
}

const WebUIItem = ({ title, github, demo, sx }: WebUIItemProps) => {
  const theme = useTheme();
  return (
    <Stack sx={sx}>
      <Typography color="textSecondary" variant="h3" mt={2} mb={1}>
        {title}
      </Typography>

      <Stack direction="row" alignItems="center" mb={0.5}>
        <GitHub sx={{ fontSize: 16, mr: 0.5 }} />
        <Typography>{github}</Typography>
      </Stack>

      <Stack direction="row" alignItems="center">
        <LanguageOutlined sx={{ fontSize: 16, mr: 0.5 }} />
        <Typography>{demo}</Typography>
      </Stack>
    </Stack>
  );
};

export default WebUIItem;

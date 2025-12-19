import { ellipsisSx } from "@/app/constants";
import { Box, Stack, SxProps, Typography, useTheme } from "@mui/material";
import React from "react";

interface CustomListProps {
  data: string[];
  spacing?: number;
  sx?: SxProps;
}

const CustomList = ({ data, spacing = 1, sx }: CustomListProps) => {
  const theme = useTheme();
  return (
    <Stack sx={sx} spacing={spacing}>
      {data?.map((_item) => (
        <Stack key={_item} direction="row">
          <Box
            sx={{
              width: 4,
              height: 4,
              background: theme.palette.common.black,
              borderRadius: 999,
              mr: 1,
              ml: 0.25,
              flexShrink: 0,
              position: "relative",
              top: 7,
            }}
          />
          <Typography>{_item}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default CustomList;

import { ellipsisSx } from "@/app/constants";
import {
  CakeOutlined,
  CalendarMonthOutlined,
  CalendarTodayOutlined,
  EmailOutlined,
  LocationOnOutlined,
  PhoneOutlined,
  SchoolOutlined,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { Calendar, Globe, Mail, MapPin, Phone } from "react-feather";

const PersonalInformation = () => {
  return (
    <Stack spacing={1} my={1}>
      <Stack direction="row" alignItems="center">
        <SchoolOutlined sx={{ marginRight: 1, fontSize: 16 }} />
        <Typography sx={{ ...ellipsisSx }}>
          Ho Chi Minh University of Science
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center">
        <PhoneOutlined sx={{ marginRight: 1, fontSize: 16 }} />
        <Typography sx={{ ...ellipsisSx }}>0774122075</Typography>
      </Stack>
      <Stack direction="row" alignItems="center">
        <EmailOutlined sx={{ marginRight: 1, fontSize: 16 }} />
        <Typography sx={{ ...ellipsisSx }}>lmnhat1104@gmail.com</Typography>
      </Stack>
      <Stack direction="row" alignItems="center">
        <CalendarMonthOutlined sx={{ marginRight: 1, fontSize: 16 }} />
        <Typography sx={{ ...ellipsisSx }}>11/04/2002</Typography>
      </Stack>

      <Stack direction="row" alignItems="center">
        <LocationOnOutlined sx={{ marginRight: 1, fontSize: 16 }} />
        <Typography sx={{ ...ellipsisSx }}>Ho Chi Minh, Vietnam</Typography>
      </Stack>
    </Stack>
  );
};

export default PersonalInformation;

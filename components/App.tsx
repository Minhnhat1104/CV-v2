"use client";

import { createTheme, useTheme } from "@mui/material/styles";
import { Typography, Stack, Button } from "@mui/material";
import Section from "./Section";
import Header from "./Header";
import CustomList from "./CustomList";
import PersonalInformation from "./PersonalInformation";
import {
  GitHub,
  LanguageOutlined,
  Print,
  PrintOutlined,
  Star,
} from "@mui/icons-material";
import WebUIItem from "./WebUIItem";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ThemeButton from "./ThemeButton";
import PrintPaper from "./PrintPaper";

export default function App() {
  const theme = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef,
    pageStyle: `
    @page {
      size: A4;
      margin: 0mm;
      background-color: ${theme.palette.background.paper};
    }
    .print-page {
      box-shadow: none;
      margin-top: 0px;
    }
  `,
  });

  return (
    <Stack
      sx={{
        background: theme.palette.background.default,
        transition: "background 0.3s ease-in-out",
        width: 1,
        height: 1,
        p: 2,
        "& .print-page": {
          mt: 2,
        },
      }}
    >
      {/* Toobar */}
      <Stack
        direction="row"
        sx={{
          width: "210mm",
          margin: "auto",
          flexShrink: 0,
        }}
      >
        <Button
          onClick={reactToPrintFn}
          variant="contained"
          sx={{ ml: "auto", mr: 1 }}
          startIcon={<PrintOutlined fontSize="small" />}
        >
          Print
        </Button>
        <ThemeButton />
      </Stack>

      <Stack ref={contentRef}>
        {/* Page 1 */}
        <PrintPaper
          leftPanel={
            <>
              <Header />
              <Section title="Self Information">
                <PersonalInformation />
              </Section>

              <Section title="Education">
                <CustomList
                  sx={{ my: 1 }}
                  spacing={1}
                  data={[
                    "Ho Chi Minh University of Science (HCMUS)",
                    "Major: Software Engineer",
                    "Oct 2020  - Dec 2024",
                    "GPA: 3.52/4 (Good degree)",
                  ]}
                />
              </Section>

              <Section title="Skills">
                <CustomList
                  sx={{ my: 1 }}
                  spacing={1}
                  data={[
                    "TOEIC Listening & Reading: 880 / 990",
                    "TOEIC Speaking & Writing: 260 / 400",
                    "Frontend: React, NextJS, Recoil, SASS, MUI, HTML, CSS, JS.",
                    "Backend: Node, Express, Prisma ORM, MongoDB, MySQL.",
                    "Basic knowledge OOP, data structure and algorithm.",
                    "Work confidently with basic Linux command-line tools.",
                    "Familiar with common React libraries such as Webpack, i18n, MUI,..",
                  ]}
                />
              </Section>
            </>
          }
          rightPanel={
            <>
              <Typography variant="h1" sx={{ mb: 1, mt: 4 }}>
                Le Minh Nhat
              </Typography>
              <Typography
                color="textSecondary"
                variant="h2"
                sx={{ mb: 2, fontWeight: 500 }}
              >
                Frontend Developer
              </Typography>
              <Typography sx={{ textAlign: "justify" }}>
                I graduated with Honors from Ho Chi Minh City University of
                Science (HCMUS) and have{" "}
                <span style={{ fontWeight: "bold" }}>
                  3 years of experience
                </span>
                , starting from my internship in my third year at university. I
                am a Fullstack Developer with strong expertise in Frontend
                development, especially{" "}
                <span style={{ fontWeight: "bold" }}>ReactJS</span>, focused on
                building fast and high-performance web applications, and I also
                have experience working with{" "}
                <span style={{ fontWeight: "bold" }}>
                  NodeJS, Express, and MySQL
                </span>
                . For the hope of learning new things in software technology,
                collaborate with your company&apos;s development team to make
                product and building a long-term career in your company, I wish
                I could have an interview with your company in the future.
              </Typography>

              <Section title="Work experience">
                <Typography color="textSecondary" variant="h3" my={1}>
                  Hanbiro Vietnam | 2022 - Present
                </Typography>
                <Typography variant="h4" mb={1}>
                  Frontend developer
                </Typography>
                <CustomList
                  data={[
                    "Developed and maintained a company application using React (Groupware version 3)",
                    "Strong ability to rapidly build UI components and customize MUI themes to match product design requirements",
                    "Built advanced features such as an Excel-like editor by integrating and customizing Univer",
                    "Handle complex forms and rich text editing with react-hook-form and TinyMCE",
                    "Managed application state and server data using Recoil and React Query",
                    "Support multi language with i18n and optimize loading using namespaces.",
                    "Worked closely with backend teams, contributing basic PHP development and customer bug fixes",
                  ]}
                />
              </Section>

              <Section title="Project">
                <Stack direction="row" alignItems="center" mt={2} mb={1}>
                  <Star
                    sx={{
                      fontSize: 16,
                      mr: 0.5,
                      color: theme.palette.text.secondary,
                      position: "relative",
                      bottom: 1,
                    }}
                  />
                  <Typography color="textSecondary" variant="h3">
                    Photohub | 15/12/2025 - PRESENT
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" mb={1}>
                  <GitHub sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography>
                    https://github.com/Minhnhat1104/Desktop-Images-Website
                  </Typography>
                </Stack>

                <CustomList
                  data={[
                    "A website for sharing beautiful photos.",
                    "Frontend built with ReactJS, Recoil, and Material UI",
                    "Backend developed using NodeJS (Express), MySQL and Prisma ORM",
                    "Docker used to streamline and optimize development workflow",
                    "Built-in image editor: crop, zoom, rotate, brightness, and contrast adjustments",
                    "Supports light mode and dark mode",
                    "Multi-language support using i18n",
                    "JWT-based authentication with role-based authorization (user & admin)",
                    "Integrated Google OAuth 2.0 login",
                  ]}
                />
              </Section>
            </>
          }
        />

        {/* Page 2 */}
        <PrintPaper
          leftPanel={
            <>
              <Section title="Interests" sx={{ mt: 0 }}>
                <CustomList
                  data={[
                    "Badminton (Strong Passion)",
                    "Music Technology",
                    "Fitness & Healthy Lifestyle",
                    "Traveling & Exploration",
                  ]}
                  sx={{ my: 1 }}
                />
              </Section>
            </>
          }
          rightPanel={
            <>
              {/* Project 2 */}
              <Typography color="textSecondary" variant="h3" mt={2} mb={1}>
                Music Player | 10/04/2022 - 13/04/2022
              </Typography>
              <Stack direction="row" alignItems="center" mb={1}>
                <GitHub sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography>
                  https://github.com/Minhnhat1104/musicPlayer
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" mb={1}>
                <LanguageOutlined sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography>
                  https://minhnhat1104.github.io/musicPlayer/
                </Typography>
              </Stack>

              <CustomList
                data={[
                  "Practice using html, CSS, JavaScript to create a website for listening to music.",
                  "Play, pause, next, back song buttons.",
                  "Random, repeat song.",
                  "Increase, decrease volume. ",
                  "Store user configuration in Local Storage.",
                  "Available on mobile device.",
                ]}
              />

              {/* Project 3 */}
              <Typography color="textSecondary" variant="h3" mt={2} mb={1}>
                TodoList | 19/11/2022 - 20/11/2022
              </Typography>
              <Stack direction="row" alignItems="center" mb={1}>
                <GitHub sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography>
                  https://github.com/Minhnhat1104/TodoList
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" mb={1}>
                <LanguageOutlined sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography>
                  https://minhnhat1104.github.io/TodoList/
                </Typography>
              </Stack>

              <CustomList
                data={[
                  "Practice using html, CSS, JavaScript to create a TodoList on website.",
                  "Add, Delete, Update, Filter, Delete all function with Todo item.",
                  "Store Item in Local Storage to persist information on closing browser.",
                  "Available on mobile device",
                ]}
              />
              <Section title="Self-built UI-websites for practice skills">
                <WebUIItem
                  title="Home Page"
                  github="https://github.com/Minhnhat1104/LeMinhnhatHomePage"
                  demo="https://minhnhat1104.github.io/LeMinhnhatHomePage/"
                />

                <WebUIItem
                  title="Web Synode"
                  github="https://github.com/Minhnhat1104/webSynode"
                  demo="https://minhnhat1104.github.io/webSynode/"
                />

                <WebUIItem
                  title="The band"
                  github="https://github.com/Minhnhat1104/webTheBand"
                  demo="https://minhnhat1104.github.io/webTheBand/"
                />

                <WebUIItem
                  title="Shopee"
                  github="https://github.com/Minhnhat1104/F8-Shopee"
                  demo="https://minhnhat1104.github.io/F8-Shopee/"
                />
              </Section>
            </>
          }
        />
      </Stack>
    </Stack>
  );
}

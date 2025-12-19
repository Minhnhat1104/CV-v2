"use client";

import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  Link,
  Paper,
  List,
  ListItem,
  ListItemText,
  Stack,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import avatar from "./avatar.jpg";
import Section from "./Section";
import Header from "./Header";
import CustomList from "./CustomList";
import PersonalInformation from "./PersonalInformation";
import { GitHub, Print, PrintOutlined } from "@mui/icons-material";
import WebUIItem from "./WebUIItem";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ThemeButton from "./ThemeButton";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    text: { primary: "#222", secondary: "#555" },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h4: { fontWeight: 700 },
    h6: { fontWeight: 700, letterSpacing: 0.5 },
    body2: { lineHeight: 1.6 },
  },
});

export default function App() {
  const theme = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef,
    pageStyle: `
    @page {
      size: A4;
      margin: 10mm 0mm 10mm 0mm;
      background-color: ${theme.palette.background.paper};
    }
    #print-container {
      box-shadow: none;
    }
  `,
  });

  return (
    <Stack
      sx={{
        background: theme.palette.background.default,
        width: 1,
        height: 1,
        p: 2,
      }}
    >
      {/* Toobar */}
      <Stack
        direction="row"
        sx={{
          width: "210mm",
          margin: "auto",
          flexShrink: 0,
          mb: 1,
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

      {/* Paper */}
      <Stack
        ref={contentRef}
        id="print-container"
        sx={{
          width: "210mm",
          // height: "297mm",
          background: theme.palette.background.paper,
          margin: "auto",
          flexShrink: 0,
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          p: 2,
        }}
      >
        <Stack direction="row" spacing={2}>
          <Stack sx={{ flex: 4 }}>
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
                  "Frontend: ReactJS, NextJS, Recoil, SASS, MUI, HTML, CSS, JavaScript.",
                  "Backend: NodeJS, ExpressJS, MongoDB, MySQL, advanced SQL Query",
                  "Basic knowledge OOP, data structure and algorithm.",
                  "Work confidently with basic Linux command-line tools",
                  "Familiar with using the common library such as Webpack, i18n, bootstrap,..",
                ]}
              />
            </Section>
          </Stack>
          <Stack sx={{ flex: 8, pt: 2 }}>
            <Typography variant="h1" sx={{ mb: 1 }}>
              Lê Minh Nhật
            </Typography>
            <Typography
              color="textSecondary"
              variant="h2"
              sx={{ mb: 2, fontWeight: 500 }}
            >
              Frontend Developer
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              I graduated with Honors from Ho Chi Minh University of Science
              (HCMUS) and have 3 years of working experience, starting from my
              internship and professional work in my third year at university. I
              work as a Fullstack Developer with strong expertise in Frontend
              development, especially ReactJS, focusing on building fast and
              high-performance web applications. For the hope of learning new
              things in software technology, collaborate to your company&apos;s
              develop team to make product and building a long-term career in
              your company, I wish I could have an interview with your company
              in the future.
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
                  "Developed a new version of the company’s Groupware application with React. (currently in production)",
                  "Build scalable UI with MUI and a customized Dashforge theme.",
                  "Manage application state and data fetching using Recoil and React Query.",
                  "Implement complex forms and rich text editing with react-hook-form, TinyMCE, and i18next for internationalization.",
                  "Integrate and customize advanced React libraries such as Univer to build an Excel-like editor.",
                  "Deploy React applications to Linux servers and work confidently with basic Linux command-line tools.",
                  "Collaborate with backend systems and handle basic PHP development to support frontend features.",
                ]}
              />
            </Section>

            <Section title="Project">
              <Typography color="textSecondary" variant="h3" mt={2} mb={1}>
                Desktop-Images-Website | 2/10 2022 - PRESENT
              </Typography>
              <Stack direction="row" alignItems="center" mb={1}>
                <GitHub sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography>
                  https://github.com/Minhnhat1104/Desktop-Images-Website
                </Typography>
              </Stack>

              <CustomList
                data={[
                  "My website which is built for storing and sharing background image of PC.",
                  "Frontend with ReactJS, SASS, Redux.",
                  "Backend with NodeJS (Express), MongoDB.",
                  "CRUD operations with image and users.",
                  "Authentication with JSON WEB TOKEN.",
                  "Authorization user and admin account.",
                  "Store token in Cookie and Redux to enhance security.",
                ]}
              />

              {/* Project 2 */}
              <Typography color="textSecondary" variant="h3" mt={2} mb={1}>
                Music Player, (Finished) | 10/04/2022 - 13/04/2022
              </Typography>
              <Stack direction="row" alignItems="center" mb={1}>
                <GitHub sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography>
                  https://github.com/Minhnhat1104/musicPlayer
                </Typography>
              </Stack>

              <CustomList
                data={[
                  "Demo: https://minhnhat1104.github.io/musicPlayer/",
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

              <CustomList
                data={[
                  "Demo: https://minhnhat1104.github.io/TodoList/",
                  "Practice using html, CSS, JavaScript to create a TodoList on website.",
                  "Add, Delete, Update, Filter, Delete all function with Todo item.",
                  "Store Item in Local Storage to persist information on closing browser.",
                  "Available on mobile device",
                ]}
              />
            </Section>

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
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

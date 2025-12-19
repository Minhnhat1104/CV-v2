// providers/ThemeProvider.tsx
"use client";

import { CssVarsProvider } from "@mui/material/styles";
import theme from "@/theme";
import { ReactNode } from "react";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <CssVarsProvider theme={} defaultMode="light" modeStorageKey="theme-mode">
      {children}
    </CssVarsProvider>
  );
}

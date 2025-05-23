"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist";
import { TooltipProvider } from "@/components/ui/tooltip";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemesProvider>
  );
}

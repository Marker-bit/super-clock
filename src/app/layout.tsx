import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Palette, Settings } from "lucide-react";
import { ColorSelector } from "@/components/color-selector";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Clock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "transition-all")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

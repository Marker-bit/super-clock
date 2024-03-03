"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { NamedColor } from "./color-selector";

type ChangeColors = { light: NamedColor; dark: NamedColor }[];
export function ModeToggle({
  currentColor,
  setColor,
}: {
  currentColor: NamedColor;
  setColor: (color: NamedColor) => void;
}) {
  const { setTheme, theme } = useTheme();
  const whiteToDark: ChangeColors = [
    {
      light: "wheat",
      dark: "darkgrey",
    },
    {
      light: "white",
      dark: "dimgrey",
    },
    { light: "ghostwhite", dark: "black" },
  ];

  function changeTheme() {
    if (theme === "light") {
      const color = whiteToDark.find((c) => c.dark === currentColor);
      setTheme("dark");
      if (color) {
        setColor(color.light);
      }
    } else {
      const color = whiteToDark.find((c) => c.light === currentColor);
      setTheme("light");
      if (color) {
        setColor(color.dark);
      }
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className="rounded-xl p-2 w-fit h-fit hover:bg-black/5 dark:hover:bg-white/5 transition-all text-black/70 dark:text-white/80 hover:text-black dark:hover:text-white"
            onClick={() => changeTheme()}
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Sun className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Moon className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{theme === "light" ? "Light" : "Dark"} Mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

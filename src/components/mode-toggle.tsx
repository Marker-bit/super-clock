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

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className="rounded-xl p-2 w-fit h-fit hover:bg-black/5 dark:hover:bg-white/5 transition-all text-black/70 dark:text-white/80 hover:text-black dark:hover:text-white"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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

"use client";

import { useLocalStorage } from "usehooks-ts";
import { ColorSelector, NamedColor } from "@/components/color-selector";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTime } from "@/lib/use-time";
import { AnimatePresence, motion } from "framer-motion";
import { Palette, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const { theme } = useTheme();
  const time = useTime();
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":"];
  const [color, setColor] = useLocalStorage<NamedColor>(
    "color",
    theme === "dark" ? "wheat" : "black"
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center transition-all">
      <div className="absolute top-5 left-5 flex gap-1">
        <ModeToggle currentColor={color} setColor={setColor} />
        <Popover>
          <PopoverTrigger asChild>
            <button className="rounded-xl p-2 w-fit h-fit hover:bg-black/5 dark:hover:bg-white/5 transition-all text-black/70 dark:text-white/80 hover:text-black dark:hover:text-white">
              <Palette className="w-4 h-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2">
            <div className="text-zinc-500">Text color</div>
            <ColorSelector currentColor={color} setColor={setColor} />
          </PopoverContent>
        </Popover>
        <Dialog>
          <DialogTrigger asChild>
            <button className="rounded-xl p-2 w-fit h-fit hover:bg-black/5 dark:hover:bg-white/5 transition-all text-black/70 dark:text-white/80 hover:text-black dark:hover:text-white">
              <Settings className="w-4 h-4" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Settings</DialogTitle>
            </DialogHeader>
            <div className="p-2 border-zinc-100 dark:border-zinc-800">
              Something will be here...
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <motion.p
        className="bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-50 dark:from-zinc-950 dark:via-zinc-800 dark:to-zinc-950 p-8 rounded-3xl font-black text-9xl overflow-hidden transition-all cursor-default max-sm:max-w-full"
        layout
        style={{ color: color }}
      >
        <motion.div className="flex -space-x-1" layout>
          {time
            .toLocaleTimeString()
            .toString()
            .split("")
            .map((currentNum, i) => (
              <>
                <div className="relative" key={i}>
                  <AnimatePresence mode="popLayout">
                    {nums.map(
                      (num) =>
                        currentNum === num && (
                          <motion.div
                            initial={{
                              y: -100,
                              opacity: 0,
                              pointerEvents: "none",
                            }}
                            animate={{
                              y: 0,
                              opacity: 1,
                              pointerEvents: "auto",
                            }}
                            exit={{
                              y: 100,
                              opacity: 0,
                              pointerEvents: "none",
                            }}
                            key={num}
                          >
                            {num}
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </div>
              </>
            ))}
        </motion.div>
      </motion.p>
    </main>
  );
}

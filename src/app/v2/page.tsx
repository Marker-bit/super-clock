"use client";

import { useTime } from "@/lib/use-time";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const time = useTime();
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":"];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center transition-all">
      <motion.p
        className="bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 p-8 rounded-3xl font-black text-9xl overflow-hidden transition-all cursor-default max-sm:max-w-full"
        layout
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
                            exit={{ y: 100, opacity: 0, pointerEvents: "none" }}
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

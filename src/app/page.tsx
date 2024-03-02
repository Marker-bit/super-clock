"use client";

import { useTime } from "@/lib/use-time";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const time = useTime();
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":"];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 p-8 rounded-3xl font-black text-9xl overflow-hidden transition-all cursor-default max-sm:max-w-full">
        <div className="flex -space-x-1">
          {time
            .toLocaleTimeString()
            .toString()
            .split("")
            .map((currentNum) => (
              <>
                <div className="relative" key={currentNum}>
                  <div className="opacity-0 pointer-events-none">
                    {currentNum}
                  </div>
                  {nums.map((num) => (
                    <AnimatePresence key={num} mode="popLayout">
                      {currentNum === num && (
                        <motion.div
                          initial={{
                            y: -100,
                            opacity: 0,
                            pointerEvents: "none",
                          }}
                          animate={{ y: 0, opacity: 1, pointerEvents: "auto" }}
                          exit={{ y: 100, opacity: 0, pointerEvents: "none" }}
                          className="absolute top-0 left-0"
                        >
                          {num}
                        </motion.div>
                      )}
                      {currentNum ===
                        (parseInt(num) - 1 < 0
                          ? "9"
                          : (parseInt(num) - 1).toString()) && (
                        <motion.div
                          animate={{ y: 100, opacity: 0 }}
                          className="absolute top-0 left-0 pointer-events-none"
                        >
                          {parseInt(num) - 2 < 0 ? 9 : parseInt(num) - 2}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ))}
                </div>
              </>
            ))}
        </div>
      </p>
    </main>
  );
}

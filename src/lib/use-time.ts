import { useEffect, useState } from "react";

export const useTime = (refreshCycle = 100) => {
  // Returns the current time
  // and queues re-renders every `refreshCycle` milliseconds (default: 100ms)

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // Regularly set time in state
    // (this will cause your component to re-render frequently)
    const intervalId = setInterval(() => setNow(new Date()), refreshCycle);

    // Cleanup interval
    return () => clearInterval(intervalId);

    // Specify dependencies for useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshCycle, setInterval, clearInterval, setNow]);

  return now;
};

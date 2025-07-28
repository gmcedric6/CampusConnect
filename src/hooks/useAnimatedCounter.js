import { useState, useEffect } from "react";
export function useAnimatedCounter() {
  const [countKey, setCountKey] = useState(0);

  const relaunch = () => setCountKey((k) => k + 1);

  useEffect(() => {
    // Peut être utilisé pour déclencher une animation ou un effet
  }, [countKey]);

  return { countKey, relaunch };
}

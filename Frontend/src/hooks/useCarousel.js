import { useState } from "react";
export function useCarousel(maxIdx) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const next = () => setCurrentIdx((idx) => (idx + 1) % maxIdx);
  const prev = () => setCurrentIdx((idx) => (idx - 1 + maxIdx) % maxIdx);

  return { currentIdx, setCurrentIdx, next, prev };
}

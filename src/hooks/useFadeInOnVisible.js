import { useEffect } from "react";
export default function useFadeInOnVisible(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const obs = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
}

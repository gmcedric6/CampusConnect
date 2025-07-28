import { useState } from "react";
export function useAccordion() {
  const [open, setOpen] = useState({ group: null, idx: null });

  const toggle = (group, idx) => {
    setOpen((prev) =>
      prev.group === group && prev.idx === idx
        ? { group: null, idx: null }
        : { group, idx }
    );
  };

  return { open, setOpen, toggle };
}

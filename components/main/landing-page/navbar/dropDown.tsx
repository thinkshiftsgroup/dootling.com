"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
}

export const Dropdown = ({
  trigger,
  children,
  align = "right",
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((prev) => !prev)}>{trigger}</button>
      <div
        className={`absolute z-50 mt-2 min-w-[14rem] rounded-lg bg-white shadow-lg transition-all duration-200 ${
          align === "right" ? "right-0" : "left-0"
        } ${
          open ? "opacity-100 visible" : "opacity-0 invisible translate-y-1"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

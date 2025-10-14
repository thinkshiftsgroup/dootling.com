"use client";

import React, { useState, useRef, useEffect, ReactNode, CSSProperties } from "react";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
  position?: "top" | "bottom";
  customStyles?: CSSProperties;
  offsetX?: number;
  offsetY?: number;
}

export const Dropdown = ({
  trigger,
  children,
  align = "right",
  position = "bottom",
  customStyles,
  offsetX = 0,
  offsetY = 0,
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

  const getPositionClasses = () => {
    const horizontal = align === "right" ? "right-0" : "left-0";
    const vertical = position === "top" ? "bottom-full mb-2" : "top-full mt-2";
    return `${horizontal} ${vertical}`;
  };

  const getCustomStyles = (): CSSProperties => {
    return {
      ...customStyles,
      ...(offsetX !== 0 && { [align === "right" ? "right" : "left"]: `${offsetX}px` }),
      ...(offsetY !== 0 && { [position === "top" ? "bottom" : "top"]: `${offsetY}px` }),
    };
  };

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((prev) => !prev)}>{trigger}</button>
      <div
        className={`absolute z-50 min-w-[14rem] rounded-lg bg-white shadow-lg transition-all duration-200 ${getPositionClasses()} ${
          open ? "opacity-100 visible" : "opacity-0 invisible translate-y-1"
        }`}
        style={getCustomStyles()}
      >
        {children}
      </div>
    </div>
  );
};
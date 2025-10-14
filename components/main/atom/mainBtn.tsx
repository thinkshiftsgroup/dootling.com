"use client";
import React from "react";
import { cn } from "@/lib/utils"; // optional: if you use shadcn/ui or have a `cn` util for class merging

interface ReusableButtonProps {
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  icon,
  text,
  onClick,
  className,
  variant = "primary",
}) => {
  const baseStyle =
    "my-4 text-white px-2 flex  items-center gap-2 py-1 rounded-sm text-[0.9rem] transition-all duration-200";

  const variantStyles = {
    primary: "bg-[#157BFF] hover:bg-blue-600",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-[#EA0234] hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseStyle, variantStyles[variant], className)}
    >
      {icon && <span className="flex flex-none items-center">{icon}</span>}
      <span className="sm:!text-base !text-sm" >{text}</span>
    </button>
  );
};

export default ReusableButton;

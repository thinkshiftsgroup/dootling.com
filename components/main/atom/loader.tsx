"use client";
import React from "react";

const LinkedInLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F3F2EF]">
      <h1 className="text-4xl font-bold text-[#157bff] mb-8 tracking-wide">
        Dootling
      </h1>

      <div className="relative w-64 h-1 bg-gray-300 overflow-hidden rounded-full">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-[#157bff] animate-slide" />
      </div>

    </div>
  );
};

export default LinkedInLoader;

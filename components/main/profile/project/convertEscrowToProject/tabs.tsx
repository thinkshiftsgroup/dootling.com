import React from "react";

const Tabs = ({tabs, setTabs}:any) => {
  return (
    <div className="mb-2">
      <ul className="flex w-full items-center gap-4 *:cursor-pointer font-medium text-gray-500">
        <li
          onClick={() => setTabs("Overview")}
          className={`${
            tabs === "Overview"
              ? "border-b-2 text-[#157bff] px-2 border-b-[#157bff]"
              : ""
          }`}
        >
          Overview
        </li>
        <li
          onClick={() => setTabs("Contributors")}
          className={`${
            tabs === "Contributors"
              ? "border-b-2 text-[#157bff] px-2 border-b-[#157bff]"
              : ""
          }`}
        >
          Contributors
        </li>
        <li
          onClick={() => setTabs("Milsetones")}
          className={`${
            tabs === "Milsetones"
              ? "border-b-2 text-[#157bff] px-2 border-b-[#157bff]"
              : ""
          }`}
        >
          Milestones
        </li>
        <li
          onClick={() => setTabs("Audit Log")}
          className={`${
            tabs === "Audit Log"
              ? "border-b-2 text-[#157bff] px-2 border-b-[#157bff]"
              : ""
          }`}
        >
          Audit Log
        </li>
        <li
          onClick={() => setTabs("Settings")}
          className={`${
            tabs === "Settings"
              ? "border-b-2 text-[#157bff] px-2 border-b-[#157bff]"
              : ""
          }`}
        >
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Tabs;

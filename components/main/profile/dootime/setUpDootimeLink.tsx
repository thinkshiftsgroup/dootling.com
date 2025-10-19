"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Switch } from "@/components/ui/switch";
import ServiceDetailsTab from "./serviceDetailsTab";
import PermissionsTab from "./permissionsTab";
import FeeTiers from "./feeTiers";

interface SetupDootimeLinkProps {
  open: boolean;
  onClose: () => void;
}

const SetupDootimeLink: React.FC<SetupDootimeLinkProps> = ({
  open,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const pageUrl = "https://dootling.com/ray";

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = ["Service Details", "Fee Tiers", "Permissions"];
  const [activeTab, setActiveTab] = useState("Service Details");

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="fixed top-0 right-0 h-screen w-full max-w-[500px] bg-white z-50 shadow-xl border-l border-gray-200 rounded-none sm:!rounded-tl-2xl sm:!rounded-bl-2xl flex flex-col"
          >
            <div className="flex sm:!items-center items-start justify-between sm:!px-6 px-3 gap-2 pt-4 ">
              <h2 className="sm:!text-lg text-sm font-bold text-gray-800">
                Setup Dootime
              </h2>
              <div className="md:!flex whitespace-nowrap hidden gap-1">
                <p className="flex items-center gap-2 font-semibold text-black rounded-sm py-1 px-2 border ">
                  Booking Link
                  {copied ? (
                    <FaRegCircleCheck className="text-[#157bff]" size={16} />
                  ) : (
                    <svg
                      onClick={handleCopy}
                      className="cursor-pointer"
                      width="16"
                      height="16"
                      viewBox="0 0 410 410"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M355.829 219.709C358.75 212.653 358.75 203.685 358.75 185.781C358.75 167.878 358.75 158.909 355.829 151.854C353.897 147.189 351.065 142.95 347.495 139.38C343.925 135.81 339.686 132.978 335.021 131.046C327.966 128.125 318.997 128.125 301.094 128.125H189.625C168.1 128.125 157.338 128.125 149.12 132.31C141.882 135.997 135.997 141.882 132.31 149.12C128.125 157.32 128.125 168.083 128.125 189.625V301.094C128.125 318.997 128.125 327.966 131.046 335.021C134.958 344.434 142.441 351.934 151.854 355.829C158.909 358.75 167.878 358.75 185.781 358.75C203.685 358.75 212.653 358.75 219.709 355.829M355.829 219.709C353.897 224.374 351.065 228.612 347.495 232.183C343.925 235.753 339.686 238.585 335.021 240.516C327.966 243.438 318.997 243.438 301.094 243.438C283.19 243.438 274.222 243.437 267.166 246.359C262.501 248.29 258.263 251.122 254.692 254.692C251.122 258.263 248.29 262.501 246.359 267.166C243.437 274.222 243.438 283.19 243.438 301.094C243.438 318.997 243.438 327.966 240.516 335.021C238.585 339.686 235.753 343.925 232.183 347.495C228.612 351.065 224.374 353.897 219.709 355.829M355.829 219.709C346.639 251.397 329.734 280.311 306.629 303.863C283.524 327.416 254.939 344.871 223.433 354.667L219.709 355.829M281.875 128.125V112.75C281.875 91.225 281.875 80.4625 277.69 72.2454C274.008 65.0091 268.129 59.1246 260.897 55.4354C252.663 51.25 241.9 51.25 220.375 51.25H112.75C91.225 51.25 80.4625 51.25 72.2454 55.4354C65.0065 59.1217 59.1217 65.0065 55.4354 72.2454C51.25 80.4454 51.25 91.2079 51.25 112.75V220.375C51.25 241.9 51.25 252.663 55.4354 260.88C59.1254 268.123 65.0021 274 72.2454 277.69C80.4454 281.875 91.225 281.875 112.767 281.875H128.125"
                        stroke="#157BFF"
                        stroke-width="25.625"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </p>
                <p className="flex items-center gap-2 font-semibold text-black rounded-sm py-1 px-2 border ">
                  De-activate
                  <Switch className="data-[state=checked]:bg-red-500 h-[18px] w-[32px]" />
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-100 text-black rounded-full"
              >
                <X size={20} />
              </Button>
            </div>
            <div className="flex md:!hidden justify-center gap-1">
              <p className="flex items-center gap-2 font-semibold text-black rounded-sm py-1 px-2 border ">
                Booking Link
                {copied ? (
                  <FaRegCircleCheck className="text-[#157bff]" size={16} />
                ) : (
                  <svg
                    onClick={handleCopy}
                    className="cursor-pointer"
                    width="16"
                    height="16"
                    viewBox="0 0 410 410"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M355.829 219.709C358.75 212.653 358.75 203.685 358.75 185.781C358.75 167.878 358.75 158.909 355.829 151.854C353.897 147.189 351.065 142.95 347.495 139.38C343.925 135.81 339.686 132.978 335.021 131.046C327.966 128.125 318.997 128.125 301.094 128.125H189.625C168.1 128.125 157.338 128.125 149.12 132.31C141.882 135.997 135.997 141.882 132.31 149.12C128.125 157.32 128.125 168.083 128.125 189.625V301.094C128.125 318.997 128.125 327.966 131.046 335.021C134.958 344.434 142.441 351.934 151.854 355.829C158.909 358.75 167.878 358.75 185.781 358.75C203.685 358.75 212.653 358.75 219.709 355.829M355.829 219.709C353.897 224.374 351.065 228.612 347.495 232.183C343.925 235.753 339.686 238.585 335.021 240.516C327.966 243.438 318.997 243.438 301.094 243.438C283.19 243.438 274.222 243.437 267.166 246.359C262.501 248.29 258.263 251.122 254.692 254.692C251.122 258.263 248.29 262.501 246.359 267.166C243.437 274.222 243.438 283.19 243.438 301.094C243.438 318.997 243.438 327.966 240.516 335.021C238.585 339.686 235.753 343.925 232.183 347.495C228.612 351.065 224.374 353.897 219.709 355.829M355.829 219.709C346.639 251.397 329.734 280.311 306.629 303.863C283.524 327.416 254.939 344.871 223.433 354.667L219.709 355.829M281.875 128.125V112.75C281.875 91.225 281.875 80.4625 277.69 72.2454C274.008 65.0091 268.129 59.1246 260.897 55.4354C252.663 51.25 241.9 51.25 220.375 51.25H112.75C91.225 51.25 80.4625 51.25 72.2454 55.4354C65.0065 59.1217 59.1217 65.0065 55.4354 72.2454C51.25 80.4454 51.25 91.2079 51.25 112.75V220.375C51.25 241.9 51.25 252.663 55.4354 260.88C59.1254 268.123 65.0021 274 72.2454 277.69C80.4454 281.875 91.225 281.875 112.767 281.875H128.125"
                      stroke="#157BFF"
                      stroke-width="25.625"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </p>
              <p className="flex items-center gap-2 font-semibold text-black rounded-sm py-1 px-2 border ">
                De-activate
                <Switch className="data-[state=checked]:bg-red-500 h-[18px] w-[32px]" />
              </p>
            </div>
            <p className="text-xs mt-1 sm:!px-6 px-3 text-[#157bff]">
              Create your meeting page and integrate to your calendar.{" "}
            </p>
            <div className="sm:px-6 px-3">
              <div className="w-full mt-4 whitespace-nowrap overflow-x-scroll hide-scrollbar mb-6">
                <ul className="flex border-b border-gray-300">
                  {tabs.map((tab) => (
                    <li
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-1 text-xs font-medium cursor-pointer transition-colors ${
                        activeTab === tab
                          ? "border-b-2 border-[#157BFF] text-[#157BFF]"
                          : "text-gray-500"
                      }`}
                    >
                      {tab}
                    </li>
                  ))}
                </ul>
              </div>

              {activeTab === "Service Details" && <ServiceDetailsTab />}
              {activeTab === "Permissions" && <PermissionsTab />}
              {activeTab === "Fee Tiers" && <FeeTiers />}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SetupDootimeLink;

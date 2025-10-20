"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SetupLinkSideModalProps {
  open: boolean;
  onClose: () => void;
}

const SetupLinkSideModal: React.FC<SetupLinkSideModalProps> = ({
  open,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [selected, setSelected] = useState("invite");

  const handleAdd = () => {
    if (inputValue.trim()) {
      setCollaborators([...collaborators, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index: number) => {
    setCollaborators(collaborators.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  const [copied, setCopied] = useState(false);
  const pageUrl = "https://dootling.com/ray";

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [isActive, setIsActive] = useState(true);

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
            className="fixed top-0 right-0 h-screen w-full max-w-[500px] bg-white z-50 shadow-xl border-l border-gray-200 rounded-none sm:!rounded-tl-2xl  sm:!rounded-bl-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 pt-4 ">
              <h2 className="sm:!text-lg text-sm font-bold text-gray-800">
                Update Payment Link
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-100 text-black rounded-full"
              >
                <X size={20} />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <div>
                <label
                  className="font-semibold text-gray-600 sm:!text-base text-sm"
                  htmlFor="Amount"
                >
                  Page Display Name *
                </label>
                <div className="flex my-2">
                  <input
                    type="text"
                    className="w-full border rounded-md text-sm p-2 border-[#f1f1f1] transition focus:border-[#157BFF]  focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  className="font-semibold text-gray-600 sm:!text-base  text-sm"
                  htmlFor="Amount"
                >
                  Page Username *
                </label>
                <div className="flex my-2">
                  <input
                    type="text"
                    className="w-full border rounded-md text-sm p-2 border-[#f1f1f1] transition focus:border-[#157BFF]  focus:outline-none"
                  />
                </div>
                <div className="flex items-center flex-wrap gap-3 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <div className="flex-1 whitespace-nowrap flex items-center gap-2">
                      <span className="text-gray-600 font-medium">
                        page URL:
                      </span>
                      <span className="text-blue-600 font-medium">
                        {pageUrl}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium">
                      {copied ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label
                  className="font-semibold text-gray-600 sm:!text-base  text-sm"
                  htmlFor="Amount"
                >
                  Page Purpose *
                </label>
                <div className="flex my-2">
                  <input
                    type="text"
                    className="w-full border rounded-md text-sm p-2 border-[#f1f1f1] transition focus:border-[#157BFF]  focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  className="font-semibold text-gray-600 sm:!text-base text-sm"
                  htmlFor="Amount"
                >
                  Summary Of Your Service/Products *
                </label>
                <div className="flex my-2">
                  <textarea
                    rows={4}
                    className="w-full border border-[#f1f1f1] rounded-md text-sm p-2 focus:outline-none focus:border-[#157BFF] transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="w-full mt-20 flex items-center justify-center gap-2 rounded-sm font-semibold text-sm sm:!text-lg text-black py-4 cursor-pointer bg-[#FDC70C1A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m13.06 8.111l1.415 1.414a7 7 0 0 1 0 9.9l-.354.353a7 7 0 1 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415zm6.718 6.01l-1.414-1.414a5 5 0 0 0-7.071-7.07l-.354.353a5 5 0 0 0 0 7.07l1.415 1.415l-1.415 1.414l-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 1 1 9.9 9.9"
                  />
                </svg>{" "}
                {pageUrl}
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M20.829 12.861c.171-.413.171-.938.171-1.986s0-1.573-.171-1.986a2.25 2.25 0 0 0-1.218-1.218c-.413-.171-.938-.171-1.986-.171H11.1c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C7.5 9.209 7.5 9.839 7.5 11.1v6.525c0 1.048 0 1.573.171 1.986c.229.551.667.99 1.218 1.218c.413.171.938.171 1.986.171s1.573 0 1.986-.171m7.968-7.968a2.25 2.25 0 0 1-1.218 1.218c-.413.171-.938.171-1.986.171s-1.573 0-1.986.171a2.25 2.25 0 0 0-1.218 1.218c-.171.413-.171.938-.171 1.986s0 1.573-.171 1.986a2.25 2.25 0 0 1-1.218 1.218m7.968-7.968a11.68 11.68 0 0 1-7.75 7.9l-.218.068M16.5 7.5v-.9c0-1.26 0-1.89-.245-2.371a2.25 2.25 0 0 0-.983-.984C14.79 3 14.16 3 12.9 3H6.6c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C3 4.709 3 5.339 3 6.6v6.3c0 1.26 0 1.89.245 2.371c.216.424.56.768.984.984c.48.245 1.111.245 2.372.245H7.5"
                  />
                </svg>
                <span className="font-medium">{copied ? "Copied!" : ""}</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SetupLinkSideModal;

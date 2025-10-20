"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuditTrialsTable from "./auditTrails";

interface FundWalletSideModalProps {
  open: boolean;
  onClose: () => void;
}

const EscrowManager: React.FC<FundWalletSideModalProps> = ({
  open,
  onClose,
}) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [purpose, setPurpose] = useState("");

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCurrency(value);
    switch (value) {
      case "USD":
        setSymbol("$");
        break;
      case "NGN":
        setSymbol("₦");
        break;
      case "EUR":
        setSymbol("€");
        break;
      case "GBP":
        setSymbol("£");
        break;
      default:
        setSymbol("$");
    }
  };
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0  z-40"
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
            <div className="flex relative items-center justify-between px-6 py-4 ">
              <div className="flex flex-col gap-1">
                <h2 className="sm:!text-lg text-sm font-bold text-gray-800">
                  Manage Escrow
                </h2>
                <p className="text-gray-600 !text-xs sm:!text-base font-normal">
                  For:
                  <span className="font-bold text-[#157BFF]">
                    Thinkemphathy Vault App Project
                  </span>
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-100 absolute right-2 top-2 text-black rounded-full"
              >
                <X className="w-7 h-7 " />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <div>
                <p className="text-[#404040] flex text-xs sm:!!justify-normal justify-between sm:!text-sm items-center  gap-1 font-semibold">
                  Joshua Israel{" "}
                  <span className="text-[#404040]/80">
                    (joshuaisrael@gmail.com)
                  </span>
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 140 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3120_5063)">
                      <path
                        d="M63.903 0L77.721 0.035C83.167 0.693 87.941 3.255 91.875 7.581C95.088 11.109 96.775 15.211 96.873 19.677H135.198C136.478 19.6844 137.702 20.1994 138.603 21.109C139.503 22.0185 140.006 23.2482 140 24.528C140.004 25.8066 139.5 27.0345 138.6 27.9425C137.7 28.8505 136.477 29.3646 135.198 29.372L122.346 29.365V110.754C122.346 128.555 115.703 140 101.059 140H37.933C23.289 140 16.751 128.618 16.751 110.754V29.365H4.802C3.52586 29.3576 2.30451 28.8455 1.40476 27.9405C0.505007 27.0355 -2.1443e-05 25.8112 6.82855e-10 24.535C6.82855e-10 21.854 2.149 19.691 4.802 19.691H43.092C43.19 16.093 44.527 12.446 46.97 8.841C50.61 3.465 56.294 0.518 63.903 0ZM112.742 29.365H26.348V110.754C26.348 123.97 29.988 130.312 37.933 130.312H101.059C109.032 130.312 112.749 123.914 112.749 110.754L112.742 29.365ZM47.012 44.38C49.658 44.38 51.807 46.55 51.807 49.224V105.574C51.8107 106.853 51.3073 108.08 50.4072 108.989C49.507 109.897 48.2836 110.411 47.005 110.418C45.7276 110.409 44.506 109.894 43.6073 108.986C42.7087 108.078 42.2063 106.851 42.21 105.574V49.224C42.21 46.55 44.366 44.38 47.012 44.38ZM66.087 44.38C68.747 44.38 70.889 46.55 70.889 49.224V105.574C70.8927 106.853 70.3893 108.08 69.4892 108.989C68.589 109.897 67.3656 110.411 66.087 110.418C64.8096 110.409 63.588 109.894 62.6893 108.986C61.7907 108.078 61.2883 106.851 61.292 105.574V49.224C61.292 46.55 63.441 44.38 66.087 44.38ZM85.183 44.38C87.829 44.38 89.978 46.55 89.978 49.224V105.574C89.9817 106.851 89.4793 108.078 88.5807 108.986C87.682 109.894 86.4603 110.409 85.183 110.418C83.9044 110.411 82.681 109.897 81.7808 108.989C80.8807 108.08 80.3773 106.853 80.381 105.574V49.224C80.3773 47.9454 80.8807 46.7175 81.7808 45.8095C82.681 44.9015 83.9044 44.3874 85.183 44.38ZM64.232 9.674C59.738 9.989 56.777 11.522 54.894 14.308C53.508 16.345 52.815 18.109 52.703 19.684L87.269 19.677C87.171 17.64 86.366 15.848 84.805 14.133C82.383 11.473 79.695 10.031 77.154 9.688L64.232 9.674Z"
                        fill="#EA0234"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3120_5063">
                        <rect width="140" height="140" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <div className="border sm:!text-base !text-sm border-[#D8D8D8] rounded-md overflow-hidden w-full">
                  <div className="grid grid-cols-[50px_1fr_1fr_1fr] text-center text-[#000000]/80">
                    <div className="bg-[#F2F2F2] py-3 px-2 font-medium border-r border-[#D8D8D8]">
                      %
                    </div>
                    <div className="py-3 px-2 border-r border-[#D8D8D8]">
                      45
                    </div>
                    <div className="py-3 px-2 border-r border-[#D8D8D8]">
                      dd/mm/yyyy
                    </div>
                    <div className="py-3 px-2">Amount</div>
                  </div>
                </div>
              </div>

              <div>
                <label
                  className="font-semibold text-gray-600 sm:!text-base text-sm "
                  htmlFor="Purpose"
                >
                  Notes *
                </label>
                {/* <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full shadow-sm my-2 bg-white z-10 text-gray-600 rounded-md border py-5 px-3 border-gray-400/50 cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="deposit">Deposit</option>
                  <option value="escrow">Escrow Funding</option>
                  <option value="subscription">Subscription</option>
                  <option value="others">Others</option>
                </select> */}
                <textarea
                  name=""
                  className="w-full shadow-sm my-2 bg-white z-10 text-gray-600 rounded-md border py-5 px-3 border-gray-400/50 h-[200px]"
                  id=""
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button className="text-white w-full sm:!w-1/2 text-sm rounded-md font-semibol py-2 cursor-pointer bg-[#1571E8]">
                  Request Escrow Action
                </button>
              </div>

              <AuditTrialsTable />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EscrowManager;

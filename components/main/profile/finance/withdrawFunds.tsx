"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FundWalletSideModalProps {
  open: boolean;
  onClose: () => void;
}

const WithdrawFunds: React.FC<FundWalletSideModalProps> = ({
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
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation(); 
              onClose();
            }}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            onClick={(e) => e.stopPropagation()}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="fixed top-0 right-0 h-screen w-full max-w-[500px] bg-white z-50 shadow-xl border-l border-gray-200 rounded-none sm:!rounded-tl-2xl  sm:!rounded-bl-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 pt-4 ">
              <h2 className="sm:!text-lg text-sm font-bold text-gray-800">
                Withdraw Funds
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
            <span className="text-[#157BFF] px-6 flex items-center whitespace-nowrap gap-1 text-xs">
              <p className="text-[#157BFF] font-normal">
                Accessible Funds
                <span className="font-bold">$25500</span>
              </p>
              |
              <p className="text-[#157BFF] font-normal">
                Locked Funds
                <span className="font-bold">$1655</span>
              </p>
            </span>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <div>
                <label
                  className="font-semibold text-gray-600 sm:!text-lg text-sm "
                  htmlFor="Amount"
                >
                  Amount *
                </label>
                <div className="flex my-2">
                  <div className="w-1/3 -mr-10 bg-gray-200 rounded-md border px-0.5 sm:!px-4 py-4 border-gray-400/50 relative">
                    <select
                      value={currency}
                      onChange={handleCurrencyChange}
                      className="bg-gray-200 font-bold sm:!text-lg text-sm uppercase w-full focus:outline-none cursor-pointer"
                    >
                      <option value="USD">USD</option>
                      <option value="NGN">NGN</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                    </select>
                  </div>

                  <input
                    type="text"
                    className="w-full shadow-sm bg-white z-10 text-gray-600 rounded-md border p-2 border-gray-400/50"
                    placeholder={`${symbol}500000`}
                    inputMode="numeric"
                  />
                </div>
              </div>

              <div>
                <label
                  className="font-semibold text-gray-600 sm:!text-lg text-sm "
                  htmlFor="Purpose"
                >
                  Payout *
                </label>
                <div className="w-full cursor-pointer flex items-center justify-between gap-2 shadow-sm my-2 bg-white z-10 text-gray-600 rounded-md border py-2 px-3 border-gray-400/50 ">
                  <div className="flex flex-col gap-1">
                    <p className="text-gray-600">Joshua Israel</p>
                    <p className="text-gray-500 text-sm">476829444444</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-gray-600">HSBC</p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 150 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.38281 50.9604C5.38281 42.6565 8.72655 37.5715 15.6499 33.7144L44.1619 17.849C59.0977 9.54515 66.5691 5.38281 74.755 5.38281C82.941 5.38281 90.4124 9.54515 105.348 17.849L133.86 33.7144C140.777 37.5715 144.127 42.6565 144.127 50.9604C144.127 53.208 144.127 54.3388 143.884 55.2614C142.594 60.1175 138.189 60.8875 133.936 60.8875H15.5736C11.3211 60.8875 6.92288 60.1244 5.62562 55.2614C5.38281 54.3319 5.38281 53.208 5.38281 50.9604Z"
                        stroke="#041827"
                        stroke-width="10"
                      />
                      <path
                        d="M74.7266 40.0703H74.789"
                        stroke="#041827"
                        stroke-width="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.2573 60.8828V119.849M47.0062 60.8828V119.849M102.504 60.8828V119.849M130.253 60.8828V119.849M123.316 119.849H26.1945C20.6749 119.849 15.3814 122.042 11.4784 125.945C7.57546 129.848 5.38281 135.141 5.38281 140.661C5.38281 141.581 5.74826 142.463 6.39875 143.114C7.04924 143.764 7.93149 144.129 8.85142 144.129H140.659C141.579 144.129 142.461 143.764 143.111 143.114C143.762 142.463 144.127 141.581 144.127 140.661C144.127 135.141 141.935 129.848 138.032 125.945C134.129 122.042 128.835 119.849 123.316 119.849Z"
                        stroke="#041827"
                        stroke-width="10"
                      />
                    </svg>
                  </div>
                </div>
                {/* <input
                  type="text"
                  className="w-full shadow-sm my-2 bg-white z-10 text-gray-600 rounded-md border py-5 px-3 border-gray-400/50 "
                  placeholder=""
                /> */}
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
              </div>
              <div>
                <label
                  className="font-semibold text-gray-600 sm:!text-lg text-sm "
                  htmlFor="Pasword"
                >
                  Account Password *
                </label>
                <input
                  type="password"
                  className="w-full shadow-sm my-2 bg-white z-10 text-gray-600 rounded-md border py-5 px-3 border-gray-400/50 "
                  placeholder=""
                />
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
              </div>

              <button className="text-white w-full rounded-md font-semibold text-sm sm:!text-lg py-2 cursor-pointer bg-[#1571E8]">
                Withdraw Now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WithdrawFunds;

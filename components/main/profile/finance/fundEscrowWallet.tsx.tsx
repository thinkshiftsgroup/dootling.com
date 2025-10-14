"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FundWalletSideModalProps {
  open: boolean;
  onClose: () => void;
}

const FundWalletSideModal: React.FC<FundWalletSideModalProps> = ({
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
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="fixed top-0 right-0 h-screen w-full max-w-[500px] bg-white z-50 shadow-xl border-l border-gray-200 rounded-none sm:!rounded-tl-2xl  sm:!rounded-bl-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 ">
              <div className="flex flex-col gap-1">
                <h2 className="sm:!text-lg text-sm font-bold text-gray-800">
                  Fund Escrow Wallet
                </h2>
                <p className="text-[#157BFF] text-xs sm:!text-base font-normal">
                  Maximum Allowed Per Transaction{" "}
                  <span className="font-bold">$5000</span>
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-100 text-black rounded-full"
              >
                <X size={14} />
              </Button>
            </div>

            <div className="flex-1 hide-scrollbar overflow-y-auto px-6 py-4 space-y-4">
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
                  Purpose *
                </label>
                <textarea
                  className="w-full h-[100px] shadow-sm my-2 bg-white z-10 text-gray-600 rounded-md border py-5 px-3 border-gray-400/50 "
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
                Proceed Now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FundWalletSideModal;

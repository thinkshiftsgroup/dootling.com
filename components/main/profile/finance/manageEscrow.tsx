"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FundWalletSideModalProps {
  open: boolean;
  onClose: () => void;
}

const ManageEscrowFunds: React.FC<FundWalletSideModalProps> = ({
  open,
  onClose,
}) => {
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
            className="fixed top-0 right-0 h-screen w-full max-w-[500px] bg-white z-50 shadow-xl border-l border-gray-200 rounded-tl-2xl rounded-bl-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 ">
              <h2 className="text-lg font-bold text-gray-800">
                Manage Escrow Funds
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-100 text-black rounded-full"
              >
                <X className="w-7 h-7 " />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <div>
                <label
                  className="font-semibold text-gray-600 text-lg "
                  htmlFor="Amount"
                >
                  Move Money to Available Wallet Balance *
                </label>
                <div className="flex my-2">
                  <div className="w-1/3 -mr-10 bg-gray-200 rounded-md border p-2 border-gray-400/50">
                    <p className="font-bold text-lg uppercase">USD</p>
                  </div>
                  <input
                    type="text"
                    className="w-full shadow-sm bg-white z-10 text-gray-600 rounded-md border p-2 border-gray-400/50"
                    placeholder="$500000"
                    inputMode="numeric"
                  />
                </div>
              </div>
              <div>
                <label
                  className="font-semibold text-gray-600 text-lg "
                  htmlFor="Amount"
                >
                  Purpose *
                </label>
                <input
                  type="text"
                  className="w-full shadow-sm my-2 bg-white z-10 text-gray-600 rounded-md border p-2 border-gray-400/50"
                  placeholder="select"
                />
              </div>
              <button className="text-white w-full rounded-md font-semibold text-lg py-2 cursor-pointer bg-[#1571E8]">
                Transfer Now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ManageEscrowFunds;

"use client";
import React, { useState } from "react";

interface EditContPercentageProps {
  onClose: () => void;
}

const EditContPercentage: React.FC<EditContPercentageProps> = ({ onClose }) => {
  const [released, setReleased] = useState("");
  const [balance, setBalance] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ released, balance });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md w-[90%] sm:w-[400px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">Update Contributor's Percentage </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Released Percentage (%)
            </label>
            <input
              type="number"
              value={released}
              onChange={(e) => setReleased(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#157bff]"
              placeholder="50%"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Balance Percentage (%)
            </label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#157bff]"
              placeholder="50%"
            />
          </div>

          <div className="flex justify-end gap-3 mt-5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm rounded-sm bg-[#157bff] text-white hover:bg-[#0d6eff]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContPercentage;

"use client";
import { useRouter } from "next/navigation";
import { X } from "phosphor-react";
import React, { useState } from "react";

const ConfirmUnlinkAction = ({
  setOpenModal,
}: {
  setOpenModal: (open: boolean) => void;
}) => {
  const [userName, setUserName] = useState("");
  const [userList, setUserList] = useState<string[]>([]);

  const handleAddUser = () => {
    if (!userName.trim()) return;
    setUserList((prev) => [...prev, userName.trim()]);
    setUserName("");
  };

  const [tabs, setTabs] = useState("Overview");

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleConfirm = () => {
    // Add your confirmation logic here
    console.log("Action confirmed");
    setOpenModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg max-w-sm w-full mx-4"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            Confirm Action
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-700">Are you sure you want to unlink?</p>
        </div>

        <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-lg">
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 px-4 py-2 bg-[#157BFF] text-white rounded-sm hover:bg-blue-700 transition font-medium"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmUnlinkAction;

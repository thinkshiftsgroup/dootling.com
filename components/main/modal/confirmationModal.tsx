"use client";
import { X } from "phosphor-react";
import Image from "next/image";
import React from "react";
import { Loader2 } from "lucide-react";

interface ConfirmationModalProps {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
  user?: {
    name?: string;
    image?: string | null;
  };
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Continue",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isLoading = false,
  user,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onCancel}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg max-w-sm w-full mx-4"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="sm:p-4 p-2 text-center space-y-3">
          {user && (
            <div className="flex flex-col items-center justify-center">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name ?? "User"}
                  width={60}
                  height={60}
                  className="rounded-full border border-gray-300 object-cover w-[60px] h-[60px]"
                />
              ) : (
                <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-200 rounded-full text-gray-500">
                  {user.name?.charAt(0).toUpperCase() ?? "?"}
                </div>
              )}
              <p className="mt-2 text-base font-bold  text-[#157bff]">{user.name}</p>
            </div>
          )}

          <p className="text-gray-700">{message}</p>
        </div>

        <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-lg">
          <button
            onClick={!isLoading ? onCancel : undefined}
            disabled={isLoading}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-medium disabled:opacity-50"
          >
            {cancelText}
          </button>
          <button
            onClick={!isLoading ? onConfirm : undefined}
            disabled={isLoading}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-sm hover:bg-red-700 transition font-medium disabled:opacity-70"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" size={16} />
              </span>
            ) : (
              confirmText
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

"use client";
import { useProject } from "@/hooks/useProjects";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { X } from "phosphor-react";
import React, { useState } from "react";
import { toast } from "sonner";

interface ConfirmConvertProjectToEscrowProps {
  setOpenModal: (open: boolean) => void;
  projectId: string;
}

const ConfirmConvertProjectToEscrow: React.FC<
  ConfirmConvertProjectToEscrowProps
> = ({ setOpenModal, projectId }) => {
  const { convertProjectToEscrowFn } = useProject();
  const queryClient = useQueryClient();

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg max-w-sm w-full mx-4 animate-fadeIn"
      >
        {/* Header */}
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
          <p className="text-gray-700">
            Are you sure you want to convert this project
            to an escrow contract?
          </p>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-lg">
          <button
            onClick={handleClose}
            disabled={convertProjectToEscrowFn.isPending}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              convertProjectToEscrowFn.mutate(
                {
                  projectId: projectId!,
                },
                {
                  onSuccess: (data) => {
                    toast.success(`${data.project.title} converted to escrow successfully!`);
                    handleClose();
                    queryClient.invalidateQueries({
                      queryKey: ["get-all-project"],
                    });
                  },
                }
              )
            }
            disabled={convertProjectToEscrowFn.isPending}
            className="flex-1 px-4 py-2 bg-[#157BFF] text-white rounded-sm hover:bg-blue-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {convertProjectToEscrowFn.isPending ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Converting...
              </>
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmConvertProjectToEscrow;

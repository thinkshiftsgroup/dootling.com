"use client";
import { useProject } from "@/hooks/useProjects";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "sonner";

interface EditContPercentageProps {
  onClose: () => void;
  contributorId: string | null;
  project: any;
}

const EditContPercentage: React.FC<EditContPercentageProps> = ({
  onClose,
  contributorId,
  project,
}) => {
  const [released, setReleased] = useState("");
  const [balance, setBalance] = useState("");

  const { editProjectById } = useProject();
  const { mutate: editProject, isPending } = editProjectById;
  const queryClient = useQueryClient();

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!contributorId) return;

    const payload = {
      contributors: [
        {
          action: "update",
          id: contributorId,
          releasedPercentage: parseInt(released),
          // budgetPercentage: parseInt(balance),
        },
      ],
    };

    editProject(
      { id: project.id, payload },
      {
        onSuccess: () => {
          toast.success("Project updated successfully");
          queryClient.invalidateQueries({ queryKey: ["get-all-project"] });
          onClose();
        },
        onError: (error: any) => {
          toast.error(
            error?.response?.data?.message || "Something went wrong. Try again."
          );
        },
      }
    );
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
        <h2 className="text-lg font-semibold mb-4">
          Update Contributor's Percentage{" "}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Released Percentage (%)
            </label>
            <input
              type="number"
              value={released}
              onChange={(e) => setReleased(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#157bff] text-gray-700 "
              placeholder="50%"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget Percentage (%)
            </label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#157bff] text-gray-700 "
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
              disabled={isPending}
              
              type="submit"
              className="px-4 py-2 text-sm rounded-sm bg-[#157bff] text-white hover:bg-[#0d6eff]"
            >
              {isPending ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContPercentage;

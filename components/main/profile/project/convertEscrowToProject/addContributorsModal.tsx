"use cient";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { useProject } from "@/hooks/useProjects";
import { toast } from "sonner";
import { useFollowing } from "@/hooks/useFollow";

interface AddContProp {
  open: boolean;
  onClose: () => void;
  project: any;
}

interface Contributor {
  id: string;
  fullName: string;
  role?: string;
  country?: string;
}

const AddContributorsModal: React.FC<AddContProp> = ({
  onClose,
  open,
  project,
}) => {
  const [userName, setUserName] = useState("");
  const [userList, setUserList] = useState<string[]>([]);
  const [role, setRole] = useState("");
  const [released, setReleased] = useState("");
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");
  const [selectedContributors, setSelectedContributors] = useState("");

  const { editProjectById } = useProject();
  const { mutate: editProject, isPending } = editProjectById;
  const queryClient = useQueryClient();

  const { getFollowers } = useFollowing();

  const contributors: Contributor[] = getFollowers.data?.list || [];

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!project.id) return;

    const payload = {
      ...(date ? { deliveryDate: new Date(date).toISOString() } : {}),
      contributors: [
        {
          action: "create",
          id: selectedContributors,
          role,
          releasedPercentage: parseInt(released),
          budgetPercentage: parseInt(budget),
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
              <h2 className="text-base font-bold text-gray-800">
                Add Contributors
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

            <div className="mx-6 space-y-2">
              <div>
                <label
                  className="text-[#404040] text-sm sm:!text-base font-semibold"
                  htmlFor=""
                >
                  Select Contributors
                </label>
                <div className="relative my-2">
                  <select
                    value={selectedContributors}
                    onChange={(e) => setSelectedContributors(e.target.value)}
                    className="flex-1 w-full border border-gray-300 rounded-sm p-2 text-gray-700 focus:outline-none focus:border-[#157BFF] bg-white"
                  >
                    <option value="">Select a contributor</option>
                    {contributors.length > 0 ? (
                      contributors.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.fullName} ({c.role || "Contributor"}
                          {c.country ? ` - ${c.country}` : ""})
                        </option>
                      ))
                    ) : (
                      <option disabled>No contributors available</option>
                    )}
                  </select>
                </div>
              </div>
             
              <div>
                <label
                  className="text-[#404040] text-sm sm:!text-bsse font-semibold"
                  htmlFor=""
                >
                  Role
                </label>
                <input
                  type="text"
                  value={role}
                  className=" text-sm sm:!text-base p-2 rounded-sm w-full border border-[#000000]/40 text-black"
                  placeholder="Project Manager"
                  onChange={(e) => setRole(e.target.value)}
                />
                <div className="relative my-2"></div>
              </div>
              <div className="w-full">
                <label
                  className="text-[#404040] text-sm sm:!text-bsse font-semibold"
                  htmlFor=""
                >
                  Percentage of Total Budget(%)
                </label>
                <input
                  type="text"
                  value={budget}
                  className=" text-sm sm:!text-base p-2 rounded-sm w-full border border-[#000000]/40 text-black"
                  placeholder="50%"
                  onChange={(e) => setBudget(e.target.value)}
                />
                <div className="relative my-2"></div>
              </div>{" "}
              {/* <div className="w-full">
                <label
                  className="text-[#404040] text-sm sm:!text-bsse font-semibold"
                  htmlFor=""
                >
                  Percentage to Release(%)
                </label>
                <input
                  type="text"
                  value={userName}
                  className=" text-sm sm:!text-base p-2 rounded-sm w-full border border-[#000000]/40 text-black"
                  placeholder="50%"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <div className="relative my-2"></div>
              </div> */}
              <div className="w-full">
                <label
                  className="text-[#404040] text-sm sm:!text-bsse font-semibold"
                  htmlFor=""
                >
                  Funds Release Date
                </label>
                <input
                  type="date"
                  value={date}
                  className=" text-sm sm:!text-base p-2 rounded-sm w-full border border-[#000000]/40 text-black"
                  placeholder="50%"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setDate(e.target.value)}
                />
                <div className="relative my-2"></div>
              </div>
              <button onClick={handleSubmit} disabled={isPending} className="text-white w-full rounded-md font-semibold text-base py-2 cursor-pointer bg-[#1571E8]">
                { isPending ? "Loading" :"Add Contributor"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddContributorsModal;

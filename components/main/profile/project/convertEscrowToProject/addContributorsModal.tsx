"use cient";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, X } from "lucide-react";
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

export interface Contributor {
  id: string;
  projectId: string;
  userId: string;
  releasePercentage: number;
  fundsReleased: number;
  role?: string | null;
  createdAt: string;
  updatedAt: string;
  project: {
    id: string;
    title: string;
  };
  user: {
    id: string;
    fullName: string;
    username: string;
    country?: string | null;
    headline?: string | null;
    profilePhotoUrl?: string | null;
    lastActive?: string | null;
  };
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

  const { getFollowers, getAllContributors } = useFollowing();

  const contributors = getFollowers.data?.list || [];
  // const contributors: Contributor[] =
  //   getAllContributors.data?.contributors || [];
  // console.log(contributors, "cont");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!project.id) return;

    const payload = {
      ...(date ? { deliveryDate: new Date(date).toISOString() } : {}),
      contributors: [
        {
          action: "create",
          userId: selectedContributors,
          role,
          budgetPercentage: parseInt(budget),
          releasePercentage: parseInt(released),
        },
      ],
    };

    editProject(
      { id: project.id, payload },
      {
        onSuccess: () => {
          toast.success("Contributor Added successfully");
          queryClient.invalidateQueries({
            queryKey: ["get-all-project-with-id"],
          });
          onClose();
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
                    className=" text-sm sm:!text-base p-2 rounded-sm w-full border border-[#000000]/40 text-black"
                  >
                    <option value="">Select a contributor</option>
                    {contributors.length > 0 ? (
                      contributors.map((c: any) => (
                        <option key={c.id} value={c.id}>
                          {c.fullName} ({c.username})
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
              <div className="w-full">
                <label
                  className="text-[#404040] text-sm sm:!text-bsse font-semibold"
                  htmlFor=""
                >
                  Percentage to Release(%)
                </label>
                <input
                  type="text"
                  value={released}
                  className=" text-sm sm:!text-base p-2 rounded-sm w-full border border-[#000000]/40 text-black"
                  placeholder="50%"
                  onChange={(e) => setReleased(e.target.value)}
                />
                <div className="relative my-2"></div>
              </div>
              {/* <div className="w-full">
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
              </div> */}
              <button
                onClick={handleSubmit}
                disabled={isPending}
                className="text-white flex items-center justify-center w-full rounded-md font-semibold text-base py-2 cursor-pointer bg-[#1571E8]"
              >
                {isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Add Contributor"
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddContributorsModal;

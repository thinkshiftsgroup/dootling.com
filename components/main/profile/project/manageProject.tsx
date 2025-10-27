"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProject } from "@/hooks/useProjects";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useFollowing } from "@/hooks/useFollow";

interface ManageProjectProps {
  open: boolean;
  onClose: () => void;
  projectId: string | number | null;
}

const ManageProject: React.FC<ManageProjectProps> = ({
  open,
  onClose,
  projectId,
}) => {
  const [selected, setSelectedRadio] = useState("invite");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [selectedContributors, setSelectedContributors] = useState<any[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { getFollowers } = useFollowing();
  const queryClient = useQueryClient();
  const { getAllProjectById, editProjectById } = useProject();
  const { data, isLoading } = getAllProjectById(projectId!);
  const { mutate: editProject, isPending } = editProjectById;

  const imageRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (data) {
      setTitle(data?.title || "");
      setSummary(data?.description || "");
      setSelectedRadio(data?.isPublic ? "anyone" : "invite");

      if (data?.contributors?.length) {
        setSelectedContributors(
          data.contributors.map((c: any) => ({
            id: c.user.id,
            fullName: c.user.fullName,
            email: c.user.email,
            profilePhotoUrl: c.user.profilePhotoUrl,
          }))
        );
      }
    }
  }, [data]);

  const handleAddContributor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const contributorId = e.target.value;
    if (!contributorId) return;

    const selectedUser = getFollowers.data?.list?.find(
      (f: any) => f.id === contributorId
    );
    if (!selectedUser) return;

    const alreadyExists = selectedContributors.some(
      (c) => c.id === selectedUser.id
    );
    if (alreadyExists) {
      toast.error("Contributor already added");
      return;
    }

    setSelectedContributors((prev) => [...prev, selectedUser]);
  };

  const handleDeleteContributor = (id: string | number) => {
    setSelectedContributors((prev) => prev.filter((c) => c.id !== id));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setImagePreview(URL.createObjectURL(selected));
    }
  };

  const handleEditProject = () => {
    if (!projectId) return;

    const contributorIds =
      selectedContributors.length > 0
        ? selectedContributors.map((c) => c.id)
        : undefined;

    const payload = {
      title,
      description: summary,
      isPublic: selected === "anyone",
      contributors: [
        {
          action: "create",
          userId: contributorIds,
        },
      ],
      // ...(contributorIds ? { contributorIds } : {}),
    };

    editProject(
      { id: projectId, payload },
      {
        onSuccess: () => {
          toast.success("Project updated successfully");
          queryClient.invalidateQueries({ queryKey: ["get-all-project"] });
          onClose();
        },
        onError: (error:any) => {
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
            className="fixed inset-0 z-40 bg-black/40"
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
            className="fixed top-0 right-0 h-screen w-full max-w-[500px] bg-white z-50 shadow-xl border-l border-gray-200 sm:!rounded-tl-2xl sm:!rounded-bl-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-bold text-gray-800">
                Manage Project
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-100 text-black rounded-full"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto hide-scrollbar px-6 py-4 space-y-6">
              <div>
                <label className="text-black font-medium">Images</label>
                <div
                  onClick={() => imageRef.current?.click()}
                  className="bg-[#FBFBFB] border border-[#D1D1D1] rounded-sm cursor-pointer flex items-center justify-center w-32 h-32 overflow-hidden"
                >
                  {imagePreview ? (
                    <div className="relative w-full h-full">
                      <img
                        src={imagePreview}
                        alt="Uploaded"
                        className="object-cover w-full h-full"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setImagePreview(null);
                        }}
                        className="absolute top-1 right-1 bg-white/70 hover:bg-white p-1 rounded-full text-red-500"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 170 169"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.2 99.6V68.8H69.4V0H100.6V68.8H169.4V99.6H100.6V168.4H69.4V99.6H0.2Z"
                        fill="#979797"
                      />
                    </svg>
                  )}
                </div>

                <input
                  ref={imageRef}
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-600 text-sm">
                  Project Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border rounded-sm text-sm bg-white text-gray-600 p-2 border-gray-300 focus:border-[#157BFF] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-600 text-sm">
                  Project Summary Description *
                </label>
                <textarea
                  rows={4}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full text-gray-600 border border-[#f1f1f1] rounded-md text-sm p-2 focus:outline-none focus:border-[#157BFF] resize-none"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-600 text-sm">
                  Add Contributors *
                </label>
                <select
                  onChange={handleAddContributor}
                  className="mt-2 w-full border border-gray-300 rounded-sm p-2 text-gray-700 bg-white focus:outline-none focus:border-[#157BFF]"
                >
                  <option value="">Select a contributor...</option>
                  {getFollowers.data?.list?.map((user: any) => (
                    <option key={user.id} value={user.id}>
                      {user.fullName}
                    </option>
                  ))}
                </select>

                <div className="mt-3 space-y-2">
                  {selectedContributors.map((c) => (
                    <div
                      key={c.id}
                      className="flex items-center justify-between border rounded-md p-2 text-sm text-gray-800"
                    >
                      <div className="flex items-center gap-2">
                        {c.profilePhotoUrl ? (
                          <img
                            src={c.profilePhotoUrl}
                            alt={c.fullName}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                            {c.fullName.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <p>
                          <span className="font-semibold">{c.fullName}</span>{" "}
                          {/* <span className="text-gray-500 text-xs">
                            ({c.email})
                          </span> */}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteContributor(c.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="privacy"
                    value="invite"
                    checked={selected === "invite"}
                    onChange={(e) => setSelectedRadio(e.target.value)}
                    className="h-4 w-4 accent-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-600">
                    Make Project Private <span>(Invite Only)</span>
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="privacy"
                    value="anyone"
                    checked={selected === "anyone"}
                    onChange={(e) => setSelectedRadio(e.target.value)}
                    className="h-4 w-4 accent-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-600">
                    Make Project Public <span>(Anyone Can Join)</span>
                  </span>
                </label>
              </div>

              <Button
                onClick={handleEditProject}
                disabled={isPending}
                className="w-full bg-[#1571E8] text-white py-2 rounded-sm font-medium hover:bg-blue-600 transition"
              >
                {isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Save Changes"
                )}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ManageProject;

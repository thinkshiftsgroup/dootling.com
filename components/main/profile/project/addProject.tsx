"use client";
import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProject } from "@/hooks/useProjects";
import { toast } from "sonner";
import { useFollowing } from "@/hooks/useFollow";
import { useQueryClient } from "@tanstack/react-query";

interface AddProjectsModalProps {
  open: boolean;
  onClose: () => void;
}

interface Contributor {
  id: string;
  fullName: string;
  role?: string;
  country?: string;
}

const AddProjectsModal: React.FC<AddProjectsModalProps> = ({
  open,
  onClose,
}) => {
  const { createProject } = useProject();
  const { getFollowers } = useFollowing();

  const contributors: Contributor[] = getFollowers.data?.list || [];

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [selected, setSelectedRadio] = useState("invite");
  const [inputValue, setInputValue] = useState("");
  const [selectedContributors, setSelectedContributors] = useState<
    Contributor[]
  >([]);

  const queryClient = useQueryClient();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };

  const handleDeleteContributor = (id: string) => {
    setSelectedContributors((prev) => prev.filter((c) => c.id !== id));
  };

  const imageRef = useRef<HTMLInputElement | null>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setImagePreview(URL.createObjectURL(selected));
      setImageFile(selected);
    }
  };

  const handleSubmit = () => {
    if (!title.trim() || !summary.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const contributorIds =
      selectedContributors.length > 0
        ? selectedContributors.map((c) => c.id)
        : undefined;

    createProject.mutate(
      {
        title: title.trim(),
        description: summary.trim(),
        isPublic: selected === "anyone",
        contributorIds,
        image: imageFile || undefined,
      },
      {
        onSuccess: () => {
          toast.success("Project created successfully!");
          setTitle("");
          setSummary("");
          setSelectedContributors([]);
          setImagePreview(null);
          setImageFile(null);
          onClose();
          queryClient.invalidateQueries({ queryKey: ["get-all-project"] });
        },
      }
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/20"
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
            className="fixed top-0  right-0 h-screen w-full max-w-[500px] bg-white z-50 shadow-xl border-l border-gray-200 sm:!rounded-tl-2xl rounded-none sm:!rounded-bl-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-bold text-gray-800">
                Create Project
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-100 text-black rounded-full"
              >
                <X className="w-7 h-7" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto hide-scrollbar px-6 py-4 space-y-6">
              <div className="w-full">
                <label htmlFor="imageUpload" className="text-black font-medium">
                  Images
                </label>

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
                <label className="font-semibold text-gray-600 text-sm sm:text-base">
                  Project Title *
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="w-full border rounded-sm mt-2 sm:text-sm text-xs bg-white text-gray-600 p-2 border-gray-300 focus:border-[#157BFF] outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-600 text-sm sm:text-base">
                  Project Summary Description *
                </label>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows={4}
                  className="w-full border border-gray-300 rounded-md text-sm p-2 mt-2 focus:outline-none focus:border-[#157BFF] transition-colors resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="font-semibold text-gray-600 text-sm sm:text-base">
                  Add Contributors *
                </label>

                <div className="flex gap-2 mt-2">
                  <select
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-sm p-2 text-gray-700 focus:outline-none focus:border-[#157BFF] bg-white"
                  >
                    <option value="">Select a contributor</option>
                    {contributors.length > 0 ? (
                      contributors
                        .filter(
                          (c) =>
                            !selectedContributors.some((s) => s.id === c.id)
                        )
                        .map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.fullName} ({c.role || "Contributor"}
                            {c.country ? ` - ${c.country}` : ""})
                          </option>
                        ))
                    ) : (
                      <option disabled>No contributors available</option>
                    )}
                  </select>

                  <button
                    type="button"
                    onClick={() => {
                      const selectedContributor = contributors.find(
                        (c) => c.id === inputValue
                      );
                      if (selectedContributor) {
                        setSelectedContributors((prev) => [
                          ...prev,
                          selectedContributor,
                        ]);
                        setInputValue("");
                      } else {
                        toast.error(
                          "Please select a contributor from the dropdown."
                        );
                      }
                    }}
                    className="px-3 flex items-center gap-2 justify-center text-white bg-[#157BFF] font-medium hover:bg-blue-600 transition-colors rounded-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add
                  </button>
                </div>

                <div className="space-y-2 mt-3">
                  {selectedContributors.map((c) => (
                    <div
                      key={c.id}
                      className="flex items-center justify-between text-gray-800 border rounded-md p-2 text-sm"
                    >
                      <p>
                        <span className="font-semibold">{c.fullName}</span>
                        <span className="text-gray-500 text-xs ml-1">
                          ({c.role || "Contributor"})
                        </span>
                      </p>
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

              <div className="space-y-4 mt-8">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="privacy"
                    value="invite"
                    onChange={handleChange}
                    checked={selected === "invite"}
                    className="h-4 w-4 accent-blue-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-600">
                    Make Project Private
                    <span className="font-normal">(Invite Only)</span>
                  </span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="privacy"
                    value="anyone"
                    onChange={handleChange}
                    checked={selected === "anyone"}
                    className="h-4 w-4 accent-blue-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-600">
                    Make Project Public
                    <span className="font-normal">(Anyone Can Join)</span>
                  </span>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={createProject.isPending}
                className="text-white w-5/11 flex items-center justify-center gap-2 rounded-sm font-semibold text-base py-2 cursor-pointer bg-[#1571E8]"
              >
                {createProject.isPending ? (
                  <Loader2 size={30} className="animate-spin" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.504 12.35q.465-.93 1.013-1.792q.549-.862 1.21-1.685L8.192 8.56q-.154-.039-.298.01t-.26.163L5.208 11.16q-.058.057-.039.134t.096.116zm11.454-7.471q-2.308.165-4.065 1.015t-3.305 2.398Q10.482 9.4 9.657 10.6t-1.36 2.385l2.831 2.825q1.185-.535 2.394-1.36t2.318-1.933q1.548-1.548 2.398-3.292t1.015-4.052q0-.061-.009-.113t-.064-.108t-.108-.064t-.113-.01m-5.346 5.636q-.44-.441-.44-1.057t.44-1.057t1.06-.44t1.059.44t.44 1.057t-.44 1.056t-1.06.44t-1.06-.44m-1.85 6.108l.941 2.245q.039.076.115.086t.135-.048l2.427-2.408q.115-.115.163-.26q.049-.144.01-.297l-.313-1.535q-.823.662-1.685 1.207t-1.792 1.01M20.21 4.733q-.012 2.5-.948 4.612t-2.793 3.968q-.096.096-.183.173t-.182.173l.423 2.072q.08.404-.04.783q-.121.378-.414.67l-2.785 2.785q-.298.298-.727.22q-.428-.077-.59-.481l-1.198-2.825l-3.544-3.564l-2.825-1.198q-.404-.161-.475-.59t.227-.727L6.94 8.019q.292-.292.674-.403q.381-.112.785-.031l2.071.423q.096-.096.164-.173q.067-.077.163-.173q1.856-1.856 3.968-2.802t4.613-.958q.161.006.313.064t.283.19t.18.273t.054.304M5.117 16.167q.587-.586 1.426-.58t1.426.594t.584 1.426q-.003.84-.59 1.426q-.834.834-1.962 1.05q-1.128.215-2.278.325q.11-1.17.335-2.288t1.06-1.953m.713.727q-.445.445-.617 1.045t-.253 1.244q.645-.081 1.245-.26T7.25 18.3q.3-.3.306-.715q.005-.416-.295-.716t-.715-.287q-.415.012-.715.312"
                    ></path>
                  </svg>
                )}
                {createProject.isPending ? "Creating" : "Create Project"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddProjectsModal;

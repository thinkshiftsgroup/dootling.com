"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProject } from "@/hooks/useProjects";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

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
  const [contributors, setContributors] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const { getAllProjectById, editProjectById } = useProject();
  const { data, isLoading, isError } = getAllProjectById(projectId!);
  console.log(data, "get by id");
  const { mutate: editProject, isPending } = editProjectById;

  useEffect(() => {
    if (data) {
      setTitle(data?.title || "");
      setSummary(data?.description || "");
      setSelectedRadio(data?.isPublic ? "anyone" : "invite");
      setContributors(
        data?.contributors?.map((c: any) => c.fullName || c.name || "") || []
      );
    }
  }, [data]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    setContributors([...contributors, inputValue.trim()]);
    setInputValue("");
  };

  const handleDelete = (index: number) => {
    const updated = contributors.filter((_, i) => i !== index);
    setContributors(updated);
  };

  const queryClient = useQueryClient();
  const contributorIds =
    contributors.length > 0 ? contributors.map((c: any) => c.id) : undefined;

  const imageRef = useRef<HTMLInputElement | null>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setImagePreview(URL.createObjectURL(selected));
    }
  };

  const handleEditProject = () => {
    if (!projectId) return;

    const payload = {
      title,
      description: summary,
      isPublic: selected === "anyone",
      //if no contributor is selected dont send any
      // contributorIds: contributors,
      ...(contributorIds ? { contributorIds } : {}),
    };

    editProject(
      { id: projectId, payload },
      {
        onSuccess: () => {
          toast.success("Project updated successfully");
          queryClient.invalidateQueries({
            queryKey: ["get-all-project"],
          });
          onClose();
        },
        onError: (error: any) => {
          console.error(error);
          toast.error("Failed to update project");
        },
      }
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
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
            className="fixed top-0 right-0  h-screen w-full max-w-[500px] bg-white z-50 shadow-xl border-l border-gray-200 sm:!rounded-tl-2xl rounded-none sm:!rounded-bl-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 ">
              <h2 className="text-lg font-bold text-gray-800">
                Manage Project
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

            <div className="flex-1 overflow-y-auto hide-scrollbar px-6 py-4 space-y-4">
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
                <label
                  className="font-semibold text-gray-600 sm:!text-base text-sm"
                  htmlFor="Amount"
                >
                  Project Title *
                </label>
                <div className="flex my-2">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded-sm sm:!text-sm text-xs bg-white z-10 text-gray-600 p-2 border-gray-400/50"
                  />
                </div>
              </div>

              <div>
                <label
                  className="font-semibold text-gray-600 sm:!text-base text-sm"
                  htmlFor="Amount"
                >
                  Project Summary Description *
                </label>
                <div className="flex my-2">
                  <textarea
                    rows={4}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full text-gray-600 border border-[#f1f1f1] rounded-md text-sm p-2 focus:outline-none focus:border-[#157BFF] transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="mb-10">
                <label
                  className="font-semibold text-gray-600 sm:!text-base text-sm"
                  htmlFor="contributors"
                >
                  Add contributors *
                </label>

                <div className="flex my-2">
                  <div className="flex w-full border border-[#f1f1f1] rounded-sm focus-within:border-[#157BFF] transition">
                    <input
                      id="contributors"
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="John Ball (Director in Design - United Kingdom)"
                      className="flex-1 px-3 py-2 text-gray-700 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleAdd}
                      className="px-3 w-1/4 flex items-center gap-2 justify-center text-white bg-[#157BFF] font-medium hover:bg-blue-600 transition-colors rounded-sm"
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
                </div>

                <div className="space-y-2">
                  {contributors.map((name, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-800"
                    >
                      <p className="text-base">
                        <span className="font-semibold">
                          {name.split(" (")[0] || name}
                        </span>{" "}
                        {name.includes("(") ? `(${name.split("(")[1]}` : ""}
                      </p>
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3"
                          width={30}
                          height={30}
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="currentColor"
                            d="m9.129 0l1.974.005c.778.094 1.46.46 2.022 1.078c.459.504.7 1.09.714 1.728h5.475a.69.69 0 0 1 .686.693a.69.69 0 0 1-.686.692l-1.836-.001v11.627c0 2.543-.949 4.178-3.041 4.178H5.419c-2.092 0-3.026-1.626-3.026-4.178V4.195H.686A.69.69 0 0 1 0 3.505c0-.383.307-.692.686-.692h5.47c.014-.514.205-1.035.554-1.55C7.23.495 8.042.074 9.129 0m6.977 4.195H3.764v11.627c0 1.888.52 2.794 1.655 2.794h9.018c1.139 0 1.67-.914 1.67-2.794z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 mb-8">
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
                    Make Project Private{" "}
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
                    Make Project Public{" "}
                    <span className="font-normal">(Anyone Can Join)</span>
                  </span>
                </label>
              </div>

              <button
                onClick={handleEditProject}
                disabled={isPending}
                className="text-white w-5/11 flex items-center justify-center gap-2 rounded-sm font-medium text-base py-2 cursor-pointer bg-[#1571E8]"
              >
                {isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ManageProject;

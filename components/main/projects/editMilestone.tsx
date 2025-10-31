"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { FaFile } from "react-icons/fa6";
import { useProject } from "@/hooks/useProjects";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

interface EditMileStoneProp {
  open: boolean;
  onClose: () => void;
  projectId: any;
  milestone: any;
}

const EditMileStone: React.FC<EditMileStoneProp> = ({
  open,
  onClose,
  projectId,
  milestone,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    releaseDate: "",
    releasePercentage: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);

  const imageRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const { editMilestone, getAllProjectById } = useProject();
  const { data } = getAllProjectById(projectId!);

  useEffect(() => {
    if (!milestone) return;

    setFormData({
      title: milestone.title || "",
      description: milestone.description || "",
      dueDate: milestone.dueDate
        ? new Date(milestone.dueDate).toISOString().split("T")[0]
        : "",
      releaseDate: milestone.releaseDate
        ? new Date(milestone.releaseDate).toISOString().split("T")[0]
        : "",
      releasePercentage: milestone.releasePercentage?.toString() || "",
    });
    const milestoneImages =
      milestone.galleryItems
        ?.filter((i: any) => i.fileType.startsWith("image/"))
        .map((i: any) => i.url) || [];

    const milestoneFiles =
      milestone.galleryItems
        ?.filter((i: any) => i.fileType === "application/pdf")
        .map((i: any) => i.url) || [];

    setImages(milestoneImages);
    setFiles(milestoneFiles);
  }, [milestone]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    setImages((prev) => [...prev, ...newFiles]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleImageRemove = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileRemove = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const queryClient = useQueryClient();

  const handleEditMilestone = () => {
    if (!projectId) return;

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("dueDate", new Date(formData.dueDate).toISOString());
    if (formData.releaseDate) {
      formDataToSend.append(
        "releaseDate",
        new Date(formData.releaseDate).toISOString()
      );
    }
    formDataToSend.append("releasePercentage", formData.releasePercentage);
    formDataToSend.append("action", "update");
    formDataToSend.append("id", milestone.id);

    // Append all images (existing URLs + new files)
    images.forEach((img) => {
      formDataToSend.append("image", img);
    });

    // Append all files (existing URLs + new files)
    files.forEach((f) => {
      formDataToSend.append("file", f);
    });

    editMilestone.mutate(
      { id: projectId, payload: formDataToSend },
      {
        onSuccess: () => {
          toast.success("Milestone updated successfully");
          queryClient.invalidateQueries({
            queryKey: ["get-milestone-with-project-id"],
          });

          // reset state
          setFormData({
            title: "",
            description: "",
            dueDate: "",
            releaseDate: "",
            releasePercentage: "",
          });
          setImages([]);
          setFiles([]);
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
            className="fixed top-0 right-0 h-screen w-full max-w-[500px] bg-white z-50 shadow-xl border-l border-gray-200 rounded-none sm:!rounded-tl-2xl  sm:!rounded-bl-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-4 pt-4 ">
              <h2 className="sm:!text-lg text-sm font-bold text-[#157BFF]">
                Update Milestone
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-100 text-black rounded-full"
              >
                <X size={20} />
              </Button>
            </div>
            <p className="text-xs mb-3 px-4">
              Total Project Budget{" "}
              <span className="font-bold">${data?.totalBudget || 0}</span>
            </p>

            <div className="px-4 overflow-y-scroll hide-scrollbar mb-3 space-y-3">
              <div>
                <label htmlFor="" className="text-black font-medium">
                  Title*
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded-sm p-1.5 border border-[#D1D1D1]"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-full">
                  <label htmlFor="" className="text-black font-medium">
                    Release Percentage*
                  </label>
                  <input
                    id="release%"
                    name="releasePercentage"
                    value={formData.releasePercentage}
                    onChange={handleChange}
                    type="text"
                    placeholder="50%"
                    className="w-full rounded-sm p-1.5 border border-[#D1D1D1] text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#157bff]"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="dueDate" className="text-black font-medium">
                    Due Date
                  </label>
                  <input
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    id="dueDate"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-sm p-1.5 border border-[#D1D1D1] text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#157bff]"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-black font-medium">
                  Rule*
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full h-[200px] rounded-sm p-1.5 border border-[#D1D1D1]"
                />
              </div>
              <div className="w-full">
                <label
                  className="text-[#404040] text-sm sm:!text-bsse font-semibold"
                  htmlFor=""
                >
                  Release Date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  name="releaseDate"
                  value={formData.releaseDate}
                  onChange={handleChange}
                  className=" text-sm sm:!text-base p-2 rounded-sm w-full border border-[#000000]/40 text-black"
                  placeholder="50%"
                />
                <div className="relative my-2"></div>
              </div>
              <div className="w-full">
                <label htmlFor="imageUpload" className="text-black font-medium">
                  Images
                </label>

                <div className="flex flex-wrap gap-3 mt-2">
                  {images.map((img, index) => (
                    <div key={index} className="relative w-32 h-32">
                      <img
                        src={
                          typeof img === "string"
                            ? img
                            : URL.createObjectURL(img)
                        }
                        className="object-cover w-full h-full"
                      />
                      <button onClick={() => handleImageRemove(index)}>
                        <X />
                      </button>
                    </div>
                  ))}

                  <div
                    onClick={() => imageRef.current?.click()}
                    className="bg-[#FBFBFB] border border-[#D1D1D1] rounded-sm cursor-pointer flex items-center justify-center w-32 h-32"
                  >
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
                  </div>
                </div>

                <input
                  ref={imageRef}
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              <div>
                <label htmlFor="fileUpload" className="text-black font-medium">
                  File
                </label>

                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <div
                    onClick={() => fileRef.current?.click()}
                    className="border rounded-sm p-2 cursor-pointer text-sm border-[#D1D1D1] font-medium hover:bg-gray-50"
                  >
                    + Add or Drag & Drop File
                  </div>

                  {files.map((f: any, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FaFile />
                      <span>
                        {typeof f === "string" ? f.split("/").pop() : f.name}
                      </span>
                      <button onClick={() => handleFileRemove(index)}>
                        <X />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Hidden Input */}
                <input
                  ref={fileRef}
                  type="file"
                  id="fileUpload"
                  accept="application/pdf"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
              <button
                disabled={editMilestone.isPending}
                onClick={handleEditMilestone}
                className="rounded-sm text-base mt-3  font-bold text-white bg-[#FAAF40] p-2"
              >
                {editMilestone.isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Update Milestone"
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EditMileStone;

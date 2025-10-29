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

  const [images, setImages] = useState<File[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);

  const imageRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const { editMilestone, getAllProjectById } = useProject();
  const { data } = getAllProjectById(projectId!);

  useEffect(() => {
    if (milestone) {
      setFormData({
        title: milestone.title || "",
        description: milestone.description || "",
        dueDate: milestone.dueDate
          ? new Date(milestone.dueDate).toISOString().split("T")[0]
          : "",
        releaseDate: milestone.releaseDate
          ? new Date(milestone.releaseDate).toISOString().split("T")[0]
          : "",
        releasePercentage: milestone.releasePercentage || 0,
      });

      if (milestone.images) {
        setExistingImages(milestone.images);
        setImagePreview(milestone.images);
      }

      if (milestone.files) {
        setFiles(milestone.files);
      }
    }
  }, [milestone]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const fileArray = Array.from(files);
    setImages(fileArray);
    setImagePreview((prev) => [
      ...prev,
      ...fileArray.map((file) => URL.createObjectURL(file)),
    ]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleFileRemove = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageRemove = (index: number) => {
    const removed = imagePreview[index];

    if (existingImages.includes(removed)) {
      setExistingImages((prev) => prev.filter((img) => img !== removed));
    } else {
      setImages((prev) => prev.filter((_, i) => i !== index));
    }

    setImagePreview((prev) => prev.filter((_, i) => i !== index));
  };

  const queryClient = useQueryClient();

  const handleEditMilestone = () => {
    if (!projectId) return;

    const payload = {
      title: formData.title,
      releasePercentage: parseInt(formData.releasePercentage),
      dueDate: new Date(formData.dueDate).toISOString(),
      releaseDate: new Date(formData.releaseDate).toISOString(),
      description: formData.description,
      existingImages: existingImages,
      newImages: images,
      files: files,
      action: "update",
      id: milestone.id,
    };

    editMilestone.mutate(
      { id: projectId, payload },
      {
        onSuccess: () => {
          toast.success("Milestone updated successfully");
          queryClient.invalidateQueries({
            queryKey: ["get-milestone-with-project-id"],
          });
          setFormData({
            title: "",
            description: "",
            dueDate: "",
            releaseDate: "",
            releasePercentage: "",
          });
          setImages([]);
          setExistingImages([]);
          setImagePreview([]);
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
              {/* <div className="w-full">
                <label htmlFor="" className="text-black font-medium">
                  Contributors*
                </label>
                <select
                  name=""
                  id=""
                  className=" text-sm sm:!text-sm p-1.5 rounded-sm w-full border border-[#D1D1D1]"
                >
                  <option value=""></option>
                  <option value="">John Israel</option>
                </select>
              </div> */}
              {/* <div className="w-full">
                <label
                  className="text-[#404040] text-sm sm:!text-bsse font-semibold"
                  htmlFor=""
                >
                  Percentage of Total Budget(%)
                </label>
                <input
                  type="text"
                  className=" text-sm sm:!text-base p-2 rounded-sm w-full border border-[#000000]/40 text-black"
                  placeholder="50%"
                />
                <div className="relative my-2"></div>
              </div> */}
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
                  {imagePreview.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-32 h-32 border rounded-sm overflow-hidden"
                    >
                      <img
                        src={src}
                        alt={`Preview ${index}`}
                        className="object-cover w-full h-full"
                      />
                      <button
                        type="button"
                        onClick={() => handleImageRemove(index)}
                        className="absolute top-1 right-1 bg-white/70 hover:bg-white p-1 rounded-full text-red-500"
                      >
                        <X size={14} />
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

                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 border border-[#D1D1D1] rounded-sm p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 384 512"
                        className="text-red-500"
                      >
                        <path
                          fill="currentColor"
                          d="M181.9 256.1c-5-16-4.9-46.9-2-46.9c8.4 0 7.6 36.9 2 46.9m-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7c18.3-7 39-17.2 62.9-21.9c-12.7-9.6-24.9-23.4-34.5-40.8M248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24"
                        />
                      </svg>

                      <span className="text-xs font-medium text-gray-800 truncate max-w-[120px]">
                        {file.name}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleFileRemove(index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7.616 20q-.667 0-1.141-.475T6 18.386V6h-.5q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5H9q0-.31.23-.54t.54-.23h4.46q.31 0 .54.23T15 5h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 6H18v12.385q0 .666-.475 1.14t-1.14.475zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.269 0 .442-.173t.173-.442zm-6.692 11q.213 0 .357-.144t.143-.356v-8q0-.213-.144-.356T10.307 8t-.356.144t-.143.356v8q0 .213.144.356q.144.144.356.144m3.385 0q.213 0 .356-.144t.143-.356v-8q0-.213-.144-.356Q13.904 8 13.692 8q-.213 0-.357.144t-.143.356v8q0 .213.144.356t.357.144M7 6v13z" />
                        </svg>
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
                  "Update Task"
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

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddSpaceModalProps {
  open: boolean;
  onClose: () => void;
}

const AddSpaceModal: React.FC<AddSpaceModalProps> = ({ open, onClose }) => {
  const [purpose, setPurpose] = useState("");
  const [selected, setSelectedRadio] = useState("invite");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };

  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    setCollaborators([...collaborators, inputValue.trim()]);
    setInputValue("");
  };

  const handleDelete = (index: number) => {
    const updated = collaborators.filter((_, i) => i !== index);
    setCollaborators(updated);
  };

  function setSelected(arg0: string): void {
    throw new Error("Function not implemented.");
  }

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
            className="fixed top-0 right-0 h-screen w-full max-w-[500px] bg-white z-50 shadow-xl border-l border-gray-200 sm:!rounded-tl-2xl rounded-none sm:!rounded-bl-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 ">
              <h2 className="text-lg font-bold text-gray-800">
                Create Space
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

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <div>
                <label
                  className="font-semibold text-gray-600 sm:!text-base  text-sm"
                  htmlFor="Amount"
                >
                  Space Title *
                </label>
                <div className="flex my-2">
                  <input
                    type="text"
                    className="w-full border rounded-sm sm:!text-sm text-xs bg-white z-10 text-gray-600 p-2 border-gray-400/50"
                  />
                </div>
              </div>

              <div>
                <label
                  className="font-semibold text-gray-600 sm:!text-base  text-sm"
                  htmlFor="Amount"
                >
                  Space Summary Description *
                </label>
                <div className="flex my-2">
                  <textarea
                    rows={4}
                    className="w-full border border-[#f1f1f1] rounded-md text-sm p-2 focus:outline-none focus:border-[#157BFF] transition-colors resize-none"
                  />
                </div>
              </div>


              <div className="mb-10">
                <label
                  className="font-semibold text-gray-600 sm:!text-base text-sm"
                  htmlFor="collaborators"
                >
                  Add Collaborators *
                </label>

                <div className="flex my-2">
                  <div className="flex w-full border border-[#f1f1f1] rounded-sm focus-within:border-[#157BFF] transition">
                    <input
                      id="collaborators"
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="John Ball (Director in Design - United Kingdom)"
                      className="flex-1 px-3 sm:!text-base text-sm py-2 text-gray-700 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleAdd}
                      className="px-3 w-1/4 flex items-center sm:!gap-2 gap-0.5 justify-center text-white bg-[#157BFF] font-medium hover:bg-blue-600 transition-colors rounded-sm"
                    >
                      <svg
                        className="w-4 h-4 flex-none"
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
                  {collaborators.map((name, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-800"
                    >
                      <p className="sm:!text-base text-sm">
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
                            d="m9.129 0l1.974.005c.778.094 1.46.46 2.022 1.078c.459.504.7 1.09.714 1.728h5.475a.69.69 0 0 1 .686.693a.69.69 0 0 1-.686.692l-1.836-.001v11.627c0 2.543-.949 4.178-3.041 4.178H5.419c-2.092 0-3.026-1.626-3.026-4.178V4.195H.686A.69.69 0 0 1 0 3.505c0-.383.307-.692.686-.692h5.47c.014-.514.205-1.035.554-1.55C7.23.495 8.042.074 9.129 0m6.977 4.195H3.764v11.627c0 1.888.52 2.794 1.655 2.794h9.018c1.139 0 1.67-.914 1.67-2.794zM6.716 6.34c.378 0 .685.31.685.692v8.05a.69.69 0 0 1-.686.692a.69.69 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692m2.726 0c.38 0 .686.31.686.692v8.05a.69.69 0 0 1-.686.692a.69.69 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692m2.728 0c.378 0 .685.31.685.692v8.05a.69.69 0 0 1-.685.692a.69.69 0 0 1-.686-.692v-8.05a.69.69 0 0 1 .686-.692M9.176 1.382c-.642.045-1.065.264-1.334.662c-.198.291-.297.543-.313.768l4.938-.001c-.014-.291-.129-.547-.352-.792c-.346-.38-.73-.586-1.093-.635z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6 mb-8">
                {/* Option 1 */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="privacy"
                    value="invite"
                    onChange={handleChange}
                    checked={selected === "invite"}
                    className="h-4 w-4 accent-blue-500 cursor-pointer"
                  />
                  <span className="sm:!text-sm text-xs font-medium text-gray-600">
                    Make Space Private{" "}
                    <span className="font-normal">(Invite Only)</span>
                  </span>
                </label>

                {/* Option 2 */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="privacy"
                    value="anyone"
                    onChange={handleChange}
                    checked={selected === "anyone"}
                    className="h-4 w-4 accent-blue-500 cursor-pointer"
                  />
                  <span className="sm:!text-sm text-xs font-medium text-gray-600">
                    Make Space Private{" "}
                    <span className="font-normal">(Anyone Can Join)</span>
                  </span>
                </label>
              </div>

              <button className="text-white md:!w-5/11 w-full flex items-center justify-center gap-2 rounded-sm font-semibold sm:!text-lg text-base py-4 cursor-pointer bg-[#1571E8]">
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
                </svg>{" "}
                Create Space
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddSpaceModal;

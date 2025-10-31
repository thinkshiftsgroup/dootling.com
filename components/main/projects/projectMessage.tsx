"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Send, Search, Globe } from "lucide-react";
import { FiPhone } from "react-icons/fi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FiLock } from "react-icons/fi";
import { ImAttachment } from "react-icons/im";
import { CiFaceSmile } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import ProjectInnerTabs from "./tabs/chat";
import ProjectTasks from "./tabs/projectTasks";
import { IoAtOutline } from "react-icons/io5";
import FilesTab from "./tabs/filesTab";
import ProjectInfoTab from "./tabs/projectInfoTab";
import ProjectMilestone from "./projectMilestone";
import { useProject } from "@/hooks/useProjects";
import clsx from "clsx";

const ProjectMessage = ({ projectId }: any) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Paul Molive",
      text: "Hey John, I'm looking for the best admin template. Could you please help me to find it out? 😄",
      time: "15:45",
      isMe: false,
    },
    {
      id: 2,
      sender: "You",
      text: "Absolutely! Yeti Social is the Responsive Bootstrap 5 Admin Dashboard Template.",
      time: "15:50",
      isMe: true,
    },
    {
      id: 3,
      sender: "Paul Molive",
      text: "Looks clean and fresh UI.",
      time: "16:00",
      isMe: false,
    },
    {
      id: 4,
      sender: "You",
      text: "Thanks, from ThemeForest.",
      time: "16:05",
      isMe: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "You",
        text: newMessage,
        time: "Now",
        isMe: true,
      },
    ]);
    setNewMessage("");
  };

  const tabItems = [
    {
      id: "chat",
      label: "Chat",
      color: "#00B69B",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 316 301"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M158.332 128.297H158.449M216.839 128.297H216.971M99.8105 128.297H99.9423"
            stroke="#116B61"
            stroke-width="29.29"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.8086 128.293C11.8086 117.016 11.999 105.989 12.3944 95.3418C13.6099 60.5892 14.225 43.2056 28.3575 28.956C42.4899 14.721 60.3715 13.9595 96.1053 12.4218C116.812 11.5524 137.534 11.1228 158.259 11.133C179.933 11.133 200.802 11.5723 220.412 12.4218C256.146 13.9595 274.013 14.721 288.16 28.9706C302.292 43.2056 302.908 60.5892 304.123 95.3418C304.896 117.303 304.896 139.284 304.123 161.244C302.908 195.997 302.292 213.381 288.16 227.63C274.028 241.865 256.146 242.627 220.412 244.164C209.653 244.623 198.547 244.965 187.095 245.19C176.257 245.395 170.824 245.482 166.05 247.313C161.276 249.144 157.263 252.556 149.237 259.439L117.326 286.825C115.773 288.156 113.871 289.014 111.845 289.296C109.819 289.578 107.755 289.273 105.897 288.418C104.039 287.562 102.466 286.191 101.364 284.469C100.262 282.746 99.6768 280.743 99.6787 278.697V244.311L96.1053 244.164C60.3715 242.627 42.5045 241.865 28.3575 227.616C14.225 213.381 13.6099 195.997 12.3944 161.244C12.006 150.265 11.8107 139.279 11.8086 128.293Z"
            stroke="#116B61"
            stroke-width="21.9675"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },

    {
      id: "milestone",
      label: "Milestone",
      color: "#FAAF40",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.03 5.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22V18a.75.75 0 0 0 1.5 0V7.81l1.22 1.22a.75.75 0 0 0 1.06-1.06zm5.97.78a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm-1 3.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
          />
        </svg>
      ),
    },
    {
      id: "tasks",
      label: "Tasks",
      color: "#157BFF",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 352 293"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M91.8509 3.91645C99.3335 9.13373 101.118 19.431 95.9011 26.845L57.458 81.7638C54.6434 85.7455 50.2499 88.2855 45.3758 88.6973C40.5018 89.1092 35.6964 87.4617 32.264 84.0293L4.80456 56.5698C-1.57975 50.1169 -1.57975 39.6823 4.80456 33.2294C11.1889 26.7764 21.6921 26.845 28.1451 33.2294L41.7375 46.8218L68.9223 7.96671C74.1395 0.484024 84.4368 -1.30084 91.8509 3.91645ZM91.8509 113.754C99.3335 118.971 101.118 129.269 95.9011 136.683L57.458 191.601C54.6434 195.583 50.2499 198.123 45.3758 198.535C40.5018 198.947 35.6964 197.299 32.264 193.867L4.80456 166.407C-1.6484 159.954 -1.6484 149.52 4.80456 143.136C11.2575 136.751 21.6921 136.683 28.0764 143.136L41.6688 156.728L68.8536 117.873C74.0709 110.39 84.3682 108.605 91.7822 113.823L91.8509 113.754ZM153.772 44.8996C153.772 32.7488 163.589 22.9321 175.739 22.9321H329.512C341.663 22.9321 351.479 32.7488 351.479 44.8996C351.479 57.0504 341.663 66.8671 329.512 66.8671H175.739C163.589 66.8671 153.772 57.0504 153.772 44.8996ZM153.772 154.737C153.772 142.586 163.589 132.77 175.739 132.77H329.512C341.663 132.77 351.479 142.586 351.479 154.737C351.479 166.888 341.663 176.705 329.512 176.705H175.739C163.589 176.705 153.772 166.888 153.772 154.737ZM109.837 264.575C109.837 252.424 119.654 242.607 131.804 242.607H329.512C341.663 242.607 351.479 252.424 351.479 264.575C351.479 276.726 341.663 286.542 329.512 286.542H131.804C119.654 286.542 109.837 276.726 109.837 264.575ZM43.9342 237.115C51.2169 237.115 58.2013 240.008 63.3509 245.158C68.5006 250.308 71.3936 257.292 71.3936 264.575C71.3936 271.857 68.5006 278.842 63.3509 283.992C58.2013 289.141 51.2169 292.034 43.9342 292.034C36.6515 292.034 29.6671 289.141 24.5175 283.992C19.3678 278.842 16.4748 271.857 16.4748 264.575C16.4748 257.292 19.3678 250.308 24.5175 245.158C29.6671 240.008 36.6515 237.115 43.9342 237.115Z"
            fill="#157BFF"
          />
        </svg>
      ),
    },

    {
      id: "files",
      label: "Files",
      color: "#FAAF40",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 316 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M245.61 128.445H172.385"
            stroke="#FAAF40"
            stroke-width="21.9675"
            stroke-linecap="round"
          />
          <path
            opacity="0.5"
            d="M128.449 25.9375H223.642C230.437 25.9375 233.849 25.9375 236.705 26.3183C246.29 27.5824 255.191 31.9729 262.027 38.8094C268.864 45.6459 273.254 54.5465 274.519 64.1317C274.899 66.9875 274.899 70.3998 274.899 77.195"
            stroke="#FAAF40"
            stroke-width="21.9675"
          />
          <path
            d="M11.2891 83.7819C11.2891 70.8503 11.2891 64.3919 12.3142 59.0025C14.4996 47.4306 20.122 36.786 28.4479 28.4575C36.7738 20.129 47.4166 14.5032 58.9879 12.3142C64.3919 11.2891 70.865 11.2891 83.7819 11.2891C89.4349 11.2891 92.276 11.2891 95 11.538C106.731 12.6398 117.858 17.2537 126.926 24.7771C129.035 26.5199 131.027 28.5116 135.039 32.5243L143.094 40.5791C155.045 52.5294 161.02 58.5046 168.166 62.4734C172.095 64.6627 176.262 66.3925 180.585 67.6284C188.464 69.8691 196.915 69.8691 213.8 69.8691H219.278C257.823 69.8691 277.111 69.8691 289.632 81.1458C290.794 82.1709 291.888 83.2644 292.913 84.4263C304.189 96.9477 304.189 116.235 304.189 154.781V187.029C304.189 242.256 304.189 269.876 287.025 287.025C269.861 304.175 242.256 304.189 187.029 304.189H128.449C73.2228 304.189 45.6023 304.189 28.453 287.025C11.3037 269.861 11.2891 242.256 11.2891 187.029V83.7819Z"
            stroke="#FAAF40"
            stroke-width="21.9675"
          />
        </svg>
      ),
    },
    {
      id: "info",
      label: "Info",
      color: "#0088FF",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 352 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M175.738 248.964V161.094"
            stroke="#0088FF"
            stroke-width="21.9675"
            stroke-linecap="round"
          />
          <path
            d="M175.739 102.515C183.827 102.515 190.384 109.071 190.384 117.16C190.384 125.248 183.827 131.805 175.739 131.805C167.651 131.805 161.094 125.248 161.094 117.16C161.094 109.071 167.651 102.515 175.739 102.515Z"
            fill="#0088FF"
          />
          <path
            d="M29.2891 175.739C29.2891 106.703 29.2891 72.1843 50.7294 50.7294C72.199 29.2891 106.703 29.2891 175.739 29.2891C244.776 29.2891 279.294 29.2891 300.734 50.7294C322.189 72.199 322.189 106.703 322.189 175.739C322.189 244.776 322.189 279.294 300.734 300.734C279.309 322.189 244.776 322.189 175.739 322.189C106.703 322.189 72.1843 322.189 50.7294 300.734C29.2891 279.309 29.2891 244.776 29.2891 175.739Z"
            stroke="#0088FF"
            stroke-width="21.9675"
          />
        </svg>
      ),
    },
  ];

  const [tabs, setTabs] = useState("chat");

  const { getAllProjectById } = useProject();
  const { data: projectData, isLoading: projectDataLoad } = getAllProjectById(
    projectId!
  );
  console.log(projectData);
  const projectInitial = projectData?.title?.charAt(0)?.toUpperCase() || "P";
  const imageSrc = projectData?.projectImageUrl || "";

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex w-full overflow-scroll hide-scrollbar  shadow-sm h-[86vh] bg-[#F8FAFC] text-gray-800">
      <div className="flex-1 flex flex-col">
        <div className="sm:!p-3 p-2 whitespace-nowrap gap-2 md:!flex-row flex-col flex items-center justify-between border-b bg-white">
          <div className="flex items-center gap-3">
            {projectDataLoad ? (
              <>
                <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="flex flex-col gap-1">
                  <div className="w-28 h-3 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-16 h-2 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </>
            ) : (
              <>
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={projectData?.title}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                    {projectInitial}
                  </div>
                )}

                <div>
                  <span className="flex items-center gap-2">
                    <h1 className="font-semibold leading-snug max-w-[200px] truncate">
                      {projectData?.title}
                    </h1>
                    {projectData?.isPublic ? (
                      <Globe size={10} className="text-gray-400" />
                    ) : (
                      <FiLock size={10} className="text-gray-400" />
                    )}
                  </span>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 relative">
            <div className="hidden lg:!flex items-center gap-2 border-gray-200">
              {tabItems.map((tab) => {
                const active = tabs === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setTabs(tab.id)}
                    className={clsx(
                      "flex items-center gap-2 p-2 relative transition-colors",
                      active
                        ? "font-medium text-black"
                        : "text-gray-500 hover:text-[#157bff]"
                    )}
                  >
                    <span>{tab.icon}</span>
                    <p className="text-xs">{tab.label}</p>

                    {/* Active underline */}
                    {active && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#157bff] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="lg:!hidden relative">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-10 bg-white shadow-md rounded-md border p-1 z-50">
                  {tabItems.map((tab) => {
                    const active = tabs === tab?.id;
                    return (
                      <div
                        key={tab?.id}
                        onClick={() => {
                          setTabs(tab?.id);
                          setShowDropdown(false);
                        }}
                        className={`cursor-pointer flex items-center gap-2 rounded-sm px-3 py-2 text-sm transition
              ${
                active
                  ? "bg-[#E7F1FF] font-semibold text-[#157bff]"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
                      >
                        <span>{tab.icon}</span>
                        <p>{tab.label}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Action buttons (stay visible on all screens) */}
            <div className="flex items-center gap-2">
              <div className="bg-[#157BFF]/10 rounded-md p-2 hover:bg-[#157BFF]/20 transition">
                <FiPhone className="text-[#157bff]" size={16} />
              </div>

              <div className="bg-[#157BFF]/10 rounded-md p-2 hover:bg-[#157BFF]/20 transition">
                <GoDeviceCameraVideo className="text-[#157bff]" size={16} />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-scroll hide-scrollbar">
          {tabs === "chat" && <ProjectInnerTabs messages={messages} />}
          {tabs === "tasks" && <ProjectTasks projectId={projectId} />}
          {tabs === "files" && <FilesTab />}
          {tabs === "info" && <ProjectInfoTab />}
          {tabs === "milestone" && <ProjectMilestone projectId={projectId} />}

          {tabs === "chat" && (
            <div className="sm:!p-4 p-2  border-t bg-white flex items-center gap-2">
              <IoAtOutline className="w-5 h-5 " />
              <ImAttachment className="w-4 h-4" />
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-2 sm:!px-4 py-2 text-xs sm:!text-sm "
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSend}
                  className="bg-[#157BFF] text-white rounded-sm p-2 hover:bg-blue-600 transition"
                >
                  <Send className="w-4 h-4" />
                </button>
                <CiFaceSmile className="w-4 h-4" />
                <IoMicOutline className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectMessage;

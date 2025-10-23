"use client";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { TiPencil } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { useState } from "react";

const chatList = [
  {
    name: "Paul Molive",
    message: "Lorem ipsum",
    time: "03:20 PM",
    img: "/images/user/orgImg.png",
    active: true,
  },
  {
    name: "Paige Turner",
    message: "Lorem ipsum",
    time: "01:10 PM",
    img: "/images/user/userImg.jpg",
  },
  {
    name: "Ira Membrit",
    message: "Lorem ipsum",
    time: "01:10 PM",
    img: "/images/user/orgImg.png",
  },
  {
    name: "John Travolta",
    message: "Lorem ipsum",
    time: "05:09 AM",
    img: "/images/user/userImg.jpg",
  },
  {
    name: "Barb Ackue",
    message: "Lorem ipsum",
    time: "01:10 PM",
    img: "/images/user/orgImg.png",
  },
  {
    name: "Maya Didas",
    message: "Lorem ipsum",
    time: "01:10 PM",
    img: "/images/user/userImg.jpg",
  },
];

const ChatSidebar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "Messages" | "Following" | "Spaces"
  >("Messages");

  return (
    <div className="w-full md:!col-span-3 md:!w-[320px] bg-white border-r shadow-sm flex flex-col h-[86vh] overflow-hidden">
      <div className="md:!p-4 p-2 border-b flex items-center gap-2">
        <div className="flex items-center bg-white rounded-sm w-full px-1 sm:!px-3 py-2">
          <FiSearch className="text-[#157bff]" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full px-2 text-xs sm:!text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
        <TiPencil className="w-5 h-5 text-[#157bff]" />
      </div>

      <div className="flex items-center w-full justify-around text-xs lg:text-sm font-medium px-2.5 py-2 border-b border-gray-100">
        {["Messages", "Following", "Spaces"].map((tab) => {
          const isActive = activeTab === tab;
          return (
            <span
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex items-center gap-1 px-2 py-2 rounded-t-sm cursor-pointer transition-all duration-200 ${
                isActive
                  ? "bg-[#157bff] text-white"
                  : "text-[#157BFF] hover:bg-[#E7F1FF]"
              }`}
            >
              {tab === "Messages" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 154 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.0723 113.586C36.1439 113.586 32.8522 112.339 30.1973 109.846C27.5477 107.348 26.223 104.237 26.223 100.513V31.3963L0.0703125 0.265625H140.013C143.941 0.265625 147.233 1.51484 149.888 4.01328C152.537 6.50633 153.862 9.61724 153.862 13.346V100.513C153.862 104.237 152.537 107.348 149.888 109.846C147.233 112.339 143.941 113.586 140.013 113.586H40.0723ZM17.4407 8.35992L34.3173 28.2881V100.513C34.3173 101.755 34.9136 102.896 36.1061 103.937C37.2987 104.979 38.6207 105.497 40.0723 105.491H140.021C141.472 105.491 142.794 104.973 143.987 103.937C145.179 102.901 145.776 101.76 145.776 100.513V13.3379C145.776 12.0968 145.179 10.9555 143.987 9.91402C142.794 8.87256 141.47 8.35452 140.013 8.35992H17.4407ZM85.8375 93.35L91.5682 87.6193L77.3708 74.6684H120.4V66.5741H57.6693L85.8375 93.35ZM57.6693 47.2773H120.4L92.3777 20.5014L86.6469 26.2321L100.844 39.183H57.6693V47.2773Z"
                    fill={isActive ? "white" : "#157bff"}
                  />
                </svg>
              )}
              {tab === "Following" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <g
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    {" "}
                    <path d="m5.251 9.663l-1.587-1.41a1 1 0 1 0-1.328 1.494l1.405 1.25l.068-.062c.503-.446.982-.873 1.442-1.272m2.295 4.642q.544.436 1.04.777c1.117.763 2.185 1.228 3.414 1.228s2.297-.465 3.413-1.228c1.081-.739 2.306-1.828 3.843-3.194l.052-.046l2.356-2.095a1 1 0 0 0-1.328-1.494l-2.357 2.094c-1.6 1.423-2.731 2.426-3.694 3.084c-.94.642-1.613.88-2.285.88s-1.345-.238-2.285-.88q-.304-.21-.636-.465c-.446.378-.949.82-1.533 1.339" />{" "}
                    <path d="M16.455 9.695q-.545-.436-1.042-.777C14.297 8.155 13.23 7.689 12 7.689s-2.297.466-3.413 1.229c-1.081.738-2.306 1.828-3.843 3.193l-.052.047l-2.356 2.094a1 1 0 1 0 1.328 1.495l2.357-2.094c1.6-1.423 2.731-2.426 3.694-3.084c.94-.642 1.613-.88 2.285-.88s1.345.238 2.285.88q.304.21.636.464c.446-.377.949-.82 1.534-1.338m3.804 3.308l-.068.061q-.753.672-1.442 1.273l1.587 1.41a1 1 0 0 0 1.328-1.495z" />{" "}
                  </g>{" "}
                </svg>
              )}
              {tab === "Spaces" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 512 512"
                >
                  {" "}
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M176 416v64M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32m240 160h112a32 32 0 0 1 32 32v256h0h-160h0V208a16 16 0 0 1 16-16"
                  ></path>{" "}
                  <path
                    fill="currentColor"
                    d="M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79"
                  ></path>{" "}
                </svg>
              )}
              {tab}
            </span>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        {activeTab === "Messages" && (
          <div className="space-y-1 py-2">
            {chatList.map((chat, i) => (
              <div
                key={i}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    router.push("/messages/read-message");
                  }
                }}
                className={`flex md:!flex-row flex-col w-full md:!items-center bg-white rounded-sm justify-between md:!px-4 px-1 md:!py-3 py-1 cursor-pointer border-b border-gray-100 hover:bg-gray-50 ${
                  chat.active ? "bg-[#E8F0FE]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex-none">
                    <Image
                      src={chat.img}
                      alt={chat.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    {chat.active && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <p className="sm:text-sm text-xs font-medium text-gray-800">
                      {chat.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate w-[150px]">
                      {chat.message}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] flex flex-col gap-1 items-end text-gray-400">
                  {chat.time}
                  <span className="p-2 text-xs rounded-full flex items-center justify-center bg-[#157bff] w-4 h-4 text-white">
                    2
                  </span>
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Following" && (
          <div className="text-sm text-gray-500 py-10 text-center">
            <p>You are not following anyone yet.</p>
          </div>
        )}

        {activeTab === "Spaces" && (
          <div className="text-sm text-gray-500 py-10 text-center">
            <p>No spaces joined yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSidebar;

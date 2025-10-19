"use client";
import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { TiPencil } from "react-icons/ti";
import { TbMessages } from "react-icons/tb";
import { useRouter } from "next/navigation";

const ProjectChatSidebar = () => {
  const chatList = [
    {
      name: "Joshua Israel Enterprises Limited",
      time: "03:20 PM",
      img: "/images/user/orgImg.png",
      active: true,
      private: true,
    },
    {
      name: "Paige Turner",
      time: "01:10 PM",
      img: "/images/user/userImg.jpg",
      private: false,
    },
    {
      name: "Ira Membrit",
      time: "01:10 PM",
      img: "/images/user/orgImg.png",
      private: true,
    },
    {
      name: "John Travolta",
      time: "05:09 AM",
      img: "/images/user/userImg.jpg",
      private: false,
    },
    {
      name: "Barb Ackue",
      time: "01:10 PM",
      img: "/images/user/orgImg.png",
      private: true,
    },
    {
      name: "Maya Didas",
      time: "01:10 PM",
      img: "/images/user/userImg.jpg",
      private: false,
    },
  ];

  const router = useRouter();

  return (
    <div className="w-full md:!col-span-2 bg-white border-r shadow-sm flex flex-col h-[86vh]">
      <div className="md:!p-4 p-2 border-b flex items-center gap-2">
        <div className="flex items-center bg-white rounded-sm w-full px-1 sm:!px-3 py-2">
          <FiSearch className="text-[#157bff]" size={18} />
          <input
            type="text"
            placeholder="Search for projects"
            className="bg-transparent outline-none w-full px-2 text-xs sm:!text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
        <TiPencil className="w-5 h-5 text-[#157bff]" />
      </div>

      <div className="mx-1 flex-1">
        <div className="overflow-y-scroll h-[68vh]">
          {chatList.map((chat, i) => (
            <div
              onClick={() => {
                if (window.innerWidth < 768) {
                  router.push("/projects/read-projects");
                }
              }}
              key={i}
              className={`flex relative items-center bg-white rounded-sm my-2 justify-between px-1 md:!py-3 py-1 cursor-pointer border-b border-gray-100 hover:bg-gray-50 ${
                chat.active ? "bg-[#E8F0FE]" : ""
              }`}
            >
              <div className="flex items-center gap-1 sm:!gap-3">
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
                  {chat.private && (
                    <p className="p-0.5 text-[8px] rounded-[2px] bg-[#E2F7E8] text-[#525256] absolute top-0 right-1">
                      Contributor
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectChatSidebar;

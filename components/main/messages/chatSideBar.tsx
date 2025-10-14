"use client";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { TiPencil } from "react-icons/ti";
import { TbMessages } from "react-icons/tb";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { GrGroup } from "react-icons/gr";

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
  return (
    <div className="w-full col-span-3 md:w-[320px] border-r shadow-sm flex flex-col h-full">
      <div className="p-4 border-b flex items-center gap-2">
        <div className="flex items-center bg-white rounded-sm w-full px-3 py-2">
          <FiSearch className="text-[#157bff]" size={18} />
          <input
            type="text"
            placeholder="Search for messages or users..."
            className="bg-transparent outline-none w-full px-2 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
        <div className="rounded-sm p-2 bg-white ">
          <TiPencil className="w-5 h-5 text-[#157bff]" />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm font-medium px-4 py-2">
        <span className=" flex items-center gap-1 text-white bg-[#157bff] rounded-tl-sm rounded-tr-sm p-2 cursor-pointer">
          <TbMessages className="w-4 h-4" /> Messages
        </span>
        <span className="text-[#157BFF] cursor-pointer">
          <LiaUserFriendsSolid className="w-4 h-4" />
          Friends
        </span>
        <span className="text-[#157BFF] cursor-pointer">
          <GrGroup className="w-4 h-4" />
          Groups
        </span>
      </div>

      <div className="overflow-y-auto flex-1">
        {chatList.map((chat, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-4 py-3 cursor-pointer border-b border-gray-100 hover:bg-gray-50 ${
              chat.active ? "bg-[#E8F0FE]" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
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
                <p className="text-sm font-medium text-gray-800">{chat.name}</p>
                <p className="text-xs text-gray-500 truncate w-[150px]">
                  {chat.message}
                </p>
              </div>
            </div>
            <span className="text-[11px] text-gray-400">{chat.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;

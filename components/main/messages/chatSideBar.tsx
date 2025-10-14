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
    <div className="w-full bg-white col-span-3 md:w-[320px] border-r shadow-sm flex flex-col h-full">
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
        <span className="text-[#157BFF] flex items-center gap-1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
              <path d="m5.251 9.663l-1.587-1.41a1 1 0 1 0-1.328 1.494l1.405 1.25l.068-.062c.503-.446.982-.873 1.442-1.272m2.295 4.642q.544.436 1.04.777c1.117.763 2.185 1.228 3.414 1.228s2.297-.465 3.413-1.228c1.081-.739 2.306-1.828 3.843-3.194l.052-.046l2.356-2.095a1 1 0 0 0-1.328-1.494l-2.357 2.094c-1.6 1.423-2.731 2.426-3.694 3.084c-.94.642-1.613.88-2.285.88s-1.345-.238-2.285-.88q-.304-.21-.636-.465c-.446.378-.949.82-1.533 1.339" />
              <path d="M16.455 9.695q-.545-.436-1.042-.777C14.297 8.155 13.23 7.689 12 7.689s-2.297.466-3.413 1.229c-1.081.738-2.306 1.828-3.843 3.193l-.052.047l-2.356 2.094a1 1 0 1 0 1.328 1.495l2.357-2.094c1.6-1.423 2.731-2.426 3.694-3.084c.94-.642 1.613-.88 2.285-.88s1.345.238 2.285.88q.304.21.636.464c.446-.377.949-.82 1.534-1.338m3.804 3.308l-.068.061q-.753.672-1.442 1.273l1.587 1.41a1 1 0 0 0 1.328-1.495z" />
            </g>
          </svg>
          Following
        </span>
        <span className="text-[#157BFF] flex items-center gap-1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M176 416v64M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32m240 160h112a32 32 0 0 1 32 32v256h0h-160h0V208a16 16 0 0 1 16-16"
            ></path>
            <path
              fill="currentColor"
              d="M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79"
            ></path>
          </svg>
          Spaces
        </span>
      </div>

      <div className="overflow-y-auto mx-1 flex-1">
        <div className="flex items-center border  rounded-sm w-full px-3 py-2">
          <FiSearch className="text-[#157bff]" size={18} />
          <input
            type="text"
            placeholder="Search for messages or users..."
            className="bg-transparent outline-none w-full px-2 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
        {chatList.map((chat, i) => (
          <div
            key={i}
            className={`flex items-center bg-white rounded-sm my-2 justify-between px-4 py-3 cursor-pointer border-b border-gray-100 hover:bg-gray-50 ${
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

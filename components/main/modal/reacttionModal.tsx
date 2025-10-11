"use client";
import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { IoHeartCircle } from "react-icons/io5";
import { PiHandHeartFill } from "react-icons/pi";

interface ReactionModalProps {
  setOpenLikesModal: (val: boolean) => void;
}

const tabs = [
  { id: "all", label: "All", count: 55, color: "green" },
  { id: "like", label: "", count: 51, color: "blue" },
  { id: "love", label: "", count: 3, color: "red" },
  { id: "insight", label: "", count: 1, color: "pink" },
];

const users = [
  {
    id: 1,
    name: "Neil Parker",
    connection: "2nd",
    description:
      "AI-Powered Growth System Architect | SVP Global GTM Leader | Scaling and GTM Strategy",
    reaction: "like",
    image: "/images/user/userImg.jpg",
  },
  {
    id: 2,
    name: "Abid Omar",
    connection: "2nd",
    description: "I build AI apps on WhatsApp | Founder, Chatveda",
    reaction: "love",
    image: "/images/user/userImg.jpg",
  },
  {
    id: 3,
    name: "Tony Z Nath",
    connection: "2nd",
    description: "Helping businesses grow with AI automation.",
    reaction: "insight",
    image: "/images/user/userImg.jpg",
  },
];

const ReactionModal = ({ setOpenLikesModal }: ReactionModalProps) => {
  const [activeTab, setActiveTab] = useState("all");

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpenLikesModal(false);
    }
  };

  const filteredUsers =
    activeTab === "all"
      ? users
      : users.filter((user) => user.reaction === activeTab);

  const renderIcon = (type: string, size = 18) => {
    switch (type) {
      case "like":
        return <BiSolidLike size={size} className="text-blue-500" />;
      case "love":
        return <IoHeartCircle size={size} className="text-red-500" />;
      case "insight":
        return <PiHandHeartFill size={size} className="text-pink-400" />;
      default:
        return null;
    }
  };

  const getBorderColor = (tabId: string) => {
    switch (tabId) {
      case "all":
        return "border-green-500 text-green-600";
      case "like":
        return "border-blue-500 text-blue-600";
      case "love":
        return "border-red-500 text-red-600";
      case "insight":
        return "border-pink-400 text-pink-500";
      default:
        return "border-transparent text-gray-500";
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
    >
      <div
        ref={modalRef}
        className="w-[90vw] md:w-[480px] h-[80vh] bg-white rounded-lg shadow-lg flex flex-col"
      >
        <div className="flex justify-between items-center px-5 pt-4">
          <h2 className="text-lg font-semibold text-gray-800">Reactions</h2>
          <X
            size={20}
            className="cursor-pointer text-gray-600 hover:text-black"
            onClick={() => setOpenLikesModal(false)}
          />
        </div>

        <div className="flex gap-6 px-5 pt-3 border-b overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 cursor-pointer text-sm font-medium pb-2 border-b-2 transition-all ${
                  isActive
                    ? `${getBorderColor(tab.id)} border-b-3`
                    : "text-gray-500 border-transparent hover:text-black"
                }`}
              >
                {renderIcon(tab.id)}
                <span>{tab.label}</span>
                <span className={`${getBorderColor(tab.id)} `}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-3 px-5 py-2 last:border-none"
            >
              <div className="relative ">
                <div className="w-14 h-14 flex-none">
                  <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
                <span className="absolute bottom-0 z-10 right-0 bg-white rounded-full p-[2px]">
                  {renderIcon(user.reaction, 14)}
                </span>
              </div>

              <div className="pb-1.5 border-b">
                <p className="font-semibold text-gray-800 text-sm">
                  {user.name}
                  <span className="text-gray-400 ml-1">
                    · {user.connection}
                  </span>
                </p>
                <p className="text-gray-500 text-sm">{user.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactionModal;

"use client";
import Image from "next/image";
import { useState } from "react";
import { Send, Search } from "lucide-react";
import { FiPhone } from "react-icons/fi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { RxDotsVertical } from "react-icons/rx";
import { ImAttachment } from "react-icons/im";
import { CiFaceSmile } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";

export default function ChatPage() {
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

  return (
    <div className="flex col-span-5 shadow-sm h-screen bg-[#F8FAFC] text-gray-800">
      <div className="hidden md:flex flex-col w-[320px] border-r bg-white shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h1 className="font-semibold text-lg">Messages</h1>
          <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
        <div className="p-2 overflow-y-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <Image
                src="/images/user/orgImg.png"
                alt="User"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div className="flex-1">
                <h2 className="font-medium text-sm">User {i + 1}</h2>
                <p className="text-xs text-gray-500">Last message preview...</p>
              </div>
              <p className="text-[10px] text-gray-400">3:20 PM</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="p-4 flex items-center justify-between border-b bg-white">
          <div className="flex items-center gap-3">
            <Image
              src="/images/user/userImg.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h1 className="font-semibold">Paul Molive</h1>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-[#157BFF]/10 rounded-md p-2 hover:bg-[#157BFF]/20 transition">
              <FiPhone className="text-[#157bff]" size={16} />
            </div>

            <div className="bg-[#157BFF]/10 rounded-md p-2 hover:bg-[#157BFF]/20 transition">
              <GoDeviceCameraVideo className="text-[#157bff]" size={16} />
            </div>

            <div className="bg-[#157BFF]/10 rounded-md p-2 hover:bg-[#157BFF]/20 transition">
              <RxDotsVertical className="text-[#157bff]" size={16} />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${
                msg.isMe ? "justify-end" : "justify-start"
              }`}
            >
              {!msg.isMe && (
                <Image
                  src="/images/user/orgImg.png"
                  alt="Sender"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}

              <div
                className={`max-w-[70%] p-3 rounded-2xl ${
                  msg.isMe
                    ? "bg-[#157BFF] text-white rounded-tr-none"
                    : "bg-gray-100 text-gray-800 rounded-tl-none"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p
                  className={`text-[10px] mt-1 text-right ${
                    msg.isMe ? "text-blue-100" : "text-gray-400"
                  }`}
                >
                  {msg.time}
                </p>
              </div>

              {msg.isMe && (
                <Image
                  src="/images/user/userImg.jpg"
                  alt="Me"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-white flex items-center gap-2">
          <ImAttachment className="w-4 h-4" />
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 text-sm "
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
      </div>
    </div>
  );
}

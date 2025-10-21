import { useState } from "react";
import {
  X,
  Image as Imageicon,
  FileText,
  Smile,
  AlignLeft,
  MessageSquare,
  MapPin,
} from "lucide-react";
import user from "@/public/images/user/userImg.jpg";
import Image from "next/image";
import { Dropdown } from "./dropDown";
import { Bell, Gear } from "phosphor-react";

export default function AddPostModal() {
  const [selected, setSelected] = useState('Anyone');
  const allOptions = ['Anyone', 'Your Followers', 'Profiles You Follow', 'Mentioned Only'];
  const listItems = [selected, ...allOptions.filter(opt => opt !== selected)];

  const handleSelect = (option) => {
    setSelected(option);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setContent("");
    setTopic("");
  };

  const handlePost = () => {
    if (content.trim()) {
      console.log("Posting:", { content, topic });
      closeModal();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="flex flex-wrap pb-4">
        <div className="w-full">
          <div className="rounded-lg shadow bg-white border border-gray-200">
            {/* <div className="flex justify-between items-center p-4 border-b border-gray-100">
                            <div className="header-title">
                                <h5 className="text-xl font-semibold text-gray-800">
                                    Add a Post
                                </h5>
                            </div>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="px-4 py-2 border border-gray-200 text-black rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                                >
                                    Post
                                </button>
                            </div>
                        </div> */}
            <div
              className="p-3 cursor-pointer flex gap-3 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={openModal}
            >
              <div className="cursor-pointer">
                <Image
                  src={user}
                  width={45}
                  height={45}
                  alt="user"
                  className="rounded-sm mt-1.5 cursor-pointer"
                />
              </div>
              <input
                type="text"
                readOnly
                className="w-full rounded p-2 border-0 bg-transparent cursor-pointer text-gray-600 placeholder-gray-400"
                placeholder="What's new?"
              />
              <div className="relative">
                <button
                  type="button"
                  onClick={openModal}
                  className="px-6 py-1.5 rounded-sm font-semibold border-gray-200 cursor-pointer border-2 text-gray-400 hover:bg-gray-50 transition-colors"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60  p-4"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 p-4">
            <div
              className={`w-full max-w-2xl mt-8 bg-white rounded-2xl shadow-2xl overflow-hidden 
            ${isOpen
                  ? "animate-in fade-in slide-in-from-top-4"
                  : "animate-out fade-out slide-out-to-top"
                }
            duration-200`}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-3 sm:px-6 py-2 border-b border-gray-300">
                <button
                  onClick={closeModal}
                  className="text-gray-800 hover:text-gray-900 font-semibold"
                >
                  Cancel
                </button>
                <h2 className="text-lg font-bold text-black">New Post</h2>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full text-black transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path d="M2.906 17.505L5.337 3.718a2 2 0 0 1 2.317-1.623L19.472 4.18a2 2 0 0 1 1.622 2.317l-2.431 13.787a2 2 0 0 1-2.317 1.623L4.528 19.822a2 2 0 0 1-1.622-2.317Z"></path>
                        <path
                          strokeLinecap="round"
                          d="m8.929 6.382l7.879 1.389m-8.574 2.55l7.879 1.39M7.54 14.26l4.924.869"
                        ></path>
                      </g>
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 text-black rounded-full transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill="currentColor"
                          d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={1.5}
                          d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-3 sm:p-6 py-3">
                <div className="flex gap-2">
                  {/* User Avatar */}
                  <div className="flex-shrink-0 items-center flex flex-col">
                    {/* <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <span className="text-blue-600 font-semibold text-sm">Selfgny</span>
                                    </div> */}
                    <div className="cursor-pointer">
                      <Image
                        src={user}
                        width={45}
                        height={45}
                        alt="user"
                        className="rounded-sm mt-1.5 cursor-pointer"
                      />
                    </div>
                    <span className="w-[2px] h-8 bg-gray-300 block my-5"></span>
                    <div className="cursor-pointer">
                      <Image
                        src={user}
                        width={25}
                        height={25}
                        alt="user"
                        className="rounded-sm mt-1.5 cursor-pointer opacity-35"
                      />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1">
                    <div className="flex items-center mb-0">
                      <span className="font-semibold whitespace-nowrap text-sm sm:!text-lg text-gray-900">
                        John Paul
                      </span>
                      <span className="text-gray-400 me-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="m10 17l5-5m0 0l-5-5"
                          ></path>
                        </svg>
                      </span>
                      {/* <input
                                            type="text"
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                            placeholder="Add a topic"
                                            className="text-gray-700 font-medium bg-transparent border-none outline-none flex-1 placeholder-gray-400"
                                        /> */}

                      <Dropdown
                        trigger={
                          <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Add a topic"
                            className="text-gray-700 font-medium text-sm sm:text-lg bg-transparent border-none outline-none flex-1 placeholder-gray-400"
                          />
                        }
                      >
                        <div className="bg-white m-0 shadow-md rounded-lg w-72 sm:w-80">
                          <div className="max-h-60 overflow-y-auto p-3">
                            <div className="flex items-start gap-3 mb-4">
                              <div>
                                <h6 className="text-gray-900 text-sm font-medium">
                                  #digitalBreed
                                </h6>
                              </div>
                            </div>

                            <div className="flex items-start gap-3 mb-4">
                              <div>
                                <h6 className="text-gray-900 text-sm font-medium">
                                  #Havrd
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Dropdown>
                    </div>

                    {/* Text Input */}
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="What's new?"
                      rows={1.5}
                      className="w-full  text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none resize-none font-medium"
                      autoFocus
                    />

                    {/* Action Icons */}
                    <div className="flex gap-4 mt-4 mb-[32px]">
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16"
                          ></path>
                          <rect
                            width={400}
                            height={336}
                            x={96}
                            y={128}
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            rx={45.99}
                            ry={45.99}
                          ></rect>
                          <ellipse
                            cx={372.92}
                            cy={219.64}
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit={10}
                            strokeWidth={32}
                            rx={30.77}
                            ry={30.55}
                          ></ellipse>
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91"
                          ></path>
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth={1.9}
                            d="M3 12v6.967c0 2.31 2.534 3.769 4.597 2.648l3.203-1.742M3 8V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968a2.998 2.998 0 0 1 0 5.294l-6.406 3.484"
                          ></path>
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 13a5 5 0 0 0 8 1l4-4a1 1 0 0 0-7-7l-2 2m3 6a5 5 0 0 0-8-1l-4 4a1 1 0 0 0 7 7l2-2"
                          ></path>
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                            d="M24.707 9.565L9.858 24.415a9 9 0 0 0 0 12.727v0a9 9 0 0 0 12.728 0l17.678-17.677a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.486 0L14.101 28.657a3 3 0 0 0 0 4.243v0a3 3 0 0 0 4.242 0l14.85-14.85"
                          ></path>
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Smile className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      {/* <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <AlignLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button> */}
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12.004 11.73q.667 0 1.14-.475t.472-1.143t-.476-1.14t-1.143-.472t-1.14.476t-.472 1.143t.475 1.14t1.144.472M12 19.677q2.82-2.454 4.458-4.991t1.638-4.39q0-2.744-1.737-4.53Q14.62 3.981 12 3.981T7.641 5.766t-1.737 4.53q0 1.852 1.638 4.39T12 19.677m0 1.342q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814m0-10.903"
                            strokeWidth={0.8}
                            stroke="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>

                    <button className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                      {/* <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">
                                            <span className="text-gray-400 text-xs">S</span>
                                        </div> */}
                      <span className="text-sm font-medium text-gray-300">
                        Add to Dootling
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-between items-center px-3 sm:px-6 py-4">
                {/* <Dropdown
                  trigger={
                    <span className="text-xs sm:text-lg text-gray-400 font-medium">
                      Anyone can reply and quote
                    </span>
                  }
                  align="left"
                  position="top"
                >
                  <div className="bg-white m-0 shadow-md rounded-lg w-72 sm:w-80">
                    <div className="max-h-60 overflow-y-auto p-3">
                      <div className="flex items-start gap-3 mb-4">
                        <div>
                          <h6 className="text-gray-900 text-sm font-medium">
                            Anyone
                          </h6>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 mb-4">
                        <div>
                          <h6 className="text-gray-900 text-sm font-medium">
                            Your Followers
                          </h6>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 mb-4">
                        <div>
                          <h6 className="text-gray-900 text-sm font-medium">
                            Profiles You Follow
                          </h6>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 mb-4">
                        <div>
                          <h6 className="text-gray-900 text-sm font-medium">
                            Mentioned Only
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dropdown> */}
                <Dropdown
                  trigger={
                    <span className="text-xs sm:text-lg text-gray-400 font-medium">
                      {selected} can reply and quote
                    </span>
                  }
                  align="left"
                  position="top"
                >
                  <div className="bg-white m-0 shadow-md rounded-lg w-72 sm:w-80">
                    <div className="max-h-60 overflow-y-auto p-3">
                      {listItems.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelect(option)}
                          className="w-full text-left mb-4 last:mb-0 hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div>
                              <h6 className="text-gray-900 text-sm font-medium">
                                {option}
                              </h6>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </Dropdown>
                <button
                  onClick={handlePost}
                  disabled={!content.trim()}
                  className={`px-6 py-1.5 rounded-sm font-semibold transition-colors ${content.trim()
                      ? "bg-black text-white hover:bg-gray-800"
                      : "border-gray-200 border-2 text-gray-400 cursor-not-allowed"
                    }`}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

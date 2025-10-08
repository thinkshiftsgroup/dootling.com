"use client";
import React, { useRef, useState } from "react";
import { Footer } from "@/components/main/landing-page/footer";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import ActiveUsers from "@/components/main/landing-page/sidebar/activeUsers";
import Suggestions from "@/components/main/landing-page/sidebar/suggestions";
import Image from "next/image";
import ContributionHeatmap from "@/components/main/landing-page/heatMap";
import { GoShieldCheck } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { TbBrandFeedly } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuArrowUpToLine } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight, FaFire, FaSmile } from "react-icons/fa";
import { TbDots } from "react-icons/tb";

import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { BiCommentDetail } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import ProfileAbout from "@/components/main/profile/about";

const UserProfile = () => {
  const galleryImages = [
    "g1.jpg",
    "g2.jpg",
    "g3.jpg",
    "g4.jpg",
    "g5.jpg",
    "g6.jpg",
    "g7.jpg",
    "g8.jpg",
    "g9.jpg",
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState("Feeds");

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const items = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M5.5 7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M5 10a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 5 10m.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM4 17h8.469c.65.02 1.313-.362 1.502-1.177L14.394 14H16.5a1.5 1.5 0 0 0 1.5-1.5V7.582c0-.983-.751-1.56-1.516-1.582H12V4.5A1.5 1.5 0 0 0 10.5 3h-7A1.5 1.5 0 0 0 2 4.5V15a2 2 0 0 0 2 2M3 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v10.982q.002.285.08.518H4a1 1 0 0 1-1-1zM16.5 13h-1.873l1.287-5.542c.148-.638 1.086-.53 1.086.124V12.5a.5.5 0 0 1-.5.5M12 7h3.01q-.04.11-.07.231l-1.943 8.366c-.136.585-.997.486-.997-.115z"
          ></path>
        </svg>
      ),
      label: "Feeds",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M30 18H20v6.468a5.02 5.02 0 0 0 2.861 4.52L25 30l2.139-1.013A5.02 5.02 0 0 0 30 24.467zm-5 9.786l-1.283-.607A3.01 3.01 0 0 1 22 24.468V20h6v4.468a3.01 3.01 0 0 1-1.717 2.71zM17 18H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12v-2H5v-5h12zM27 4h-5a2 2 0 0 0-2 2v9h2V6h5v9h2V6a2 2 0 0 0-2-2M15 4H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M5 13V6h10v7z"
          />
        </svg>
      ),
      label: "Projects",
    },
    { icon: <FiUsers size={30} />, label: "About" },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
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
          <ellipse
            cx={256}
            cy={176}
            fill="currentColor"
            rx={15.95}
            ry={16.03}
            transform="rotate(-45 255.99 175.996)"
          ></ellipse>
          <path
            fill="currentColor"
            d="M258.08 111.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79M400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16"
          ></path>
        </svg>
      ),
      label: "Spaces",
    },
    { icon: <HiOutlineNewspaper size={30} />, label: "Finance" },
    { icon: <LuArrowUpToLine size={30} />, label: "Top Contributors" },
    // { icon: <IoWalletOutline size={30} />, label: "Wallet" },
  ];

  const reactions = [
    { icon: <FaThumbsUp className="text-blue-500" />, label: "Like" },
    { icon: <FaHeart className="text-red-500" />, label: "Love" },
    { icon: <FaHandsClapping className="text-yellow-500" />, label: "Clap" },
    { icon: <FaFire className="text-orange-500" />, label: "Fire" },
    { icon: <FaSmile className="text-amber-500" />, label: "Nice" },
  ];

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <div className="relative">
          <div>
            <div className="relative"></div>
            <div className="content-inner " id="page_layout">
              <div className="w-full max-w-[1450px]  mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/8 px-4">
                    <div className="w-full  mx-auto px-4">
                      <div className="w-full h-[23.5rem]  rounded-lg bg-white shadow-md">
                        <div className="max-w-7xl mx-auto px-4 pt-[20px]">
                          <div className="relative">
                            <div className="flex justify-between items-center mb-4">
                              <h2 className="text-black text-xl flex items-center gap-1.5 font-medium">
                                1,193 contributions in the last year
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 92 92"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_3108_3780)">
                                    <path
                                      d="M0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0L80.5 0C83.55 0 86.4751 1.2116 88.6317 3.36827C90.7884 5.52494 92 8.45001 92 11.5V80.5C92 83.55 90.7884 86.4751 88.6317 88.6317C86.4751 90.7884 83.55 92 80.5 92H11.5C8.45001 92 5.52494 90.7884 3.36827 88.6317C1.2116 86.4751 0 83.55 0 80.5V11.5ZM51.3475 37.881L38.18 39.5312L37.7085 41.7163L40.296 42.1935C41.9865 42.596 42.32 43.2055 41.952 44.8903L37.7085 64.8312C36.593 69.989 38.3123 72.4155 42.3545 72.4155C45.4883 72.4155 49.128 70.9665 50.7783 68.977L51.2842 66.585C50.1342 67.597 48.4552 67.9995 47.3397 67.9995C45.7585 67.9995 45.1835 66.8897 45.5918 64.9348L51.3475 37.881ZM46 31.625C47.525 31.625 48.9875 31.0192 50.0659 29.9409C51.1442 28.8625 51.75 27.4 51.75 25.875C51.75 24.35 51.1442 22.8875 50.0659 21.8091C48.9875 20.7308 47.525 20.125 46 20.125C44.475 20.125 43.0125 20.7308 41.9341 21.8091C40.8558 22.8875 40.25 24.35 40.25 25.875C40.25 27.4 40.8558 28.8625 41.9341 29.9409C43.0125 31.0192 44.475 31.625 46 31.625Z"
                                      fill="#B3DBFF"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_3108_3780">
                                      <rect
                                        width="92"
                                        height="92"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </h2>
                            </div>

                            <ContributionHeatmap />
                            <div className="max-w-5xl -mt-10 relative mx-auto  bg-white p-2">
                              <div className="flex items-start justify-between">
                                <div className="flex gap-6">
                                  <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                                    alt="Profile"
                                    className="w-28 h-28 rounded-lg object-cover"
                                  />

                                  <div>
                                    <h1 className="text-3xl flex mt-1.5 items-center gap-1 font-bold text-black">
                                      John Paul{" "}
                                      <Image
                                        src="/images/icon/verified.svg"
                                        alt="icon"
                                        width={14}
                                        height={14}
                                      />
                                    </h1>
                                    <span className="flex font-normal items-center gap-2">
                                      <p className=" text-xs text-[#FAAF40] mt-1">
                                        Director in Technology
                                      </p>
                                      <Image
                                        src="/images/icon/iwwa_map.svg"
                                        alt="icon"
                                        width={16}
                                        height={16}
                                      />
                                      <p className=" text-xs text-[#979797] mt-1">
                                        United Kingdom
                                      </p>
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-start justify-between h-28">
                                  <div className="flex text-black items-center mt-1.5 gap-8">
                                    <div className="text-center">
                                      <p className="text-[20px] font-bold">
                                        444
                                      </p>
                                      <p className="text-gray-600 text-sm">
                                        Endorsements
                                      </p>
                                    </div>

                                    <div className="text-center">
                                      <p className="text-[20px] font-bold">5</p>
                                      <p className="text-gray-600 text-sm">
                                        Projects
                                      </p>
                                    </div>

                                    <div className="text-center">
                                      <p className="text-[20px] font-bold">
                                        12
                                      </p>
                                      <p className="text-gray-600 text-sm">
                                        Streaks
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 mt-5 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M18.385 9.083V8.07q.717.15 1.45.328q.732.178 1.524.378q.324.08.5.351q.177.27.122.593l-1.466 7.962q-.106.59-.553.953T18.925 19H5.152q-.59 0-1.025-.373t-.54-.944L2.025 9.72q-.056-.323.118-.605q.174-.283.498-.364q.734-.2 1.428-.356t1.373-.287V9.12l-1.188.251q-.6.126-1.22.278L4.46 17.5q.038.212.22.356t.395.144h13.85q.212 0 .394-.144t.222-.356l1.425-7.85q-.658-.171-1.306-.307t-1.275-.26M16 9.065q0-.427-.125-.829t-.394-.728q-.39-.506-.63-1.098q-.24-.59-.24-1.226q0-.401.105-.782q.105-.38.309-.74l.152-.27q.09-.177.291-.233q.201-.055.378.035t.233.289t-.035.375l-.177.294q-.13.244-.202.52t-.073.551q0 .427.154.82q.154.391.423.718q.41.468.62 1.05q.211.581.211 1.197q0 .42-.095.811q-.096.39-.26.77l-.159.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.112-.264.167-.53T16 9.066m-3.892 0q0-.428-.125-.83t-.395-.728q-.39-.506-.63-1.098q-.239-.59-.239-1.226q0-.401.105-.782t.309-.74l.151-.27q.091-.176.292-.232t.378.034t.232.289t-.034.375l-.177.294q-.13.244-.203.51q-.072.267-.072.542q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.094.811q-.096.39-.261.77l-.158.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.111-.264.167-.53t.056-.541m-3.887-.02q0-.427-.128-.819q-.127-.392-.397-.72q-.41-.486-.64-1.077q-.229-.591-.229-1.226q0-.402.102-.792t.312-.75l.157-.27q.09-.176.292-.232q.2-.056.377.034t.233.289t-.034.375l-.177.294q-.131.239-.206.508t-.075.544q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.095.811q-.095.39-.26.77l-.152.326q-.09.177-.292.233q-.2.056-.377-.034q-.177-.091-.233-.289t.035-.375l.157-.313q.112-.264.168-.54q.055-.276.055-.55"
                                    />
                                  </svg>
                                  Add Progress{" "}
                                </button>
                              </div>

                              <span className="flex flex-wrap items-center gap-1.5 -mt-[2rem] text-xs ms-[8.5rem]">
                                <p className="text-[#979797] text-sm border border-[#979797] rounded p-0.5">
                                  #Advocate
                                </p>
                                <p className="text-[#979797] text-sm border border-[#979797] rounded p-0.5">
                                  Engineering With Precision
                                </p>
                                <p className="text-[#979797] text-sm border border-[#979797] rounded p-0.5">
                                  #FreeSpeech
                                </p>
                                <p className="text-[#979797] text-sm border border-[#979797] rounded p-0.5">
                                  Havard Graduate
                                </p>
                                <p className="text-[#979797] text-sm border border-[#979797] rounded p-0.5">
                                  #BuildWithAi
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative my-6">
                        <button
                          onClick={() => scroll("left")}
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={35}
                            height={35}
                            viewBox="0 0 24 24"
                            className="text-gray-500 transform transition-transform duration-300 ease-in-out group-hover:scale-125"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14 7l-5 5l5 5"
                              strokeWidth={1}
                            ></path>
                          </svg>
                        </button>

                        <button
                          onClick={() => scroll("right")}
                          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={35}
                            height={35}
                            viewBox="0 0 24 24"
                            className="text-gray-500 transform transition-transform duration-300 ease-in-out group-hover:scale-125"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m10 17l5-5l-5-5"
                              strokeWidth={1}
                            ></path>
                          </svg>
                        </button>

                        <div
                          ref={scrollRef}
                          className="relative bg-white flex justify-around items-center rounded-xl shadow-sm px-6 py-4 overflow-x-auto scrollbar-hide scroll-smooth"
                        >
                          {items.map((item, idx) => (
                            <div
                              key={idx}
                              onClick={() => setActiveTab(item.label)}
                              className="relative cursor-pointer flex flex-col items-center w-[80px]"
                            >
                              {idx !== items.length - 1 && (
                                <span className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-[1px] h-10 bg-gray-200"></span>
                              )}

                              <div
                                className={`${
                                  idx === 0 ? "bg-[#157BFF]" : "bg-[#157BFF]/10"
                                } w-[60px] h-[60px] flex justify-center items-center rounded-xl transition-all duration-200`}
                              >
                                <span
                                  className={`${
                                    idx === 0
                                      ? "text-white"
                                      : "text-[#157BFF]/50"
                                  } text-2xl`}
                                >
                                  {item.icon}
                                </span>
                              </div>

                              <p
                                className={`${
                                  idx === 0 ? "text-[#157BFF]" : "text-gray-500"
                                }  font-semibold whitespace-nowrap text-center mt-2 text-xs`}
                              >
                                {item.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        {activeTab === "Feeds" && (
                          <div className="rounded-lg p-5 bg-white shadow-md mb-[40px]">
                            <div
                              className="flex items-center
                                                   justify-between"
                            >
                              <div className="flex items-center gap-2">
                                <Image
                                  width={100}
                                  height={100}
                                  alt="user"
                                  src="/images/user/userImg.png"
                                  className="rounded w-20 h-20 object-cover"
                                />
                                <div>
                                  <h1 className="text-xl flex items-center gap-1 font-bold text-black">
                                    John Paul{" "}
                                    <Image
                                      src="/images/icon/verified.svg"
                                      alt="icon"
                                      width={14}
                                      height={14}
                                    />
                                  </h1>
                                  <p className="text-gray-500 text-xs">
                                    90 days ago
                                  </p>
                                </div>
                              </div>
                              <TbDots size={20} className="cursor-pointer" />
                            </div>
                            <h1 className="text-3xl text-black my-4">
                              Completed milestone: "Prototype testing" in Mobile
                              App Development
                            </h1>
                            <div>
                              <Image
                                width={100}
                                height={100}
                                alt="feed image"
                                className="w-full h-32 object-cover"
                                src="/images/page-img/pizza.jpg"
                              />
                            </div>

                            <div className="py-2.5 my-2.5 flex items-center  justify-between border-b-[#e5e5e5] border-b">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white border-2 border-white z-30">
                                    <FaThumbsUp className="w-2.5 h-2.5" />
                                  </div>
                                  <div className="-ml-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white border-2 border-white z-20">
                                    <FaHandsClapping className="w-2.5 h-2.5" />
                                  </div>
                                  <div className="-ml-2 w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white border-2 border-white z-10">
                                    <FaHeart className="w-2.5 h-2.5" />
                                  </div>
                                </div>

                                <span className="text-gray-700 font-medium text-sm">
                                  293
                                </span>
                              </div>
                              <div className="text-xs text-gray-500 flex items-center gap-1">
                                <p>23 comments</p>
                                <span className="inline-flex w-1 h-1 rounded-full bg-gray-500"></span>
                                <p>4 reposts</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-[4rem]">
                              <Image
                                width={100}
                                height={100}
                                alt="user"
                                src="/images/user/userImg.png"
                                className="rounded w-10 h-10 object-cover"
                              />
                              <div className="flex items-center justify-between w-7/9">
                                <div className="flex flex-col items-center gap-1">
                                  <FaThumbsUp />
                                  <p className="font-bold">Like</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                  <BiCommentDetail />
                                  <p className="font-bold">Comment</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                  <BiRepost />
                                  <p className="font-bold">Repost</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                  <LuSend />
                                  <p className="font-bold">Send</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeTab === "About" && <ProfileAbout />}
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/8 px-4">
                    <div className="mb-4 mt-4">
                      <div className="rounded-lg shadow bg-white">
                        <div className="flex justify-between p-4 border-b border-[#f1f1f1]">
                          <div className="header-title">
                            <h4 className="text-xl font-semibold">
                              More Similar Profiles
                            </h4>
                          </div>
                        </div>

                        <div className="p-4 pt-0">
                          <ul className="m-0 p-0 list-none">
                            {[
                              {
                                name: "Annette Black",
                                info: "33 Projects 6 Streaks",
                                image: "/images/user/13.jpg",
                              },
                              {
                                name: "Christopher Plessis",
                                info: "33 Projects 6 Streaks",
                                image: "/images/user/17.jpg",
                              },
                              {
                                name: "Ellyse Perry",
                                info: "33 Projects 6 Streaks",
                                image: "/images/user/16.jpg",
                              },
                            ].map((user, index) => (
                              <li key={index} className="mb-3 last:mb-0">
                                <div className="flex items-center gap-2">
                                  <Image
                                    src={user.image}
                                    alt={user.name}
                                    width={60}
                                    height={60}
                                    className="avatar-60 avatar-borderd object-cover rounded-sm w-full h-auto inline-block"
                                  />
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                      <div>
                                        <h5>{user.name}</h5>
                                        <small className="capitalize flex items-center gap-2">
                                          <div className="w-2 h-2 flex-none rounded-full bg-black" />
                                          {user.info}
                                        </small>
                                      </div>
                                      <div className="flex items-center flex-shrink-0 gap-2">
                                        <button className="px-2 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 leading-none">
                                          <i className="ph ph-plus text-sm"></i>
                                        </button>
                                        <button className="px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 leading-none">
                                          <i className="ph ph-x text-sm"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;

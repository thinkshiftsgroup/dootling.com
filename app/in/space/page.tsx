"use client";
import React, { useRef, useState } from "react";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import Image from "next/image";
import ContributionHeatmap from "@/components/main/landing-page/heatMap";
import { FiUsers } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuArrowUpToLine } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight, FaFire, FaSmile } from "react-icons/fa";
import { TbDots } from "react-icons/tb";

import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";

import ProfileFinance from "@/components/main/profile/finance/finance";
import ProfileFeeds from "@/components/main/profile/feeds";
import FollowedTab from "@/components/main/profile/followed";
import { BiCommentDetail } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";

import ProfileAbout from "@/components/main/profile/about/about";
import HeatmapConnections from "@/components/main/profile/heatmap/heatMap";
import AddHeatmapModal from "@/components/main/profile/addHeatMapModal";
import SpaceHeatMapModal from "@/components/main/space/spaceHeatMapModal";
import ProfileIn from "@/components/main/profile/otherProfile";

const UserProfile = () => {
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
      icon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 20 20"
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
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
      icon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 32 32"
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
        >
          <path
            fill="currentColor"
            d="M30 18H20v6.468a5.02 5.02 0 0 0 2.861 4.52L25 30l2.139-1.013A5.02 5.02 0 0 0 30 24.467zm-5 9.786l-1.283-.607A3.01 3.01 0 0 1 22 24.468V20h6v4.468a3.01 3.01 0 0 1-1.717 2.71zM17 18H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12v-2H5v-5h12zM27 4h-5a2 2 0 0 0-2 2v9h2V6h5v9h2V6a2 2 0 0 0-2-2M15 4H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M5 13V6h10v7z"
          />
        </svg>
      ),
      label: "Projects",
    },
    {
      icon: (isActive: boolean) => (
        <FiUsers
          size={30}
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
        />
      ),
      label: "Followed",
    },
    {
      icon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 512 512"
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
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
      ),
      label: "Spaces",
    },
    // {
    //   icon: (isActive: boolean) => (
    //     <svg
    //       width={30}
    //       height={30}
    //       viewBox="0 0 163 163"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //       className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
    //     >
    //       <path
    //         d="M0 135.562H162.676M0 157.252H162.676M27.1126 43.3795V27.112H43.3802M119.295 27.112H135.563V43.3795M27.1126 75.9146V92.1822H43.3802M119.295 92.1822H135.563V75.9146M81.3378 81.3372C75.5852 81.3372 70.0683 79.052 66.0006 74.9843C61.9329 70.9166 59.6477 65.3996 59.6477 59.6471C59.6477 53.8945 61.9329 48.3776 66.0006 44.3099C70.0683 40.2422 75.5852 37.957 81.3378 37.957C87.0904 37.957 92.6073 40.2422 96.675 44.3099C100.743 48.3776 103.028 53.8945 103.028 59.6471C103.028 65.3996 100.743 70.9166 96.675 74.9843C92.6073 79.052 87.0904 81.3372 81.3378 81.3372ZM16.2676 5.42188H146.408C149.284 5.42188 152.043 6.56447 154.077 8.59831C156.11 10.6322 157.253 13.3906 157.253 16.2669V103.027C157.253 105.904 156.11 108.662 154.077 110.696C152.043 112.73 149.284 113.872 146.408 113.872H16.2676C13.3913 113.872 10.6328 112.73 8.59896 110.696C6.56512 108.662 5.42252 105.904 5.42252 103.027V16.2669C5.42252 13.3906 6.56512 10.6322 8.59896 8.59831C10.6328 6.56447 13.3913 5.42188 16.2676 5.42188Z"
    //         stroke="currentColor"
    //         strokeWidth="10.845"
    //       />
    //     </svg>
    //   ),
    //   label: "Finance",
    // },
    {
      icon: (isActive: boolean) => (
        <HiOutlineNewspaper
          size={30}
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
        />
      ),
      label: "Account",
    },
    {
      icon: (isActive: boolean) => (
        <LuArrowUpToLine
          size={30}
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
        />
      ),
      label: "Top Contributors",
    },
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
      <main className="main-content pb-20">
        <div className="relative">
          <div>
            <div className="relative"></div>
            <div className="content-inner " id="page_layout">
              <div className="container mx-auto">
                <div className="grid grid-cols-8 gap-4">
                  <div className="w-full col-span-6 ">
                    <div className="w-full  mx-auto">
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

                            <ContributionHeatmap pageType={"space"} />
                            <div className="max-w-5xl -mt-2 relative mx-auto  bg-white p-2">
                              <div className="flex items-start gap-5">
                                <div className="flex gap-6">
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/images/user/orgImg.png"
                                    alt="Profile"
                                    className="w-28 h-28 rounded-lg object-cover"
                                  />

                                  <div>
                                    <h1 className="text-3xl flex mt-1.5 items-center gap-1 font-bold text-black">
                                      Thinkshifts HQ
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
                                  <div className="flex text-black items-center mt-1.5 gap-3">
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
                              </div>

                              <span className="flex flex-wrap items-center gap-1.5 -mt-[2rem] text-xs ms-[8.5rem]">
                                <p className="text-[#b1afaf] text-sm border border-[#e3e0e0] rounded p-0.5">
                                  #Advocate
                                </p>
                                <p className="text-[#b1afaf] text-sm border border-[#e3e0e0] rounded p-0.5">
                                  Engineering With Precision
                                </p>
                                <p className="text-[#b1afaf] text-sm border border-[#e3e0e0] rounded p-0.5">
                                  Havard Graduate
                                </p>{" "}
                                <SpaceHeatMapModal />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative my-6">
                        <button
                          onClick={() => scroll("left")}
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1"
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
                          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1"
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
                          {items.map((item, idx) => {
                            const isActive = activeTab === item.label;
                            return (
                              <div
                                key={idx}
                                onClick={() => setActiveTab(item.label)}
                                className="relative cursor-pointer flex flex-col items-center w-[80px]"
                              >

                                <div
                                  className={`${
                                    isActive
                                      ? "bg-[#157BFF]"
                                      : "bg-[#157BFF]/10"
                                  } w-[60px] h-[60px] flex justify-center items-center rounded-xl transition-all duration-200`}
                                >
                                  <span className="transition-colors duration-200">
                                    {typeof item.icon === "function"
                                      ? item.icon(isActive)
                                      : item.icon}
                                  </span>
                                </div>

                                <p
                                  className={`${
                                    isActive
                                      ? "text-[#157BFF]"
                                      : "text-gray-500"
                                  } font-semibold whitespace-nowrap text-center mt-2 text-xs transition-colors duration-200`}
                                >
                                  {item.label}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mt-6">
                        {activeTab === "Feeds" && <ProfileFeeds />}
                        {activeTab === "Account" && <ProfileIn />}
                        {activeTab === "Finanace" && <ProfileFinance />}
                        {activeTab === "Followed" && <FollowedTab />}
                        {activeTab === "Feeds" && (
                          <div className="rounded-lg p-5 bg-white shadow-md mb-[40px]">
                            <div
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center gap-2">
                                <Image
                                  width={100}
                                  height={100}
                                  alt="user"
                                  src="/images/user/userImg.jpg"
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
                                src="/images/user/userImg.jpg"
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
                        {/* {activeTab === "Account" && <ProfileAbout />} */}
                        {activeTab === "Heatmap" && <HeatmapConnections />}
                      </div>
                    </div>
                  </div>
                  <div className="w-full col-span-2 ">
                    <div className="">
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

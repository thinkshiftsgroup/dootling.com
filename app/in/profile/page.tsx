"use client";
import React, { useRef, useState } from "react";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import Image from "next/image";
import ContributionHeatmap from "@/components/main/landing-page/heatMap";
import { FiUsers } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuArrowUpToLine } from "react-icons/lu";
import InReactionModal from "@/components/main/landing-page/in/inReactionModal";
import ProfileFeeds from "@/components/main/profile/feeds";
import SimilarProfiles from "@/components/main/profile/side-card/similarProfiles";
import TrendingProjects from "@/components/main/profile/side-card/tredingProjects";
import TrendingSpaces from "@/components/main/profile/side-card/trendingSpaces";
import ReferralSideTab from "@/components/main/profile/side-card/referralSideTab";
import ProjectDashboard from "@/components/main/profile/project/projects";
import ProfileSpace from "@/components/main/space/profileSpace";
import FollowedTab from "@/components/main/profile/followed";
import ProfileAbout from "@/components/main/profile/about/about";
import TopContributorsTab from "@/components/main/profile/topContributors/topContributors";

const InProfile = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [openLikesModal, setOpenLikesModal] = useState(false);

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

  const myProjects = [
    {
      id: 1,
      imageSrc: "/images/project.png",
      isPrivate: true,
      projectName: "E-commerce App",
      collaborators: 12,
      createdDate: "10/15/2025",
    },
    {
      id: 2,
      imageSrc: "/images/project.png",
      isPrivate: false,
      projectName: "Mobile App",
      collaborators: 5,
      createdDate: "09/20/2025",
    },
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

                            <ContributionHeatmap />
                            <div className="max-w-5xl -mt-2 relative mx-auto  bg-white p-2">
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

                                <button className="bg-blue-500 mt-3 cursor-pointer hover:bg-blue-600 text-white px-2 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]">
                                  Message
                                  <Image
                                    src="/images/icon/message-01.svg"
                                    alt="icon"
                                    width={20}
                                    height={20}
                                  />
                                </button>
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
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative my-6">
                        <button
                          onClick={() => scroll("left")}
                          className=" bg-white rounded-full flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 group "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 24 24"
                            className="text-gray-500 "
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="m14 7l-5 5l5 5"
                            />
                          </svg>
                        </button>

                        <button
                          onClick={() => scroll("right")}
                          className=" bg-white rounded-full flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 group "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 24 24"
                            className="text-gray-500 "
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="m10 17l5-5l-5-5"
                            />
                          </svg>
                        </button>

                        <div
                          ref={scrollRef}
                          className="
                            relative flex items-center gap-4 
                            bg-white rounded-xl shadow-sm
                            px-4 sm:!px-6 py-4
                            overflow-x-auto hide-scrollbar scroll-smooth
                            md:!justify-center
                          "
                        >
                          {items.map((item, idx) => {
                            const isActive = activeTab === item.label;
                            return (
                              <div
                                key={idx}
                                onClick={() => setActiveTab(item.label)}
                                className="relative cursor-pointer flex flex-col items-center w-[70px] sm:w-[80px]"
                              >
                                <div
                                  className={`${
                                    isActive
                                      ? "bg-[#157BFF]"
                                      : "bg-[#157BFF]/10"
                                  } w-[55px] sm:w-[60px] h-[55px] sm:h-[60px] flex justify-center items-center rounded-xl transition-all duration-200`}
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
                                  } font-semibold whitespace-nowrap text-center mt-2 text-[10px] sm:text-xs transition-colors duration-200`}
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
                        {activeTab === "Projects" && (
                          <ProjectDashboard />
                        )}
                        {activeTab === "Followed" && <FollowedTab />}
                        {activeTab === "Spaces" && (
                          <ProfileSpace Spaces={myProjects} />
                        )}
                        {activeTab === "Account" && <ProfileAbout />}
                        {activeTab === "Top Contributors" && (
                          <TopContributorsTab />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-full my-4 lg:!my-0 col-span-2 ">
                    <div className="">
                      <SimilarProfiles />
                      <TrendingProjects />
                      <TrendingSpaces />
                      <ReferralSideTab />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {openLikesModal && (
          <InReactionModal setOpenLikesModal={setOpenLikesModal} />
        )}
      </main>
    </div>
  );
};

export default InProfile;

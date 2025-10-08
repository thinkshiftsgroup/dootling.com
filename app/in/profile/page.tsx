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
import ProfileIn from "@/components/main/profile/otherProfile";

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
    { icon: <TbBrandFeedly size={30} />, label: "Feeds" },
    { icon: <MdOutlineDashboard size={30} />, label: "Projects" },
    { icon: <FiUsers size={30} />, label: "About" },
    { icon: <MdOutlineDashboard size={30} />, label: "Spaces" },
    { icon: <HiOutlineNewspaper size={30} />, label: "Finance" },
    { icon: <LuArrowUpToLine size={30} />, label: "Top Contributions" },
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
                      <div className="w-full h-[27rem] rounded-lg bg-white shadow-md">
                        <div className="max-w-7xl mx-auto px-4 pt-[20px]">
                          <div className="relative">
                            <div className="flex justify-between items-center mb-4">
                              <h2 className="text-black text-xl font-medium">
                                1,193 contributions in the last year
                              </h2>
                            </div>

                            <ContributionHeatmap />
                            <div className="max-w-5xl -mt-10 relative mx-auto bg-white rounded-lg shadow p-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                  <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                                    alt="Profile"
                                    className="w-28 h-28 rounded-lg object-cover"
                                  />

                                  <div>
                                    <h1 className="text-3xl flex items-center gap-1 font-bold text-black">
                                      Joshua Israel{" "}
                                      <GoShieldCheck
                                        size={14}
                                        className="text-[#979797]"
                                      />
                                    </h1>
                                    <span className="flex font-normal items-center gap-2">
                                      <p className=" text-xs text-[#FAAF40] mt-1">
                                        Director in Technology
                                      </p>
                                      <GrMapLocation size={16} />
                                      <p className=" text-xs text-[#979797] mt-1">
                                        United Kingdom
                                      </p>
                                    </span>
                                    <span className="flex items-center gap-1.5 mt-2 text-xs">
                                      <p className="text-[#979797] text-sm border border-[#979797] rounded p-0.5">
                                        #Advocate
                                      </p>
                                      <p className="text-[#979797] text-sm border border-[#979797] rounded p-0.5">
                                        Engineering With Precision
                                      </p>
                                    </span>
                                  </div>
                                </div>

                                <div className="flex text-black items-center gap-8">
                                  <div className="text-center">
                                    <p className="text-3xl font-bold">444</p>
                                    <p className="text-gray-600 text-sm">
                                      Endorsements
                                    </p>
                                  </div>

                                  <div className="text-center">
                                    <p className="text-3xl font-bold">5</p>
                                    <p className="text-gray-600 text-sm">
                                      Projects
                                    </p>
                                  </div>

                                  <div className="text-center">
                                    <p className="text-3xl font-bold">12</p>
                                    <p className="text-gray-600 text-sm">
                                      Strikes
                                    </p>
                                  </div>

                                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 flex items-center gap-1 py-3 rounded-sm font-medium">
                                    Message{" "}
                                    <BiMessageRoundedDetail
                                      size={14}
                                      className="text-white"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative my-6">
                        <button
                          onClick={() => scroll("left")}
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1"
                        >
                          <FaChevronLeft size={18} className="text-gray-500" />
                        </button>

                        <button
                          onClick={() => scroll("right")}
                          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1"
                        >
                          <FaChevronRight size={18} className="text-gray-500" />
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
                                }  font-semibold flex-none text-center mt-2 text-xs`}
                              >
                                {item.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        {activeTab === "Feeds" && (
                          <div className="rounded-lg p-5 bg-white shadow-md">
                            <div className="flex items-center justify-between">
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
                                    Joshua Israel{" "}
                                    <GoShieldCheck
                                      size={14}
                                      className="text-[#979797]"
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

                            <Image
                              width={100}
                              height={100}
                              alt="feed image"
                              className="w-full h-32 object-cover rounded"
                              src="/images/page-img/pizza.jpg"
                            />

                            <div className="my-5 flex items-center justify-between">
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

                              <div className="text-xs text-gray-500 flex items-center gap-2">
                                <p>23 comments</p>
                                <p>4 reposts</p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                              <div className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
                                <FaThumbsUp />
                                <p className="text-xs">Like</p>
                              </div>
                              <div className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
                                <BiCommentDetail />
                                <p className="text-xs">Comment</p>
                              </div>
                              <div className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
                                <BiRepost />
                                <p className="text-xs">Repost</p>
                              </div>
                              <div className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
                                <LuSend />
                                <p className="text-xs">Send</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeTab === "About" && <ProfileIn />}
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
                                info: "33 Projects 6 Strikes",
                                image: "/images/user/13.jpg",
                              },
                              {
                                name: "Christopher Plessis",
                                info: "33 Projects 6 Strikes",
                                image: "/images/user/17.jpg",
                              },
                              {
                                name: "Ellyse Perry",
                                info: "33 Projects 6 Strikes",
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

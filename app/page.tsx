"use client";
import Image from "next/image";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import ActiveUsers from "@/components/main/landing-page/sidebar/activeUsers";
import Suggestions from "@/components/main/landing-page/sidebar/suggestions";
import { useEffect, useRef, useState } from "react";
import ReactionModal from "@/components/main/modal/reacttionModal";
import AddPostModal from "@/components/main/modal/addPostModal";
import { FaHandsClapping } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { IoClose, IoHeartCircle } from "react-icons/io5";
import { PiHandHeartFill } from "react-icons/pi";

import { BiCommentDetail } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { TbDots } from "react-icons/tb";
import StoriesLanding from "@/components/main/landing-page/index/stories";
import SimilarProfiles from "@/components/main/profile/side-card/similarProfiles";
import { BiRepost } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import ReactionPopup from "@/components/main/landing-page/reactionHover";
import SendModal from "@/components/main/modal/sendModal";

interface User {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Developer",
    avatar: "/images/user/userImg.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    avatar: "/images/user/userImg.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Manager",
    avatar: "/images/user/userImg.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Developer | Team Lead",
    avatar: "/images/user/userImg.jpg",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Designer | UI/UX Specialist",
    avatar: "/images/user/userImg.jpg",
  },
  {
    id: 6,
    name: "Robert Wilson",
    role: "Manager | Product Owner",
    avatar: "/images/user/userImg.jpg",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    role: "Developer | Backend Engineer",
    avatar: "/images/user/userImg.jpg",
  },
  {
    id: 8,
    name: "David Lee",
    role: "QA Engineer | Automation Tester",
    avatar: "/images/user/userImg.jpg",
  },
];

export default function Home() {
  const reactions = [
    { icon: <FaThumbsUp className="w-5 h-5" />, bg: "bg-blue-400" },
    { icon: <FaHandsClapping className="w-5 h-5" />, bg: "bg-green-400" },
    { icon: <PiHandHeartFill className="w-5 h-5" />, bg: "bg-purple-400" },
    { icon: <IoHeartCircle className="w-5 h-5" />, bg: "bg-red-400" },
    { icon: <HiOutlineLightBulb className="w-5 h-5" />, bg: "bg-yellow-400" },
    { icon: <CgSmileMouthOpen className="w-5 h-5" />, bg: "bg-green-400" },
  ];

  const [openLikesModal, setOpenLikesModal] = useState(false);
  const [showReactions, setShowReactions] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setShowReactions(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowReactions(false);
    }, 500);
  };

  const [openRepostModal, setOpenRepostModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenRepostModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const toggleUser = (id: number) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id]
    );
  };

  return (
    <main className="main-content pb-20">
      <div className="relative">
        <Navbar />
        <div>
          <div className="position-relative"></div>
          <div className="content-inner " id="page_layout">
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                <div
                  className="w-full lg:w-2/3 px-0 md:px-4"
                  id="dynamicDivContainer"
                >
                  <div id="content">
                    <StoriesLanding />
                    <AddPostModal />
                    <div className="flex flex-wrap social-post-container pb-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-lg p-5 w-full bg-white shadow-md mb-[40px]"
                        >
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
                                <h1 className="sm:text-xl text-lg flex items-center gap-1 font-bold text-black">
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
                          <h1 className="md:text-3xl text-xl sm:text-2xl  text-black my-4">
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
                              <div
                                onClick={() => setOpenLikesModal(true)}
                                className="flex items-center"
                              >
                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white border-2 border-white z-30">
                                  <FaThumbsUp className="w-3 h-3" />
                                </div>
                                <div className="-ml-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white border-2 border-white z-20">
                                  <FaHandsClapping className="w-3 h-3" />
                                </div>
                                <div className="-ml-2 w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white border-2 border-white z-10">
                                  <FaHeart className="w-3 h-3" />
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
                          <div className="flex items-center justify-between flex-wrap gap-4 sm:gap-6 md:gap-10 lg:gap-[4rem]">
                            <Image
                              width={100}
                              height={100}
                              alt="user"
                              src="/images/user/userImg.png"
                              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover"
                            />

                            <div className="flex relative items-center justify-between flex-1 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-none">
                              <div
                                className="relative flex flex-col items-center"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                              >
                                <div className="flex flex-col cursor-pointer items-center gap-1">
                                  <FaThumbsUp className="text-gray-600 text-lg sm:text-xl" />
                                  <p className="font-bold text-xs sm:text-sm md:text-base">
                                    Like
                                  </p>
                                </div>
                                <ReactionPopup show={showReactions} />
                              </div>

                              <div className="flex flex-col items-center gap-1">
                                <BiCommentDetail className="text-gray-600 text-lg sm:text-xl" />
                                <p className="font-bold text-xs sm:text-sm md:text-base">
                                  Comment
                                </p>
                              </div>

                              <div className="relative flex flex-col items-center gap-1">
                                <div
                                  onClick={() =>
                                    setOpenRepostModal((prev) => !prev)
                                  }
                                  className="flex cursor-pointer flex-col items-center gap-1"
                                >
                                  <BiRepost className="text-gray-600 text-lg sm:text-xl" />
                                  <p className="font-bold text-xs sm:text-sm md:text-base">
                                    Repost
                                  </p>
                                </div>

                                {openRepostModal && (
                                  <div
                                    ref={dropdownRef}
                                    className="absolute top-full mt-1 bg-white space-y-2 w-[300px] p-2 rounded-sm shadow-md z-50"
                                  >
                                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                      <FiEdit className="flex-none" size={22} />
                                      <div>
                                        <h3 className="font-medium text-sm">
                                          Repost with your thoughts
                                        </h3>
                                        <p className="font-normal text-xs">
                                          Create a new post with Salem's post
                                          attached
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                      <BiRepost
                                        className="flex-none"
                                        size={22}
                                      />
                                      <div>
                                        <h3 className="font-medium text-sm">
                                          Repost
                                        </h3>
                                        <p className="font-normal text-xs">
                                          Instantly bring Salem's post to others
                                          feed
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div>
                                <div
                                  className="flex flex-col items-center gap-1 cursor-pointer"
                                  onClick={() => setOpenModal(true)}
                                >
                                  <LuSend className="text-gray-600 text-lg sm:text-xl" />
                                  <p className="font-bold text-xs sm:text-sm md:text-base">
                                    Send
                                  </p>
                                </div>

                                {openModal && (
                                  <SendModal
                                    users={users}
                                    selectedUsers={selectedUsers}
                                    toggleUser={toggleUser}
                                    setOpenModal={setOpenModal}
                                    setSelectedUsers={setSelectedUsers}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="rounded-lg p-5 w-full bg-white shadow-md mb-[40px]">
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
                                Bni Cyst{" "}
                                <Image
                                  src="/images/icon/verified.svg"
                                  alt="icon"
                                  width={14}
                                  height={14}
                                />
                              </h1>
                              <span className="m-0 inline-block text-sm font-normal">
                                added new video in his timeline
                              </span>
                              <p className="text-gray-500 text-xs">
                                90 days ago
                              </p>
                            </div>
                          </div>
                          <TbDots size={20} className="cursor-pointer" />
                        </div>
                        {/* <div className="my-4">
                          <p className="m-0">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi nulla dolor, ornare at commodo non,
                            feugiat non nisi. Phasellus faucibus mollis
                            pharetra. Proin blandit ac massa sed rhoncus"
                          </p>
                        </div> */}
                        <h1 className="text-3xl text-black my-4">
                          Completed milestone: "Prototype testing" in Mobile App
                          Development
                        </h1>
                        <div className="user-post mt-4">
                          <div className="aspect-video">
                            <iframe
                              className="w-full h-full rounded-md"
                              src="https://www.youtube.com/embed/IEHKekzTzPg"
                              title="YouTube video"
                              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>

                        <div className="py-2.5 my-2.5 flex items-center  justify-between border-b-[#e5e5e5] border-b">
                          <div
                            onClick={() => setOpenLikesModal(true)}
                            className="flex cursor-pointer items-center gap-2"
                          >
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white border-2 border-white z-30">
                                <FaThumbsUp className="w-3 h-3" />
                              </div>
                              <div className="-ml-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white border-2 border-white z-20">
                                <FaHandsClapping className="w-3 h-3" />
                              </div>
                              <div className="-ml-2 w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white border-2 border-white z-10">
                                <FaHeart className="w-3 h-3" />
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
                              <FaThumbsUp className="" />
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
                    </div>
                  </div>
                </div>

                <div className="w-full hidden lg:block lg:w-1/3 ps-5">
                  {/* <ActiveUsers /> */}
                  <SimilarProfiles />
                  <Suggestions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openLikesModal && (
        <ReactionModal setOpenLikesModal={setOpenLikesModal} />
      )}
    </main>
  );
}

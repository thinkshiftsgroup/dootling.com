"use client";
import { useEffect, useRef, useState } from "react";
import ReactionModal from "../modal/reacttionModal";
import { BiRepost } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import ReactionPopup from "@/components/main/landing-page/reactionHover";
import SendModal from "@/components/main/modal/sendModal";
import { FaHandsClapping } from "react-icons/fa6";
import { FiSmile } from "react-icons/fi";
import { AiFillPicture } from "react-icons/ai";

import { BiCommentDetail } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { TbDots } from "react-icons/tb";
import { FaSortDown } from "react-icons/fa";

import Image from "next/image";

import { IoMdTime } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { BiDotsHorizontalRounded } from "react-icons/bi";

interface FeedMessageProps {
  content: string;
}
const FeedMessage = ({ content }: FeedMessageProps) => {
  const [openLikesModal, setOpenLikesModal] = useState(false);
  const [showReactions, setShowReactions] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  const [openComment, setOpenComment] = useState(false);

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

  const isVideo =
    content.includes("youtube.com") || content.includes("youtu.be");

  const [openRelevent, setOpenRelevant] = useState(false);

  return (
    <div className="rounded-lg p-5 w-full bg-white shadow-md mb-[40px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            width={100}
            height={100}
            alt="user"
            src="/images/user/userImg.jpg"
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
            <p className="text-gray-500 text-xs">90 days ago</p>
          </div>
        </div>
        <TbDots size={20} className="cursor-pointer" />
      </div>
      <h1 className="md:text-3xl text-xl sm:text-2xl  text-black my-4">
        Completed milestone: "Prototype testing" in Mobile App Development
      </h1>
      <div className="w-full rounded-md overflow-hidden mt-2">
        {isVideo ? (
          <iframe
            className="w-full h-64 sm:h-80 rounded-md"
            src={content}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <Image
            width={800}
            height={500}
            alt="feed content"
            className="w-full h-64 sm:h-80 object-cover rounded-md"
            src={content}
          />
        )}
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

          <span className="text-gray-700 font-medium text-sm">293</span>
        </div>
        <div className="text-xs cursor-pointer text-gray-500 flex items-center gap-1">
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
          src="/images/user/userImg.jpg"
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
              <p className="font-bold text-xs sm:text-sm md:text-base">Like</p>
            </div>
            <ReactionPopup show={showReactions} />
          </div>

          <div
            onClick={() => setOpenComment((prev) => !prev)}
            className="flex flex-col items-center gap-1"
          >
            <BiCommentDetail className="text-gray-600 text-lg sm:text-xl" />
            <p className="font-bold text-xs sm:text-sm md:text-base">Comment</p>
          </div>

          <div className="relative flex flex-col items-center gap-1">
            <div
              onClick={() => setOpenRepostModal((prev) => !prev)}
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
                        Create a new post with Salem's post attached
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                    <BiRepost className="flex-none" size={22} />
                    <div>
                      <h3 className="font-medium text-sm">Repost</h3>
                      <p className="font-normal text-xs">
                        Instantly bring Salem's post to others feed
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
                <p className="font-bold text-xs sm:text-sm md:text-base">Send</p>
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
        {openComment && (
          <div className="w-full mt-5 mb-3">
            <div className="flex w-full items-center gap-2">
              <Image
                width={100}
                height={100}
                alt="user"
                src="/images/user/userImg.jpg"
                className="rounded-full w-12 h-12 object-cover"
              />
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="rounded-full px-1 py-2 border w-full"
                />
                <div className="flex items-center gap-2 absolute top-3 right-3">
                  <FiSmile size={20} className="cursor-pointer" />
                  <AiFillPicture size={20} className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="relative w-auto">
              <span
                onClick={() => setOpenRelevant((prev) => !prev)}
                className="p-1 flex gap-1 my-2 cursor-pointer"
              >
                <p className="text-sm">Most relevant</p>
                <FaSortDown size={16} />
              </span>
              {openRelevent && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full mt-1 bg-white space-y-2 w-[300px] p-2 rounded-sm shadow-md z-50"
                >
                  <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                    <MdRocketLaunch className="flex-none" size={22} />
                    <div>
                      <h3 className="font-medium text-sm">Most relevant</h3>
                      <p className="font-normal text-xs">
                        See the most relevant comment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                    <IoMdTime className="flex-none" size={22} />
                    <div>
                      <h3 className="font-medium text-sm">Most recent</h3>
                      <p className="font-normal text-xs">
                        See all comments, the most recent comments are first
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    width={100}
                    height={100}
                    alt="user"
                    src="/images/user/userImg.jpg"
                    className="rounded-full w-8 h-8 object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-black">
                      Racheal James <span className="text-gray-400">3rd+</span>{" "}
                    </h3>
                    <p className="text-xs py-1">Product Designer | Tailor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <p className="text-xs">3w</p>
                  <BiDotsHorizontalRounded size={10} className="cursor-pointer" />
                </div>
              </div>

              <div className="ml-9 my-1">
                <p className="text-sm py-1  leading-relaxed">
                  Love how you're blending gaming and work into one creative
                  space! Excited to see how the wall upgrades complete the vibe ,
                  setups that evolve with your journey always feel the most
                  authentic.
                </p>
                <div className="flex mt-1 items-center gap-0.5 text-xs">
                  <p>Like</p>
                  <div className="flex items-center gap-1">
                    <LuDot size={10} />
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white border-2 border-white z-30">
                      <FaThumbsUp className="w-2 h-2" />
                    </div>
                    1 <LuDot size={10} />
                  </div>
                  <p>Reply</p>
                  <div className="flex items-center gap-1">
                    <LuDot size={10} />1 reply
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {openLikesModal && (
          <ReactionModal setOpenLikesModal={setOpenLikesModal} />
        )}
      </div>
    </>
  );
};

export default FeedMessage;
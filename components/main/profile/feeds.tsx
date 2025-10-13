"use client";
import React, { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import Image from "next/image";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { TbDots } from "react-icons/tb";
import ReactionModal from "../modal/reacttionModal";

const ProfileFeeds = () => {
  const [openLikesModal, setOpenLikesModal] = useState(false);

  return (
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

          <span className="text-gray-700 font-medium text-sm">293</span>
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

        <div className="flex items-center justify-between flex-1 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-none">
          <div className="flex flex-col items-center gap-1">
            <FaThumbsUp className="text-gray-600 text-lg sm:text-xl" />
            <p className="font-bold text-xs sm:text-sm md:text-base">Like</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <BiCommentDetail className="text-gray-600 text-lg sm:text-xl" />
            <p className="font-bold text-xs sm:text-sm md:text-base">Comment</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <BiRepost className="text-gray-600 text-lg sm:text-xl" />
            <p className="font-bold text-xs sm:text-sm md:text-base">Repost</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <LuSend className="text-gray-600 text-lg sm:text-xl" />
            <p className="font-bold text-xs sm:text-sm md:text-base">Send</p>
          </div>
        </div>
      </div>

      {openLikesModal && (
        <ReactionModal setOpenLikesModal={setOpenLikesModal} />
      )}
    </div>
  );
};

export default ProfileFeeds;

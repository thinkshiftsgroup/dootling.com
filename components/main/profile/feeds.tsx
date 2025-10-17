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
import FeedMessage from "../atom/feedMessage";

const ProfileFeeds = () => {
  const [openLikesModal, setOpenLikesModal] = useState(false);
  const feedContent = [
    "/images/page-img/pizza.jpg",
    "/images/page-img/pizza.jpg",
  ];

  return (
    <div className="flex flex-wrap social-post-container pb-4">
      {feedContent.map((content, i) => (
        <FeedMessage key={i} content={content} />
      ))}
    </div>
  );
};

export default ProfileFeeds;

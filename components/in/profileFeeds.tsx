"use client";
import React, { useState } from "react";
import FeedMessage from "../main/atom/feedMessage";

const ProfileFeeds = () => {
  const [openLikesModal, setOpenLikesModal] = useState(false);
  const feedContent = [
    "/images/page-img/pizza.jpg",
    "/images/page-img/pizza.jpg",
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

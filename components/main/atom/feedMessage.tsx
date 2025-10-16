"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { BiCommentDetail, BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { TbDots } from "react-icons/tb";
import { FaHandsClapping } from "react-icons/fa6";

interface Comment {
  id: number;
  user: string;
  text: string;
}

interface User {
  id: number;
  name: string;
}

interface Post {
  id: number;
  user: string;
  avatar: string;
  timeAgo: string;
  content: string;
  image?: string;
  comments: Comment[];
  reposts: Post[];
}

interface PostState {
  showCommentInput: boolean;
  showComments: boolean;
  showRepostDropdown: boolean;
  showSendModal: boolean;
  hoverReactions: boolean;
}

export default function LinkedInPostFeed() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "John Paul",
      avatar: "/images/user/userImg.png",
      timeAgo: "90 days ago",
      content:
        'Completed milestone: "Prototype testing" in Mobile App Development',
      image: "/images/page-img/pizza.jpg",
      comments: [
        { id: 1, user: "Alice", text: "Great job!" },
        { id: 2, user: "Bob", text: "Excited to see the final version!" },
      ],
      reposts: [],
    },
  ]);

  const [postsState, setPostsState] = useState<{ [key: number]: PostState }>(
    {}
  );

  const [users] = useState<User[]>([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);

  const togglePostState = (postId: number, field: keyof PostState) => {
    setPostsState((prev) => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        [field]: !prev[postId]?.[field],
      },
    }));
  };

  return (
    <div className="p-5 space-y-6 max-w-3xl mx-auto">
      {posts.map((post) => {
        const state = postsState[post.id] || {};
        return (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-5 relative"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  width={50}
                  height={50}
                  src={post.avatar}
                  alt={post.user}
                  className="rounded-full object-cover w-12 h-12"
                />
                <div>
                  <h1 className="font-bold flex items-center gap-1 text-black">
                    {post.user}{" "}
                    <Image
                      src="/images/icon/verified.svg"
                      alt="verified"
                      width={14}
                      height={14}
                    />
                  </h1>
                  <p className="text-gray-500 text-xs">{post.timeAgo}</p>
                </div>
              </div>
              <TbDots size={20} className="cursor-pointer" />
            </div>

            <h1 className="text-black mt-4 mb-3">{post.content}</h1>
            {post.image && (
              <Image
                width={500}
                height={200}
                src={post.image}
                alt="post image"
                className="w-full h-48 object-cover rounded"
              />
            )}

            <div className="flex items-center justify-between mt-3 border-b border-gray-200 pb-2">
              <div
                className="flex items-center gap-1 relative"
                onMouseEnter={() => togglePostState(post.id, "hoverReactions")}
                onMouseLeave={() => togglePostState(post.id, "hoverReactions")}
              >
                {state.hoverReactions && (
                  <div className="absolute -top-10 left-0 flex gap-1 p-1 rounded-full shadow-lg bg-white z-10">
                    <FaThumbsUp className="text-blue-500" />
                    <FaHeart className="text-red-500" />
                    <FaHandsClapping className="text-green-500" />
                  </div>
                )}

                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white border-2 border-white z-30">
                  <FaThumbsUp className="w-3 h-3" />
                </div>
                <div className="-ml-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white border-2 border-white z-20">
                  <FaHandsClapping className="w-3 h-3" />
                </div>
                <div className="-ml-2 w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white border-2 border-white z-10">
                  <FaHeart className="w-3 h-3" />
                </div>

                <span className="text-gray-700 text-sm font-medium ml-2">
                  {post.comments.length + 10}
                </span>
              </div>

              <div className="text-xs text-gray-500 flex items-center gap-1">
                <p
                  className="cursor-pointer"
                  onClick={() => togglePostState(post.id, "showComments")}
                >
                  {post.comments.length} comments
                </p>
                <span className="inline-flex w-1 h-1 rounded-full bg-gray-500"></span>
                <p
                  className="cursor-pointer"
                  onClick={() => togglePostState(post.id, "showRepostDropdown")}
                >
                  {post.reposts.length} reposts
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 gap-4 flex-wrap">
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => togglePostState(post.id, "showCommentInput")}
              >
                <FaThumbsUp className="text-gray-600 text-lg sm:text-xl" />
                <p className="text-xs font-bold">Like</p>
              </div>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => togglePostState(post.id, "showCommentInput")}
              >
                <BiCommentDetail className="text-gray-600 text-lg sm:text-xl" />
                <p className="text-xs font-bold">Comment</p>
              </div>
              <div
                className="flex flex-col items-center cursor-pointer relative"
                onClick={() => togglePostState(post.id, "showRepostDropdown")}
              >
                <BiRepost className="text-gray-600 text-lg sm:text-xl" />
                <p className="text-xs font-bold">Repost</p>

                {state.showRepostDropdown && (
                  <div className="absolute top-8 bg-white shadow-md rounded p-2 w-52 z-10">
                    <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                      Repost with your thoughts
                    </div>
                    <div className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                      Repost instantly
                    </div>
                  </div>
                )}
              </div>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => togglePostState(post.id, "showSendModal")}
              >
                <LuSend className="text-gray-600 text-lg sm:text-xl" />
                <p className="text-xs font-bold">Send</p>
              </div>
            </div>

            {state.showCommentInput && (
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full border rounded p-2"
                />
                <button className="mt-1 px-3 py-1 bg-blue-500 text-white rounded">
                  Post
                </button>
              </div>
            )}

            {state.showComments &&
              post.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="pl-5 mt-2 text-sm text-gray-700"
                >
                  <strong>{comment.user}</strong> {comment.text}
                </div>
              ))}

            {state.showSendModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded p-5 w-96">
                  <h2 className="font-bold mb-3">Send post to members</h2>
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center gap-2 mb-2">
                      <input type="checkbox" />
                      <span>{user.name}</span>
                    </div>
                  ))}
                  <div className="flex justify-end gap-2 mt-3">
                    <button
                      className="px-3 py-1 rounded bg-gray-200"
                      onClick={() => togglePostState(post.id, "showSendModal")}
                    >
                      Cancel
                    </button>
                    <button className="px-3 py-1 rounded bg-blue-500 text-white">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

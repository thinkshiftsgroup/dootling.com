"use client";
import Image from "next/image";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import ActiveUsers from "@/components/main/landing-page/sidebar/activeUsers";
import Suggestions from "@/components/main/landing-page/sidebar/suggestions";
import { useState } from "react";
import ReactionModal from "@/components/main/modal/reacttionModal";
import AddPostModal from "@/components/main/modal/addPostModal";

import { BiCommentDetail } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { TbDots } from "react-icons/tb";
import SimilarProfiles from "@/components/main/profile/side-card/similarProfiles";

export default function Home() {
  const stories = [
    {
      id: "bni",
      name: "Your Story",
      photo: "/images/user/1.jpg",
      items: [
        {
          id: "bni-1",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4",
        },
        {
          id: "bni-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
        },
        {
          id: "bni-3",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
        },
      ],
    },
    {
      id: "bob",
      name: "Bob Frapples",
      photo: "/images/user/13.jpg",
      items: [
        {
          id: "bob-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
        },
        {
          id: "bob-2",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
        },
      ],
    },
    {
      id: "greta",
      name: "Greta Life",
      photo: "/images/user/14.jpg",
      items: [
        {
          id: "greta-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
        },
        {
          id: "greta-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
        },
      ],
    },
    {
      id: "pete",
      name: "Pete Sariya",
      photo: "/images/user/15.jpg",
      items: [
        {
          id: "pete-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
        },
      ],
    },
    {
      id: "paige",
      name: "Paige Turner",
      photo: "/images/user/16.jpg",
      items: [
        {
          id: "paige-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
        },
      ],
    },
    {
      id: "marcum",
      name: "Marcum Shaw",
      photo: "/images/user/17.jpg",
      items: [
        {
          id: "marcum-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
        },
      ],
    },
    {
      id: "travis",
      name: "Travis John",
      photo: "/images/user/17.jpg",
      items: [
        {
          id: "marcum-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
        },
      ],
    },
  ];

  const [openLikesModal, setOpenLikesModal] = useState(false);

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
                    <div className="flex flex-wrap pb-4">
                      <div className="w-full">
                        <div className="mb-2">
                          <div
                            id="stories"
                            className="relative storiesWrapper flex gap-3 overflow-x-hidden no-scrollbar stories user-icon carousel snapgram"
                          >
                            <button
                              onClick={() => scroll()}
                              className="bg-white rounded-full flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 group -mt-3"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={25}
                                height={25}
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
                              onClick={() => scroll()}
                              className=" bg-white rounded-full flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 group -mt-3"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={25}
                                height={25}
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
                            {stories.map((story) => (
                              <div
                                key={story.id}
                                className="story flex flex-col items-center"
                                data-id={story.id}
                              >
                                <a
                                  href="#"
                                  className="item-link flex flex-col items-center"
                                >
                                  <span className="item-preview block  rounded-full overflow-hidden border-2 border-white">
                                    <Image
                                      src={story.photo}
                                      alt={story.name}
                                      width={90}
                                      height={90}
                                      className="object-cover w-full h-full"
                                    />
                                  </span>
                                  <span className="info text-center mt-1">
                                    <strong className="name text-xs block">
                                      {story.name}
                                    </strong>
                                    <span className="time text-xs text-gray-400"></span>
                                  </span>
                                </a>

                                <ul className="hidden">
                                  {story.items.map((item) => (
                                    <li key={item.id}>
                                      <a href={item.src} data-type={item.type}>
                                        <img
                                          src={item.thumb}
                                          alt={story.name}
                                          className="w-full h-auto"
                                          loading="lazy"
                                        />
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex flex-wrap pb-4">
                      <div className="w-full">
                        <div className="mb-5">
                          <div
                            id="stories"
                            className="storiesWrapper flex gap-3"
                          ></div>
                        </div>
                      </div>
                    </div> */}
                    <AddPostModal />

                    <div className="flex flex-wrap social-post-container pb-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="rounded-lg p-5 w-full bg-white shadow-md mb-[40px]">
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

                            <div className="flex items-center justify-between flex-1 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-none">
                              <div className="flex flex-col items-center gap-1">
                                <FaThumbsUp className="text-gray-600 text-lg sm:text-xl" />
                                <p className="font-bold text-xs sm:text-sm md:text-base">
                                  Like
                                </p>
                              </div>

                              <div className="flex flex-col items-center gap-1">
                                <BiCommentDetail className="text-gray-600 text-lg sm:text-xl" />
                                <p className="font-bold text-xs sm:text-sm md:text-base">
                                  Comment
                                </p>
                              </div>

                              <div className="flex flex-col items-center gap-1">
                                <BiRepost className="text-gray-600 text-lg sm:text-xl" />
                                <p className="font-bold text-xs sm:text-sm md:text-base">
                                  Repost
                                </p>
                              </div>

                              <div className="flex flex-col items-center gap-1">
                                <LuSend className="text-gray-600 text-lg sm:text-xl" />
                                <p className="font-bold text-xs sm:text-sm md:text-base">
                                  Send
                                </p>
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

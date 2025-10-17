"use client";

import Navbar from "@/components/main/landing-page/navbar/navbar";
import Suggestions from "@/components/main/landing-page/sidebar/suggestions";

import AddPostModal from "@/components/main/modal/addPostModal";
import StoriesLanding from "@/components/main/landing-page/index/stories";
import SimilarProfiles from "@/components/main/profile/side-card/similarProfiles";
import FeedMessage from "@/components/main/atom/feedMessage";

export default function Home() {
  const feedContent = [
    "/images/page-img/pizza.jpg",
    "/images/page-img/pizza.jpg",
    "https://www.youtube.com/embed/IEHKekzTzPg",
  ];
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
                      {feedContent.map((content, i) => (
                        <FeedMessage key={i} content={content} />
                      ))}

                      {/* <div className="rounded-lg p-5 w-full bg-white shadow-md mb-[40px]">
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
                        <h1 className="text-3xl text-black my-4">
                          Completed milestone: "Prototype testing" in Mobile App
                          Development
                        </h1>
                        <div className="user-post mt-4">
                          <div className="aspect-video">
                            <iframe
                              className="w-full h-full rounded-md"
                              src=""
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
                      </div> */}
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
    </main>
  );
}

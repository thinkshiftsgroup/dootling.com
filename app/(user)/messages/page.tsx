import Navbar from "@/components/main/landing-page/navbar/navbar";
import React from "react";
import Image from "next/image";
import ChatPage from "@/components/main/messages/chatPage";
import ChatSidebar from "@/components/main/messages/chatSideBar";

const Messages = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content pb-20">
        <div className="mt-[1rem]">
          <div className="container mx-auto">
            <div className="lg:grid block grid-cols-10 gap-4">
              <div className="w-full col-span-7 ">
                <div className="w-full mx-auto">
                  <div className="grid grid-cols-8">
                    <ChatSidebar />
                    <ChatPage />
                  </div>
                </div>
              </div>
              <div className="w-full col-span-3 ">
                <div className="rounded-lg shadow bg-white mb-4">
                  <div className="flex justify-between px-2 py-5 border-b border-[#f1f1f1]">
                    <div className="header-title">
                      <h4 className="text-lg font-bold text-black">
                        Space Inboxes
                      </h4>
                    </div>
                  </div>
                  <div className="flex p-1 flex-col gap-1.5">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-1">
                          <Image
                            width={100}
                            height={100}
                            src="/images/user/orgImg.png"
                            alt="Profile"
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div>
                            <h1 className="font-semibold leading-normal text-sm">
                              ThinkShifts Group A2 HQ Landers
                            </h1>
                            <p className="text-[10px] pt-2 font-normal">
                              2 Projects | 3 Products | 5 Streaks
                            </p>
                          </div>
                        </div>

                        <div className="bg-[#157BFF] rounded-sm mr-3 p-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 183 184"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M64.8047 110.808H118.037M64.8047 72.7852H91.4207"
                              stroke="white"
                              strokeWidth="11.1201"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M107.921 159.406C139.738 157.3 165.077 131.596 167.161 99.33C167.564 93.0182 167.564 86.4783 167.161 80.1665C165.077 47.9078 139.738 22.2195 107.921 20.0978C96.9314 19.3736 85.9063 19.3736 74.9169 20.0978C43.0993 22.2119 17.7608 47.9078 15.6771 80.1741C15.2743 86.5556 15.2743 92.9561 15.6771 99.3376C16.4376 111.087 21.6315 121.969 27.7532 131.155C31.3046 137.581 28.9623 145.604 25.2589 152.623C22.5973 157.68 21.2589 160.205 22.3311 162.03C23.3958 163.855 25.7912 163.916 30.5745 164.03C40.0422 164.258 46.4225 161.581 51.4871 157.847C54.3541 155.726 55.7913 154.669 56.7799 154.547C57.7685 154.425 59.7229 155.231 63.6165 156.828C67.1146 158.273 71.183 159.163 74.9093 159.414C85.7458 160.129 97.069 160.129 107.928 159.414L107.921 159.406Z"
                              stroke="white"
                              strokeWidth="11.1201"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

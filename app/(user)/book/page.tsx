"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import SelectTimeDate from "@/components/main/landing-page/book/selectTimeandDate";
import FillBookingForm from "@/components/main/landing-page/book/fillBookingForm";

const BookingPage = () => {
  const [page, setPage] = useState(1);
  const [openReadMore, setOpenReadMore] = useState(false);

  return (
    <div>
      <Navbar fixed={true} />
      <div className="container mx-auto md:h-[85vh] h-auto md:mt-[5rem] md:mb-[1rem] md:bg-white md:shadow-sm md:rounded-sm md:grid md:grid-cols-10 mt-[70px]">
        <div className="md:col-span-4 md:border-r p-6 relative md:h-auto h-[85vh]">
          <div className="flex mb-10 items-center gap-2">
            <Image
              src="/images/user/userImg.jpg"
              alt="icon"
              width={100}
              height={100}
              className="rounded-sm w-[60px]"
            />
            <div className="flex flex-col gap-1.5">
              <h1 className="text-3xl flex whitespace-nowrap font-bold text-black">
                John Paul
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 148 148"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M77.6112 23.2932C80.5992 24.0969 83.1823 26.1032 86.3237 28.5329L88.1459 29.9441C89.6369 31.0914 89.9927 31.3553 90.3486 31.5455C90.7307 31.7533 91.1338 31.9199 91.5512 32.0424C91.9377 32.159 92.3733 32.2265 94.2385 32.4719L96.5271 32.7603C100.466 33.2634 103.706 33.6745 106.387 35.2145C108.737 36.5643 110.682 38.5093 112.032 40.8592C113.572 43.5343 113.983 46.78 114.486 50.7191L114.78 53.0076C115.02 54.8728 115.087 55.3085 115.204 55.695C115.326 56.1122 115.49 56.5131 115.695 56.8976C115.891 57.2534 116.155 57.6093 117.302 59.1002L118.713 60.9225C121.143 64.0639 123.149 66.647 123.953 69.635C124.656 72.2472 124.656 74.999 123.953 77.6112C123.149 80.5992 121.143 83.1823 118.713 86.3237L117.302 88.1459C116.155 89.6369 115.891 89.9927 115.701 90.3486C115.492 90.7331 115.326 91.134 115.204 91.5512C115.087 91.9377 115.02 92.3733 114.774 94.2385L114.486 96.5271C113.983 100.466 113.572 103.706 112.032 106.387C110.681 108.734 108.734 110.681 106.387 112.032C103.712 113.572 100.466 113.983 96.5271 114.486L94.2385 114.78C92.3733 115.02 91.9377 115.087 91.5512 115.204C91.134 115.326 90.7331 115.49 90.3486 115.695C89.9927 115.891 89.6369 116.155 88.1459 117.302L86.3237 118.713C83.1823 121.143 80.5992 123.149 77.6112 123.953C74.999 124.656 72.2472 124.656 69.635 123.953C66.647 123.149 64.0639 121.143 60.9225 118.713L59.1002 117.302C57.6093 116.155 57.2534 115.891 56.8976 115.701C56.5155 115.493 56.1123 115.326 55.695 115.204C55.3085 115.087 54.8728 115.02 53.0076 114.774L50.7191 114.486C46.78 113.983 43.5405 113.572 40.8592 112.032C38.5125 110.681 36.5649 108.734 35.2145 106.387C33.6745 103.712 33.2634 100.466 32.7603 96.5271L32.4658 94.2385C32.2265 92.3733 32.159 91.9377 32.0424 91.5512C31.9218 91.1341 31.7573 90.731 31.5516 90.3486C31.3553 89.9927 31.0914 89.6369 29.9441 88.1459L28.5329 86.3237C26.1032 83.1823 24.0969 80.5992 23.2932 77.6112C22.5898 74.999 22.5898 72.2472 23.2932 69.635C24.0969 66.647 26.1032 64.0639 28.5329 60.9225L29.9441 59.1002C31.0914 57.6093 31.3553 57.2534 31.5455 56.8976C31.7533 56.5155 31.9199 56.1123 32.0424 55.695C32.159 55.3085 32.2265 54.8728 32.4719 53.0076L32.7603 50.7191C33.2634 46.78 33.6745 43.5405 35.2145 40.8592C36.5649 38.5125 38.5125 36.5649 40.8592 35.2145C43.5343 33.6745 46.78 33.2634 50.7191 32.7603L53.0076 32.4658C54.8728 32.2265 55.3085 32.159 55.695 32.0424C56.1121 31.9218 56.5152 31.7573 56.8976 31.5516C57.2534 31.3553 57.6093 31.0914 59.1002 29.9441L60.9225 28.5329C64.0639 26.1032 66.647 24.0969 69.635 23.2932C72.2472 22.5898 74.999 22.5898 77.6112 23.2932ZM96.3676 57.0141C95.217 55.8639 93.6567 55.2177 92.0297 55.2177C90.4028 55.2177 88.8425 55.8639 87.6919 57.0141L67.4875 77.2185L59.5543 69.2853C58.3971 68.1676 56.8472 67.5492 55.2385 67.5632C53.6298 67.5771 52.0909 68.2224 50.9533 69.36C49.8158 70.4976 49.1705 72.0364 49.1565 73.6452C49.1425 75.2539 49.761 76.8037 50.8786 77.9609L63.1497 90.232C64.3003 91.3823 65.8606 92.0284 67.4875 92.0284C69.1145 92.0284 70.6748 91.3823 71.8254 90.232L96.3676 65.6898C97.5178 64.5392 98.164 62.9789 98.164 61.352C98.164 59.7251 97.5178 58.1647 96.3676 57.0141Z"
                    fill="#0088FF"
                  />
                </svg>
              </h1>

              <span className="flex whitespace-nowrap flex-wrap lg:flex-nowrap font-normal items-center gap-1">
                <p className="capitalize text-[#FAAF40] text-xs">
                  Director In Technology
                </p>
                <span className="flex gap-2 items-center">
                  <Image
                    src="/images/icon/iwwa_map.svg"
                    alt="icon"
                    width={16}
                    height={16}
                  />

                  <p className=" text-xs text-[#979797]">United Kingdom</p>
                </span>
              </span>
            </div>
          </div>

          <h1 className="text-3xl my-5 font-bold capitalize text-black">
            Consultation Session for Global Leaders
          </h1>

          <div className="space-y-2 my-5">
            <select
              name=""
              id=""
              className="border rounded-sm p-2 text-sm w-full "
            >
              <option value="">$100 1:1 Clarity Session</option>
            </select>
            <div className="space-y-1">
              <p className="text-sm text-black capitalize">
                You will get my personal time from my team
              </p>
              <p className="text-sm text-[#157bff] font-semibold cursor-pointer capitalize">
                Virtual Meeting
              </p>
            </div>
          </div>

          <div className="mt-3 mb-5">
            <p className="text-sm leading-relaxed text-gray-700">
              🚀 Unlock Clarity. Unlock Growth. Unlock YOU. This is not another
              casual chat. It's a focused strategy session built to cut through
              the fog, clear the noise, and give you a roadmap that actually
              makes sense for where you are — and where you’re going...
            </p>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openReadMore ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-gray-700 mt-3">
                💡 In this session, we’ll dig into your current strategy,
                uncover the real blockers holding you back, and craft a
                practical step-by-step plan to move forward with confidence. No
                fluff, no vague advice — every insight is tailored to you and
                your goals.
              </p>
            </div>

            <p
              onClick={() => setOpenReadMore((prev) => !prev)}
              className="text-sm py-2 text-[#157bff] font-semibold cursor-pointer capitalize select-none"
            >
              {openReadMore ? "Less" : "Read More"}
            </p>
          </div>

          <p className="text-sm absolute bottom-6 left-6 text-[#157bff] font-semibold cursor-pointer capitalize">
            Privacy Policy
          </p>
        </div>
        <div className="md:col-span-6">
          {page === 1 && <SelectTimeDate setPage={setPage} />}
          {page === 2 && <FillBookingForm setPage={setPage} />}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

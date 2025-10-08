"use client";

import Image from "next/image";
import { ChatCircleDots, EnvelopeSimple } from "phosphor-react";
import { Dropdown } from "./dropDown";

export const MessageDropdown = () => (
  <Dropdown
    trigger={
      <div className=" hidden lg:block cursor-pointer text-black">
        <div className="cursor-pointer flex flex-col items-center ">
          <div className="relative">
            <svg
              width="24"
              height="25"
              viewBox="0 0 154 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.0723 113.586C36.1439 113.586 32.8522 112.339 30.1973 109.846C27.5477 107.348 26.223 104.237 26.223 100.513V31.3963L0.0703125 0.265625H140.013C143.941 0.265625 147.233 1.51484 149.888 4.01328C152.537 6.50633 153.862 9.61724 153.862 13.346V100.513C153.862 104.237 152.537 107.348 149.888 109.846C147.233 112.339 143.941 113.586 140.013 113.586H40.0723ZM17.4407 8.35992L34.3173 28.2881V100.513C34.3173 101.755 34.9136 102.896 36.1061 103.937C37.2987 104.979 38.6207 105.497 40.0723 105.491H140.021C141.472 105.491 142.794 104.973 143.987 103.937C145.179 102.901 145.776 101.76 145.776 100.513V13.3379C145.776 12.0968 145.179 10.9555 143.987 9.91402C142.794 8.87256 141.47 8.35452 140.013 8.35992H17.4407ZM85.8375 93.35L91.5682 87.6193L77.3708 74.6684H120.4V66.5741H57.6693L85.8375 93.35ZM57.6693 47.2773H120.4L92.3777 20.5014L86.6469 26.2321L100.844 39.183H57.6693V47.2773Z"
                fill="#041827"
              />
            </svg>

            <span className="absolute -top-[3px] -right-1 flex items-center justify-center w-[16px] h-[16px] bg-[#EA0234] shadow-sm text-[10px] rounded-full text-white">
              3
            </span>
          </div>
          <p className="text-black text-xs">Messages</p>
        </div>
      </div>
    }
  >
    <div className="bg-white shadow rounded-lg m-0 w-80">
      <div className="flex justify-between px-4 py-3 border-b border-[#f1f1f1]">
        <h5 className="font-semibold text-gray-800">All Messages</h5>
      </div>

      <div className="max-h-80 overflow-y-auto">
        <div className="flex justify-between items-start p-3 hover:bg-gray-50 transition cursor-pointer">
          <div className="flex">
            <div className="relative w-9">
              <Image
                width={36}
                height={36}
                alt="user"
                src="/images/user/01.jpg"
                className="w-9 h-9 rounded-full absolute z-20"
              />
              <Image
                width={36}
                height={36}
                alt="user"
                src="/images/user/06.jpg"
                className="w-9 h-9 rounded-full absolute z-10 left-2"
              />
            </div>
            <div className="ms-3">
              <h6 className="font-medium text-gray-900 text-sm">
                8 Participants
              </h6>
              <small className="text-gray-600 flex items-center gap-1 text-xs">
                <Image
                  width={16}
                  height={16}
                  src="/images/user/01.jpg"
                  alt="user"
                  className="rounded-full"
                />
                Bye, will see you
              </small>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end gap-1">
            <small className="text-gray-500 text-xs">2 yr. ago</small>
            <span className="bg-gray-100 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              6
            </span>
          </div>
        </div>

        {/* Single user messages */}
        {[
          {
            name: "John Travolta",
            img: "/images/user/02.jpg",
            msg: "Yes, same here. Bye.",
            time: "4 hr. ago",
            verified: true,
            count: 6,
          },
          {
            name: "David Johnson",
            img: "/images/user/05.jpg",
            msg: "Yes, same here. Bye.",
            time: "4 hr. ago",
            verified: true,
          },
          {
            name: "Maya Didas",
            img: "/images/user/03.jpg",
            msg: "That's great, see you soon",
            time: "9 hr. ago",
          },
          {
            name: "Paige Turner",
            img: "/images/user/07.jpg",
            msg: "Yes, let's go.",
            time: "1 yr. ago",
          },
        ].map((m, i) => (
          <div
            key={i}
            className="flex justify-between items-start p-3 hover:bg-gray-50 transition cursor-pointer"
          >
            <div className="flex">
              <Image
                width={40}
                height={40}
                src={m.img}
                className="w-10 h-10 rounded-full"
                alt={m.name}
              />
              <div className="ms-3">
                <h6 className="flex items-center gap-1 text-sm font-medium text-gray-900">
                  {m.name}
                  {m.verified && (
                    <Image
                      width={14}
                      height={14}
                      src="/images/small/verifyIcon.svg"
                      alt="verified-icon"
                    />
                  )}
                </h6>
                <small className="text-gray-600 text-xs">{m.msg}</small>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <small className="text-gray-500 text-xs">{m.time}</small>
              {m.count && (
                <span className="bg-gray-100 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {m.count}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-100">
        <button
          type="button"
          className="bg-blue-600 text-white rounded px-4 py-2 text-sm font-medium w-full hover:bg-blue-700 transition"
        >
          View All Messages
        </button>
      </div>
    </div>
  </Dropdown>
);

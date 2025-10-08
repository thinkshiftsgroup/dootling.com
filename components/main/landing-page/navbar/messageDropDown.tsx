"use client";

import Image from "next/image";
import { ChatCircleDots, EnvelopeSimple } from "phosphor-react";
import { Dropdown } from "./dropDown";

export const MessageDropdown = () => (
  <Dropdown
    trigger={
      <div className="relative hidden lg:block cursor-pointer mt-0.5 text-black">
        <div>
          <svg
            width="25"
            height="25"
            viewBox="0 0 196 196"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.0723 154.586C53.1439 154.586 49.8522 153.339 47.1973 150.846C44.5477 148.348 43.223 145.237 43.223 141.513V72.3963L17.0703 41.2656H157.013C160.941 41.2656 164.233 42.5148 166.888 45.0133C169.537 47.5063 170.862 50.6172 170.862 54.346V141.513C170.862 145.237 169.537 148.348 166.888 150.846C164.233 153.339 160.941 154.586 157.013 154.586H57.0723ZM34.4407 49.3599L51.3173 69.2881V141.513C51.3173 142.755 51.9136 143.896 53.1061 144.937C54.2987 145.979 55.6207 146.497 57.0723 146.491H157.021C158.472 146.491 159.794 145.973 160.987 144.937C162.179 143.901 162.776 142.76 162.776 141.513V54.3379C162.776 53.0968 162.179 51.9555 160.987 50.914C159.794 49.8726 158.47 49.3545 157.013 49.3599H34.4407ZM102.837 134.35L108.568 128.619L94.3708 115.668H137.4V107.574H74.6693L102.837 134.35ZM74.6693 88.2773H137.4L109.378 61.5014L103.647 67.2321L117.844 80.183H74.6693V88.2773Z"
              fill="#041827"
            />
          </svg>
          <span className="absolute -top-[3px] -right-1 flex items-center justify-center w-[16px] h-[16px] bg-red-600 text-[10px] rounded-full text-white">
            3
          </span>
        </div>
        <p>Messages</p>
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

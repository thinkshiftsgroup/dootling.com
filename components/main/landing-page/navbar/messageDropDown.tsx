"use client";

import Image from "next/image";
import { ChatCircleDots, EnvelopeSimple } from "phosphor-react";
import { Dropdown } from "./dropDown";

export const MessageDropdown = () => (
  <Dropdown
    trigger={
      <div className="relative hidden lg:block cursor-pointer mt-0.5 text-[#7e8b9a]">
        <EnvelopeSimple size={25} />

        <span className="absolute -top-[3px] -right-1 flex items-center justify-center w-[16px] h-[16px] bg-red-600 text-[10px] rounded-full text-white">
          3
        </span>
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

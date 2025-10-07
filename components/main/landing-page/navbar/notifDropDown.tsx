"use client";

import Image from "next/image";
import { Bell, Gear } from "phosphor-react";
import { Dropdown } from "./dropDown";

export const NotificationDropdown = () => (
  <Dropdown
    trigger={
      <div className="relative hidden lg:block cursor-pointer text-[#7e8b9a]">
        <Bell size={21} />
        <span className="absolute -top-0.5 -right-1 flex items-center justify-center w-[13px] h-[13px] bg-blue-600 text-[10px] rounded-full text-white">
          3
        </span>
      </div>
    }
  >
    <div className="bg-white m-0 shadow-md rounded-lg w-72 sm:w-80">
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <h5 className="font-semibold text-gray-800">Notifications</h5>
        <Gear size={18} className="text-gray-500 cursor-pointer" />
      </div>

      <div className="max-h-60 overflow-y-auto p-3">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3">
            <Image
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
              src="/images/user/01.jpg"
              alt=""
            />
            <div>
              <h6 className="font-medium text-gray-900">Bni Emma Watson</h6>
              <small className="text-gray-600">Hello, how are you?</small>
            </div>
          </div>
          <small className="text-gray-500 text-xs">1 hr ago</small>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <Image
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
            src="/images/user/01.jpg"
            alt=""
          />
          <div>
            <h6 className="text-gray-900 text-sm font-medium">
              Pete Sariya{" "}
              <span className="text-gray-700 font-normal">
                voted for a color palette
              </span>
            </h6>
            <small className="text-gray-500 text-xs">1 month ago</small>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <Image
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
            src="/images/user/02.jpg"
            alt=""
          />
          <div>
            <h6 className="text-gray-900 text-sm font-medium">
              Dima Davydov{" "}
              <span className="text-gray-700 font-normal">
                replied to your{" "}
              </span>
              <span className="text-blue-600 font-semibold">comment</span>
            </h6>
            <small className="text-gray-500 text-xs">1 month ago</small>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <Image
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
            src="/images/user/03.jpg"
            alt=""
          />
          <div>
            <h6 className="text-gray-900 text-sm font-medium">
              Esther Howard{" "}
              <span className="text-gray-700 font-normal">
                reacted to your{" "}
              </span>
              <span className="text-blue-600 font-semibold">post</span>.
            </h6>
            <small className="text-gray-500 text-xs">19 min ago</small>
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-gray-100">
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 transition text-white rounded-md px-4 py-2 font-medium w-full text-sm"
        >
          View All Notifications
        </button>
      </div>
    </div>
  </Dropdown>
);

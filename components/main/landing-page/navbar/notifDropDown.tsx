"use client";

import Image from "next/image";
import { Bell, Gear } from "phosphor-react";
import { Dropdown } from "./dropDown";

export const NotificationDropdown = () => (
  <Dropdown
    trigger={
      <div className=" hidden lg:block cursor-pointer text-[#7e8b9a]">
        <div className="cursor-pointer flex flex-col items-center ">
          <div className="relative">
            <svg
              width="25"
              height="25"
              viewBox="0 0 164 163"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.4184 61.322C34.4184 48.7383 39.4173 36.67 48.3153 27.7719C57.2134 18.8739 69.2817 13.875 81.8655 13.875C94.4492 13.875 106.518 18.8739 115.416 27.7719C124.314 36.67 129.313 48.7383 129.313 61.322V86.835L141.662 111.535C142.231 112.671 142.499 113.935 142.442 115.204C142.385 116.474 142.004 117.708 141.336 118.79C140.668 119.871 139.734 120.763 138.624 121.382C137.514 122.001 136.264 122.326 134.993 122.325H108.124C106.616 128.143 103.22 133.295 98.4669 136.972C93.7143 140.65 87.8749 142.646 81.8655 142.646C75.856 142.646 70.0166 140.65 65.264 136.972C60.5114 133.295 57.1146 128.143 55.6069 122.325H28.7383C27.4673 122.326 26.2173 122.001 25.107 121.382C23.9968 120.763 23.0632 119.871 22.395 118.79C21.7267 117.708 21.3459 116.474 21.2888 115.204C21.2317 113.935 21.5001 112.671 22.0686 111.535L34.4184 86.835V61.322ZM70.1257 122.325C71.3156 124.386 73.0269 126.097 75.0876 127.287C77.1484 128.477 79.4859 129.103 81.8655 129.103C84.245 129.103 86.5826 128.477 88.6433 127.287C90.7041 126.097 92.4154 124.386 93.6052 122.325H70.1257ZM81.8655 27.4313C72.8771 27.4313 64.2568 31.0019 57.9011 37.3577C51.5453 43.7134 47.9747 52.3337 47.9747 61.322V86.835C47.9746 88.9385 47.4849 91.0131 46.5445 92.8947L38.6141 108.769H125.124L117.193 92.8947C116.25 91.0137 115.758 88.939 115.756 86.835V61.322C115.756 52.3337 112.186 43.7134 105.83 37.3577C99.4741 31.0019 90.8538 27.4313 81.8655 27.4313Z"
                fill="#404040"
              />
            </svg>

            <span className="absolute -top-[3px] -right-1 flex items-center justify-center w-[16px] h-[16px] bg-[#EA0234] shadow-sm text-[10px] rounded-full text-white">
              3
            </span>
          </div>
          <p className="text-black text-xs">Notifications</p>
        </div>
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

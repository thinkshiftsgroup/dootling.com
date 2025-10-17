import React, { useState } from "react";
import DataTable from "./datatable";
import SetupLinkSideModal from "./setupLink";

const ProfileLinks = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="rounded-lg p-3 w-full bg-white shadow-md mb-[40px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
          {/* Search Input */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-[#157BFF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-55 pl-12 pr-4 py-2 border border-[#157BFF] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 text-gray-600"
            />
          </div>

          {/* Center Content - Avatars and Text */}
          <div className="flex items-center gap-1 flex-1 justify-center">
            {/* Avatar Stack */}
            <div className="flex -space-x-2">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="Avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt="Avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="Avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-cyan-400 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">S</span>
              </div>
            </div>

            {/* Text */}
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-900">Aliana Molex</span>
              <span className="text-gray-500 font-medium">And 208 Others</span>
            </div>
          </div>

          {/* Price and Button */}
          <div className="flex items-center gap-16 flex-shrink-0">
            <span className="text-sm font-medium text-gray-900">$40,0050</span>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#157BFF] hover:bg-blue-600 text-white px-2 py-1 rounded-sm flex items-center gap-2 transition-colors whitespace-nowrap text-[0.9rem] cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 512 512"
              >
                <g fill="none">
                  <g clipPath="url(#SVG3Z7Ltc7M)">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m258.588 352.758l-23.921 23.922c-33.272 33.271-87.408 33.271-120.68 0c-33.271-33.272-33.271-87.408 0-120.68l23.922-23.921l-30.17-30.17l-23.922 23.921c-49.987 49.987-49.987 131.032 0 181.02s131.033 49.987 181.02 0l23.921-23.922zm82.745-246.091h-42.666v42.666h42.666c47.054 0 85.334 38.28 85.334 85.334c0 47.053-38.28 85.333-85.334 85.333h-42.666v42.667h42.666c70.693 0 128-57.308 128-128s-57.307-128-128-128m-128 63.999V63.999h42.666v106.667zm-41.056 37.239l-75.424-75.424l30.17-30.17l75.424 75.424zm21.085 46.28L153.6 307.2l34.133 25.6l50.037-66.716zm64.31 1.815h83.661v-42.666h-72.228z"
                      clipRule="evenodd"
                      strokeWidth={13}
                      stroke="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="SVG3Z7Ltc7M">
                      <path fill="#fff" d="M0 0h512v512H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
              Setup Link
            </button>
          </div>
        </div>
      </div>

      <DataTable />
      <SetupLinkSideModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default ProfileLinks;

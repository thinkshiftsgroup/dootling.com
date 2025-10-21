import React, { useState } from "react";
import DataTable from "./datatable";
import SetupLinkSideModal from "./setupLink";

const ProfileLinks = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="rounded-lg p-3 w-full bg-white shadow-md mb-[40px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex md:!flex-row gap-1 flex-col w-full items-center justify-between max-w-7xl mx-auto">
          {/* Search Input */}
          <div className="relative md:!w-55 w-full  flex-shrink-0">
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
              className="pl-12 w-full sm:!text-base text-sm pr-4 py-2 border border-[#157BFF] rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 text-gray-600"
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
            <div className="flex whitespace-nowrap items-center gap-1">
              <span className="font-medium text-gray-900">Aliana Molex</span>
              <span className="text-gray-500 font-medium">And 208 Others</span>
            </div>
          </div>

          {/* Price and Button */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="text-sm font-bold text-gray-900">$40,0050</span>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#157BFF] hover:bg-blue-600 text-white px-2 py-1 rounded-sm flex items-center gap-2 transition-colors whitespace-nowrap text-[0.9rem] cursor-pointer"
            >
              <svg
            
                xmlns="http://www.w3.org/2000/svg"
                width={13}
                height={13}
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                >
                  <path d="M14 21h-2c-4.714 0-7.071 0-8.536-1.465C2 18.072 2 15.715 2 11V7.944c0-1.816 0-2.724.38-3.406A3 3 0 0 1 3.538 3.38C4.22 3 5.128 3 6.944 3C8.108 3 8.69 3 9.2 3.191c1.163.436 1.643 1.493 2.168 2.542L12 7M8 7h8.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827C22 9.09 22 10.143 22 12.25q.001.957-.005 1.75"></path>
                  <path d="M17.686 20.432a1.941 1.941 0 0 0 2.746-2.746l-1.716-1.716a1.94 1.94 0 0 0-2.639-.098m.237-2.303a1.941 1.941 0 0 0-2.745 2.745l1.715 1.715a1.94 1.94 0 0 0 2.64.1"></path>
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

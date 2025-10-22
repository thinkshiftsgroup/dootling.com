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
                width="16"
                height="16"
                viewBox="0 0 292 263"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M146.519 199.166L130.097 215.588C107.257 238.428 70.0932 238.428 47.2524 215.588C24.4124 192.748 24.4124 155.584 47.2524 132.743L63.6745 116.322L42.9633 95.6106L26.5412 112.032C-7.77414 146.347 -7.77414 201.984 26.5412 236.3C60.8565 270.616 116.493 270.615 150.809 236.3L167.23 219.877L146.519 199.166ZM203.322 30.2284H174.032V59.518H203.322C235.624 59.518 261.903 85.7966 261.903 118.099C261.903 150.4 235.624 176.678 203.322 176.678H174.032V205.969H203.322C251.852 205.969 291.192 166.628 291.192 118.099C291.192 69.5695 251.852 30.2284 203.322 30.2284ZM115.452 74.1628V0.9375H144.742V74.1628H115.452ZM87.2676 99.7268L35.4902 47.9494L56.2015 27.2381L107.979 79.0155L87.2676 99.7268ZM101.742 131.497L74.4462 167.891L97.878 185.465L132.228 139.666L101.742 131.497ZM145.89 132.743H203.322V103.454H153.739L145.89 132.743Z"
                  fill="white"
                />
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

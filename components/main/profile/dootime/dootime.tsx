"use client";
import React, { useState } from "react";
import DataTable from "./dataTable";
import SetupDootimeLink from "./setUpDootimeLink";

const DootimeTab = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="rounded-lg p-3 w-full bg-white shadow-md mb-[40px]">
      <div className="flex items-center mb-3">
        <div className="flex w-full sm:!flex-row flex-col justify-between gap-2 items-center">
          <div className="flex sm:!flex-row flex-col items-center gap-2 sm:!gap-5">
            <div className="flex items-center gap-1 justify-center">
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

              <div className="flex items-center whitespace-nowrap gap-1">
                <span className="font-medium text-gray-900">Aliana Molex</span>
                <span className="text-gray-500 font-medium">
                  And 208 Others
                </span>
              </div>
            </div>
            <span className="sm:!text-sm text-lg font-bold text-gray-900">$40,0050</span>
          </div>

          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#157BFF] hover:bg-blue-600 text-white px-2 py-1 rounded-sm flex items-center gap-2 transition-colors whitespace-nowrap text-[0.9rem] cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 410 410"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M303.228 51.25C317.953 51.25 332.075 57.0995 342.487 67.5117C352.899 77.9239 358.749 92.0458 358.749 106.771V303.229C358.749 317.954 352.899 332.076 342.487 342.488C332.075 352.901 317.953 358.75 303.228 358.75H217.982C220.818 352.224 222.15 345.305 222.15 338.472C222.15 336.661 222.036 334.879 221.809 333.125H303.228C311.157 333.125 318.761 329.975 324.367 324.369C329.974 318.762 333.124 311.158 333.124 303.229V106.771C333.124 98.842 329.974 91.2378 324.367 85.6313C318.761 80.0247 311.157 76.875 303.228 76.875H106.77C98.8407 76.875 91.2365 80.0247 85.63 85.6313C80.0234 91.2378 76.8737 98.842 76.8737 106.771V196.629C67.752 197.288 58.9414 200.225 51.2487 205.171V106.771C51.2487 92.0458 57.0982 77.9239 67.5104 67.5117C77.9226 57.0995 92.0445 51.25 106.77 51.25H303.228ZM200.728 102.5C203.824 102.5 206.815 103.621 209.149 105.656C211.482 107.691 213 110.503 213.421 113.57L213.54 115.312V205H277.569C280.815 205.001 283.94 206.234 286.312 208.45C288.684 210.667 290.126 213.701 290.347 216.939C290.569 220.178 289.552 223.38 287.504 225.898C285.455 228.416 282.527 230.063 279.311 230.505L277.569 230.625H200.728C197.632 230.625 194.64 229.504 192.307 227.469C189.974 225.434 188.456 222.622 188.035 219.555L187.915 217.812V115.312C187.915 111.914 189.265 108.656 191.668 106.253C194.071 103.85 197.33 102.5 200.728 102.5ZM81.1445 290.417C91.3388 290.417 101.116 286.367 108.324 279.159C115.532 271.95 119.582 262.173 119.582 251.979C119.582 241.785 115.532 232.008 108.324 224.8C101.116 217.591 91.3388 213.542 81.1445 213.542C70.9503 213.542 61.1735 217.591 53.9651 224.8C46.7567 232.008 42.707 241.785 42.707 251.979C42.707 262.173 46.7567 271.95 53.9651 279.159C61.1735 286.367 70.9503 290.417 81.1445 290.417ZM81.1445 392.917C126.911 392.917 145.207 366.113 145.207 339.531C145.207 321.85 132.907 307.5 117.754 307.5H44.535C29.382 307.5 17.082 321.85 17.082 339.531C17.082 366.215 35.3783 392.917 81.1445 392.917ZM196.457 269.063C196.457 276.991 193.307 284.595 187.701 290.202C182.094 295.809 174.49 298.958 166.561 298.958C158.632 298.958 151.028 295.809 145.422 290.202C139.815 284.595 136.665 276.991 136.665 269.063C136.665 261.134 139.815 253.53 145.422 247.923C151.028 242.316 158.632 239.167 166.561 239.167C174.49 239.167 182.094 242.316 187.701 247.923C193.307 253.53 196.457 261.134 196.457 269.063ZM152.314 375.833C159.215 364.558 162.256 351.831 162.256 339.531C162.241 331.388 160.371 323.355 156.79 316.042H183.098C195.227 316.042 205.067 326.087 205.067 338.472C205.067 357.093 190.427 375.833 153.817 375.833H152.314Z"
                  fill="white"
                />
              </svg>
              Dootime Link
            </button>
          </div>
        </div>
      </div>

      <DataTable />
      <SetupDootimeLink open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default DootimeTab;

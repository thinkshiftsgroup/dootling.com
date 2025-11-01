import React from "react";

const SettingsTab = () => {
  return (
    <div>
      <div className="flex-1 overflow-y-auto">
        <div className="my-2">
          <div className="flex items-center gap-2 justify-between p-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-black font-medium text-base">Funds Rule</p>
              <p className="text-gray-400 text-sm">
                Require final approval before releasing funds to contributors.
                If unchecked, funds will be released automatically according to
                the scheduled dates.
              </p>
            </div>
            <input
              type="checkbox"
              className="accent-[#157bff] w-4 h-4 rounded-sm"
            />
          </div>
          <div className="flex items-center gap-2 justify-between p-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-black font-medium text-base">Email Notifications</p>
              <p className="text-gray-400 text-sm">
                Receive email updates about project activities and fund releases
              </p>
            </div>
            <input
              type="checkbox"
              className="accent-[#157bff] w-4 h-4 rounded-sm"
            />
          </div>
          {/* <div className="flex items-center gap-2 justify-between p-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-black font-medium text-base">Delete Project</p>
              <p className="text-gray-400 text-sm">
                Completel removes all data associated with this project
              </p>
            </div>
            <input
              type="checkbox"
              className="accent-[#157bff] w-4 h-4 rounded-sm"
            />
          </div> */}
        </div>

        <div className="flex sm:!flex-row flex-col my-2 items-center gap-2 justify-end">
          <button className="text-white flex items-center justify-center gap-2 rounded-sm font-semibold text-sm sm:!text-base p-2 cursor-pointer bg-[#1571E8] hover:bg-blue-600 text-[0.9rem]">
            Execute Contract
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M1 16.5v-5l6.5-1v-5a4.5 4.5 0 0 1 9 0v5l6.5 1v5zM21.5 23v-5h-19v5z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          {/* <button className="text-white flex items-center justify-center gap-2 rounded-sm font-semibold text-sm sm:!text-base p-2 cursor-pointer bg-red-500 hover:bg-red-600 text-[0.9rem]">
            Delete Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;

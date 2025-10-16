import React from "react";

import Image from "next/image";
import AddHeatmapModal from "./addHeatMapModal";

const HeatmapConnections = () => {
  const connections = [
    {
      name: "GitHub",
      description: "Track contributions from repositories and pull requests",
      icon: (
        <svg
          className="w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 250"
        >
          <path
            fill="#161614"
            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403"
          ></path>
        </svg>
      ),
      granted: "Apr 5, 2024",
      contributions: "304 Contribution",
    },
    {
      name: "Jira",
      description: "Track contributions from issues and tasks",
      icon: (
        <Image
          src="/images/icon/icons8-jira-48.png"
          width={48}
          height={48}
          alt="icon"
          className="w-12 h-12"
        />
      ),
      granted: "Apr 5, 2024",
      contributions: "22 Contribution",
    },
    {
      name: "Figma",
      description: "Track contributions from files and projects",
      icon: (
        <svg
          className="w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 384"
        >
          <path
            fill="#0acf83"
            d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64"
          ></path>
          <path
            fill="#a259ff"
            d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64"
          ></path>
          <path
            fill="#f24e1e"
            d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64"
          ></path>
          <path
            fill="#ff7262"
            d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z"
          ></path>
          <path
            fill="#1abcfe"
            d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64"
          ></path>
        </svg>
      ),
      granted: "Mar 28, 2024",
      contributions: "0 Contribution",
    },
    {
      name: "Google Drive",
      description: "Track contributions from documents and folders",
      icon: (
        <svg
          className="w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 229"
        >
          <path
            fill="#0066da"
            d="m19.354 196.034l11.29 19.5c2.346 4.106 5.718 7.332 9.677 9.678q17.009-21.591 23.68-33.137q6.77-11.717 16.641-36.655q-26.604-3.502-40.32-3.502q-13.165 0-40.322 3.502c0 4.545 1.173 9.09 3.519 13.196z"
          ></path>
          <path
            fill="#ea4335"
            d="M215.681 225.212c3.96-2.346 7.332-5.572 9.677-9.677l4.692-8.064l22.434-38.855a26.57 26.57 0 0 0 3.518-13.196q-27.315-3.502-40.247-3.502q-13.899 0-40.248 3.502q9.754 25.075 16.422 36.655q6.724 11.683 23.752 33.137"
          ></path>
          <path
            fill="#00832d"
            d="M128.001 73.311q19.68-23.768 27.125-36.655q5.996-10.377 13.196-33.137C164.363 1.173 159.818 0 155.126 0h-54.25C96.184 0 91.64 1.32 87.68 3.519q9.16 26.103 15.544 37.154q7.056 12.213 24.777 32.638"
          ></path>
          <path
            fill="#2684fc"
            d="M175.36 155.42H80.642l-40.32 69.792c3.958 2.346 8.503 3.519 13.195 3.519h148.968c4.692 0 9.238-1.32 13.196-3.52z"
          ></path>
          <path
            fill="#00ac47"
            d="M128.001 73.311L87.681 3.52c-3.96 2.346-7.332 5.571-9.678 9.677L3.519 142.224A26.57 26.57 0 0 0 0 155.42h80.642z"
          ></path>
          <path
            fill="#ffba00"
            d="m215.242 77.71l-37.243-64.514c-2.345-4.106-5.718-7.331-9.677-9.677l-40.32 69.792l47.358 82.109h80.496c0-4.546-1.173-9.09-3.519-13.196z"
          ></path>
        </svg>
      ),
      granted: "Mar 28, 2024",
      contributions: "0 Contribution",
    },
  ];

  return (
    <div
      className="tab-pane fade container mx-auto"
      id="heatmap"
      role="tabpanel"
    >
      <div className=" bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm !p-4 sm:!p-8">
            <div className="flex sm:!flex-row !flex-col justify-between items-start mb-3">
              <h1 className="text-4xl font-medium text-gray-900">Heatmap</h1>
              <div className="flex items-center gap-2 justify-between">
                <div className="flex !my-2 md:!my-0 items-center gap-1 bg-[#F5F6FA] text-[#FAAF40] px-3 py-2 rounded-lg">
                  <Image
                    src="/images/dootling-icon1.svg"
                    width={25}
                    height={25}
                    alt="icon"
                  />
                  <span className="font-medium">Browser Extension</span>
                </div>

                <div className="mx-auto lg:hidden block">
                  <AddHeatmapModal />
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-3xl sm:mb-8 mb-4">
              Manage Connections To Your Work Apps For Automatic Contribution
              Tracking On Your Profile. We Only Track{" "}
              <span className="font-semibold text-gray-900">
                Activity Metadata
              </span>
              , Never Your Private Data Or Content.
            </p>

            <div className="space-y-0 rounded-sm shadow-sm py-5">
              {connections.map((connection, index) => (
                <div
                  key={connection.name}
                  className={`flex items-center md:!flex-row !flex-col gap-0 lg:gap-2 justify-between py-6 px-5 ${index !== connections.length - 1
                    ? "border-b border-gray-100"
                    : ""
                    }`}
                >
                  <div className="flex items-center gap-6 flex-1">
                    <div className="flex-shrink-0">{connection.icon}</div>
                    <div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {connection.name}
                        </h3>
                        <button className="text[#157BFF] hover:text-blue-700 font-medium transition-colors sm:hidden">
                          Revoke
                        </button>
                      </div>
                      <p className="text-gray-500">{connection.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right flex sm:block justify-between gap-8 flex-1">
                      <p className="text-gray-500 mb-1">
                        Granted {connection.granted}
                      </p>
                      <p className="text-gray-400">
                        {connection.contributions}
                      </p>
                    </div>
                    <button className="text[#157BFF] hover:text-blue-700 font-medium transition-colors hidden sm:block">
                      Revoke
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-[#157BFF] hover:bg-blue-600 text-white px-2 py-1 rounded-sm flex items-center gap-2 transition-colors text-[0.9rem]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add Permission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatmapConnections;

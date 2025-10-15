import React from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const FilesTab = () => {
  return (
    <div className="flex-1 w-full  p-2">
      <div className="overflow-y-scroll h-[60vh] grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className=" p-2.5 w-full rounded-sm bg-white">
            <Image
              alt="file-image"
              src="/images/user/fileTest.png"
              width={100}
              height={100}
              className=" w-full object-cover rounded-sm"
            />

            <div className="mx-2 mt-4 mb-2 h-px bg-gray-200" />
            <div className="flex items-center justify-between">
              <div className="flex text-[10px] items-center gap-0.5 text-[#979797]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 197 197"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M114.719 16.6484V49.4252C114.719 53.7717 116.445 57.9401 119.519 61.0136C122.592 64.087 126.761 65.8136 131.107 65.8136H163.884"
                    stroke="#979797"
                    stroke-width="16.3884"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M131.104 180.532H147.492C151.839 180.532 156.007 178.806 159.08 175.732C162.154 172.659 163.881 168.49 163.881 164.144V57.6194L122.91 16.6484H49.1618C44.8154 16.6484 40.6469 18.3751 37.5735 21.4485C34.5001 24.5219 32.7734 28.6904 32.7734 33.0368V57.6194M65.5502 114.979V133.006L78.6609 141.2"
                    stroke="#979797"
                    stroke-width="16.3884"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M65.5519 180.533C92.7051 180.533 114.717 158.521 114.717 131.368C114.717 104.215 92.7051 82.2031 65.5519 82.2031C38.3987 82.2031 16.3867 104.215 16.3867 131.368C16.3867 158.521 38.3987 180.533 65.5519 180.533Z"
                    stroke="#979797"
                    stroke-width="16.3884"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="">7hrs Ago</p>
              </div>
              <div className="flex text-[10px] items-center gap-0.5 text-[#979797]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 197 197"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M155.685 106.568V87.3605C155.685 80.6577 155.685 77.3063 154.44 74.2908C153.194 71.2753 150.826 68.9072 146.082 64.171L107.274 25.3387C103.185 21.2498 101.145 19.2094 98.6045 17.9967C98.0787 17.7441 97.5399 17.5199 96.9902 17.3248C94.3435 16.3906 91.4509 16.3906 85.674 16.3906C59.0839 16.3906 45.7847 16.3906 36.7793 23.6507C34.9604 25.1195 33.304 26.7787 31.8382 28.6C24.5781 37.6136 24.5781 50.9128 24.5781 77.5193V114.762C24.5781 145.679 24.5781 161.141 34.1817 170.745C41.9088 178.472 53.4217 179.979 73.7433 180.274M98.3259 20.4877V24.5848C98.3259 47.7744 98.3259 59.3692 105.529 66.5719C112.723 73.7746 124.318 73.7746 147.491 73.7746H151.588"
                    stroke="#979797"
                    stroke-width="12.2913"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M131.104 180.275C153.728 180.275 172.075 155.692 172.075 155.692C172.075 155.692 153.728 131.109 131.104 131.109C108.48 131.109 90.1328 155.692 90.1328 155.692C90.1328 155.692 108.48 180.275 131.104 180.275Z"
                    stroke="#979797"
                    stroke-width="12.2913"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M131.023 155.68H131.106"
                    stroke="#979797"
                    stroke-width="16.3884"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="">333</p>
              </div>
              <div className="flex text-[10px] items-center gap-0.5 text-[#979797]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 197 197"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M115.746 163.659C113.927 165.003 111.952 166.118 109.781 166.691C103.668 168.33 96.9898 165.888 91.1555 164.249C52.0446 153.245 25.8478 136.012 18.3337 110.299C12.3355 89.7642 18.1043 69.1967 30.7889 56.4138C42.5393 44.5732 59.9602 39.7714 77.8317 47.4657C89.4675 31.864 106.962 27.308 123.055 31.6919C140.427 36.42 155.701 51.3498 160.773 72.1303C161.768 76.2055 162.267 80.3545 162.273 84.5773C164.371 85.6534 166.337 86.9645 168.173 88.5105C177.653 96.5326 182.717 110.16 179.89 124.327C176.285 142.404 159.528 155.096 135.56 164.159C131.455 165.716 126.964 167.642 122.482 166.855C119.991 166.413 117.762 165.134 115.746 163.659ZM34.0665 105.702C29.6827 90.6819 34.0911 76.3585 42.4246 67.9594C50.4222 59.8963 62.2792 56.8973 75.3899 64.567C79.9704 67.2465 85.8784 65.6569 88.5006 61.0599C96.0229 47.8591 107.79 44.524 118.745 47.5067C130.168 50.6205 141.148 60.8141 144.852 76.0143C145.305 77.8389 145.606 79.7099 145.753 81.6273C142.751 82.0113 139.824 82.8427 137.068 84.0938C128.267 75.5145 116.615 73.8265 106.339 77.6122C94.6872 81.8977 85.2639 92.9763 83.0678 107.259C80.8308 121.885 87.7385 136.143 100.595 149.852C98.9728 149.442 97.293 148.951 95.5968 148.476C57.6494 137.799 39.0568 122.787 34.0665 105.702ZM99.2759 109.742C100.587 101.138 106.151 95.1478 112.002 92.9845C117.41 91.0015 123.416 92.0422 127.98 98.6385C128.661 99.6213 129.529 100.46 130.536 101.105C131.542 101.75 132.666 102.189 133.844 102.397C135.021 102.605 136.228 102.578 137.394 102.317C138.561 102.055 139.664 101.566 140.64 100.876C147.196 96.2294 153.194 97.311 157.586 101.023C162.355 105.055 165.518 112.593 163.813 121.123C161.97 130.383 152.604 140.199 129.767 148.828C128.316 149.377 126.874 149.967 125.383 150.401C124.129 149.475 122.974 148.435 121.794 147.427C103.291 131.505 97.842 119.075 99.2759 109.733V109.742Z"
                    fill="#979797"
                  />
                </svg>

                <p className="">6666</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between py-3 px-2">
        <p className="text-xs text-gray-600">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">10</span> of{" "}
          <span className="font-medium">50</span> results
        </p>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-xs disabled:opacity-50" disabled>
            <FaAngleLeft />
          </button>
          <button className="px-3 py-1 border rounded-md text-xs hover:bg-gray-100 bg-blue-50 border-blue-400 text-blue-600">
            1
          </button>
          <button className="px-3 py-1 border rounded-md text-xs hover:bg-gray-100">
            2
          </button>
          <button className="px-3 py-1 border rounded-md text-xs hover:bg-gray-100">
            3
          </button>
          <button className="px-3 py-1 text-[#157bff] text-xs ">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilesTab;

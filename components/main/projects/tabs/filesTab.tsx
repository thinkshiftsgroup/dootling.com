"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const FilesTab = () => {
  const [preview, setPreview] = useState<string | null>(null);

  //when endpoint comes in, use this to separate between image and pdf download
  // const handleFileClick = (file) => {
  //   if (file.type === "pdf") {
  //     window.open(file.src, "_blank");
  //   } else if (file.type === "image") {
  //     setPreview(file.src);
  //   }
  // };

  return (
    <div className="flex-1 w-full overflow-y-scroll hide-scrollbar p-2">
      <div className="overflow-y-scroll h-[60vh] grid grid-cols-1 sm:!grid-cols-2 md:!grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, i) => {
          const src = "/images/user/fileTest.png";
          return (
            <div key={i} className=" p-2.5 w-full rounded-sm bg-white">
              <div
                onClick={() => setPreview(src)}
                //   onClick={() => handleFileClick(file)} -- for pdf and immage
                className="relative cursor-pointer group"
              >
                {/* for pdf and image */}
                {/* {file.type === "image" ? (
                  <Image
                    alt={file.title}
                    src={file.src}
                    width={100}
                    height={100}
                    className="w-full object-cover rounded-sm transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-[100px] bg-gray-100 flex flex-col items-center justify-center rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m0 0l6.75-6.75M12 19.5L5.25 12.75"
                      />
                    </svg>
                    <p className="text-xs text-gray-700 mt-1">PDF File</p>
                  </div>
                )} */}
                <Image
                  alt="file-image"
                  src="/images/user/fileTest.png"
                  width={100}
                  height={100}
                  className="w-full object-cover rounded-sm transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm" />
                <p className="text-[10px] text-white absolute top-0.5 right-2">
                  By John
                </p>
              </div>

              <div className="mx-2 mt-4 mb-2 h-px bg-gray-200" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 justify-between">
                  <div className="flex text-[9px] items-center gap-0.5 text-[#979797]">
                    <svg
                      width="10"
                      height="10"
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
                  <div className="flex text-[9px] items-center gap-0.5 text-[#979797]">
                    <svg
                      width="10"
                      height="10"
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
                  <div className="flex text-[9px] items-center gap-0.5 text-[#979797]">
                    <svg
                      width="10"
                      height="10"
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
                <div className="flex items-center gap-2">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 148 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.9944 25.5123V41.9007H16.4118V148.425H131.131V41.9007H106.548V25.5123H131.131C135.477 25.5123 139.645 27.2389 142.719 30.3123C145.792 33.3857 147.519 37.5542 147.519 41.9007V148.425C147.519 152.772 145.792 156.94 142.719 160.014C139.645 163.087 135.477 164.814 131.131 164.814H16.4118C12.0654 164.814 7.8969 163.087 4.82348 160.014C1.75007 156.94 0.0234375 152.772 0.0234375 148.425V41.9007C0.0234375 37.5542 1.75007 33.3857 4.82348 30.3123C7.8969 27.2389 12.0654 25.5123 16.4118 25.5123H40.9944ZM73.7712 0.929688C75.9444 0.929688 78.0286 1.793 79.5654 3.32971C81.1021 4.86642 81.9654 6.95065 81.9654 9.12388V97.8506L96.9444 82.8716C97.7051 82.1103 98.6084 81.5063 99.6027 81.094C100.597 80.6818 101.663 80.4695 102.739 80.4691C103.815 80.4687 104.881 80.6803 105.875 81.0918C106.87 81.5034 107.774 82.1067 108.535 82.8675C109.296 83.6283 109.9 84.5316 110.313 85.5258C110.725 86.5201 110.937 87.5857 110.938 88.662C110.938 89.7383 110.726 90.8042 110.315 91.7987C109.903 92.7932 109.3 93.6969 108.539 94.4582L81.0067 121.983C79.086 123.901 76.4821 124.979 73.7671 124.979C71.0521 124.979 68.4482 123.901 66.5275 121.983L39.0032 94.4582C38.2424 93.6969 37.639 92.7932 37.2275 91.7987C36.816 90.8042 36.6044 89.7383 36.6048 88.662C36.6051 87.5857 36.8175 86.5201 37.2297 85.5258C37.642 84.5316 38.246 83.6283 39.0073 82.8675C39.7686 82.1067 40.6724 81.5034 41.6669 81.0918C42.6614 80.6803 43.7272 80.4687 44.8035 80.4691C45.8798 80.4695 46.9455 80.6818 47.9397 81.094C48.9339 81.5063 49.8372 82.1103 50.598 82.8716L65.577 97.8506V9.12388C65.577 6.95065 66.4403 4.86642 67.977 3.32971C69.5137 1.793 71.5979 0.929688 73.7712 0.929688Z"
                      fill="#202224"
                    />
                  </svg>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 198 198"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M117.454 16.9219C120.894 16.9228 124.246 18.0058 127.035 20.0177C129.825 22.0296 131.911 24.8682 132.998 28.1315L137.448 41.5045H164.325C166.498 41.5045 168.582 42.3678 170.119 43.9045C171.656 45.4412 172.519 47.5254 172.519 49.6987C172.519 51.8719 171.656 53.9561 170.119 55.4928C168.582 57.0295 166.498 57.8928 164.325 57.8928L164.3 58.4746L157.196 157.977C156.752 164.177 153.977 169.978 149.428 174.214C144.879 178.45 138.894 180.805 132.679 180.806H64.8636C58.648 180.805 52.6633 178.45 48.1144 174.214C43.5655 169.978 40.79 164.177 40.3466 157.977L33.2422 58.4664L33.2176 57.8928C31.0444 57.8928 28.9602 57.0295 27.4235 55.4928C25.8868 53.9561 25.0234 51.8719 25.0234 49.6987C25.0234 47.5254 25.8868 45.4412 27.4235 43.9045C28.9602 42.3678 31.0444 41.5045 33.2176 41.5045H60.0946L64.544 28.1315C65.6314 24.8669 67.7187 22.0273 70.5102 20.0153C73.3017 18.0033 76.6556 16.921 80.0966 16.9219H117.454ZM147.912 57.8928H49.6306L56.694 156.805C56.8411 158.872 57.7656 160.806 59.2814 162.218C60.7972 163.631 62.7918 164.416 64.8636 164.417H132.679C134.751 164.416 136.745 163.631 138.261 162.218C139.777 160.806 140.701 158.872 140.848 156.805L147.912 57.8928ZM82.3828 82.4754C84.3898 82.4757 86.327 83.2125 87.8268 84.5462C89.3266 85.8799 90.2848 87.7177 90.5196 89.7109L90.577 90.6696V131.641C90.5747 133.729 89.7749 135.738 88.3412 137.257C86.9075 138.775 84.948 139.689 82.863 139.812C80.7781 139.934 78.7251 139.256 77.1235 137.915C75.5219 136.575 74.4926 134.673 74.246 132.599L74.1886 131.641V90.6696C74.1886 88.4964 75.0519 86.4122 76.5886 84.8755C78.1253 83.3387 80.2096 82.4754 82.3828 82.4754ZM115.16 82.4754C117.333 82.4754 119.417 83.3387 120.954 84.8755C122.49 86.4122 123.354 88.4964 123.354 90.6696V131.641C123.354 133.814 122.49 135.898 120.954 137.435C119.417 138.971 117.333 139.835 115.16 139.835C112.986 139.835 110.902 138.971 109.365 137.435C107.829 135.898 106.965 133.814 106.965 131.641V90.6696C106.965 88.4964 107.829 86.4122 109.365 84.8755C110.902 83.3387 112.986 82.4754 115.16 82.4754ZM117.454 33.3103H80.0884L77.3598 41.5045H120.183L117.454 33.3103Z"
                      fill="#FF0404"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex sm:!flex-row flex-col gap-2 items-center justify-between py-3 px-2">
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
      {preview && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setPreview(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={preview}
              alt="preview"
              width={700}
              height={700}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-md shadow-lg"
            />
            <button
              onClick={() => setPreview(null)}
              className="absolute top-2 right-2 text-white text-xl bg-black/40 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilesTab;

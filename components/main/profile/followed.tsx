"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContributionHeatmap from "../landing-page/heatMap";

type TabKey = "all" | "recent" | "close" | "hometown" | "following";

const FollowedTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [order, setOrder] = useState("Last Active");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs = [
    { key: "all", label: "All Linked", count: 12 },
    { key: "recent", label: "Recently Added", count: 2 },
    { key: "close", label: "Circle" },
    { key: "hometown", label: "Collaborators" },
    { key: "following", label: "Following" },
  ] as const;

  const members = [
    { name: "Petey Cruiser", img: "/images/user/05.jpg" },
    { name: "Anna Sthesia", img: "/images/user/06.jpg" },
    { name: "Paul Molive", img: "/images/user/07.jpg" },
  ];

  const recentlyAdded = [{ name: "Buck Kinnear", img: "/images/user/15.jpg" }];

  const activeColor = "text-black border-black";
  const inactiveColor =
    "text-gray-600 border-transparent hover:text-yellow-600";

  return (
    <div className="bg-white rounded-sm  p-2 w-full overflow-scroll">
      <div className="bg-white flex items-center px-2 justify-between">
        <ul className="flex flex-wrap gap-2 items-center">
          {tabs.map((tab: any) => (
            <li key={tab.key}>
              <button
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-1 py-2 text-xs font-medium border-b-2 transition-all ${
                  activeTab === tab.key ? activeColor : inactiveColor
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="bg-yellow-400 text-white text-xs rounded-full px-2 py-0.5">
                    {tab.count}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex whitespace-nowrap gap-2 items-center text-xs">
          <span>Order By:</span>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md flex items-center gap-2"
            >
              {order}
              <svg
                className={`w-4 h-4 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-10">
                {["Last Active", "Recently Added", "Alphabetical"].map(
                  (opt) => (
                    <li key={opt}>
                      <button
                        onClick={() => {
                          setOrder(opt);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                          order === opt ? "text-yellow-600 font-medium" : ""
                        }`}
                      >
                        {opt}
                      </button>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="p-2">
        {activeTab === "all" && (
          <div className="space-y-4">
            {members.map((m, idx) => (
              <FriendCard key={idx} name={m.name} img={m.img} />
            ))}
          </div>
        )}

        {activeTab === "recent" && (
          <div className="space-y-4">
            {recentlyAdded.map((m, idx) => (
              <FriendCard key={idx} name={m.name} img={m.img} />
            ))}
          </div>
        )}

        {activeTab === "close" && (
          <FriendCard name="Paul Molive" img="/images/user/07.jpg" />
        )}

        {activeTab === "hometown" && (
          <FriendCard name="Paul Molive" img="/images/user/07.jpg" />
        )}

        {activeTab === "following" && (
          <FriendCard name="Paul Molive" img="/images/user/07.jpg" />
        )}
      </div>
    </div>
  );
};

export default FollowedTab;

const FriendCard = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-start justify-between p-3 bg-gray-50 rounded-md   gap-3">
      <div className="flex items-center gap-3">
        <Image
          alt={name}
          src={img}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <h6 className="flex items-center gap-1 text-gray-800 font-semibold">
            {name}
            <Image
              src="/images/small/verifyIcon.svg"
              alt="verified-icon"
              width={18}
              height={18}
            />
          </h6>
          <span className="flex font-normal items-center gap-2">
            <p className=" text-xs text-[#FAAF40] mt-1">
              Director in Technology
            </p>
            <Image
              src="/images/icon/iwwa_map.svg"
              alt="icon"
              width={16}
              height={16}
            />
            <p className=" text-xs text-[#979797] mt-1">United Kingdom</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 55 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pt-1"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.55089 5.72538L3.20667 1.86353C2.92686 1.61515 2.55984 1.48809 2.18634 1.5103C1.81285 1.53252 1.46348 1.7022 1.2151 1.98201C0.966708 2.26182 0.839648 2.62884 0.861867 3.00234C0.884086 3.37583 1.05376 3.7252 1.33357 3.97358L5.4211 7.60694C6.14701 6.96188 6.85695 6.3347 7.55089 5.72538ZM16.166 16.9329C17.0931 17.672 17.9799 18.3312 18.8261 18.9104C21.8473 20.9781 24.5836 22.1291 27.6585 22.1291C30.7333 22.1291 33.4667 20.9781 36.4908 18.9132C39.4668 16.8765 42.8661 13.8553 47.2582 9.95113L47.3372 9.8806L53.9833 3.97358C54.1219 3.85059 54.2348 3.70152 54.3158 3.53487C54.3967 3.36823 54.444 3.18727 54.455 3.00234C54.466 2.8174 54.4405 2.63211 54.3799 2.45704C54.3193 2.28197 54.2248 2.12056 54.1018 1.98201C53.9788 1.84346 53.8297 1.7305 53.6631 1.64956C53.4964 1.56862 53.3155 1.52131 53.1306 1.5103C52.9456 1.4993 52.7603 1.52483 52.5853 1.58544C52.4102 1.64605 52.2488 1.74054 52.1102 1.86353L45.4613 7.77337C40.976 11.7622 37.7094 14.6621 34.8998 16.5831C32.124 18.4788 29.9462 19.3081 27.6585 19.3081C25.3707 19.3081 23.1929 18.4788 20.4171 16.5831C19.7038 16.0913 19.0058 15.5776 18.324 15.0429C17.6545 15.6259 16.9352 16.2559 16.166 16.9329Z"
                fill="#8C8C8C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.1548 5.82896C38.2911 5.1403 37.4039 4.48169 36.4947 3.85431C33.4734 1.78657 30.7372 0.632812 27.6623 0.632812C24.5875 0.632812 21.8541 1.78657 18.83 3.85431C15.854 5.88538 12.4547 8.90941 8.05974 12.8136L7.98357 12.8813L1.33747 18.7911C1.07212 19.0432 0.915138 19.3885 0.899695 19.7542C0.884252 20.1199 1.01155 20.4772 1.25471 20.7508C1.49786 21.0243 1.83783 21.1926 2.20279 21.2202C2.56775 21.2477 2.92912 21.1323 3.21056 20.8983L9.86231 14.9941C14.3476 11.0054 17.617 8.10544 20.4239 6.18439C23.1996 4.28873 25.3774 3.45656 27.6652 3.45656C29.9529 3.45656 32.1307 4.28873 34.9065 6.18439C35.5741 6.6395 36.2718 7.15197 36.9996 7.7218C37.6691 7.14069 38.3884 6.51068 39.1576 5.83178M49.9025 15.1606L47.7727 17.0421L52.1169 20.9012C52.3984 21.1351 52.7598 21.2505 53.1247 21.223C53.4897 21.1955 53.8297 21.0271 54.0728 20.7536C54.316 20.48 54.4433 20.1227 54.4278 19.757C54.4124 19.3914 54.2554 19.046 53.99 18.7939L49.9025 15.1606Z"
                fill="#8C8C8C"
              />
            </svg>

            <p className=" text-xs text-[#979797] mt-1">35 Days Ago</p>
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <div className="mt-1">
          <ContributionHeatmap size="mini" />
        </div>
        <button className="bg-[#157BFF] cursor-pointer hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.385 9.083V8.07q.717.15 1.45.328q.732.178 1.524.378q.324.08.5.351q.177.27.122.593l-1.466 7.962q-.106.59-.553.953T18.925 19H5.152q-.59 0-1.025-.373t-.54-.944L2.025 9.72q-.056-.323.118-.605q.174-.283.498-.364q.734-.2 1.428-.356t1.373-.287V9.12l-1.188.251q-.6.126-1.22.278L4.46 17.5q.038.212.22.356t.395.144h13.85q.212 0 .394-.144t.222-.356l1.425-7.85q-.658-.171-1.306-.307t-1.275-.26M16 9.065q0-.427-.125-.829t-.394-.728q-.39-.506-.63-1.098q-.24-.59-.24-1.226q0-.401.105-.782q.105-.38.309-.74l.152-.27q.09-.177.291-.233q.201-.055.378.035t.233.289t-.035.375l-.177.294q-.13.244-.202.52t-.073.551q0 .427.154.82q.154.391.423.718q.41.468.62 1.05q.211.581.211 1.197q0 .42-.095.811q-.096.39-.26.77l-.159.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.112-.264.167-.53T16 9.066m-3.892 0q0-.428-.125-.83t-.395-.728q-.39-.506-.63-1.098q-.239-.59-.239-1.226q0-.401.105-.782t.309-.74l.151-.27q.091-.176.292-.232t.378.034t.232.289t-.034.375l-.177.294q-.13.244-.203.51q-.072.267-.072.542q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.094.811q-.096.39-.261.77l-.158.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.111-.264.167-.53t.056-.541m-3.887-.02q0-.427-.128-.819q-.127-.392-.397-.72q-.41-.486-.64-1.077q-.229-.591-.229-1.226q0-.402.102-.792t.312-.75l.157-.27q.09-.176.292-.232q.2-.056.377.034t.233.289t-.034.375l-.177.294q-.131.239-.206.508t-.075.544q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.095.811q-.095.39-.26.77l-.152.326q-.09.177-.292.233q-.2.056-.377-.034q-.177-.091-.233-.289t.035-.375l.157-.313q.112-.264.168-.54q.055-.276.055-.55"
            />
          </svg>
          Unlink
        </button>

        <button className="bg-[#157BFF] cursor-pointer hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 132 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.9375 79.956H85.2337M46.9375 52.6016H66.0856"
              stroke="white"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M77.9542 114.917C100.844 113.401 119.073 94.9096 120.572 71.6966C120.862 67.1558 120.862 62.4508 120.572 57.91C119.073 34.7025 100.844 16.2218 77.9542 14.6954C70.0482 14.1744 62.1165 14.1744 54.2106 14.6954C31.3204 16.2163 13.0914 34.7025 11.5924 57.9154C11.3025 62.5064 11.3025 67.1111 11.5924 71.7021C12.1394 80.1546 15.8761 87.9834 20.2801 94.5922C22.835 99.2151 21.15 104.987 18.4857 110.037C16.5709 113.675 15.608 115.491 16.3794 116.804C17.1453 118.117 18.8686 118.161 22.3098 118.243C29.1211 118.407 33.7111 116.481 37.3548 113.795C39.4173 112.269 40.4513 111.508 41.1625 111.421C41.8737 111.333 43.2797 111.913 46.0808 113.062C48.5974 114.101 51.5244 114.742 54.2051 114.922C62.0011 115.436 70.1472 115.436 77.9597 114.922L77.9542 114.917Z"
              stroke="white"
              stroke-width="8"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

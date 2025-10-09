"use client";

import React, { useState } from "react";
import Image from "next/image";

type TabKey = "all" | "recent" | "close" | "hometown" | "following";

const FollowedTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [order, setOrder] = useState("Last Active");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs = [
    { key: "all", label: "All Members", count: 12 },
    { key: "recent", label: "Recently Added", count: 2 },
    { key: "close", label: "Close Friends" },
    { key: "hometown", label: "Home/Town Friends" },
    { key: "following", label: "Following" },
  ] as const;

  const members = [
    { name: "Petey Cruiser", img: "/images/user/05.jpg" },
    { name: "Anna Sthesia", img: "/images/user/06.jpg" },
    { name: "Paul Molive", img: "/images/user/07.jpg" },
  ];

  const recentlyAdded = [{ name: "Buck Kinnear", img: "/images/user/15.jpg" }];

  const activeColor = "text-yellow-600 border-yellow-500";
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
    <div className="flex flex-wrap md:flex-nowrap items-start justify-between p-3 bg-gray-50 rounded-md border border-gray-100 gap-3">
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
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
            <div className="flex items-center gap-1">
              <i className="ph ph-map-pin text-lg"></i>
              <span>New York, US</span>
            </div>
            <div className="flex items-center gap-1">
              <i className="ph ph-calendar-blank text-lg"></i>
              <span>a minute ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded-md">
          Unfriend
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <i className="ph ph-envelope-simple text-xl"></i>
        </button>
      </div>
    </div>
  );
};

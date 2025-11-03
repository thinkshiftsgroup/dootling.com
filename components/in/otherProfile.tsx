"use client";
import { useRef } from "react";
import Image from "next/image";
import { User } from "phosphor-react";
import React, { useState } from "react";
const mainBlue = "#1578ff";
const mainText = "#2b2d42";
const paragraph = "#7e8b9a";

type TabId = "hobbies-interests" | "v-pills-work-tab" | "v-pills-lived-tab";
const ProfileIn = ({ profile, isLoading }: any) => {
  const [open, setOpen] = useState<string | null>("profile");
  const [activeTab, setActiveTab] = useState<string>("hobbies-interests");

  const tabRefs: Record<TabId, React.RefObject<HTMLDivElement | null>> = {
    "hobbies-interests": useRef<HTMLDivElement>(null),
    "v-pills-work-tab": useRef<HTMLDivElement>(null),
    "v-pills-lived-tab": useRef<HTMLDivElement>(null),
  };

  const handleTabClick = (id: TabId) => {
    if (
      [
        "hobbies-interests",
        "v-pills-work-tab",
        "v-pills-lived-tab",
      ].includes(id)
    ) {
      setOpen("profile");
    }

    setActiveTab(id);

    setTimeout(() => {
      const element = tabRefs[id].current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  const workplaces = [
    {
      id: 1,
      name: "Themeforest",
      position: "Web Designer",
      img: "/images/user/01.jpg",
    },
    {
      id: 2,
      name: "iqonicdesign",
      position: "Web Developer",
      img: "/images/user/02.jpg",
    },
    {
      id: 3,
      name: "W3school",
      position: "Designer",
      img: "/images/user/03.jpg",
    },
  ];

  const colleges = [
    { id: 1, name: "Lorem ipsum", location: "USA", img: "/images/user/01.jpg" },
  ];

  const livedPlaces = [
    {
      id: 1,
      name: "Georgia",
      location: "Georgia State",
      img: "/images/user/01.jpg",
    },
    {
      id: 2,
      name: "Atlanta",
      location: "Atlanta City",
      img: "/images/user/02.jpg",
    },
  ];

  return (
    <div className="tab-pane fade" id="about" role="tabpanel">
      <div className="lg:grid block grid-cols-12 gap-3">
        <div className="col-span-4">
          <div className="w-full md:w-[350px] bg-white rounded-sm">
            <div className="p-5">
              <div className="flex flex-col space-y-4">
                <div className="">
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-[#1578ff]  transition-all rounded-sm">
                    <span className="flex items-center gap-2 font-semibold text-white">
                      <User size={20} className="" />
                      Account Information
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      open === "profile" ? "max-h-[400px] p-4" : "max-h-0 p-0"
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      {[
                        {
                          label: "Hobbies and Interests",
                          id: "hobbies-interests",
                        },
                        { label: "Work and Education", id: "v-pills-work-tab" },
                        {
                          label: "Places You've Lived",
                          id: "v-pills-lived-tab",
                        },
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleTabClick(item.id as TabId)}
                          className={`text-left font-medium text-sm py-2 px-2 rounded-sm hover:bg-[#1578ff]/10 transition ${
                            activeTab === item.id
                              ? " bg-[#1578ff]/10 text-[#1578ff]"
                              : "text-[#0a66c2]"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="card">
            <div className="card-body my-2 sm:!my-0">
              <div id="profileTabContent" className="tab-content active show">
                <div
                  id="hobbies-interests"
                  ref={tabRefs["hobbies-interests"]}
                  className={`w-full bg-white rounded-sm transition-all ${
                    activeTab === "hobbies-interests" ? "block" : "hidden"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-[#2b2d42]">
                      Hobbies and Interests
                    </h4>
                  </div>

                  <hr className="border-gray-200 mb-6" />

                  <div className=" text-[#7e8b9a]">
                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Hobbies:
                      </h5>
                      <p className="text-sm text-gray-500">Hobbies</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite TV Shows:
                      </h5>
                      <p className="text-sm text-gray-500">
                        {" "}
                        Favourite TV Shows
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite Movies:
                      </h5>
                      <p className="text-sm text-gray-500">Favourite Movies</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite Games:
                      </h5>
                      <p className="text-sm text-gray-500"> Favourite Games</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite Music Bands / Artists:
                      </h5>
                      <p className="text-sm text-gray-500">
                        Favourite Music Bands / Artists
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite Books:
                      </h5>
                      <p className="text-sm text-gray-500">Favourite Books</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite Writers:
                      </h5>
                      <p className="text-sm text-gray-500">Favourite Writers</p>
                    </div>
                  </div>
                </div>
                <div
                  id="v-pills-work-tab"
                  ref={tabRefs["v-pills-work-tab"]}
                  className={`${
                    activeTab === "v-pills-work-tab" ? "block" : "hidden"
                  } space-y-6`}
                >
                  <div className="flex items-center justify-between">
                    <h4
                      className="text-lg font-semibold"
                      style={{ color: mainText }}
                    >
                      Work
                    </h4>
                  </div>
                  <hr className="border-gray-200" />

                  <ul className="space-y-4">
                    {workplaces.map((work) => (
                      <li
                        key={work.id}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex-shrink-0">
                          <Image
                            src={work.img}
                            alt={work.name}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 ms-3 flex justify-between items-center">
                          <div>
                            <h6
                              className="font-semibold"
                              style={{ color: mainText }}
                            >
                              {work.name}
                            </h6>
                            <p className="text-sm" style={{ color: paragraph }}>
                              {work.position}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4
                      className="text-lg font-semibold mb-3"
                      style={{ color: mainText }}
                    >
                      Professional Skills
                    </h4>
                  </div>

                  <div>
                    <h4
                      className="text-lg font-semibold mb-3"
                      style={{ color: mainText }}
                    >
                      College
                    </h4>
                    <ul className="space-y-4">
                      {colleges.map((college) => (
                        <li
                          key={college.id}
                          className="flex items-center justify-between gap-3"
                        >
                          <Image
                            src={college.img}
                            alt={college.name}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                            loading="lazy"
                          />
                          <div className="flex-1 ms-3 flex justify-between items-center">
                            <div>
                              <h6
                                className="font-semibold"
                                style={{ color: mainText }}
                              >
                                {college.name}
                              </h6>
                              <p
                                className="text-sm"
                                style={{ color: paragraph }}
                              >
                                {college.location}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  id="v-pills-lived-tab"
                  ref={tabRefs["v-pills-lived-tab"]}
                  className={`${
                    activeTab === "v-pills-lived-tab" ? "block" : "hidden"
                  } space-y-6`}
                >
                  <div className="flex items-center justify-between">
                    <h4
                      className="text-lg font-semibold"
                      style={{ color: mainText }}
                    >
                      Current City and Hometown
                    </h4>
                  </div>
                  <hr className="border-gray-200" />

                  <ul className="space-y-4">
                    {livedPlaces.map((place) => (
                      <li
                        key={place.id}
                        className="flex items-center justify-between gap-3"
                      >
                        <Image
                          src={place.img}
                          alt={place.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                          loading="lazy"
                        />
                        <div className="flex-1 ms-3 flex justify-between items-center">
                          <div>
                            <h6
                              className="font-semibold"
                              style={{ color: mainText }}
                            >
                              {place.name}
                            </h6>
                            <p className="text-sm" style={{ color: paragraph }}>
                              {place.location}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4
                      className="text-lg font-semibold mb-3"
                      style={{ color: mainText }}
                    >
                      Other Places Lived
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIn;

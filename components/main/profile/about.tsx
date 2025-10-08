"use client";
import Image from "next/image";
import {
  User,
  Gear,
  CaretDown,
  PencilSimple,
  Plus,
  Pencil,
} from "phosphor-react";
import React, { useState } from "react";
import ProfileVisibility from "./profileVisibility";

const mainBlue = "#50b5ff";
const mainText = "#2b2d42";
const paragraph = "#7e8b9a";

const ProfileAbout = () => {
  const [open, setOpen] = useState<string | null>("profile");
  const [activeTab, setActiveTab] = useState<string>("personal-info");

  const toggleAccordion = (section: string) => {
    setOpen(open === section ? null : section);
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  const familyMembers = [
    {
      id: 1,
      name: "Paul Molive",
      relation: "Brother",
      img: "/images/user/01.jpg",
    },
    {
      id: 2,
      name: "Anna Mull",
      relation: "Sister",
      img: "/images/user/02.jpg",
    },
    {
      id: 3,
      name: "Paige Turner",
      relation: "Cousin",
      img: "/images/user/03.jpg",
    },
  ];

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
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <div className="w-full md:w-[350px] bg-white rounded-sm">
            <div className="p-5">
              <div className="flex flex-col space-y-4">
                <div className="">
                  <button
                    onClick={() => toggleAccordion("profile")}
                    className="w-full flex items-center justify-between px-4 py-3 bg-[#50b5ff]  transition-all rounded-sm"
                  >
                    <span className="flex items-center gap-2 font-semibold text-white">
                      <User size={20} className="" />
                      Profile Setting
                    </span>
                    <CaretDown
                      size={18}
                      className={`text-white transition-transform duration-300 ${
                        open === "profile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      open === "profile" ? "max-h-[400px] p-4" : "max-h-0 p-0"
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      {[
                        { label: "Personal Information", id: "personal-info" },
                        {
                          label: "Hobbies and Interests",
                          id: "hobbies-interests",
                        },
                        {
                          label: "Social Networks",
                          id: "v-pills-family",
                        },
                        { label: "Work and Education", id: "v-pills-work-tab" },
                        {
                          label: "Places You've Lived",
                          id: "v-pills-lived-tab",
                        },
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleTabClick(item.id)}
                          className={`text-left font-medium text-sm py-2 px-2 rounded-sm hover:bg-[#50b5ff]/10 transition ${
                            activeTab === item.id
                              ? " bg-[#50b5ff]/10 text-[#50b5ff]"
                              : "text-[#0a66c2]"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="">
                  <button
                    onClick={() => toggleAccordion("account")}
                    className="w-full flex items-center justify-between px-4 py-3 bg-[#50b5ff] transition-all rounded-lg"
                  >
                    <span className="flex items-center gap-2 font-semibold text-white">
                      <Gear size={20} className="" />
                      Account Settings
                    </span>
                    <CaretDown
                      size={18}
                      className={`text-white transition-transform duration-300 ${
                        open === "account" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      open === "account" ? "max-h-[400px] p-4" : "max-h-0 p-0"
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      {[
                        {
                          label: "Profile Visibility",
                          id: "v-pills-visibility-tab",
                        },
                        {
                          label: "Privacy and Security",
                          id: "v-pills-privacy-tab",
                        },
                        { label: "Block List", id: "v-pills-block-tab" },
                        { label: "Export Data", id: "v-pills-export-tab" },
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleTabClick(item.id)}
                          className={`text-left font-medium text-sm py-2 px-2 rounded-sm hover:bg-[#50b5ff]/10 transition ${
                            activeTab === item.id
                              ? " bg-[#50b5ff]/10 text-[#50b5ff]"
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
            <div className="card-body">
              <div id="profileTabContent" className="tab-content active show">
                <div
                  id="personal-info"
                  className={`w-full bg-white rounded-sm transition-all ${
                    activeTab === "personal-info" ? "block" : "hidden"
                  }`}
                >
                  {/* <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-[#2b2d42]">
                      Personal Info
                    </h4>
                    <button
                      className="flex items-center justify-center w-9 h-9 bg-[#50b5ff] text-white rounded-sm hover:bg-[#50b5ff]/90 transition"
                      aria-label="Edit personal info"
                    >
                      <PencilSimple size={18} />
                    </button>
                  </div>

                  <hr className="border-gray-200 mb-3" />

                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          About Me:
                        </h5>
                        <p className="text-sm text-[#738b9a]">
                          Hi, I’m James, I’m 36 and I work as a Digital Designer
                          for the “Daydreams” Agency in Pier 56.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">Email:</h5>
                        <p className="text-sm text-[#738b9a]">
                          Bnijohn@gmail.com
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Mobile:
                        </h5>
                        <p className="text-sm text-[#738b9a]">
                          (001) 4544 565 456
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Address:
                        </h5>
                        <p className="text-sm text-[#738b9a]">
                          United States of America
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Social Link:
                        </h5>
                        <p className="text-sm text-[#738b9a]">
                          www.bootstrap.com
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Birth Date:
                        </h5>
                        <p className="text-sm text-[#738b9a]">24 January</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Birth Year:
                        </h5>
                        <p className="text-sm text-[#738b9a]">1994</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Birthplace:
                        </h5>
                        <p className="text-sm text-[#738b9a]">
                          Austin, Texas, USA
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Lives in:
                        </h5>
                        <p className="text-sm text-[#738b9a]">
                          San Francisco, California, USA
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Gender:
                        </h5>
                        <p className="text-sm text-[#738b9a]">Female</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Interested in:
                        </h5>
                        <p className="text-sm text-[#738b9a]">Designing</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Language:
                        </h5>
                        <p className="text-sm text-[#738b9a]">
                          English, French
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Joined:
                        </h5>
                        <p className="text-sm text-[#738b9a]">
                          April 31st, 2014
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Status:
                        </h5>
                        <p className="text-sm text-[#738b9a]">Married</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Phone Number:
                        </h5>
                        <p className="text-sm text-[#738b9a]">
                          (044) 555 - 4369 - 8957
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#2b2d4a]">
                          Political Incline:
                        </h5>
                        <p className="text-sm text-[#738b9a]">Democrat</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="mt-8 mb-2 text-lg font-semibold text-[#2b2d42]">
                    Websites and Social Links
                  </h4>
                  <hr className="border-gray-200 mb-2" />

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <h5 className="font-semibold text-[#2b2d4a]">Website:</h5>
                      <p className="text-sm text-[#738b9a]">
                        www.bootstrap.com
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#2b2d4a]">
                        Social Link:
                      </h5>
                      <p className="text-sm text-[#738b9a]">
                        www.bootstrap.com
                      </p>
                    </div>
                  </div> */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-6">
                      Personal Information
                    </h4>

                    <form className="space-y-6">
                      <div className="flex mb-6">
                        <div className="relative  ">
                          <Image
                            src="/images/user/11.png"
                            alt="profile"
                            width={100}
                            height={100}
                            className="rounded-full w-36 h-36 border"
                          />
                          <label
                            htmlFor="upload"
                            className="absolute bottom-0 right-0 bg-[#50b5ff] text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition"
                          >
                            <Pencil size={16} />
                          </label>
                          <input
                            id="upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="w-full flex flex-col gap-4">
                          <div>
                            <label className="text-sm font-medium text-[#738b9a]">
                              First Name
                            </label>
                            <input
                              type="text"
                              placeholder="Bni"
                              className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#738b9a]">
                              Username
                            </label>
                            <input
                              type="text"
                              placeholder="Bni@01"
                              className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#738b9a]">
                              Gender
                            </label>
                            <div className="flex items-center gap-4 mt-2">
                              <label className="flex items-center gap-1 text-sm text-[#7e8b9a]">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="male"
                                  className="text-blue-500 focus:ring-blue-500"
                                />
                                Male
                              </label>
                              <label className="flex items-center gap-1 text-sm text-[#7e8b9a]">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="female"
                                  className="text-blue-500 focus:ring-blue-500"
                                />
                                Female
                              </label>
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#738b9a]">
                              Marital Status
                            </label>
                            <select className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500">
                              <option>Single</option>
                              <option>Married</option>
                              <option>Widowed</option>
                              <option>Divorced</option>
                              <option>Separated</option>
                            </select>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#738b9a]">
                              Country
                            </label>
                            <select className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500">
                              <option>USA</option>
                              <option>Canada</option>
                              <option>India</option>
                              <option>Nigeria</option>
                              <option>Germany</option>
                            </select>
                          </div>
                        </div>

                        <div className="w-full flex flex-col gap-4">
                          <div>
                            <label className="text-sm font-medium text-[#738b9a]">
                              Last Name
                            </label>
                            <input
                              type="text"
                              placeholder="Jhon"
                              className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#738b9a]">
                              City
                            </label>
                            <input
                              type="text"
                              placeholder="Atlanta"
                              className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#738b9a]">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#738b9a]">
                              Age
                            </label>
                            <select className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500">
                              <option>18–25</option>
                              <option>26–35</option>
                              <option>36–45</option>
                              <option>46–62</option>
                              <option>63+</option>
                            </select>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#738b9a]">
                              State
                            </label>
                            <select className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500">
                              <option>California</option>
                              <option>Florida</option>
                              <option>Georgia</option>
                              <option>Connecticut</option>
                              <option>Louisiana</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-span-2">
                          <label className="text-sm font-medium text-[#738b9a]">
                            Address
                          </label>
                          <textarea
                            className="w-full h-[128px] mt-1 border-[#f1f1f1] border rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            defaultValue="37 Cardinal Lane Petersburg, VA 23803 United States of America Zip Code: 85001"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-4">
                        <button
                          type="submit"
                          className="bg-[#50b5ff] text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="bg-[#ffebe8] text-[#ff9b8a] px-5 py-2 rounded hover:bg-[#f1f1f1] transition"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div
                  id="hobbies-interests"
                  role="tabpanel"
                  className={`w-full bg-white rounded-sm transition-all ${
                    activeTab === "hobbies-interests" ? "block" : "hidden"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-[#2b2d42]">
                      Hobbies and Interests
                    </h4>
                    <button
                      className="flex items-center justify-center w-9 h-9 bg-[#50b5ff] text-white rounded-sm hover:bg-[#50b5ff]/90 transition"
                      aria-label="Edit hobbies and interests"
                    >
                      <PencilSimple size={18} />
                    </button>
                  </div>

                  <hr className="border-gray-200 mb-6" />

                  <div className="space-y-4 text-[#7e8b9a]">
                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Hobbies:
                      </h5>
                      <p className="text-sm leading-relaxed text-[#7e8b9a]">
                        Hi, I’m Bni, I’m 26 and I work as a Web Designer for the
                        iqonicdesign. I like to ride the bike to work, swimming,
                        and working out. I also like reading design magazines,
                        go to museums, and binge watching a good TV show while
                        it’s raining outside.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite TV Shows:
                      </h5>
                      <p className="text-sm leading-relaxed text-[#7e8b9a]">
                        Breaking Good, RedDevil, People of Interest, The Running
                        Dead, Found, American Guy.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite Movies:
                      </h5>
                      <p className="text-sm leading-relaxed text-[#7e8b9a]">
                        Idiocratic, The Scarred Wizard and the Fire Crown, Crime
                        Squad, Ferrum Man.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite Games:
                      </h5>
                      <p className="text-sm leading-relaxed text-[#7e8b9a]">
                        The First of Us, Assassin’s Squad, Dark Assylum, NMAK16,
                        Last Cause 4, Grand Snatch Auto.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite Music Bands / Artists:
                      </h5>
                      <p className="text-sm leading-relaxed text-[#7e8b9a]">
                        Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters,
                        System of a Revenge.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite Books:
                      </h5>
                      <p className="text-sm leading-relaxed text-[#7e8b9a]">
                        The Crime of the Century, Egyptian Mythology 101, The
                        Scarred Wizard, Lord of the Wings, Amongst Gods, The
                        Oracle, A Tale of Air and Water.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#2b2d42] mb-1">
                        Favourite Writers:
                      </h5>
                      <p className="text-sm leading-relaxed text-[#7e8b9a]">
                        Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle,
                        Alexandria Platt, Marcus Roth.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  id="v-pills-family"
                  role="tabpanel"
                  className={`${
                    activeTab === "v-pills-family" ? "block" : "hidden"
                  } tab-pane fade space-y-4`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-[#2b2d42]">
                      Relationship
                    </h4>
                    <a
                      href="../app/profile-edit.html"
                      className="p-2 flex justify-center items-center bg-[#50b5ff] hover:bg-[#50b5ff] text-white rounded-sm transition"
                    >
                      <PencilSimple size={18} />
                    </a>
                  </div>

                  <hr className="border-gray-200" />

                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="flex justify-center items-center w-10 h-10 rounded-full text-gray-500">
                        <Plus size={20} />
                      </div>
                      <div>
                        <h6 className="font-medium text-[#2b2d42]">
                          Add Your Relationship Status
                        </h6>
                      </div>
                    </li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#2b2d42] mt-6 mb-3">
                    Family Members
                  </h4>

                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="flex justify-center items-center w-10 h-10 rounded-full text-gray-500">
                        <Plus size={20} />
                      </div>
                      <div>
                        <h6 className="font-medium text-[#2b2d42]">
                          Add Family Members
                        </h6>
                      </div>
                    </li>

                    {familyMembers.map((member) => (
                      <li
                        key={member.id}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex-shrink-0">
                          <Image
                            src={member.img}
                            alt={member.name}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex-1 ms-3 flex items-center justify-between">
                          <div>
                            <h6 className="font-semibold text-[#2b2d42]">
                              {member.name}
                            </h6>
                            <p className="text-sm text-gray-500">
                              {member.relation}
                            </p>
                          </div>
                          <a
                            href="#"
                            className="flex items-center gap-1 text-[#50b5ff] hover:text-blue-800 transition"
                          >
                            <PencilSimple size={16} />
                            <span className="text-sm font-medium">Edit</span>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  id="v-pills-work-tab"
                  role="tabpanel"
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
                    <a
                      href="../app/profile-edit.html"
                      className="p-2 flex justify-center items-center rounded-sm"
                      style={{ backgroundColor: mainBlue }}
                    >
                      <PencilSimple size={18} color="white" />
                    </a>
                  </div>
                  <hr className="border-gray-200" />

                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="flex justify-center items-center w-10 h-10 rounded-full  text-gray-500">
                        <Plus size={20} />
                      </div>
                      <h6 className="font-medium" style={{ color: mainText }}>
                        Add Work Place
                      </h6>
                    </li>

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
                          <a
                            href="#"
                            className="flex items-center gap-1 text-sm font-medium"
                            style={{ color: mainBlue }}
                          >
                            <PencilSimple size={16} />
                            <span>Edit</span>
                          </a>
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
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="flex justify-center items-center w-10 h-10 rounded-full text-gray-500">
                          <Plus size={20} />
                        </div>
                        <h6 className="font-medium" style={{ color: mainText }}>
                          Add Professional Skills
                        </h6>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4
                      className="text-lg font-semibold mb-3"
                      style={{ color: mainText }}
                    >
                      College
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <div className="flex justify-center items-center w-10 h-10 rounded-full text-gray-500">
                          <Plus size={20} />
                        </div>
                        <h6 className="font-medium" style={{ color: mainText }}>
                          Add College
                        </h6>
                      </li>

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
                            <a
                              href="#"
                              className="flex items-center gap-1 text-sm font-medium"
                              style={{ color: mainBlue }}
                            >
                              <PencilSimple size={16} />
                              <span>Edit</span>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  id="v-pills-lived-tab"
                  role="tabpanel"
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
                    <a
                      href="../app/profile-edit.html"
                      className="p-2 flex justify-center items-center rounded-sm"
                      style={{ backgroundColor: mainBlue }}
                    >
                      <PencilSimple size={18} color="white" />
                    </a>
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
                          <a
                            href="#"
                            className="flex items-center gap-1 text-sm font-medium"
                            style={{ color: mainBlue }}
                          >
                            <PencilSimple size={16} />
                            <span>Edit</span>
                          </a>
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
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="flex justify-center items-center w-10 h-10 rounded-full text-gray-500">
                          <Plus size={20} />
                        </div>
                        <h6 className="font-medium" style={{ color: mainText }}>
                          Add Place
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>

                <ProfileVisibility activeTab={activeTab} />

                <div
                  id="v-pills-privacy-tab"
                  role="tabpanel"
                  aria-labelledby="v-pills-privacy-tab"
                  className={`${
                    activeTab === "v-pills-privacy-tab" ? "block" : "hidden"
                  } data-[active=true]:block`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-[#2b2d42]">
                      Privacy and Security
                    </h4>
                  </div>
                  <hr className="border-gray-200 mb-4" />

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="account_type"
                        value="private"
                        className="w-4 h-4 text-[#50b5ff] border-gray-300 rounded focus:ring-[#50b5ff]"
                      />
                      <div>
                        <label className="text-[#2b2d42] text-sm font-medium">
                          Private account
                        </label>
                        <p className="text-gray-600 text-sm">
                          When your account is private, only your friends can
                          see your profile and activities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="v-pills-block-tab"
                  role="tabpanel"
                  aria-labelledby="v-pills-block-tab"
                  className={`${
                    activeTab === "v-pills-block-tab" ? "block" : "hidden"
                  } data-[active=true]:block`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-[#2b2d42]">
                      Block List
                    </h4>
                  </div>
                  <hr className="border-gray-200 mb-4" />

                  <div className="bg-white ">
                    <div className="flex flex-wrap rounded-sm p-2 bg-[#f8f9fa] items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <Image
                          className="rounded-full"
                          src="/images/user/02.jpg"
                          alt="user-avatar"
                          width={60}
                          height={60}
                        />
                        <div>
                          <a href="#" className="hover:underline">
                            <h6 className="flex items-center gap-2 text-[#2b2d42] font-semibold">
                              John Johnson
                              <Image
                                width={20}
                                height={20}
                                src="/images/small/verifyIcon.svg"
                                alt="verified-icon"
                              />
                            </h6>
                          </a>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <i className="ph ph-map-pin text-base"></i>
                              <span>New York, US</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <i className="ph ph-calendar-blank text-base"></i>
                              <span>a minute ago</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1 rounded-sm transition">
                          Unblock
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="v-pills-export-tab"
                  role="tabpanel"
                  aria-labelledby="v-pills-export-tab"
                  className={`${
                    activeTab === "v-pills-export-tab" ? "block" : "hidden"
                  } data-[active=true]:block`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-[#2b2d42]">
                      Export Data
                    </h4>
                  </div>
                  <hr className="border-gray-200 mb-4" />

                  <div className="space-y-3">
                    <p className="text-[#7e8b9a] font-medium text-sm">
                      You previously requested an export of your personal data
                      on{" "}
                      <span className="text-[#50b5ff] font-semibold">
                        July 26, 2022.
                      </span>
                    </p>
                    <p className="text-[#7e8b9a] font-medium text-sm">
                      You will receive a link to download your export via email
                      once we are able to fulfill your request.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;

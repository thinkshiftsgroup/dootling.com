"use client";

import Image from "next/image";
import { Dropdown } from "./dropDown";
import { User, UserGear, Gear, LockSimple, SignOut } from "phosphor-react";

export const UserDropdown = () => (
  <Dropdown
    trigger={
      <div className="cursor-pointer">
        <Image
          src="/images/user/1.jpg"
          width={48}
          height={48}
          alt="User avatar"
          className="rounded-full border-2 mt-1.5 border-gray-200"
        />
      </div>
    }
  >
    <div className="m-0 shadow-md rounded-lg bg-white w-56 sm:w-60">
      <div className="px-4 py-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-md">
            <User size={20} className="text-gray-700" />
            <a
              href="/app/profile"
              className="text-base text-gray-800 font-normal"
            >
              My Profile
            </a>
          </div>

          <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-md">
            <UserGear size={20} className="text-gray-700" />
            <a
              href="/app/profile-edit"
              className="text-base text-gray-800 font-normal"
            >
              Edit Profile
            </a>
          </div>

          <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-md">
            <Gear size={20} className="text-gray-700" />
            <a
              href="/app/account-setting"
              className="text-base text-gray-800 font-normal"
            >
              Account Settings
            </a>
          </div>

          <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-md">
            <LockSimple size={20} className="text-gray-700" />
            <a
              href="/app/privacy-setting"
              className="text-base text-gray-800 font-normal"
            >
              Privacy Settings
            </a>
          </div>

          <div className="border-t my-2 border-gray-100"></div>

          <div className="bg-blue-600 text-white rounded px-4 py-2 text-sm font-medium w-full hover:bg-blue-700 transition flex items-center gap-2 justify-center">
            <SignOut size={20} className="text-white" />
            <p className=" font-normal text-white">Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  </Dropdown>
);

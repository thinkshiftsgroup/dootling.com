"use client";

import Image from "next/image";
import { Dropdown } from "./dropDown";
import { User, UserGear, Gear, LockSimple, SignOut } from "phosphor-react";
import { useRouter } from "next/navigation";
import user from "@/public/images/user/userImg.jpg";

import Cookies from "js-cookie";
import { useAuthStore } from "@/stores/useAuthStore";
import { toast } from "sonner";

export default function UserDropdown() {
  const router = useRouter();
  const logoutUser = useAuthStore((state: any) => state.logout);
  const handleSignOut = () => {
    Cookies.remove("dootling_auth_token");
    logoutUser();
    toast.info("You have been signed out.");
    router.push("/");
  };

  return (
    <Dropdown
      trigger={
        <div className="cursor-pointer">
          <Image
            src={user}
            width={35}
            height={35}
            alt="user"
            className="rounded-sm mt-1.5 cursor-pointer"
          />
        </div>
      }
    >
      <div className="m-0 shadow-md rounded-lg bg-white w-56 sm:w-60">
        <div className="px-4 py-3">
          <div className="flex flex-col gap-1">
            <div
              onClick={() => router.push("/profile/profile-settings")}
              className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-md"
            >
              <Gear size={20} className="text-gray-700" />
              <a className="text-base text-gray-800 font-normal">
                Account Settings
              </a>
            </div>

            <div
              onClick={() => router.push("/profile/privacy-setting")}
              className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-md"
            >
              <LockSimple size={20} className="text-gray-700" />
              <a className="text-base text-gray-800 font-normal">
                Privacy Settings
              </a>
            </div>
            <div    onClick={handleSignOut} className="bg-blue-600 text-white rounded px-4 py-2 text-sm font-medium w-full hover:bg-blue-700 transition flex items-center gap-2 justify-center">
              <SignOut size={20} className="text-white" />
              <p className=" font-normal text-white">Sign Out</p>
            </div>
          </div>
        </div>
      </div>
    </Dropdown>
  );
}

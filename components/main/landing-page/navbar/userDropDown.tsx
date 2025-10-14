"use client";
import React from "react";
import Image from "next/image";
import { Dropdown } from "./dropDown";
import { User, UserGear, Gear, LockSimple, SignOut } from "phosphor-react";
import { useRouter } from "next/navigation";

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
  const user = useAuthStore((state) => state.user);
  const userInitials = React.useMemo(() => {
    const firstNameInitial = user?.firstname ? user.firstname[0] : "";
    const lastNameInitial = user?.lastname ? user.lastname[0] : "";

    if (firstNameInitial) {
      return (firstNameInitial + lastNameInitial).toUpperCase();
    }

    if (user?.fullName) {
      const parts = user.fullName.split(" ").filter((p) => p.length > 0);
      if (parts.length > 1) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      }
      return parts[0][0].toUpperCase();
    }

    return "US";
  }, [user?.firstname, user?.lastname, user?.fullName]);

  return (
    <Dropdown
      trigger={
        <div className="cursor-pointer">
          {user?.profilePhotoUrl ? (
            <div className="w-[40px] h-[40px] overflow-hidden rounded-md flex items-center justify-center">
              <Image
                src={user.profilePhotoUrl}
                alt="Profile Photo"
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-md cursor-pointer"
              />
            </div>
          ) : (
            <div className="w-[40px] h-[40px] rounded-md bg-[#157BFF] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {userInitials}
            </div>
          )}
        </div>
      }
    >
      <div className="m-0 shadow-md rounded-lg bg-white w-60 sm:w-60">
        <div className="px-4 py-3">
          <div className="flex flex-col gap-1">
            {/* <div
              // onClick={() => router.push("/profile/profile-settings")}
              className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-md"
            >
              <Gear size={20} className="text-gray-700" />
              <a className="text-base text-gray-800 font-normal">
                Account Management
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
            </div> */}
            <div
              onClick={handleSignOut}
              className="bg-blue-600 cursor-pointer text-white rounded px-4 py-2 text-sm font-medium w-full hover:bg-blue-700 transition flex items-center gap-2 justify-center"
            >
              <SignOut size={20} className="text-white" />
              <p className=" font-normal text-white">Sign Out</p>
            </div>
          </div>
        </div>
      </div>
    </Dropdown>
  );
}

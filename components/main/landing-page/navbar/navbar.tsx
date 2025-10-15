"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { NotificationDropdown } from "./notifDropDown";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import UserDropdown from "./userDropDown";
import { useRouter } from "next/navigation";
import SearchBar from "./searchBar";
import { Menu } from "lucide-react";

import { RiLoginCircleFill } from "react-icons/ri";

import Cookies from "js-cookie";
import { useAuthStore } from "@/stores/useAuthStore";
import { toast } from "sonner";
import clsx from "clsx";

interface UserItem {
  name: string;
  username?: string;
  image: string;
  status?: "online" | "offline";
  note?: string;
}

interface NavbarProps {
  fixed?: boolean;
}

const recentUsers: UserItem[] = [
  {
    name: "Paige Turner",
    username: "Paige001",
    image: "/images/page-img/19.jpg",
    status: "online",
  },
  {
    name: "Monty Carlo",
    username: "Carlo.m",
    image: "/images/page-img/18.jpg",
    status: "online",
  },
  {
    name: "Paul Molive",
    username: "Paul.45",
    image: "/images/page-img/20.jpg",
    status: "offline",
  },
];

const suggestedUsers: UserItem[] = [
  {
    name: "Annette Black",
    image: "/images/user/06.jpg",
    note: "Followed by Jerome_bell + 2 more",
  },
  {
    name: "Ellyse Perry",
    image: "/images/user/08.jpg",
    note: "Followed by _@rina",
  },
  {
    name: "Pete Sariya",
    image: "/images/user/15.jpg",
    note: "Followed by chris_18 + 5 more",
  },
  {
    name: "Aman Verma",
    image: "/images/user/13.jpg",
    note: "Followed by Jerome_bell and _@rina",
  },
];

const Navbar = ({ fixed }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");

  const router = useRouter();
  const logoutUser = useAuthStore((state: any) => state.logout);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const handleSignOut = () => {
    Cookies.remove("dootling_auth_token");
    logoutUser();
    toast.info("You have been signed out.");
    router.push("/");
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const results = [
    "Emma Watson",
    "Chris Evans",
    "Frontend Developers Group",
    "Next.js Enthusiasts",
  ].filter((r) => r.toLowerCase().includes(query.toLowerCase()));

  return (
    <nav
      className={clsx(
        "nav w-full iq-navbar shadow-sm bg-white text-gray-800 xl:flex xl:flex-row md:px-0 px-2 sm:py-0 py-2",
        fixed ? "fixed top-0 left-0 z-50" : "relative"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between w-2/6">
          <div onClick={() => router.push("/")} className="flex items-center relative lg:pb-2 pb-0 cursor-pointer">
            <Image
              width={60}
              height={60}
              src="/images/dootling-icon.svg"
              alt="Dootling icon"
              priority
              className="mr-3"
            />
          </div>

          <SearchBar />
        </div>
        <div className="flex">
          <ul className="navbar-nav  flex items-center flex-row">
            <div className="flex items-center gap-4">
              <div
                onClick={() => router.push("/")}
                className="cursor-pointer hidden lg:flex flex-col items-center "
              >
                <div className="relative">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 164 163"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7891 81.5903V98.6034C20.7891 120.971 20.7891 132.155 27.7367 139.103C34.6843 146.05 45.8682 146.05 68.2361 146.05H95.3487C117.717 146.05 128.901 146.05 135.848 139.103C142.796 132.155 142.796 120.971 142.796 98.6034V81.5903C142.796 70.1894 142.796 64.4958 140.383 59.5613C137.97 54.6268 133.469 51.1293 124.481 44.1342L110.925 33.5942C96.928 22.7085 89.9262 17.2656 81.7924 17.2656C73.6586 17.2656 66.6568 22.7085 52.6599 33.5942L39.1036 44.1342C30.109 51.1293 25.6151 54.6268 23.2021 59.5613C20.7891 64.4958 20.7891 70.1894 20.7891 81.5903Z"
                      stroke="#041827"
                      strokeWidth="10.1672"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M102.13 146.053V112.163C102.13 102.578 102.13 97.7861 99.1475 94.8105C96.1718 91.8281 91.3797 91.8281 81.7954 91.8281C72.2111 91.8281 67.4189 91.8281 64.4433 94.8105C61.4609 97.7793 61.4609 102.571 61.4609 112.163V146.053"
                      stroke="#041827"
                      strokeWidth="10.1672"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="absolute -top-[3px] -right-1 flex items-center justify-center w-[16px] h-[16px] bg-[#EA0234] shadow-sm text-[10px] rounded-full text-white">
                    3
                  </span>
                </div>
                <p className="text-black text-xs">Home</p>
              </div>
              {isLoggedIn ? (
                <>
                  {/* <MessageDropdown /> */}
                  <div
                    onClick={() => router.push("/messages")}
                    className=" hidden lg:block cursor-pointer text-black"
                  >
                    <div className="cursor-pointer flex flex-col items-center ">
                      <div className="relative">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 154 114"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M40.0723 113.586C36.1439 113.586 32.8522 112.339 30.1973 109.846C27.5477 107.348 26.223 104.237 26.223 100.513V31.3963L0.0703125 0.265625H140.013C143.941 0.265625 147.233 1.51484 149.888 4.01328C152.537 6.50633 153.862 9.61724 153.862 13.346V100.513C153.862 104.237 152.537 107.348 149.888 109.846C147.233 112.339 143.941 113.586 140.013 113.586H40.0723ZM17.4407 8.35992L34.3173 28.2881V100.513C34.3173 101.755 34.9136 102.896 36.1061 103.937C37.2987 104.979 38.6207 105.497 40.0723 105.491H140.021C141.472 105.491 142.794 104.973 143.987 103.937C145.179 102.901 145.776 101.76 145.776 100.513V13.3379C145.776 12.0968 145.179 10.9555 143.987 9.91402C142.794 8.87256 141.47 8.35452 140.013 8.35992H17.4407ZM85.8375 93.35L91.5682 87.6193L77.3708 74.6684H120.4V66.5741H57.6693L85.8375 93.35ZM57.6693 47.2773H120.4L92.3777 20.5014L86.6469 26.2321L100.844 39.183H57.6693V47.2773Z"
                            fill="#041827"
                          />
                        </svg>

                        <span className="absolute -top-[3px] -right-1 flex items-center justify-center w-[16px] h-[16px] bg-[#EA0234] shadow-sm text-[10px] rounded-full text-white">
                          3
                        </span>
                      </div>
                      <p className="text-black text-xs">Messages</p>
                    </div>
                  </div>
                  {/* <NotificationDropdown /> */}
                  <div
                    onClick={() => router.push("/notifications")}
                    className=" hidden lg:block cursor-pointer text-black"
                  >
                    <div className="cursor-pointer flex flex-col items-center ">
                      <div className="relative">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 164 163"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M34.4184 61.322C34.4184 48.7383 39.4173 36.67 48.3153 27.7719C57.2134 18.8739 69.2817 13.875 81.8655 13.875C94.4492 13.875 106.518 18.8739 115.416 27.7719C124.314 36.67 129.313 48.7383 129.313 61.322V86.835L141.662 111.535C142.231 112.671 142.499 113.935 142.442 115.204C142.385 116.474 142.004 117.708 141.336 118.79C140.668 119.871 139.734 120.763 138.624 121.382C137.514 122.001 136.264 122.326 134.993 122.325H108.124C106.616 128.143 103.22 133.295 98.4669 136.972C93.7143 140.65 87.8749 142.646 81.8655 142.646C75.856 142.646 70.0166 140.65 65.264 136.972C60.5114 133.295 57.1146 128.143 55.6069 122.325H28.7383C27.4673 122.326 26.2173 122.001 25.107 121.382C23.9968 120.763 23.0632 119.871 22.395 118.79C21.7267 117.708 21.3459 116.474 21.2888 115.204C21.2317 113.935 21.5001 112.671 22.0686 111.535L34.4184 86.835V61.322ZM70.1257 122.325C71.3156 124.386 73.0269 126.097 75.0876 127.287C77.1484 128.477 79.4859 129.103 81.8655 129.103C84.245 129.103 86.5826 128.477 88.6433 127.287C90.7041 126.097 92.4154 124.386 93.6052 122.325H70.1257ZM81.8655 27.4313C72.8771 27.4313 64.2568 31.0019 57.9011 37.3577C51.5453 43.7134 47.9747 52.3337 47.9747 61.322V86.835C47.9746 88.9385 47.4849 91.0131 46.5445 92.8947L38.6141 108.769H125.124L117.193 92.8947C116.25 91.0137 115.758 88.939 115.756 86.835V61.322C115.756 52.3337 112.186 43.7134 105.83 37.3577C99.4741 31.0019 90.8538 27.4313 81.8655 27.4313Z"
                            fill="#404040"
                          />
                        </svg>

                        <span className="absolute -top-[3px] -right-1 flex items-center justify-center w-[16px] h-[16px] bg-[#EA0234] shadow-sm text-[10px] rounded-full text-white">
                          3
                        </span>
                      </div>
                      <p className="text-black text-xs">Notifications</p>
                    </div>
                  </div>
                  <div
                    onClick={() => router.push("/profile")}
                    className="cursor-pointer hidden lg:flex  flex-col items-center "
                  >
                    <div className="relative">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 163 163"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M135.768 74.8815L81.5424 20.6562L20.5391 81.6596H34.0954V129.107C34.0954 132.702 35.5236 136.15 38.0659 138.692C40.6082 141.235 44.0563 142.663 47.6517 142.663H81.5424"
                          stroke="#404040"
                          strokeWidth="13.5563"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M61.2109 142.663V101.994C61.2109 98.3984 62.6392 94.9504 65.1815 92.4081C67.7238 89.8658 71.1719 88.4375 74.7672 88.4375H88.3235C90.5264 88.4375 92.6006 88.9594 94.4374 89.8948M108.658 149.441C108.658 149.441 108.658 135.885 128.992 122.328"
                          stroke="#404040"
                          strokeWidth="13.5563"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M128.991 142.661C123.598 142.661 118.426 140.519 114.612 136.705C110.799 132.892 108.656 127.72 108.656 122.327C108.656 116.934 110.799 111.761 114.612 107.948C118.426 104.135 123.598 101.992 128.991 101.992H149.325V122.327C149.325 127.72 147.183 132.892 143.369 136.705C139.556 140.519 134.384 142.661 128.991 142.661Z"
                          stroke="#404040"
                          strokeWidth="13.5563"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-black text-xs">Account</p>
                  </div>
                  <UserDropdown />
                </>
              ) : (
                <div
                  onClick={() => router.push("/login")}
                  className="cursor-pointer hidden lg:flex flex-col items-center"
                >
                  <RiLoginCircleFill size={25} />
                  <p className="text-black text-xs">Sign in</p>
                </div>
              )}
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <div className=" lg:hidden block ml-2  p-1 cursor-pointer">
                  <Menu size={21} />
                </div>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-64 sm:w-72 p-4 bg-white text-gray-800 overflow-y-auto shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-2 mt-5 text-base">
                    <li>
                      <a
                        onClick={() => router.push("/")}
                        className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 font-medium cursor-pointer"
                      >
                        <span>Home</span>
                      </a>
                    </li>

                    {isLoggedIn ? (
                      <>
                        <li>
                          <a
                            onClick={() => router.push("/messages")}
                            className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 font-medium cursor-pointer"
                          >
                            <span>Messages</span>
                          </a>
                        </li>

                        <li>
                          <a
                            onClick={() => router.push("/notifications")}
                            className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 font-medium cursor-pointer"
                          >
                            <span>Notifications</span>
                          </a>
                        </li>

                        <li>
                          <a
                            onClick={() => router.push("/profile")}
                            className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 font-medium cursor-pointer"
                          >
                            <span>Account</span>
                          </a>
                        </li>

                        <li>
                          <a
                            onClick={() => {
                              handleSignOut();
                            }}
                            className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 font-medium text-red-500 cursor-pointer"
                          >
                            <span>Logout</span>
                          </a>
                        </li>
                      </>
                    ) : (
                      <li>
                        <a
                          onClick={() => router.push("/login")}
                          className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 font-medium cursor-pointer"
                        >
                          <span>Sign in</span>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

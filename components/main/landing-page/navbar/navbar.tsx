"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { List, X } from "phosphor-react";
import { NotificationDropdown } from "./notifDropDown";
import { MessageDropdown } from "./messageDropDown";
import GroupDropdown from "./groupDropDown";
import { VscMenu } from "react-icons/vsc";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CaretDown } from "phosphor-react";
import UserDropdown from "./userDropDown";
import { useRouter } from "next/navigation";
import SearchBar from "./searchBar";

interface UserItem {
  name: string;
  username?: string;
  image: string;
  status?: "online" | "offline";
  note?: string;
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");

  const router = useRouter();

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
    <nav className="nav w-full iq-navbar shadow-sm bg-white text-gray-800 xl:flex xl:flex-row py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between w-2/6">
          <div className="flex items-center relative pb-2 lg:pb-0">
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
          <ul className="navbar-nav navbar-list flex items-center flex-row">
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
                      stroke-width="10.1672"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M102.13 146.053V112.163C102.13 102.578 102.13 97.7861 99.1475 94.8105C96.1718 91.8281 91.3797 91.8281 81.7954 91.8281C72.2111 91.8281 67.4189 91.8281 64.4433 94.8105C61.4609 97.7793 61.4609 102.571 61.4609 112.163V146.053"
                      stroke="#041827"
                      stroke-width="10.1672"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="absolute -top-[3px] -right-1 flex items-center justify-center w-[16px] h-[16px] bg-[#EA0234] shadow-sm text-[10px] rounded-full text-white">
                    3
                  </span>
                </div>
                <p className="text-black text-xs">Home</p>
              </div>
              <MessageDropdown />
              <NotificationDropdown />

              <div onClick={() => router.push("/profile")} className="cursor-pointer hidden lg:flex  flex-col items-center ">
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
                      stroke-width="13.5563"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M61.2109 142.663V101.994C61.2109 98.3984 62.6392 94.9504 65.1815 92.4081C67.7238 89.8658 71.1719 88.4375 74.7672 88.4375H88.3235C90.5264 88.4375 92.6006 88.9594 94.4374 89.8948M108.658 149.441C108.658 149.441 108.658 135.885 128.992 122.328"
                      stroke="#404040"
                      stroke-width="13.5563"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M128.991 142.661C123.598 142.661 118.426 140.519 114.612 136.705C110.799 132.892 108.656 127.72 108.656 122.327C108.656 116.934 110.799 111.761 114.612 107.948C118.426 104.135 123.598 101.992 128.991 101.992H149.325V122.327C149.325 127.72 147.183 132.892 143.369 136.705C139.556 140.519 134.384 142.661 128.991 142.661Z"
                      stroke="#404040"
                      stroke-width="13.5563"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {/* <span className="absolute -top-[3px] -right-1 flex items-center justify-center w-[16px] h-[16px] bg-red-600 text-[10px] rounded-full text-white">
                    3
                  </span> */}
                </div>
                <p className="text-black text-xs">Account</p>
              </div>
              <UserDropdown />
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <div className="border lg:hidden block ml-2 border-black p-1 cursor-pointer">
                  <VscMenu size={21} />
                </div>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-64  sm:w-72 p-4 bg-white text-gray-800 overflow-y-auto shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-2 mt-5 text-base">
                    <li>
                      <a
                        onClick={() => router.push("/")}
                        className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 font-medium"
                      >
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => router.push("/")}
                        className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 font-medium"
                      >
                        <span>Messages</span>
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => router.push("/")}
                        className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 font-medium"
                      >
                        <span>Notofications</span>
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => router.push("/")}
                        className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 font-medium"
                      >
                        <span>Account</span>
                      </a>
                    </li>

                    {/* <li>
                      <button
                        onClick={() => setOpenBlog(!openBlog)}
                        className="flex items-center justify-between w-full px-2 py-2 rounded-md hover:bg-gray-100 font-medium"
                      >
                        <span>Blog</span>
                        <CaretDown
                          size={16}
                          className={`transition-transform ${
                            openBlog ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openBlog && (
                        <ul className="pl-4 border-l border-gray-200 mt-1 space-y-1">
                          <li>
                            <a
                              href="/dashboard/blog-grid"
                              className="block px-2 py-1 hover:bg-gray-50 rounded"
                            >
                              Blog Grid
                            </a>
                          </li>
                          <li>
                            <a
                              href="/dashboard/blog-list"
                              className="block px-2 py-1 hover:bg-gray-50 rounded"
                            >
                              Blog List
                            </a>
                          </li>
                          <li>
                            <a
                              href="/dashboard/blog-detail"
                              className="block px-2 py-1 hover:bg-gray-50 rounded"
                            >
                              Blog Detail
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <button
                        onClick={() => setOpenStore(!openStore)}
                        className="flex items-center justify-between w-full px-2 py-2 rounded-md hover:bg-gray-100 font-medium"
                      >
                        <span>Store</span>
                        <CaretDown
                          size={16}
                          className={`transition-transform ${
                            openStore ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openStore && (
                        <ul className="pl-4 border-l border-gray-200 mt-1 space-y-1">
                          <li>
                            <a
                              href="/dashboard/store-category-grid"
                              className="block px-2 py-1 hover:bg-gray-50 rounded"
                            >
                              Category Grid
                            </a>
                          </li>
                          <li>
                            <a
                              href="/dashboard/store-category-list"
                              className="block px-2 py-1 hover:bg-gray-50 rounded"
                            >
                              Category List
                            </a>
                          </li>
                          <li>
                            <a
                              href="/dashboard/store-detail"
                              className="block px-2 py-1 hover:bg-gray-50 rounded"
                            >
                              Store Detail
                            </a>
                          </li>
                          <li>
                            <a
                              href="/dashboard/product-detail"
                              className="block px-2 py-1 hover:bg-gray-50 rounded"
                            >
                              Product Detail
                            </a>
                          </li>
                          <li>
                            <a
                              href="/dashboard/store-checkout"
                              className="block px-2 py-1 hover:bg-gray-50 rounded"
                            >
                              Checkout
                            </a>
                          </li>
                        </ul>
                      )}
                    </li> */}
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

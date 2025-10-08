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

  const [openBlog, setOpenBlog] = useState(false);
  const [openStore, setOpenStore] = useState(false);

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
    <nav className="nav iq-navbar shadow-sm bg-white text-gray-800 xl:flex xl:flex-row py-2 lg:p-0">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 navbar-inner">
        <div className="flex items-center justify-between w-2/6">
          <div
            onClick={() => router.push("/")}
            className="flex items-center relative pb-2 lg:pb-0"
          >
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
          <div className="flex items-center justify-between product-offcanvas menu-toggle">
            <div className="hidden xl:block">
              <ul className="iq-nav-menu list-none">
                <li className="nav-item">
                  <a
                    className="nav-link menu-arrow items-center gap-1 justify-start active"
                    href="/"
                  >
                    <span className="nav-text ">Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu-arrow items-center gap-1 justify-start"
                    data-bs-toggle="collapse"
                    href="#blogData"
                    role="button"
                    aria-expanded="false"
                    aria-controls="blogData"
                  >
                    <span className="nav-text">Blog</span>
                    <span className="dropdown-arrow">
                      <i className="ph ph-caret-down align-middle"></i>
                    </span>
                  </a>
                  <ul
                    className="iq-header-sub-menu list-none hidden shadow"
                    id="blogData"
                  >
                    <li className="nav-item">
                      <a className="nav-link" href="./dashboard/blog-grid.html">
                        Blog Grid
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./dashboard/blog-list.html">
                        Blog List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="./dashboard/blog-detail.html"
                      >
                        Blog Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu-arrow items-center gap-1 justify-start"
                    data-bs-toggle="collapse"
                    href="#storeData"
                    role="button"
                    aria-expanded="false"
                    aria-controls="storeData"
                  >
                    <span className="nav-text">Store</span>
                    <span className="dropdown-arrow">
                      <i className="ph ph-caret-down align-middle"></i>
                    </span>
                  </a>
                  <ul
                    className="iq-header-sub-menu list-none hidden shadow"
                    id="storeData"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="./dashboard/store-category-grid.html"
                      >
                        Category Grid
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="./dashboard/store-category-list.html"
                      >
                        Category List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="./dashboard/store-detail.html"
                      >
                        Store Detail
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="./dashboard/product-detail.html"
                      >
                        Product Detail
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="./dashboard/store-checkout.html"
                      >
                        Checkout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <ul className="navbar-nav navbar-list flex items-center flex-row">
            <div className="flex items-center gap-2.5">
              <GroupDropdown />
              <MessageDropdown />
              <NotificationDropdown />
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
                    </li>
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

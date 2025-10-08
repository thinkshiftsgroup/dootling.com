"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Plus, Users, X } from "phosphor-react";

export default function GroupDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li className="relative hidden lg:block list-none" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center pb-0.5 relative focus:outline-none"
      >
        <span className="relative flex items-center justify-between">
          <Users size={25} className="text-[#7e8b9a]" />
          <span className="absolute -top-[3px] -right-1 flex items-center justify-center w-[16px] h-[16px] bg-red-600 text-[10px] rounded-full text-white">
            3
          </span>
        </span>
      </button>

      <div
        className={`absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-lg transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-2"
        }`}
      >
        <div className="border-b border-gray-200 px-4 py-3">
          <h5 className="font-semibold text-gray-800">Friend Request</h5>
        </div>

        <div className="p-3 max-h-[360px] overflow-y-auto">
          {friendRequests.map((user, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between mb-4 last:mb-0`}
            >
              <div className="flex items-center">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ms-3">
                  <h6 className="font-medium text-gray-900 leading-tight">
                    {user.name}
                  </h6>
                  <p className="text-gray-500 text-sm">
                    {user.friends} friends
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="rounded bg-blue-100 hover:bg-blue-200 text-blue-600 border-0 p-1.5 flex justify-center items-center transition">
                  <Plus size={18} weight="bold" />
                </button>
                <button className="rounded bg-red-100 hover:bg-red-200 text-red-600 border-0 p-1.5 flex justify-center items-center transition">
                  <X size={18} weight="bold" />
                </button>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <button
              type="button"
              className="bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700 transition"
            >
              View More Request
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

const friendRequests = [
  {
    name: "Jaques Amole",
    friends: 40,
    image: "/images/user/01.jpg",
  },
  {
    name: "Lucy Tania",
    friends: 12,
    image: "/images/user/02.jpg",
  },
  {
    name: "Manny Petty",
    friends: 3,
    image: "/images/user/03.jpg",
  },
  {
    name: "Marsha Mello",
    friends: 15,
    image: "/images/user/04.jpg",
  },
];

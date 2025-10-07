"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { X } from "lucide-react";

export default function SearchBar() {
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const recent = [
    { name: "Paige Turner", username: "Paige001", img: "/images/page-img/19.jpg", online: true },
    { name: "Monty Carlo", username: "Carlo.m", img: "/images/page-img/18.jpg", online: true },
    { name: "Paul Molive", username: "Paul.45", img: "/images/page-img/20.jpg", online: false },
  ];

  const suggestions = [
    { name: "Annette Black", sub: "Followed by Jerome_bell + 2 more", img: "/images/user/06.jpg" },
    { name: "Ellyse Perry", sub: "Followed by _@rina", img: "/images/user/08.jpg" },
    { name: "Pete Sariya", sub: "Followed by chris_18 + 5 more", img: "/images/user/15.jpg" },
    { name: "Aman Verma", sub: "Followed by Jerome_bell and _@rina", img: "/images/user/13.jpg" },
  ];

  return (
    <div ref={searchRef} className="relative hidden lg:block w-full max-w-md">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2 bg-gray-100 rounded iq-search-bar px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400"
      >
        <HiMagnifyingGlass className="text-2xl text-gray-500" />
        <input
          type="text"
          placeholder="Search for people or groups..."
          onFocus={() => setShowResults(true)}
          className="w-full border-none bg-gray-100 text-xs outline-none placeholder:text-[#7E8B9A]"
        />
      </form>

      {showResults && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-100 z-50">
          <div className="flex items-center justify-between p-3 border-b">
            <h5 className="text-lg font-semibold">Recent</h5>
            <button className="text-sm text-gray-700 hover:text-blue-600 transition">
              Clear All
            </button>
          </div>

          {recent.map((user, i) => (
            <div
              key={i}
              className="flex items-center py-2 px-3 hover:bg-gray-50 cursor-pointer transition"
            >
              <div className="flex-shrink-0">
                <Image
                  src={user.img}
                  alt={user.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex ms-3 w-full justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-base font-semibold">{user.name}</span>
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        user.online ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                  </div>
                  <span className="text-sm text-gray-500">{user.username}</span>
                </div>
                <button>
                  <X size={16} className="text-gray-500 hover:text-red-500 transition" />
                </button>
              </div>
            </div>
          ))}

          <div className="py-2 px-3 border-t">
            <h5 className="text-lg font-semibold">Suggestion</h5>
          </div>

          {suggestions.map((user, i) => (
            <div
              key={i}
              className="flex items-center py-2 px-3 hover:bg-gray-50 cursor-pointer transition"
            >
              <div className="flex-shrink-0">
                <Image
                  src={user.img}
                  alt={user.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex ms-3 w-full justify-between">
                <div className="flex flex-col">
                  <span className="text-base font-semibold">{user.name}</span>
                  <span className="text-sm text-gray-500">{user.sub}</span>
                </div>
                <button>
                  <X size={16} className="text-gray-500 hover:text-red-500 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

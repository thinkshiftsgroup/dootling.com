"use client";

import React, { useState } from "react";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import { Checkbox } from "@/components/ui/checkbox";

const ProfileSetting = () => {
  const [languages, setLanguages] = useState<string[]>([]);
  const toggleLanguage = (lang: string) => {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="lg:grid block grid-cols-2 gap-4">
          <div className="bg-white rounded-lg ">
            <div className="px-6 py-4 flex items-center justify-between">
              <h4 className="text-lg font-semibold text-[#2b2d4a]">
                Account Setting
              </h4>
            </div>

            <div className="p-6">
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="uname"
                    className="block text-sm font-medium text-[#8e8b9a] mb-1"
                  >
                    User Name:
                  </label>
                  <input
                    type="text"
                    id="uname"
                    defaultValue="Bni@01"
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#2b2d4a] focus:outline-none focus:ring-2 focus:ring-[#50b5ff]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#8e8b9a] mb-1"
                  >
                    Email Id:
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="Bnijohn@gmail.com"
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#2b2d4a] focus:outline-none focus:ring-2 focus:ring-[#50b5ff]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="altemail"
                    className="block text-sm font-medium text-[#8e8b9a] mb-1"
                  >
                    Alternate Email:
                  </label>
                  <input
                    type="email"
                    id="altemail"
                    defaultValue="designtheme@gmail.com"
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#2b2d4a] focus:outline-none focus:ring-2 focus:ring-[#50b5ff]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#8e8b9a] mb-1">
                    Language Known:
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {[
                      "English",
                      "French",
                      "Hindi",
                      "Spanish",
                      "Arabic",
                      "Italian",
                    ].map((lang) => (
                      <div
                        key={lang}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Checkbox
                          id={lang.toLowerCase()}
                          checked={languages.includes(lang)}
                          onCheckedChange={() => toggleLanguage(lang)}
                          className="border-gray-300 data-[state=checked]:bg-[#50b5ff] data-[state=checked]:border-[#50b5ff]"
                        />
                        <label
                          htmlFor={lang.toLowerCase()}
                          className="text-[#8e8b9a]"
                        >
                          {lang}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="bg-[#50b5ff] text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-[#3da6f2] transition"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="bg-red-50 text-red-600 px-4 py-2 rounded-sm text-sm font-medium hover:bg-red-100 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg ">
            <div className="px-6 py-4 flex items-center justify-between">
              <h4 className="text-lg font-semibold text-[#2b2d4a]">
                Social Media
              </h4>
            </div>

            <div className="p-6">
              <form className="space-y-5">
                {[
                  { label: "Facebook", value: "www.facebook.com" },
                  { label: "Twitter", value: "www.twitter.com" },
                  { label: "Google +", value: "www.google.com" },
                  { label: "Instagram", value: "www.instagram.com" },
                  { label: "YouTube", value: "www.youtube.com" },
                ].map((field) => (
                  <div key={field.label}>
                    <label
                      htmlFor={field.label.toLowerCase()}
                      className="block text-sm font-medium text-[#8e8b9a] mb-1"
                    >
                      {field.label}:
                    </label>
                    <input
                      type="text"
                      id={field.label.toLowerCase()}
                      defaultValue={field.value}
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-[#2b2d4a] focus:outline-none focus:ring-2 focus:ring-[#50b5ff]"
                    />
                  </div>
                ))}

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="bg-[#50b5ff] text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-[#3da6f2] transition"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="bg-red-50 text-red-600 px-4 py-2 rounded-sm text-sm font-medium hover:bg-red-100 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;

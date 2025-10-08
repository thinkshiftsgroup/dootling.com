"use client"
import React from "react";
import { Footer } from "@/components/main/landing-page/footer";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import ActiveUsers from "@/components/main/landing-page/sidebar/activeUsers";
import Suggestions from "@/components/main/landing-page/sidebar/suggestions";
import Image from "next/image";
import ContributionHeatmap from "@/components/main/landing-page/heatMap";

const Profile = () => {
  const galleryImages = [
    "g1.jpg",
    "g2.jpg",
    "g3.jpg",
    "g4.jpg",
    "g5.jpg",
    "g6.jpg",
    "g7.jpg",
    "g8.jpg",
    "g9.jpg",
  ];

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <div className="relative">
          <div>
            <div className="relative"></div>
            <div className="content-inner " id="page_layout">
              <div className="w-full max-w-[1450px]  mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/8 px-4">
                    <div className="w-full  mx-auto px-4">
                      <div className="w-full h-[27rem] rounded-lg bg-white shadow-md">
                        <div className="max-w-7xl mx-auto px-4 pt-[20px]">
                          <div className="relative">
                            <div className="flex justify-between items-center mb-4">
                              <h2 className="text-black text-xl font-medium">1,193 contributions in the last year</h2>

                            </div>

                            <ContributionHeatmap />
                            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
                              <div className="flex items-center justify-between">
                                {/* Left - Profile Image and Info */}
                                <div className="flex items-center gap-6">
                                  <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                                    alt="Profile"
                                    className="w-28 h-28 rounded-lg object-cover"
                                  />

                                  <div>
                                    <h1 className="text-3xl font-bold">John Paul 👨‍💻</h1>
                                    <p className="text-gray-600 mt-1">MERN Stack Developer</p>
                                    <p className="text-gray-500 text-sm">Lagos, Nigeria</p>
                                  </div>
                                </div>

                                {/* Right - Stats and Button */}
                                <div className="flex items-center gap-8">
                                  <div className="text-center">
                                    <p className="text-3xl font-bold">444</p>
                                    <p className="text-gray-600 text-sm">Endorsements</p>
                                  </div>

                                  <div className="text-center">
                                    <p className="text-3xl font-bold">5</p>
                                    <p className="text-gray-600 text-sm">Projects</p>
                                  </div>

                                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                                    Message
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-full lg:w-2/8 px-4">
                    <ActiveUsers />
                    <Suggestions />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;

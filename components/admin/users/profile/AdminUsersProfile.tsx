"use client";
import React, { useRef, useState } from "react";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import Image from "next/image";
import ContributionHeatmap from "@/components/main/landing-page/heatMap";
import { FiUsers } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuArrowUpToLine } from "react-icons/lu";
import InReactionModal from "@/components/main/landing-page/in/inReactionModal";
import ProfileFeeds from "@/components/main/profile/feeds";
import SimilarProfiles from "@/components/main/profile/side-card/similarProfiles";
import TrendingProjects from "@/components/main/profile/side-card/tredingProjects";
import TrendingSpaces from "@/components/main/profile/side-card/trendingSpaces";
import ReferralSideTab from "@/components/main/profile/side-card/referralSideTab";
import ProjectDashboard from "@/components/main/profile/project/projects";
import ProfileSpace from "@/components/main/space/profileSpace";
import FollowedTab from "@/components/main/profile/followed";
import ProfileAbout from "@/components/main/profile/about/about";
import TopContributorsTab from "@/components/main/profile/topContributors/topContributors";
import { useRoleStore } from "@/stores/userRoleStore";

const AdminUserProfile = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [openLikesModal, setOpenLikesModal] = useState(false);

  const { role, setRole, isAdmin } = useRoleStore();

  const [activeTab, setActiveTab] = useState("Feeds");

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const items = [
    {
      icon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 20 20"
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
        >
          <path
            fill="currentColor"
            d="M5.5 7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M5 10a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 5 10m.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM4 17h8.469c.65.02 1.313-.362 1.502-1.177L14.394 14H16.5a1.5 1.5 0 0 0 1.5-1.5V7.582c0-.983-.751-1.56-1.516-1.582H12V4.5A1.5 1.5 0 0 0 10.5 3h-7A1.5 1.5 0 0 0 2 4.5V15a2 2 0 0 0 2 2M3 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v10.982q.002.285.08.518H4a1 1 0 0 1-1-1zM16.5 13h-1.873l1.287-5.542c.148-.638 1.086-.53 1.086.124V12.5a.5.5 0 0 1-.5.5M12 7h3.01q-.04.11-.07.231l-1.943 8.366c-.136.585-.997.486-.997-.115z"
          ></path>
        </svg>
      ),
      label: "Feeds",
    },
    {
      icon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 32 32"
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
        >
          <path
            fill="currentColor"
            d="M30 18H20v6.468a5.02 5.02 0 0 0 2.861 4.52L25 30l2.139-1.013A5.02 5.02 0 0 0 30 24.467zm-5 9.786l-1.283-.607A3.01 3.01 0 0 1 22 24.468V20h6v4.468a3.01 3.01 0 0 1-1.717 2.71zM17 18H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12v-2H5v-5h12zM27 4h-5a2 2 0 0 0-2 2v9h2V6h5v9h2V6a2 2 0 0 0-2-2M15 4H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M5 13V6h10v7z"
          />
        </svg>
      ),
      label: "Projects",
    },
    {
      icon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 24 24"
          className={` font-bold ${
            isActive ? "text-white" : "text-[#157BFF]/50"
          }`}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            d="M18.385 9.083V8.07q.717.15 1.45.328q.732.178 1.524.378q.324.08.5.351q.177.27.122.593l-1.466 7.962q-.106.59-.553.953T18.925 19H5.152q-.59 0-1.025-.373t-.54-.944L2.025 9.72q-.056-.323.118-.605q.174-.283.498-.364q.734-.2 1.428-.356t1.373-.287V9.12l-1.188.251q-.6.126-1.22.278L4.46 17.5q.038.212.22.356t.395.144h13.85q.212 0 .394-.144t.222-.356l1.425-7.85q-.658-.171-1.306-.307t-1.275-.26M16 9.065q0-.427-.125-.829t-.394-.728q-.39-.506-.63-1.098q-.24-.59-.24-1.226q0-.401.105-.782q.105-.38.309-.74l.152-.27q.09-.177.291-.233q.201-.055.378.035t.233.289t-.035.375l-.177.294q-.13.244-.202.52t-.073.551q0 .427.154.82q.154.391.423.718q.41.468.62 1.05q.211.581.211 1.197q0 .42-.095.811q-.096.39-.26.77l-.159.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l-.152-.313q.112-.264.167-.53T16 9.066m-3.892 0q0-.428-.125-.83t-.395-.728q-.39-.506-.63-1.098q-.239-.59-.239-1.226q0-.401.105-.782t.309-.74l.151-.27q.091-.176.292-.232t.378.034t.232.289t-.034.375l-.177.294q-.13.244-.203.51q-.072.267-.072.542q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.094.811q-.096.39-.261.77l-.158.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.111-.264.167-.53t.056-.541m-3.887-.02q0-.427-.128-.819q-.127-.392-.397-.72q-.41-.486-.64-1.077q-.229-.591-.229-1.226q0-.402.102-.792t.312-.75l.157-.27q.09-.176.292-.232q.2-.056.377.034t.233.289t-.034.375l-.177.294q-.131.239-.206.508t-.075.544q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.095.811q-.095.39-.26.77l-.152.326q-.09.177-.292.233q-.2.056-.377-.034q-.177-.091-.233-.289t.035-.375l.157-.313q.112-.264.168-.54q.055-.276.055-.55"
          />
        </svg>
      ),
      label: "Heatmap",
    },
    {
      icon: (isActive: boolean) => (
        <FiUsers
          size={30}
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
        />
      ),
      label: "Links",
    },
    {
      icon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 512 512"
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M176 416v64M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32m240 160h112a32 32 0 0 1 32 32v256h0h-160h0V208a16 16 0 0 1 16-16"
          ></path>
          <path
            fill="currentColor"
            d="M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79"
          ></path>
        </svg>
      ),
      label: "Spaces",
    },
    {
      icon: (isActive: boolean) => (
        <svg
          width={30}
          height={30}
          viewBox="0 0 163 163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-colors duration-200 ${
            isActive ? "text-white" : "text-[#157BFF]/50"
          }`}
          stroke="currentColor"
          style={{
            color: isActive ? "#ffffff" : "#157BFF80",
          }}
        >
          <path
            d="M0 135.562H162.676M0 157.252H162.676M27.1126 43.3795V27.112H43.3802M119.295 27.112H135.563V43.3795M27.1126 75.9146V92.1822H43.3802M119.295 92.1822H135.563V75.9146M81.3378 81.3372C75.5852 81.3372 70.0683 79.052 66.0006 74.9843C61.9329 70.9166 59.6477 65.3996 59.6477 59.6471C59.6477 53.8945 61.9329 48.3776 66.0006 44.3099C70.0683 40.2422 75.5852 37.957 81.3378 37.957C87.0904 37.957 92.6073 40.2422 96.675 44.3099C100.743 48.3776 103.028 53.8945 103.028 59.6471C103.028 65.3996 100.743 70.9166 96.675 74.9843C92.6073 79.052 87.0904 81.3372 81.3378 81.3372ZM16.2676 5.42188H146.408C149.284 5.42188 152.043 6.56447 154.077 8.59831C156.11 10.6322 157.253 13.3906 157.253 16.2669V103.027C157.253 105.904 156.11 108.662 154.077 110.696C152.043 112.73 149.284 113.872 146.408 113.872H16.2676C13.3913 113.872 10.6328 112.73 8.59896 110.696C6.56512 108.662 5.42252 105.904 5.42252 103.027V16.2669C5.42252 13.3906 6.56512 10.6322 8.59896 8.59831C10.6328 6.56447 13.3913 5.42188 16.2676 5.42188Z"
            stroke="currentColor"
            strokeWidth="10.845"
          />
        </svg>
      ),
      label: "Finance",
    },
    {
      icon: (isActive: boolean) => (
        <svg
          width="30"
          height="30"
          viewBox="0 0 292 263"
          fill="none"
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M146.519 199.166L130.097 215.588C107.257 238.428 70.0932 238.428 47.2524 215.588C24.4124 192.748 24.4124 155.584 47.2524 132.743L63.6745 116.322L42.9633 95.6106L26.5412 112.032C-7.77414 146.347 -7.77414 201.984 26.5412 236.3C60.8565 270.616 116.493 270.615 150.809 236.3L167.23 219.877L146.519 199.166ZM203.322 30.2284H174.032V59.518H203.322C235.624 59.518 261.903 85.7966 261.903 118.099C261.903 150.4 235.624 176.678 203.322 176.678H174.032V205.969H203.322C251.852 205.969 291.192 166.628 291.192 118.099C291.192 69.5695 251.852 30.2284 203.322 30.2284ZM115.452 74.1628V0.9375H144.742V74.1628H115.452ZM87.2676 99.7268L35.4902 47.9494L56.2015 27.2381L107.979 79.0155L87.2676 99.7268ZM101.742 131.497L74.4462 167.891L97.878 185.465L132.228 139.666L101.742 131.497ZM145.89 132.743H203.322V103.454H153.739L145.89 132.743Z"
            fill={`${isActive ? "white" : "#157BFF80"}`}
          />
        </svg>
      ),
      label: "Paylink",
    },
    {
      icon: (isActive: boolean) => (
        <HiOutlineNewspaper
          size={30}
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
        />
      ),
      label: "Account",
    },
    {
      icon: (isActive: boolean) => (
        <svg
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
          width="30"
          height="30"
          viewBox="0 0 343 342"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M286.849 0.0234375C301.574 0.0234375 315.696 5.87294 326.108 16.2851C336.52 26.6973 342.37 40.8192 342.37 55.5443V252.003C342.37 266.728 336.52 280.85 326.108 291.262C315.696 301.674 301.574 307.523 286.849 307.523H201.603C204.439 300.998 205.771 294.079 205.771 287.246C205.771 285.435 205.658 283.652 205.43 281.898H286.849C294.778 281.898 302.382 278.749 307.988 273.142C313.595 267.536 316.745 259.931 316.745 252.003V55.5443C316.745 47.6154 313.595 40.0113 307.988 34.4047C302.382 28.7982 294.778 25.6484 286.849 25.6484H90.3906C82.4618 25.6484 74.8576 28.7982 69.2511 34.4047C63.6445 40.0113 60.4948 47.6154 60.4948 55.5443V145.403C51.3731 146.062 42.5625 148.998 34.8698 153.944V55.5443C34.8698 40.8192 40.7193 26.6973 51.1315 16.2851C61.5436 5.87294 75.6656 0.0234375 90.3906 0.0234375H286.849ZM184.349 51.2734C187.445 51.2736 190.436 52.3948 192.77 54.4299C195.103 56.4649 196.621 59.2761 197.042 62.3434L197.161 64.0859V153.773H261.19C264.436 153.774 267.561 155.008 269.933 157.224C272.305 159.44 273.747 162.474 273.969 165.713C274.19 168.951 273.173 172.153 271.125 174.671C269.076 177.19 266.148 178.836 262.932 179.279L261.19 179.398H184.349C181.253 179.398 178.261 178.277 175.928 176.242C173.595 174.207 172.077 171.396 171.656 168.328L171.536 166.586V64.0859C171.536 60.6879 172.886 57.4289 175.289 55.0261C177.692 52.6233 180.951 51.2734 184.349 51.2734ZM64.7656 239.19C74.9599 239.19 84.7366 235.14 91.945 227.932C99.1535 220.724 103.203 210.947 103.203 200.753C103.203 190.558 99.1535 180.782 91.945 173.573C84.7366 166.365 74.9599 162.315 64.7656 162.315C54.5714 162.315 44.7946 166.365 37.5862 173.573C30.3778 180.782 26.3281 190.558 26.3281 200.753C26.3281 210.947 30.3778 220.724 37.5862 227.932C44.7946 235.14 54.5714 239.19 64.7656 239.19ZM64.7656 341.69C110.532 341.69 128.828 314.886 128.828 288.305C128.828 270.623 116.528 256.273 101.375 256.273H28.156C13.0031 256.273 0.703125 270.623 0.703125 288.305C0.703125 314.989 18.9994 341.69 64.7656 341.69ZM180.078 217.836C180.078 225.765 176.928 233.369 171.322 238.975C165.715 244.582 158.111 247.732 150.182 247.732C142.253 247.732 134.649 244.582 129.043 238.975C123.436 233.369 120.286 225.765 120.286 217.836C120.286 209.907 123.436 202.303 129.043 196.696C134.649 191.09 142.253 187.94 150.182 187.94C158.111 187.94 165.715 191.09 171.322 196.696C176.928 202.303 180.078 209.907 180.078 217.836ZM135.935 324.607C142.836 313.332 145.877 300.605 145.877 288.305C145.862 280.161 143.992 272.129 140.411 264.815H166.719C178.848 264.815 188.688 274.86 188.688 287.246C188.688 305.866 174.048 324.607 137.438 324.607H135.935Z"
            fill="currentColor"
          />
        </svg>
      ),
      label: "Dootime",
    },
    {
      icon: (isActive: boolean) => (
        <LuArrowUpToLine
          size={30}
          className={`${isActive ? "text-white" : "text-[#157BFF]/50"}`}
        />
      ),
      label: "Top Contributors",
    },
  ];

  const myProjects = [
    {
      id: 1,
      imageSrc: "/images/project.png",
      isPrivate: true,
      projectName: "E-commerce App",
      collaborators: 12,
      createdDate: "10/15/2025",
    },
    {
      id: 2,
      imageSrc: "/images/project.png",
      isPrivate: false,
      projectName: "Mobile App",
      collaborators: 5,
      createdDate: "09/20/2025",
    },
  ];

  return (
    <div>
      <main className="main-content">
        <div className="relative">
          <div>
            <div className="content-inner " id="page_layout">
              <div className="container mx-auto">
                <div className="">
                  <div className="w-full ">
                    <div className="w-full  mx-auto">
                      <div className="w-full h-[23.5rem]  rounded-lg bg-white shadow-md">
                        <div className="max-w-7xl mx-auto px-4 pt-[20px]">
                          <div className="relative">
                            <div className="flex justify-between items-center mb-4">
                              <h2 className="text-black text-xl flex items-center gap-1.5 font-medium">
                                1,193 contributions in the last year
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 92 92"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_3108_3780)">
                                    <path
                                      d="M0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0L80.5 0C83.55 0 86.4751 1.2116 88.6317 3.36827C90.7884 5.52494 92 8.45001 92 11.5V80.5C92 83.55 90.7884 86.4751 88.6317 88.6317C86.4751 90.7884 83.55 92 80.5 92H11.5C8.45001 92 5.52494 90.7884 3.36827 88.6317C1.2116 86.4751 0 83.55 0 80.5V11.5ZM51.3475 37.881L38.18 39.5312L37.7085 41.7163L40.296 42.1935C41.9865 42.596 42.32 43.2055 41.952 44.8903L37.7085 64.8312C36.593 69.989 38.3123 72.4155 42.3545 72.4155C45.4883 72.4155 49.128 70.9665 50.7783 68.977L51.2842 66.585C50.1342 67.597 48.4552 67.9995 47.3397 67.9995C45.7585 67.9995 45.1835 66.8897 45.5918 64.9348L51.3475 37.881ZM46 31.625C47.525 31.625 48.9875 31.0192 50.0659 29.9409C51.1442 28.8625 51.75 27.4 51.75 25.875C51.75 24.35 51.1442 22.8875 50.0659 21.8091C48.9875 20.7308 47.525 20.125 46 20.125C44.475 20.125 43.0125 20.7308 41.9341 21.8091C40.8558 22.8875 40.25 24.35 40.25 25.875C40.25 27.4 40.8558 28.8625 41.9341 29.9409C43.0125 31.0192 44.475 31.625 46 31.625Z"
                                      fill="#B3DBFF"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_3108_3780">
                                      <rect
                                        width="92"
                                        height="92"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </h2>
                            </div>

                            <ContributionHeatmap />
                            <div className="max-w-5xl -mt-2 relative mx-auto  bg-white p-2">
                              <div className="flex items-start justify-between">
                                <div className="flex gap-6">
                                  <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                                    alt="Profile"
                                    className="w-28 h-28 rounded-lg object-cover"
                                  />

                                  <div>
                                    <h1 className="text-3xl flex mt-1.5 items-center gap-1 font-bold text-black">
                                      John Paul{" "}
                                      <Image
                                        src="/images/icon/verified.svg"
                                        alt="icon"
                                        width={14}
                                        height={14}
                                      />
                                    </h1>
                                    <span className="flex font-normal items-center gap-2">
                                      <p className=" text-xs text-[#FAAF40] mt-1">
                                        Director in Technology
                                      </p>
                                      <Image
                                        src="/images/icon/iwwa_map.svg"
                                        alt="icon"
                                        width={16}
                                        height={16}
                                      />
                                      <p className=" text-xs text-[#979797] mt-1">
                                        United Kingdom
                                      </p>
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-start justify-between h-28">
                                  <div className="flex text-black items-center mt-1.5 gap-8">
                                    <div className="text-center">
                                      <p className="text-[20px] font-bold">
                                        444
                                      </p>
                                      <p className="text-gray-600 text-sm">
                                        Endorsements
                                      </p>
                                    </div>

                                    <div className="text-center">
                                      <p className="text-[20px] font-bold">5</p>
                                      <p className="text-gray-600 text-sm">
                                        Projects
                                      </p>
                                    </div>

                                    <div className="text-center">
                                      <p className="text-[20px] font-bold">
                                        12
                                      </p>
                                      <p className="text-gray-600 text-sm">
                                        Streaks
                                      </p>
                                    </div>
                                  </div>
                                </div>

                               {isAdmin() ? <button className="bg-blue-500 mt-3 cursor-pointer hover:bg-blue-600 text-white px-2 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]">
                                  Message
                                  <Image
                                    src="/images/icon/message-01.svg"
                                    alt="icon"
                                    width={20}
                                    height={20}
                                  />
                                </button>: ""}
                              </div>

                              <span className="flex flex-wrap items-center gap-1.5 -mt-[2rem] text-xs ms-[8.5rem]">
                                <p className="text-[#b1afaf] text-sm border border-[#e3e0e0] rounded p-0.5">
                                  #Advocate
                                </p>
                                <p className="text-[#b1afaf] text-sm border border-[#e3e0e0] rounded p-0.5">
                                  Engineering With Precision
                                </p>
                                <p className="text-[#b1afaf] text-sm border border-[#e3e0e0] rounded p-0.5">
                                  Havard Graduate
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative my-6">
                        <button
                          onClick={() => scroll("left")}
                          className=" bg-white rounded-full flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 group "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 24 24"
                            className="text-gray-500 "
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="m14 7l-5 5l5 5"
                            />
                          </svg>
                        </button>

                        <button
                          onClick={() => scroll("right")}
                          className=" bg-white rounded-full flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 group "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 24 24"
                            className="text-gray-500 "
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="m10 17l5-5l-5-5"
                            />
                          </svg>
                        </button>

                        <div
                          ref={scrollRef}
                          className="
                            relative flex items-center gap-4 
                            bg-white rounded-xl shadow-sm
                            px-4 sm:!px-6 py-4
                            overflow-x-auto hide-scrollbar scroll-smooth
                            md:!justify-center
                          "
                        >
                          {items.map((item, idx) => {
                            const isActive = activeTab === item.label;
                            return (
                              <div
                                key={idx}
                                onClick={() => setActiveTab(item.label)}
                                className="relative cursor-pointer flex flex-col items-center w-[70px] sm:w-[80px]"
                              >
                                <div
                                  className={`${
                                    isActive
                                      ? "bg-[#157BFF]"
                                      : "bg-[#157BFF]/10"
                                  } w-[55px] sm:w-[60px] h-[55px] sm:h-[60px] flex justify-center items-center rounded-xl transition-all duration-200`}
                                >
                                  <span className="transition-colors duration-200">
                                    {typeof item.icon === "function"
                                      ? item.icon(isActive)
                                      : item.icon}
                                  </span>
                                </div>

                                <p
                                  className={`${
                                    isActive
                                      ? "text-[#157BFF]"
                                      : "text-gray-500"
                                  } font-semibold whitespace-nowrap text-center mt-2 text-[10px] sm:text-xs transition-colors duration-200`}
                                >
                                  {item.label}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mt-6">
                        {activeTab === "Feeds" && <ProfileFeeds />}
                        {activeTab === "Projects" && <ProjectDashboard />}
                        {activeTab === "Followed" && <FollowedTab />}
                        {activeTab === "Spaces" && (
                          <ProfileSpace Spaces={myProjects} />
                        )}
                        {activeTab === "Account" && <ProfileAbout />}
                        {activeTab === "Top Contributors" && (
                          <TopContributorsTab />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {openLikesModal && (
          <InReactionModal setOpenLikesModal={setOpenLikesModal} />
        )}
      </main>
    </div>
  );
};

export default AdminUserProfile;

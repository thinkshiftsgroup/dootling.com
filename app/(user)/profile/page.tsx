"use client";
import React, { useRef, useState, useMemo, useCallback } from "react";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import Image from "next/image";
import ContributionHeatmap from "@/components/main/landing-page/heatMap";
import { FiUsers } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuArrowUpToLine } from "react-icons/lu";
import { FaPencilAlt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import ProfileFinance from "@/components/main/profile/finance/finance";
import ProfileFeeds from "@/components/main/profile/feeds";
import FollowedTab from "@/components/main/profile/followed";
import ProfileAbout from "@/components/main/profile/about/about";
import HeatmapConnections from "@/components/main/profile/heatmap/heatMap";
import AddHeatmapModal from "@/components/main/profile/addHeatMapModal";
import ProfileSpace from "@/components/main/space/profileSpace";
import ProfileLinks from "@/components/main/profile/link/links";
import ProjectDashboard from "@/components/main/profile/project/projects";
import SimilarProfiles from "@/components/main/profile/side-card/similarProfiles";
import TrendingProjects from "@/components/main/profile/side-card/tredingProjects";
import TrendingSpaces from "@/components/main/profile/side-card/trendingSpaces";

import { ImageUpload } from "@/components/ui/image-upload";
import { useAuthStore } from "@/stores/useAuthStore";
import apiInstance from "@/api/apiInstance";
import { toast } from "sonner";
import TopContributorsTab from "@/components/main/profile/topContributors/topContributors";
import { LuCalendarFold } from "react-icons/lu";
import ReferralSideTab from "@/components/main/profile/side-card/referralSideTab";
import DootimeTab from "@/components/main/profile/dootime/dootime";
import LinkedInLoader from "@/components/main/atom/loader";

interface ImageUploadRef {
  openFileDialog: () => void;
}

interface ProfileImageUploadTriggerProps {
  userInitials: string;
  profilePhotoUrl: string | undefined;
  tempProfileImage: string[];
  handleImageUpload: (urls: string[]) => Promise<void>;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

const ProfileImageUploadTrigger = ({
  userInitials,
  profilePhotoUrl,
  tempProfileImage,
  handleImageUpload,
}: ProfileImageUploadTriggerProps) => {
  const uploadRef = useRef<ImageUploadRef | null>(null);

  return (
    <div className="relative group w-[120px] h-[120px] ">
      {profilePhotoUrl ? (
        <div className="w-[120px] h-full rounded-md bg-[#157BFF] flex items-center justify-center text-white text-7xl font-bold lg:text-8xl">
          <Image
            src={profilePhotoUrl || "/placeholder.svg"}
            alt="Profile"
            width={120}
            height={120}
            className="w-[120px] h-full rounded-md object-cover"
          />
        </div>
      ) : (
        <div className="w-[120px] h-full rounded-md bg-[#157BFF] flex items-center justify-center text-white text-7xl font-bold lg:text-8xl">
          {userInitials}
        </div>
      )}

      <div
        className="absolute inset-0 bg-black/50 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer w-[120px]"
        onClick={() => uploadRef.current?.openFileDialog()}
        title="Change Profile Photo"
      >
        <FaCamera size={24} className="text-white" />
      </div>

      <div className="hidden">
        <ImageUpload
          ref={uploadRef}
          label="Profile Photo"
          value={tempProfileImage}
          onChange={handleImageUpload}
          multiple={false}
          maxFiles={1}
        />
      </div>
    </div>
  );
};

const UserProfile = () => {
  const { user, setUser, isInitialized, token, initializeAuth } =
    useAuthStore();

  const [isLoading, setIsLoading] = useState(true);

  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string | undefined>(
    user?.profilePhotoUrl
  );

  React.useEffect(() => {
    setProfilePhotoUrl(user?.profilePhotoUrl);
  }, [user?.profilePhotoUrl]);

  React.useEffect(() => {
    if (!isInitialized) {
      console.log("-> Initializing Auth Store...");
      initializeAuth();
    }
  }, [isInitialized, initializeAuth]);

  React.useEffect(() => {
    if (isInitialized) {
      if (!user && token) {
        const fetchUserProfile = async () => {
          try {
            const response = await apiInstance.get("/api/profile");
            setUser(response.data);
            toast.success("Profile data loaded successfully.");
          } catch (error) {
            console.error("Failed to fetch user profile:", error);
            toast.error("Failed to load profile data.");
          } finally {
            setIsLoading(false);
          }
        };
        fetchUserProfile();
      } else {
        console.log("-> CONDITION NOT MET: Finishing loading.");
        setIsLoading(false);
      }
    }
  }, [isInitialized, user, token, setUser]);

  const username = user?.username || user?.firstname || "User";
  const firstname = user?.firstname || "Dootling";
  const lastname = user?.lastname || "User";
  const userInitials = useMemo(() => getInitials(username), [username]);
  const userHeadline = user?.biodata?.headline || "Software Developer";
  const userCountry = user?.biodata?.country || "United Kingdom";
  const userTags = (user?.biodata?.tags || "Advocate")
    .split(",")
    .map((tag) => tag.trim());
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("Feeds");

  const [tempProfileImage, setTempProfileImage] = useState<string[]>(
    user?.profilePhotoUrl ? [user.profilePhotoUrl] : []
  );

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

  const handleImageUpload = useCallback(
    async (urls: string[]) => {
      setTempProfileImage(urls);

      if (urls.length > 0) {
        const newUrl = urls[0];
        try {
          await apiInstance.patch(`/api/profile/photo`, {
            profilePhotoUrl: newUrl,
          });

          setUser({ ...user!, profilePhotoUrl: newUrl });
          setProfilePhotoUrl(newUrl);
          toast.success("Profile photo updated successfully! 📸");
        } catch (error) {
          toast.error("Failed to save profile photo to the server.");
          console.error("Profile photo update error:", error);
          setTempProfileImage(
            user?.profilePhotoUrl ? [user.profilePhotoUrl] : []
          );
        }
      } else {
        try {
          await apiInstance.patch(`/api/profile/photo`, {
            profilePhotoUrl: null,
          });

          setUser({ ...user!, profilePhotoUrl: undefined });
          setProfilePhotoUrl(undefined);
          toast.success("Profile photo removed.");
        } catch (error) {
          toast.error("Failed to remove profile photo.");
        }
      }
    },
    [user, setUser]
  );

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
      label: "Followed",
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
      label: "Link",
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

  if (!isInitialized || isLoading) {
    return <LinkedInLoader />;
  }

  return (
    <div>
      <Navbar />
      <main className="main-content pb-20">
        <div className="relative">
          <div>
            <div className="relative"></div>

            <div className="container mt-[1rem] md:!mt-[3rem]  mx-auto">
              <div className="lg:grid mx-2 md:!mx-0 block grid-cols-8 gap-4">
                <div className="w-full col-span-6 ">
                  <div className="w-full mx-auto">
                    <div className="w-full min-h-[20.5rem] rounded-lg bg-white shadow-md">
                      <div className="max-w-7xl mx-auto px-2 sm:px-4 pt-[20px]">
                        <div className="relative">
                          <div className="flex justify-between items-center mb-4">
                            <h2 className="text-black text-base sm:text-xl flex items-center gap-1.5 font-medium">
                              1,193 contributions in the last year
                            </h2>
                          </div>

                          <ContributionHeatmap pageType={"profile"} />
                          <div className="max-w-5xl overflow-x-scroll hide-scrollbar -mt-10 relative mx-auto bg-white p-2">
                            <div className="flex gap-2 md:gap-5 lg:flex-row flex-col items-center lg:items-start">
                              <ProfileImageUploadTrigger
                                userInitials={userInitials}
                                profilePhotoUrl={profilePhotoUrl}
                                tempProfileImage={tempProfileImage}
                                handleImageUpload={handleImageUpload}
                              />

                              <div className="flex flex-col gap-1.5">
                                <h1 className="text-3xl flex mt-1.5 items-center whitespace-nowrap font-bold text-black">
                                  {firstname} {lastname}
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 78 77"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M41.3993 12.3218C42.9567 12.7407 44.3029 13.7864 45.9402 15.0527L46.8899 15.7882C47.667 16.3862 47.8525 16.5237 48.0379 16.6228C48.2371 16.7311 48.4472 16.818 48.6647 16.8819C48.8662 16.9426 49.0932 16.9778 50.0653 17.1057L51.2581 17.256C53.3111 17.5182 54.9995 17.7325 56.3969 18.5351C57.6217 19.2386 58.6354 20.2523 59.3389 21.4771C60.1415 22.8713 60.3558 24.5629 60.618 26.6159L60.7715 27.8087C60.8962 28.7808 60.9314 29.0078 60.9922 29.2093C61.0561 29.4267 61.1414 29.6357 61.248 29.8361C61.3503 30.0215 61.4878 30.207 62.0858 30.9841L62.8213 31.9338C64.0876 33.5711 65.1333 34.9173 65.5522 36.4747C65.9188 37.8361 65.9188 39.2703 65.5522 40.6318C65.1333 42.1891 64.0876 43.5354 62.8213 45.1726L62.0858 46.1224C61.4878 46.8994 61.3503 47.0849 61.2512 47.2704C61.1424 47.4708 61.0561 47.6797 60.9922 47.8971C60.9314 48.0986 60.8962 48.3256 60.7683 49.2978L60.618 50.4905C60.3558 52.5435 60.1415 54.2319 59.3389 55.6294C58.6351 56.8525 57.6201 57.8675 56.3969 58.5713C55.0027 59.374 53.3111 59.5882 51.2581 59.8504L50.0653 60.0039C49.0932 60.1286 48.8662 60.1638 48.6647 60.2246C48.4473 60.2885 48.2383 60.3738 48.0379 60.4804C47.8525 60.5827 47.667 60.7202 46.8899 61.3182L45.9402 62.0537C44.3029 63.32 42.9567 64.3657 41.3993 64.7846C40.0379 65.1512 38.6037 65.1512 37.2422 64.7846C35.6849 64.3657 34.3386 63.32 32.7014 62.0537L31.7516 61.3182C30.9746 60.7202 30.7891 60.5827 30.6036 60.4836C30.4045 60.3753 30.1944 60.2885 29.9769 60.2246C29.7754 60.1638 29.5484 60.1286 28.5762 60.0007L27.3835 59.8504C25.3305 59.5882 23.6421 59.374 22.2446 58.5713C21.0215 57.8675 20.0065 56.8525 19.3027 55.6294C18.5 54.2351 18.2858 52.5435 18.0236 50.4905L17.8701 49.2978C17.7454 48.3256 17.7102 48.0986 17.6494 47.8971C17.5866 47.6797 17.5008 47.4696 17.3936 47.2704C17.2913 47.0849 17.1538 46.8994 16.5558 46.1224L15.8203 45.1726C14.554 43.5354 13.5083 42.1891 13.0894 40.6318C12.7228 39.2703 12.7228 37.8361 13.0894 36.4747C13.5083 34.9173 14.554 33.5711 15.8203 31.9338L16.5558 30.9841C17.1538 30.207 17.2913 30.0215 17.3904 29.8361C17.4987 29.6369 17.5855 29.4268 17.6494 29.2093C17.7102 29.0078 17.7454 28.7808 17.8733 27.8087L18.0236 26.6159C18.2858 24.5629 18.5 22.8745 19.3027 21.4771C20.0065 20.2539 21.0215 19.2389 22.2446 18.5351C23.6389 17.7325 25.3305 17.5182 27.3835 17.256L28.5762 17.1025C29.5484 16.9778 29.7754 16.9426 29.9769 16.8819C30.1943 16.819 30.4044 16.7332 30.6036 16.626C30.7891 16.5237 30.9746 16.3862 31.7516 15.7882L32.7014 15.0527C34.3386 13.7864 35.6849 12.7407 37.2422 12.3218C38.6037 11.9552 40.0379 11.9552 41.3993 12.3218ZM51.175 29.8968C50.5753 29.2973 49.7621 28.9606 48.9141 28.9606C48.0662 28.9606 47.253 29.2973 46.6533 29.8968L36.123 40.4271L31.9883 36.2924C31.3852 35.7099 30.5774 35.3876 29.739 35.3948C28.9005 35.4021 28.0985 35.7384 27.5056 36.3313C26.9127 36.9242 26.5764 37.7263 26.5691 38.5647C26.5618 39.4032 26.8841 40.2109 27.4666 40.814L33.8622 47.2096C34.4619 47.8091 35.2751 48.1459 36.123 48.1459C36.9709 48.1459 37.7842 47.8091 38.3838 47.2096L51.175 34.4185C51.7745 33.8188 52.1112 33.0056 52.1112 32.1576C52.1112 31.3097 51.7745 30.4965 51.175 29.8968Z"
                                      fill="#0088FF"
                                    />
                                  </svg>
                                </h1>

                                <span className="flex whitespace-nowrap flex-wrap lg:flex-nowrap font-normal items-center gap-1">
                                  <span className="flex gap-2 items-center">
                                    <Image
                                      src="/images/icon/iwwa_map.svg"
                                      alt="icon"
                                      width={16}
                                      height={16}
                                    />

                                    <p className=" text-xs text-[#979797]">
                                      {userCountry}
                                    </p>
                                  </span>
                                </span>

                                <span className="flex whitespace-nowrap text-sm sm:!text-xs flex-wrap items-center md:!items-start gap-1.5">
                                  {userTags.map(
                                    (tag: string, index: number) => (
                                      <p
                                        key={index}
                                        className="text-[#b1afaf] border border-[#e3e0e0] rounded p-0.5"
                                      >
                                        # {tag}
                                      </p>
                                    )
                                  )}
                                </span>
                              </div>

                              <div className="flex w-full items-start justify-center">
                                <div className="flex text-black items-center mt-1.5 gap-8">
                                  <div className="text-center">
                                    <p className="sm:text-base text-xl font-bold">
                                      444
                                    </p>
                                    <p className="text-gray-600 sm:text-xs text-sm">
                                      Endorsements
                                    </p>
                                  </div>
                                  <div className="text-center">
                                    <p className="sm:text-base text-xl font-bold">
                                      5
                                    </p>
                                    <p className="text-gray-600 sm:text-xs text-sm">
                                      Projects
                                    </p>
                                  </div>
                                  <div className="text-center">
                                    <p className="sm:text-base text-xl font-bold">
                                      12
                                    </p>
                                    <p className="text-gray-600 sm:text-xs text-sm">
                                      Streaks
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="md:!block hidden">
                                <AddHeatmapModal />
                              </div>
                            </div>
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
                            px-4 sm:px-6 py-4
                            overflow-x-auto hide-scrollbar scroll-smooth
                            md:justify-center
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
                                  isActive ? "bg-[#157BFF]" : "bg-[#157BFF]/10"
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
                                  isActive ? "text-[#157BFF]" : "text-gray-500"
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
                      {activeTab === "Account" && <ProfileAbout />}
                      {activeTab === "Finance" && <ProfileFinance />}
                      {activeTab === "Followed" && <FollowedTab />}
                      {activeTab === "Link" && <ProfileLinks />}
                      {activeTab === "Heatmap" && <HeatmapConnections />}
                      {activeTab === "Dootime" && <DootimeTab />}
                      {activeTab === "Top Contributors" && (
                        <TopContributorsTab />
                      )}
                      {activeTab === "Spaces" && (
                        <ProfileSpace Spaces={myProjects} />
                      )}
                      {activeTab === "Projects" && (
                        <ProjectDashboard projects={myProjects} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full my-4 lg:!my-0 col-span-2 ">
                  <div className="">
                    <SimilarProfiles />
                    <TrendingProjects />
                    <TrendingSpaces />
                    <ReferralSideTab />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;

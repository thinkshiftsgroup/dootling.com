"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContributionHeatmap from "../../landing-page/heatMap";
import { useFollowing } from "@/hooks/useFollow";
import { Loader2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import ConfirmationModal from "../../modal/confirmationModal";

type TabKey = "all" | "recent" | "followed" | "hometown" | "following";

const TopContributorsTab: React.FC = () => {
  const {
    similarProfiles,
    getFollowers,
    getAllContributors,
    recentContributors,
  } = useFollowing();
  console.log(recentContributors, "followers");

  const [activeTab, setActiveTab] = useState<TabKey>("recent");
  const [order, setOrder] = useState("Last Active");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs = [
    {
      key: "recent",
      label: "Recently Added",
      count: recentContributors.data?.contributors.length || 0,
    },
    {
      key: "following",
      label: "Following",
      count:
        (similarProfiles.data?.list ?? []).filter(
          (user: any) => user.isFollowing
        ).length || 0,
    },
    {
      key: "followed",
      label: "Followed",
      count: (getFollowers.data?.list ?? []).length || 0,
    },
    {
      key: "hometown",
      label: "Collaborators",
      count: getAllContributors.data?.contributors.length || 0,
    },
  ] as const;

  const activeColor = "text-black border-black";
  const inactiveColor =
    "text-gray-600 border-transparent hover:text-yellow-600";

  return (
    <div className="bg-white rounded-sm hide-scrollbar p-2 w-full overflow-scroll">
      <div className="bg-white flex flex-col md:!flex-row gap-2 items-center px-2 justify-between">
        <ul className="flex flex-wrap gap-2 items-center">
          {tabs.map((tab: any) => (
            <li key={tab.key}>
              <button
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-1 py-2 text-xs font-medium border-b-2 transition-all ${
                  activeTab === tab.key ? activeColor : inactiveColor
                }`}
              >
                {tab.label}
                <span className="bg-yellow-400 text-white text-xs rounded-full px-2 py-0.5">
                  {tab.count}
                </span>
                {/* {tab.count && (
                )} */}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex whitespace-nowrap gap-2 items-center text-xs">
          <span>Order By:</span>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md flex items-center gap-2"
            >
              {order}
              <svg
                className={`w-4 h-4 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-10">
                {["Last Active", "Recently Added", "Alphabetical"].map(
                  (opt) => (
                    <li key={opt}>
                      <button
                        onClick={() => {
                          setOrder(opt);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                          order === opt ? "text-yellow-600 font-medium" : ""
                        }`}
                      >
                        {opt}
                      </button>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="p-2">
        {/* recentContributors */}
        {activeTab === "recent" && (
          <div className="space-y-4">
            {recentContributors.isLoading ? (
              <div className="flex justify-center py-6">
                <Loader2 className="animate-spin" />
              </div>
            ) : recentContributors.isError ? (
              <p className="text-center text-sm text-red-500">
                Failed to load recent contributors.
              </p>
            ) : (recentContributors.data?.contributors ?? []).length === 0 ? (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <p className="text-sm text-gray-500">No recent contributor.</p>
              </div>
            ) : (
              recentContributors.data?.contributors?.map((user: any) => (
                <ContributorsCard
                  key={user.user.id}
                  id={user.user.id}
                  name={user.user.fullName}
                  img={user.user.profilePhotoUrl}
                  lastActive={user.user.lastActive}
                  country={user.user.country}
                  role={user.user.role || "—"}
                />
              ))
            )}
          </div>
        )}

        {/* all contributors */}
        {activeTab === "hometown" && (
          <div className="space-y-4">
            {getAllContributors.isLoading ? (
              <div className="flex justify-center py-6">
                <Loader2 className="animate-spin" />
              </div>
            ) : getAllContributors.isError ? (
              <p className="text-center text-sm text-red-500">
                Failed to load all contributors.
              </p>
            ) : (getAllContributors.data?.contributors ?? []).length === 0 ? (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <p className="text-sm text-gray-500">No all contributor.</p>
              </div>
            ) : (
              getAllContributors.data?.contributors?.map((user: any) => (
                <ContributorsCard
                  key={user.user.id}
                  id={user.user.id}
                  name={user.user.fullName}
                  img={user.user.profilePhotoUrl}
                  lastActive={user.user.lastActive}
                  country={user.user.country}
                  role={user.user.role || "—"}
                />
              ))
            )}
          </div>
        )}

        {/* following */}
        {activeTab === "following" && (
          <div className="space-y-4">
            {similarProfiles.isLoading ? (
              <div className="flex justify-center py-6">
                <Loader2 className="animate-spin" />
              </div>
            ) : similarProfiles.isError ? (
              <p className="text-center text-sm text-red-500">
                Failed to load following.
              </p>
            ) : (similarProfiles.data?.list ?? []).filter(
                (user: any) => user.isFollowing
              ).length === 0 ? (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <p className="text-sm text-gray-500">
                  You’re not following anyone yet.
                </p>
              </div>
            ) : (
              similarProfiles.data?.list
                ?.filter((user: any) => user.isFollowing)
                .map((user: any) => (
                  <FriendCard
                    key={user.id}
                    id={user.id}
                    name={user.fullName}
                    img={user.profilePhotoUrl}
                    lastActive={user.lastActive}
                    country={user.country}
                    role={user.role || "—"}
                    isFollowing={user.isFollowing}
                  />
                ))
            )}
          </div>
        )}

        {/* followers */}
        {activeTab === "followed" && (
          <div className="space-y-4">
            {getFollowers.isLoading ? (
              <div className="flex justify-center py-6">
                <Loader2 className="animate-spin" />
              </div>
            ) : getFollowers.isError ? (
              <p className="text-center text-sm text-red-500">
                Failed to load followers.
              </p>
            ) : (getFollowers.data?.list ?? []).length === 0 ? (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <p className="text-sm text-gray-500">
                  You’re have no followers yet.
                </p>
              </div>
            ) : (
              getFollowers.data?.list.map((user: any) => (
                <FollowersCard
                  key={user.id}
                  id={user.id}
                  name={user.fullName}
                  img={user.profilePhotoUrl}
                  lastActive={user.lastActive}
                  country={user.country}
                  role={user.role || "—"}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopContributorsTab;

// for following
const FriendCard = ({
  name,
  img,
  lastActive,
  country,
  role,
  id,
  isFollowing,
}: {
  id: string;
  name: string;
  img?: string | null;
  lastActive?: string | null;
  role?: string | null;
  country?: string | null;
  isFollowing?: boolean;
}) => {
  const { followUser, unFollowUser, similarProfiles } = useFollowing();
  const queryClient = useQueryClient();

  const [selectedUser, setSelectedUser] = useState<{
    id: string;
    name: string;
    image: string | null;
  } | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [loadingUserId, setLoadingUserId] = useState<string | null>(null);
  const handleUnfollowClick = (
    userId: string,
    userName: string,
    userImage: string | null
  ) => {
    setSelectedUser({ id: userId, name: userName, image: userImage });
    setShowModal(true);
  };

  const confirmUnfollow = async () => {
    if (!selectedUser) return;
    setIsConfirming(true);

    unFollowUser.mutate(
      { userId: selectedUser.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["similar-users"] });
          setShowModal(false);
        },
        onSettled: () => {
          setIsConfirming(false);
          setSelectedUser(null);
        },
      }
    );
  };

  const cancelUnfollow = () => {
    if (isConfirming) return;
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleFollow = (userId: string) => {
    setLoadingUserId(userId);
    followUser.mutate(
      { userId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["similar-users"] });
        },
        onSettled: () => {
          setLoadingUserId(null);
        },
      }
    );
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap items-start justify-between p-2 sm:p-3 bg-gray-50 rounded-md   gap-3">
      <div className="flex items-center gap-3">
        {img !== null ? (
          <Image
            src={img!}
            alt={name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="p-0.5 rounded-full bg-white border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              className="text-[#157bff]"
              height="50"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"
                />
              </g>
            </svg>
          </div>
        )}
        <div>
          <h6 className="flex items-center gap-1 text-gray-800 font-semibold">
            {name}
            <svg
              width="18"
              height="18"
              viewBox="0 0 80 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.1737 12.4617C43.7712 12.8914 45.1522 13.9641 46.8317 15.2631L47.8059 16.0175C48.603 16.6309 48.7933 16.772 48.9835 16.8737C49.1878 16.9848 49.4033 17.0738 49.6264 17.1394C49.8331 17.2017 50.066 17.2378 51.0632 17.369L52.2867 17.5232C54.3926 17.7921 56.1246 18.0119 57.5581 18.8353C58.8144 19.5569 59.8543 20.5968 60.5759 21.8531C61.3993 23.2833 61.619 25.0185 61.888 27.1245L62.0455 28.348C62.1734 29.3452 62.2095 29.5781 62.2718 29.7847C62.3374 30.0078 62.4249 30.2221 62.5342 30.4277C62.6392 30.6179 62.7803 30.8082 63.3937 31.6053L64.1481 32.5795C65.4471 34.259 66.5197 35.64 66.9495 37.2375C67.3255 38.6341 67.3255 40.1052 66.9495 41.5018C66.5197 43.0993 65.4471 44.4803 64.1481 46.1598L63.3937 47.134C62.7803 47.9311 62.6392 48.1214 62.5375 48.3116C62.426 48.5172 62.3374 48.7315 62.2718 48.9546C62.2095 49.1612 62.1734 49.3941 62.0422 50.3913L61.888 51.6148C61.619 53.7208 61.3993 55.4527 60.5759 56.8862C59.854 58.1409 58.8128 59.1821 57.5581 59.9041C56.1279 60.7274 54.3926 60.9472 52.2867 61.2162L51.0632 61.3736C50.066 61.5015 49.8331 61.5376 49.6264 61.5999C49.4034 61.6656 49.1891 61.753 48.9835 61.8624C48.7933 61.9673 48.603 62.1084 47.8059 62.7218L46.8317 63.4763C45.1522 64.7752 43.7712 65.8479 42.1737 66.2776C40.7771 66.6536 39.3059 66.6536 37.9094 66.2776C36.3119 65.8479 34.9309 64.7752 33.2514 63.4763L32.2772 62.7218C31.4801 62.1084 31.2898 61.9673 31.0996 61.8656C30.8953 61.7545 30.6797 61.6655 30.4566 61.5999C30.25 61.5376 30.0171 61.5015 29.0199 61.3703L27.7963 61.2162C25.6904 60.9472 23.9584 60.7274 22.525 59.9041C21.2703 59.1821 20.2291 58.1409 19.5071 56.8862C18.6838 55.456 18.464 53.7208 18.195 51.6148L18.0376 50.3913C17.9096 49.3941 17.8736 49.1612 17.8112 48.9546C17.7468 48.7316 17.6588 48.516 17.5488 48.3116C17.4439 48.1214 17.3028 47.9311 16.6894 47.134L15.9349 46.1598C14.636 44.4803 13.5633 43.0993 13.1336 41.5018C12.7576 40.1052 12.7576 38.6341 13.1336 37.2375C13.5633 35.64 14.636 34.259 15.9349 32.5795L16.6894 31.6053C17.3028 30.8082 17.4439 30.6179 17.5455 30.4277C17.6566 30.2234 17.7457 30.0079 17.8112 29.7847C17.8736 29.5781 17.9096 29.3452 18.0409 28.348L18.195 27.1245C18.464 25.0185 18.6838 23.2866 19.5071 21.8531C20.2291 20.5984 21.2703 19.5572 22.525 18.8353C23.9552 18.0119 25.6904 17.7921 27.7963 17.5232L29.0199 17.3657C30.0171 17.2378 30.25 17.2017 30.4566 17.1394C30.6796 17.0749 30.8951 16.9869 31.0996 16.8769C31.2898 16.772 31.4801 16.6309 32.2772 16.0175L33.2514 15.2631C34.9309 13.9641 36.3119 12.8914 37.9094 12.4617C39.3059 12.0857 40.7771 12.0857 42.1737 12.4617ZM52.2014 30.49C51.5863 29.875 50.7521 29.5296 49.8823 29.5296C49.0125 29.5296 48.1783 29.875 47.5632 30.49L36.7613 41.2919L32.5199 37.0505C31.9012 36.453 31.0726 36.1224 30.2126 36.1298C29.3525 36.1373 28.5298 36.4823 27.9216 37.0905C27.3134 37.6987 26.9684 38.5214 26.9609 39.3815C26.9535 40.2415 27.2841 41.0701 27.8816 41.6888L34.4421 48.2493C35.0573 48.8643 35.8915 49.2097 36.7613 49.2097C37.6311 49.2097 38.4653 48.8643 39.0804 48.2493L52.2014 35.1283C52.8164 34.5131 53.1618 33.6789 53.1618 32.8091C53.1618 31.9393 52.8164 31.1051 52.2014 30.49Z"
                fill="#0088FF"
              />
            </svg>
          </h6>
          <span className="flex whitespace-nowrap flex-wrap font-normal items-center gap-1 sm:gap-2">
            <p className=" text-xs text-[#FAAF40] mt-1">{role || "-"}</p>
            <span className="flex items-center gap-2">
              <Image
                src="/images/icon/iwwa_map.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <p className=" text-xs text-[#979797] mt-1">{country || "-"}</p>
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 55 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pt-1"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.55089 5.72538L3.20667 1.86353C2.92686 1.61515 2.55984 1.48809 2.18634 1.5103C1.81285 1.53252 1.46348 1.7022 1.2151 1.98201C0.966708 2.26182 0.839648 2.62884 0.861867 3.00234C0.884086 3.37583 1.05376 3.7252 1.33357 3.97358L5.4211 7.60694C6.14701 6.96188 6.85695 6.3347 7.55089 5.72538ZM16.166 16.9329C17.0931 17.672 17.9799 18.3312 18.8261 18.9104C21.8473 20.9781 24.5836 22.1291 27.6585 22.1291C30.7333 22.1291 33.4667 20.9781 36.4908 18.9132C39.4668 16.8765 42.8661 13.8553 47.2582 9.95113L47.3372 9.8806L53.9833 3.97358C54.1219 3.85059 54.2348 3.70152 54.3158 3.53487C54.3967 3.36823 54.444 3.18727 54.455 3.00234C54.466 2.8174 54.4405 2.63211 54.3799 2.45704C54.3193 2.28197 54.2248 2.12056 54.1018 1.98201C53.9788 1.84346 53.8297 1.7305 53.6631 1.64956C53.4964 1.56862 53.3155 1.52131 53.1306 1.5103C52.9456 1.4993 52.7603 1.52483 52.5853 1.58544C52.4102 1.64605 52.2488 1.74054 52.1102 1.86353L45.4613 7.77337C40.976 11.7622 37.7094 14.6621 34.8998 16.5831C32.124 18.4788 29.9462 19.3081 27.6585 19.3081C25.3707 19.3081 23.1929 18.4788 20.4171 16.5831C19.7038 16.0913 19.0058 15.5776 18.324 15.0429C17.6545 15.6259 16.9352 16.2559 16.166 16.9329Z"
                  fill="#8C8C8C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.1548 5.82896C38.2911 5.1403 37.4039 4.48169 36.4947 3.85431C33.4734 1.78657 30.7372 0.632812 27.6623 0.632812C24.5875 0.632812 21.8541 1.78657 18.83 3.85431C15.854 5.88538 12.4547 8.90941 8.05974 12.8136L7.98357 12.8813L1.33747 18.7911C1.07212 19.0432 0.915138 19.3885 0.899695 19.7542C0.884252 20.1199 1.01155 20.4772 1.25471 20.7508C1.49786 21.0243 1.83783 21.1926 2.20279 21.2202C2.56775 21.2477 2.92912 21.1323 3.21056 20.8983L9.86231 14.9941C14.3476 11.0054 17.617 8.10544 20.4239 6.18439C23.1996 4.28873 25.3774 3.45656 27.6652 3.45656C29.9529 3.45656 32.1307 4.28873 34.9065 6.18439C35.5741 6.6395 36.2718 7.15197 36.9996 7.7218C37.6691 7.14069 38.3884 6.51068 39.1576 5.83178M49.9025 15.1606L47.7727 17.0421L52.1169 20.9012C52.3984 21.1351 52.7598 21.2505 53.1247 21.223C53.4897 21.1955 53.8297 21.0271 54.0728 20.7536C54.316 20.48 54.4433 20.1227 54.4278 19.757C54.4124 19.3914 54.2554 19.046 53.99 18.7939L49.9025 15.1606Z"
                  fill="#8C8C8C"
                />
              </svg>

              <p className=" text-xs text-[#979797] mt-1">
                {lastActive || "Mobile"}
              </p>
            </span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="mt-1">
          <ContributionHeatmap size="mini" />
        </div>
        {isFollowing ? (
          <button
            disabled={unFollowUser.isPending}
            onClick={() => handleUnfollowClick(id, name, img!)}
            className="bg-[#157BFF] cursor-pointer hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]"
          >
            {loadingUserId === id && unFollowUser.isPending ? (
              <Loader2 className="animate-spin inline-block" size={24} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.385 9.083V8.07q.717.15 1.45.328q.732.178 1.524.378q.324.08.5.351q.177.27.122.593l-1.466 7.962q-.106.59-.553.953T18.925 19H5.152q-.59 0-1.025-.373t-.54-.944L2.025 9.72q-.056-.323.118-.605q.174-.283.498-.364q.734-.2 1.428-.356t1.373-.287V9.12l-1.188.251q-.6.126-1.22.278L4.46 17.5q.038.212.22.356t.395.144h13.85q.212 0 .394-.144t.222-.356l1.425-7.85q-.658-.171-1.306-.307t-1.275-.26M16 9.065q0-.427-.125-.829t-.394-.728q-.39-.506-.63-1.098q-.24-.59-.24-1.226q0-.401.105-.782q.105-.38.309-.74l.152-.27q.09-.177.291-.233q.201-.055.378.035t.233.289t-.035.375l-.177.294q-.13.244-.202.52t-.073.551q0 .427.154.82q.154.391.423.718q.41.468.62 1.05q.211.581.211 1.197q0 .42-.095.811q-.096.39-.26.77l-.159.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.112-.264.167-.53T16 9.066m-3.892 0q0-.428-.125-.83t-.395-.728q-.39-.506-.63-1.098q-.239-.59-.239-1.226q0-.401.105-.782t.309-.74l.151-.27q.091-.176.292-.232t.378.034t.232.289t-.034.375l-.177.294q-.13.244-.203.51q-.072.267-.072.542q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.094.811q-.096.39-.261.77l-.158.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.111-.264.167-.53t.056-.541m-3.887-.02q0-.427-.128-.819q-.127-.392-.397-.72q-.41-.486-.64-1.077q-.229-.591-.229-1.226q0-.402.102-.792t.312-.75l.157-.27q.09-.176.292-.232q.2-.056.377.034t.233.289t-.034.375l-.177.294q-.131.239-.206.508t-.075.544q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.095.811q-.095.39-.26.77l-.152.326q-.09.177-.292.233q-.2.056-.377-.034q-.177-.091-.233-.289t.035-.375l.157-.313q.112-.264.168-.54q.055-.276.055-.55"
                />
              </svg>
            )}
            Unlink
          </button>
        ) : (
          <button
            disabled={followUser.isPending}
            onClick={() => handleFollow(id)}
            className="bg-[#157BFF] cursor-pointer hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]"
          >
            {loadingUserId === id && followUser.isPending ? (
              <Loader2 className="animate-spin inline-block" size={24} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 28 28"
              >
                <path
                  fill="currentColor"
                  d="M9.5 14a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m14-3.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M2 18.25A2.25 2.25 0 0 1 4.25 16h10.084a4.74 4.74 0 0 0-1.834 3.75c0 1.327.544 2.527 1.422 3.389c-1.064.515-2.496.861-4.422.861C2 24 2 18.75 2 18.75zm15.25-.75a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5zm-.75 2.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M22.75 22a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5z"
                />
              </svg>
            )}
            Link
          </button>
        )}
        <button className="bg-[#157BFF] cursor-pointer hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 132 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.9375 79.956H85.2337M46.9375 52.6016H66.0856"
              stroke="white"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M77.9542 114.917C100.844 113.401 119.073 94.9096 120.572 71.6966C120.862 67.1558 120.862 62.4508 120.572 57.91C119.073 34.7025 100.844 16.2218 77.9542 14.6954C70.0482 14.1744 62.1165 14.1744 54.2106 14.6954C31.3204 16.2163 13.0914 34.7025 11.5924 57.9154C11.3025 62.5064 11.3025 67.1111 11.5924 71.7021C12.1394 80.1546 15.8761 87.9834 20.2801 94.5922C22.835 99.2151 21.15 104.987 18.4857 110.037C16.5709 113.675 15.608 115.491 16.3794 116.804C17.1453 118.117 18.8686 118.161 22.3098 118.243C29.1211 118.407 33.7111 116.481 37.3548 113.795C39.4173 112.269 40.4513 111.508 41.1625 111.421C41.8737 111.333 43.2797 111.913 46.0808 113.062C48.5974 114.101 51.5244 114.742 54.2051 114.922C62.0011 115.436 70.1472 115.436 77.9597 114.922L77.9542 114.917Z"
              stroke="white"
              stroke-width="8"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {showModal && selectedUser && (
        <ConfirmationModal
          title="Unlink User"
          message={`Are you sure you want to unlink ${selectedUser.name}?`}
          confirmText="Yes, unlink"
          cancelText="Cancel"
          onConfirm={confirmUnfollow}
          onCancel={cancelUnfollow}
          isLoading={isConfirming}
          user={{
            name: selectedUser.name,
            image: selectedUser.image,
          }}
        />
      )}
    </div>
  );
};

//for followers
const FollowersCard = ({
  name,
  img,
  lastActive,
  country,
  role,
  id,
}: {
  id: string;
  name: string;
  img?: string | null;
  lastActive?: string | null;
  role?: string | null;
  country?: string | null;
}) => {
  const { followUser, unFollowUser, similarProfiles } = useFollowing();
  const queryClient = useQueryClient();

  const [selectedUser, setSelectedUser] = useState<{
    id: string;
    name: string;
    image: string | null;
  } | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [loadingUserId, setLoadingUserId] = useState<string | null>(null);

  const isFollowing = similarProfiles.data?.list?.some(
    (user: any) => user.isFollowing && user.id === id
  );


  const handleUnfollowClick = (
    userId: string,
    userName: string,
    userImage: string | null
  ) => {
    setSelectedUser({ id: userId, name: userName, image: userImage });
    setShowModal(true);
  };

  const confirmUnfollow = async () => {
    if (!selectedUser) return;
    setIsConfirming(true);

    unFollowUser.mutate(
      { userId: selectedUser.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["similar-users"] });
          setShowModal(false);
        },
        onSettled: () => {
          setIsConfirming(false);
          setSelectedUser(null);
        },
      }
    );
  };

  const cancelUnfollow = () => {
    if (isConfirming) return;
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleFollow = (userId: string) => {
    setLoadingUserId(userId);
    followUser.mutate(
      { userId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["similar-users"] });
        },
        onSettled: () => {
          setLoadingUserId(null);
        },
      }
    );
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap items-start justify-between p-2 sm:p-3 bg-gray-50 rounded-md   gap-3">
      <div className="flex items-center gap-3">
        {img !== null ? (
          <Image
            src={img!}
            alt={name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="p-0.5 rounded-full bg-white border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              className="text-[#157bff]"
              height="50"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"
                />
              </g>
            </svg>
          </div>
        )}
        <div>
          <h6 className="flex items-center gap-1 text-gray-800 font-semibold">
            {name}
            <svg
              width="18"
              height="18"
              viewBox="0 0 80 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.1737 12.4617C43.7712 12.8914 45.1522 13.9641 46.8317 15.2631L47.8059 16.0175C48.603 16.6309 48.7933 16.772 48.9835 16.8737C49.1878 16.9848 49.4033 17.0738 49.6264 17.1394C49.8331 17.2017 50.066 17.2378 51.0632 17.369L52.2867 17.5232C54.3926 17.7921 56.1246 18.0119 57.5581 18.8353C58.8144 19.5569 59.8543 20.5968 60.5759 21.8531C61.3993 23.2833 61.619 25.0185 61.888 27.1245L62.0455 28.348C62.1734 29.3452 62.2095 29.5781 62.2718 29.7847C62.3374 30.0078 62.4249 30.2221 62.5342 30.4277C62.6392 30.6179 62.7803 30.8082 63.3937 31.6053L64.1481 32.5795C65.4471 34.259 66.5197 35.64 66.9495 37.2375C67.3255 38.6341 67.3255 40.1052 66.9495 41.5018C66.5197 43.0993 65.4471 44.4803 64.1481 46.1598L63.3937 47.134C62.7803 47.9311 62.6392 48.1214 62.5375 48.3116C62.426 48.5172 62.3374 48.7315 62.2718 48.9546C62.2095 49.1612 62.1734 49.3941 62.0422 50.3913L61.888 51.6148C61.619 53.7208 61.3993 55.4527 60.5759 56.8862C59.854 58.1409 58.8128 59.1821 57.5581 59.9041C56.1279 60.7274 54.3926 60.9472 52.2867 61.2162L51.0632 61.3736C50.066 61.5015 49.8331 61.5376 49.6264 61.5999C49.4034 61.6656 49.1891 61.753 48.9835 61.8624C48.7933 61.9673 48.603 62.1084 47.8059 62.7218L46.8317 63.4763C45.1522 64.7752 43.7712 65.8479 42.1737 66.2776C40.7771 66.6536 39.3059 66.6536 37.9094 66.2776C36.3119 65.8479 34.9309 64.7752 33.2514 63.4763L32.2772 62.7218C31.4801 62.1084 31.2898 61.9673 31.0996 61.8656C30.8953 61.7545 30.6797 61.6655 30.4566 61.5999C30.25 61.5376 30.0171 61.5015 29.0199 61.3703L27.7963 61.2162C25.6904 60.9472 23.9584 60.7274 22.525 59.9041C21.2703 59.1821 20.2291 58.1409 19.5071 56.8862C18.6838 55.456 18.464 53.7208 18.195 51.6148L18.0376 50.3913C17.9096 49.3941 17.8736 49.1612 17.8112 48.9546C17.7468 48.7316 17.6588 48.516 17.5488 48.3116C17.4439 48.1214 17.3028 47.9311 16.6894 47.134L15.9349 46.1598C14.636 44.4803 13.5633 43.0993 13.1336 41.5018C12.7576 40.1052 12.7576 38.6341 13.1336 37.2375C13.5633 35.64 14.636 34.259 15.9349 32.5795L16.6894 31.6053C17.3028 30.8082 17.4439 30.6179 17.5455 30.4277C17.6566 30.2234 17.7457 30.0079 17.8112 29.7847C17.8736 29.5781 17.9096 29.3452 18.0409 28.348L18.195 27.1245C18.464 25.0185 18.6838 23.2866 19.5071 21.8531C20.2291 20.5984 21.2703 19.5572 22.525 18.8353C23.9552 18.0119 25.6904 17.7921 27.7963 17.5232L29.0199 17.3657C30.0171 17.2378 30.25 17.2017 30.4566 17.1394C30.6796 17.0749 30.8951 16.9869 31.0996 16.8769C31.2898 16.772 31.4801 16.6309 32.2772 16.0175L33.2514 15.2631C34.9309 13.9641 36.3119 12.8914 37.9094 12.4617C39.3059 12.0857 40.7771 12.0857 42.1737 12.4617ZM52.2014 30.49C51.5863 29.875 50.7521 29.5296 49.8823 29.5296C49.0125 29.5296 48.1783 29.875 47.5632 30.49L36.7613 41.2919L32.5199 37.0505C31.9012 36.453 31.0726 36.1224 30.2126 36.1298C29.3525 36.1373 28.5298 36.4823 27.9216 37.0905C27.3134 37.6987 26.9684 38.5214 26.9609 39.3815C26.9535 40.2415 27.2841 41.0701 27.8816 41.6888L34.4421 48.2493C35.0573 48.8643 35.8915 49.2097 36.7613 49.2097C37.6311 49.2097 38.4653 48.8643 39.0804 48.2493L52.2014 35.1283C52.8164 34.5131 53.1618 33.6789 53.1618 32.8091C53.1618 31.9393 52.8164 31.1051 52.2014 30.49Z"
                fill="#0088FF"
              />
            </svg>
          </h6>
          <span className="flex whitespace-nowrap flex-wrap font-normal items-center gap-1 sm:gap-2">
            <p className=" text-xs text-[#FAAF40] mt-1">{role || "-"}</p>
            <span className="flex items-center gap-2">
              <Image
                src="/images/icon/iwwa_map.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <p className=" text-xs text-[#979797] mt-1">{country || "-"}</p>
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 55 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pt-1"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.55089 5.72538L3.20667 1.86353C2.92686 1.61515 2.55984 1.48809 2.18634 1.5103C1.81285 1.53252 1.46348 1.7022 1.2151 1.98201C0.966708 2.26182 0.839648 2.62884 0.861867 3.00234C0.884086 3.37583 1.05376 3.7252 1.33357 3.97358L5.4211 7.60694C6.14701 6.96188 6.85695 6.3347 7.55089 5.72538ZM16.166 16.9329C17.0931 17.672 17.9799 18.3312 18.8261 18.9104C21.8473 20.9781 24.5836 22.1291 27.6585 22.1291C30.7333 22.1291 33.4667 20.9781 36.4908 18.9132C39.4668 16.8765 42.8661 13.8553 47.2582 9.95113L47.3372 9.8806L53.9833 3.97358C54.1219 3.85059 54.2348 3.70152 54.3158 3.53487C54.3967 3.36823 54.444 3.18727 54.455 3.00234C54.466 2.8174 54.4405 2.63211 54.3799 2.45704C54.3193 2.28197 54.2248 2.12056 54.1018 1.98201C53.9788 1.84346 53.8297 1.7305 53.6631 1.64956C53.4964 1.56862 53.3155 1.52131 53.1306 1.5103C52.9456 1.4993 52.7603 1.52483 52.5853 1.58544C52.4102 1.64605 52.2488 1.74054 52.1102 1.86353L45.4613 7.77337C40.976 11.7622 37.7094 14.6621 34.8998 16.5831C32.124 18.4788 29.9462 19.3081 27.6585 19.3081C25.3707 19.3081 23.1929 18.4788 20.4171 16.5831C19.7038 16.0913 19.0058 15.5776 18.324 15.0429C17.6545 15.6259 16.9352 16.2559 16.166 16.9329Z"
                  fill="#8C8C8C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.1548 5.82896C38.2911 5.1403 37.4039 4.48169 36.4947 3.85431C33.4734 1.78657 30.7372 0.632812 27.6623 0.632812C24.5875 0.632812 21.8541 1.78657 18.83 3.85431C15.854 5.88538 12.4547 8.90941 8.05974 12.8136L7.98357 12.8813L1.33747 18.7911C1.07212 19.0432 0.915138 19.3885 0.899695 19.7542C0.884252 20.1199 1.01155 20.4772 1.25471 20.7508C1.49786 21.0243 1.83783 21.1926 2.20279 21.2202C2.56775 21.2477 2.92912 21.1323 3.21056 20.8983L9.86231 14.9941C14.3476 11.0054 17.617 8.10544 20.4239 6.18439C23.1996 4.28873 25.3774 3.45656 27.6652 3.45656C29.9529 3.45656 32.1307 4.28873 34.9065 6.18439C35.5741 6.6395 36.2718 7.15197 36.9996 7.7218C37.6691 7.14069 38.3884 6.51068 39.1576 5.83178M49.9025 15.1606L47.7727 17.0421L52.1169 20.9012C52.3984 21.1351 52.7598 21.2505 53.1247 21.223C53.4897 21.1955 53.8297 21.0271 54.0728 20.7536C54.316 20.48 54.4433 20.1227 54.4278 19.757C54.4124 19.3914 54.2554 19.046 53.99 18.7939L49.9025 15.1606Z"
                  fill="#8C8C8C"
                />
              </svg>

              <p className=" text-xs text-[#979797] mt-1">
                {lastActive || "Mobile"}
              </p>
            </span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="mt-1">
          <ContributionHeatmap size="mini" />
        </div>
        {isFollowing ? (
          <button
            disabled={unFollowUser.isPending}
            onClick={() => handleUnfollowClick(id, name, img!)}
            className="bg-[#157BFF] cursor-pointer hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]"
          >
            {loadingUserId === id && unFollowUser.isPending ? (
              <Loader2 className="animate-spin inline-block" size={24} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.385 9.083V8.07q.717.15 1.45.328q.732.178 1.524.378q.324.08.5.351q.177.27.122.593l-1.466 7.962q-.106.59-.553.953T18.925 19H5.152q-.59 0-1.025-.373t-.54-.944L2.025 9.72q-.056-.323.118-.605q.174-.283.498-.364q.734-.2 1.428-.356t1.373-.287V9.12l-1.188.251q-.6.126-1.22.278L4.46 17.5q.038.212.22.356t.395.144h13.85q.212 0 .394-.144t.222-.356l1.425-7.85q-.658-.171-1.306-.307t-1.275-.26M16 9.065q0-.427-.125-.829t-.394-.728q-.39-.506-.63-1.098q-.24-.59-.24-1.226q0-.401.105-.782q.105-.38.309-.74l.152-.27q.09-.177.291-.233q.201-.055.378.035t.233.289t-.035.375l-.177.294q-.13.244-.202.52t-.073.551q0 .427.154.82q.154.391.423.718q.41.468.62 1.05q.211.581.211 1.197q0 .42-.095.811q-.096.39-.26.77l-.159.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.112-.264.167-.53T16 9.066m-3.892 0q0-.428-.125-.83t-.395-.728q-.39-.506-.63-1.098q-.239-.59-.239-1.226q0-.401.105-.782t.309-.74l.151-.27q.091-.176.292-.232t.378.034t.232.289t-.034.375l-.177.294q-.13.244-.203.51q-.072.267-.072.542q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.094.811q-.096.39-.261.77l-.158.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.111-.264.167-.53t.056-.541m-3.887-.02q0-.427-.128-.819q-.127-.392-.397-.72q-.41-.486-.64-1.077q-.229-.591-.229-1.226q0-.402.102-.792t.312-.75l.157-.27q.09-.176.292-.232q.2-.056.377.034t.233.289t-.034.375l-.177.294q-.131.239-.206.508t-.075.544q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.095.811q-.095.39-.26.77l-.152.326q-.09.177-.292.233q-.2.056-.377-.034q-.177-.091-.233-.289t.035-.375l.157-.313q.112-.264.168-.54q.055-.276.055-.55"
                />
              </svg>
            )}
            Unlink
          </button>
        ) : (
          <button
            disabled={followUser.isPending}
            onClick={() => handleFollow(id)}
            className="bg-[#157BFF] cursor-pointer hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]"
          >
            {loadingUserId === id && followUser.isPending ? (
              <Loader2 className="animate-spin inline-block" size={24} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 28 28"
              >
                <path
                  fill="currentColor"
                  d="M9.5 14a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m14-3.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M2 18.25A2.25 2.25 0 0 1 4.25 16h10.084a4.74 4.74 0 0 0-1.834 3.75c0 1.327.544 2.527 1.422 3.389c-1.064.515-2.496.861-4.422.861C2 24 2 18.75 2 18.75zm15.25-.75a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5zm-.75 2.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M22.75 22a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5z"
                />
              </svg>
            )}
            Link
          </button>
        )}
        <button className="bg-[#157BFF] cursor-pointer hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 132 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.9375 79.956H85.2337M46.9375 52.6016H66.0856"
              stroke="white"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M77.9542 114.917C100.844 113.401 119.073 94.9096 120.572 71.6966C120.862 67.1558 120.862 62.4508 120.572 57.91C119.073 34.7025 100.844 16.2218 77.9542 14.6954C70.0482 14.1744 62.1165 14.1744 54.2106 14.6954C31.3204 16.2163 13.0914 34.7025 11.5924 57.9154C11.3025 62.5064 11.3025 67.1111 11.5924 71.7021C12.1394 80.1546 15.8761 87.9834 20.2801 94.5922C22.835 99.2151 21.15 104.987 18.4857 110.037C16.5709 113.675 15.608 115.491 16.3794 116.804C17.1453 118.117 18.8686 118.161 22.3098 118.243C29.1211 118.407 33.7111 116.481 37.3548 113.795C39.4173 112.269 40.4513 111.508 41.1625 111.421C41.8737 111.333 43.2797 111.913 46.0808 113.062C48.5974 114.101 51.5244 114.742 54.2051 114.922C62.0011 115.436 70.1472 115.436 77.9597 114.922L77.9542 114.917Z"
              stroke="white"
              stroke-width="8"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {showModal && selectedUser && (
        <ConfirmationModal
          title="Unlink User"
          message={`Are you sure you want to unlink ${selectedUser.name}?`}
          confirmText="Yes, unlink"
          cancelText="Cancel"
          onConfirm={confirmUnfollow}
          onCancel={cancelUnfollow}
          isLoading={isConfirming}
          user={{
            name: selectedUser.name,
            image: selectedUser.image,
          }}
        />
      )}
    </div>
  );
};

const ContributorsCard = ({
  name,
  img,
  lastActive,
  country,
  role,
  id,
}: {
  id: string;
  name: string;
  img?: string | null;
  lastActive?: string | null;
  role?: string | null;
  country?: string | null;
}) => {
  const { followUser, unFollowUser, similarProfiles } = useFollowing();
  const queryClient = useQueryClient();

  const [selectedUser, setSelectedUser] = useState<{
    id: string;
    name: string;
    image: string | null;
  } | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [loadingUserId, setLoadingUserId] = useState<string | null>(null);

  const isFollowing = similarProfiles.data?.list?.some(
    (user: any) => user.isFollowing && user.id === id
  );


  const handleUnfollowClick = (
    userId: string,
    userName: string,
    userImage: string | null
  ) => {
    setSelectedUser({ id: userId, name: userName, image: userImage });
    setShowModal(true);
  };

  const confirmUnfollow = async () => {
    if (!selectedUser) return;
    setIsConfirming(true);

    unFollowUser.mutate(
      { userId: selectedUser.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["similar-users"] });
          setShowModal(false);
        },
        onSettled: () => {
          setIsConfirming(false);
          setSelectedUser(null);
        },
      }
    );
  };

  const cancelUnfollow = () => {
    if (isConfirming) return;
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleFollow = (userId: string) => {
    setLoadingUserId(userId);
    followUser.mutate(
      { userId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["similar-users"] });
        },
        onSettled: () => {
          setLoadingUserId(null);
        },
      }
    );
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap items-start justify-between p-2 sm:p-3 bg-gray-50 rounded-md   gap-3">
      <div className="flex items-center gap-3">
        {img !== null ? (
          <Image
            src={img!}
            alt={name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="p-0.5 rounded-full bg-white border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              className="text-[#157bff]"
              height="50"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"
                />
              </g>
            </svg>
          </div>
        )}
        <div>
          <h6 className="flex items-center gap-1 text-gray-800 font-semibold">
            {name}
            <svg
              width="18"
              height="18"
              viewBox="0 0 80 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.1737 12.4617C43.7712 12.8914 45.1522 13.9641 46.8317 15.2631L47.8059 16.0175C48.603 16.6309 48.7933 16.772 48.9835 16.8737C49.1878 16.9848 49.4033 17.0738 49.6264 17.1394C49.8331 17.2017 50.066 17.2378 51.0632 17.369L52.2867 17.5232C54.3926 17.7921 56.1246 18.0119 57.5581 18.8353C58.8144 19.5569 59.8543 20.5968 60.5759 21.8531C61.3993 23.2833 61.619 25.0185 61.888 27.1245L62.0455 28.348C62.1734 29.3452 62.2095 29.5781 62.2718 29.7847C62.3374 30.0078 62.4249 30.2221 62.5342 30.4277C62.6392 30.6179 62.7803 30.8082 63.3937 31.6053L64.1481 32.5795C65.4471 34.259 66.5197 35.64 66.9495 37.2375C67.3255 38.6341 67.3255 40.1052 66.9495 41.5018C66.5197 43.0993 65.4471 44.4803 64.1481 46.1598L63.3937 47.134C62.7803 47.9311 62.6392 48.1214 62.5375 48.3116C62.426 48.5172 62.3374 48.7315 62.2718 48.9546C62.2095 49.1612 62.1734 49.3941 62.0422 50.3913L61.888 51.6148C61.619 53.7208 61.3993 55.4527 60.5759 56.8862C59.854 58.1409 58.8128 59.1821 57.5581 59.9041C56.1279 60.7274 54.3926 60.9472 52.2867 61.2162L51.0632 61.3736C50.066 61.5015 49.8331 61.5376 49.6264 61.5999C49.4034 61.6656 49.1891 61.753 48.9835 61.8624C48.7933 61.9673 48.603 62.1084 47.8059 62.7218L46.8317 63.4763C45.1522 64.7752 43.7712 65.8479 42.1737 66.2776C40.7771 66.6536 39.3059 66.6536 37.9094 66.2776C36.3119 65.8479 34.9309 64.7752 33.2514 63.4763L32.2772 62.7218C31.4801 62.1084 31.2898 61.9673 31.0996 61.8656C30.8953 61.7545 30.6797 61.6655 30.4566 61.5999C30.25 61.5376 30.0171 61.5015 29.0199 61.3703L27.7963 61.2162C25.6904 60.9472 23.9584 60.7274 22.525 59.9041C21.2703 59.1821 20.2291 58.1409 19.5071 56.8862C18.6838 55.456 18.464 53.7208 18.195 51.6148L18.0376 50.3913C17.9096 49.3941 17.8736 49.1612 17.8112 48.9546C17.7468 48.7316 17.6588 48.516 17.5488 48.3116C17.4439 48.1214 17.3028 47.9311 16.6894 47.134L15.9349 46.1598C14.636 44.4803 13.5633 43.0993 13.1336 41.5018C12.7576 40.1052 12.7576 38.6341 13.1336 37.2375C13.5633 35.64 14.636 34.259 15.9349 32.5795L16.6894 31.6053C17.3028 30.8082 17.4439 30.6179 17.5455 30.4277C17.6566 30.2234 17.7457 30.0079 17.8112 29.7847C17.8736 29.5781 17.9096 29.3452 18.0409 28.348L18.195 27.1245C18.464 25.0185 18.6838 23.2866 19.5071 21.8531C20.2291 20.5984 21.2703 19.5572 22.525 18.8353C23.9552 18.0119 25.6904 17.7921 27.7963 17.5232L29.0199 17.3657C30.0171 17.2378 30.25 17.2017 30.4566 17.1394C30.6796 17.0749 30.8951 16.9869 31.0996 16.8769C31.2898 16.772 31.4801 16.6309 32.2772 16.0175L33.2514 15.2631C34.9309 13.9641 36.3119 12.8914 37.9094 12.4617C39.3059 12.0857 40.7771 12.0857 42.1737 12.4617ZM52.2014 30.49C51.5863 29.875 50.7521 29.5296 49.8823 29.5296C49.0125 29.5296 48.1783 29.875 47.5632 30.49L36.7613 41.2919L32.5199 37.0505C31.9012 36.453 31.0726 36.1224 30.2126 36.1298C29.3525 36.1373 28.5298 36.4823 27.9216 37.0905C27.3134 37.6987 26.9684 38.5214 26.9609 39.3815C26.9535 40.2415 27.2841 41.0701 27.8816 41.6888L34.4421 48.2493C35.0573 48.8643 35.8915 49.2097 36.7613 49.2097C37.6311 49.2097 38.4653 48.8643 39.0804 48.2493L52.2014 35.1283C52.8164 34.5131 53.1618 33.6789 53.1618 32.8091C53.1618 31.9393 52.8164 31.1051 52.2014 30.49Z"
                fill="#0088FF"
              />
            </svg>
          </h6>
          <span className="flex whitespace-nowrap flex-wrap font-normal items-center gap-1 sm:gap-2">
            <p className=" text-xs text-[#FAAF40] mt-1">{role || "-"}</p>
            <span className="flex items-center gap-2">
              <Image
                src="/images/icon/iwwa_map.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <p className=" text-xs text-[#979797] mt-1">{country || "-"}</p>
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 55 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pt-1"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.55089 5.72538L3.20667 1.86353C2.92686 1.61515 2.55984 1.48809 2.18634 1.5103C1.81285 1.53252 1.46348 1.7022 1.2151 1.98201C0.966708 2.26182 0.839648 2.62884 0.861867 3.00234C0.884086 3.37583 1.05376 3.7252 1.33357 3.97358L5.4211 7.60694C6.14701 6.96188 6.85695 6.3347 7.55089 5.72538ZM16.166 16.9329C17.0931 17.672 17.9799 18.3312 18.8261 18.9104C21.8473 20.9781 24.5836 22.1291 27.6585 22.1291C30.7333 22.1291 33.4667 20.9781 36.4908 18.9132C39.4668 16.8765 42.8661 13.8553 47.2582 9.95113L47.3372 9.8806L53.9833 3.97358C54.1219 3.85059 54.2348 3.70152 54.3158 3.53487C54.3967 3.36823 54.444 3.18727 54.455 3.00234C54.466 2.8174 54.4405 2.63211 54.3799 2.45704C54.3193 2.28197 54.2248 2.12056 54.1018 1.98201C53.9788 1.84346 53.8297 1.7305 53.6631 1.64956C53.4964 1.56862 53.3155 1.52131 53.1306 1.5103C52.9456 1.4993 52.7603 1.52483 52.5853 1.58544C52.4102 1.64605 52.2488 1.74054 52.1102 1.86353L45.4613 7.77337C40.976 11.7622 37.7094 14.6621 34.8998 16.5831C32.124 18.4788 29.9462 19.3081 27.6585 19.3081C25.3707 19.3081 23.1929 18.4788 20.4171 16.5831C19.7038 16.0913 19.0058 15.5776 18.324 15.0429C17.6545 15.6259 16.9352 16.2559 16.166 16.9329Z"
                  fill="#8C8C8C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.1548 5.82896C38.2911 5.1403 37.4039 4.48169 36.4947 3.85431C33.4734 1.78657 30.7372 0.632812 27.6623 0.632812C24.5875 0.632812 21.8541 1.78657 18.83 3.85431C15.854 5.88538 12.4547 8.90941 8.05974 12.8136L7.98357 12.8813L1.33747 18.7911C1.07212 19.0432 0.915138 19.3885 0.899695 19.7542C0.884252 20.1199 1.01155 20.4772 1.25471 20.7508C1.49786 21.0243 1.83783 21.1926 2.20279 21.2202C2.56775 21.2477 2.92912 21.1323 3.21056 20.8983L9.86231 14.9941C14.3476 11.0054 17.617 8.10544 20.4239 6.18439C23.1996 4.28873 25.3774 3.45656 27.6652 3.45656C29.9529 3.45656 32.1307 4.28873 34.9065 6.18439C35.5741 6.6395 36.2718 7.15197 36.9996 7.7218C37.6691 7.14069 38.3884 6.51068 39.1576 5.83178M49.9025 15.1606L47.7727 17.0421L52.1169 20.9012C52.3984 21.1351 52.7598 21.2505 53.1247 21.223C53.4897 21.1955 53.8297 21.0271 54.0728 20.7536C54.316 20.48 54.4433 20.1227 54.4278 19.757C54.4124 19.3914 54.2554 19.046 53.99 18.7939L49.9025 15.1606Z"
                  fill="#8C8C8C"
                />
              </svg>

              <p className=" text-xs text-[#979797] mt-1">
                {lastActive || "Mobile"}
              </p>
            </span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="mt-1">
          <ContributionHeatmap size="mini" />
        </div>
        {isFollowing ? (
          <button
            disabled={unFollowUser.isPending}
            onClick={() => handleUnfollowClick(id, name, img!)}
            className="bg-[#157BFF] cursor-pointer hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]"
          >
            {loadingUserId === id && unFollowUser.isPending ? (
              <Loader2 className="animate-spin inline-block" size={24} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.385 9.083V8.07q.717.15 1.45.328q.732.178 1.524.378q.324.08.5.351q.177.27.122.593l-1.466 7.962q-.106.59-.553.953T18.925 19H5.152q-.59 0-1.025-.373t-.54-.944L2.025 9.72q-.056-.323.118-.605q.174-.283.498-.364q.734-.2 1.428-.356t1.373-.287V9.12l-1.188.251q-.6.126-1.22.278L4.46 17.5q.038.212.22.356t.395.144h13.85q.212 0 .394-.144t.222-.356l1.425-7.85q-.658-.171-1.306-.307t-1.275-.26M16 9.065q0-.427-.125-.829t-.394-.728q-.39-.506-.63-1.098q-.24-.59-.24-1.226q0-.401.105-.782q.105-.38.309-.74l.152-.27q.09-.177.291-.233q.201-.055.378.035t.233.289t-.035.375l-.177.294q-.13.244-.202.52t-.073.551q0 .427.154.82q.154.391.423.718q.41.468.62 1.05q.211.581.211 1.197q0 .42-.095.811q-.096.39-.26.77l-.159.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.112-.264.167-.53T16 9.066m-3.892 0q0-.428-.125-.83t-.395-.728q-.39-.506-.63-1.098q-.239-.59-.239-1.226q0-.401.105-.782t.309-.74l.151-.27q.091-.176.292-.232t.378.034t.232.289t-.034.375l-.177.294q-.13.244-.203.51q-.072.267-.072.542q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.094.811q-.096.39-.261.77l-.158.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.111-.264.167-.53t.056-.541m-3.887-.02q0-.427-.128-.819q-.127-.392-.397-.72q-.41-.486-.64-1.077q-.229-.591-.229-1.226q0-.402.102-.792t.312-.75l.157-.27q.09-.176.292-.232q.2-.056.377.034t.233.289t-.034.375l-.177.294q-.131.239-.206.508t-.075.544q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.095.811q-.095.39-.26.77l-.152.326q-.09.177-.292.233q-.2.056-.377-.034q-.177-.091-.233-.289t.035-.375l.157-.313q.112-.264.168-.54q.055-.276.055-.55"
                />
              </svg>
            )}
            Unlink
          </button>
        ) : (
          <button
            disabled={followUser.isPending}
            onClick={() => handleFollow(id)}
            className="bg-[#157BFF] cursor-pointer hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]"
          >
            {loadingUserId === id && followUser.isPending ? (
              <Loader2 className="animate-spin inline-block" size={24} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 28 28"
              >
                <path
                  fill="currentColor"
                  d="M9.5 14a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m14-3.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M2 18.25A2.25 2.25 0 0 1 4.25 16h10.084a4.74 4.74 0 0 0-1.834 3.75c0 1.327.544 2.527 1.422 3.389c-1.064.515-2.496.861-4.422.861C2 24 2 18.75 2 18.75zm15.25-.75a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5zm-.75 2.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M22.75 22a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5z"
                />
              </svg>
            )}
            Link
          </button>
        )}
        <button className="bg-[#157BFF] cursor-pointer hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 132 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.9375 79.956H85.2337M46.9375 52.6016H66.0856"
              stroke="white"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M77.9542 114.917C100.844 113.401 119.073 94.9096 120.572 71.6966C120.862 67.1558 120.862 62.4508 120.572 57.91C119.073 34.7025 100.844 16.2218 77.9542 14.6954C70.0482 14.1744 62.1165 14.1744 54.2106 14.6954C31.3204 16.2163 13.0914 34.7025 11.5924 57.9154C11.3025 62.5064 11.3025 67.1111 11.5924 71.7021C12.1394 80.1546 15.8761 87.9834 20.2801 94.5922C22.835 99.2151 21.15 104.987 18.4857 110.037C16.5709 113.675 15.608 115.491 16.3794 116.804C17.1453 118.117 18.8686 118.161 22.3098 118.243C29.1211 118.407 33.7111 116.481 37.3548 113.795C39.4173 112.269 40.4513 111.508 41.1625 111.421C41.8737 111.333 43.2797 111.913 46.0808 113.062C48.5974 114.101 51.5244 114.742 54.2051 114.922C62.0011 115.436 70.1472 115.436 77.9597 114.922L77.9542 114.917Z"
              stroke="white"
              stroke-width="8"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {showModal && selectedUser && (
        <ConfirmationModal
          title="Unlink User"
          message={`Are you sure you want to unlink ${selectedUser.name}?`}
          confirmText="Yes, unlink"
          cancelText="Cancel"
          onConfirm={confirmUnfollow}
          onCancel={cancelUnfollow}
          isLoading={isConfirming}
          user={{
            name: selectedUser.name,
            image: selectedUser.image,
          }}
        />
      )}
    </div>
  );
};

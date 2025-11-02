"use client";
import apiInstance from "@/api/apiInstance";
import { useAuthStore } from "@/stores/useAuthStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import MiniLoader from "../../atom/miniloader";
import { useFollowing } from "@/hooks/useFollow";
import { Loader2 } from "lucide-react";
import ConfirmationModal from "../../modal/confirmationModal";
import { useRouter } from "next/navigation";

interface userI {
  fullName: string;
  id: string;
  isFollowing: boolean;
  profilePhotoUrl: string | null;
  username: string;
  totalProjects: number;
}
export default function SimilarProfiles() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const { followUser, unFollowUser, similarProfiles } = useFollowing();
  const queryClient = useQueryClient();

  const [loadingUserId, setLoadingUserId] = useState<string | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<{
    id: string;
    name: string;
    image: string | null;
  } | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

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

  const router = useRouter();

  return (
    <div className="rounded-lg shadow bg-white mb-4">
      <div className="flex justify-between px-2 py-3 border-b border-[#f1f1f1]">
        <div className="header-title">
          <h4 className="text-lg font-bold">Similar Profiles</h4>
        </div>
      </div>

      <div className="my-2 h-[268px] overflow-y-scroll hide-scrollbar p-2">
        {similarProfiles.isLoading ? (
          <MiniLoader />
        ) : (
          similarProfiles?.data?.list.map((user: userI) => {
            return (
              <div
                onClick={() => router.push(`/in/profile/${user.id}`)}
                key={user.id}
                className="mb-3 last:mb-0 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {user.profilePhotoUrl !== null ? (
                    <Image
                      src={user.profilePhotoUrl!}
                      alt={user.fullName}
                      width={40}
                      height={40}
                      className="avatar-60 avatar-borderd object-cover rounded-sm w-full h-auto inline-block"
                    />
                  ) : (
                    <div className="p-0.5 rounded-sm bg-white border">
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

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h5 className="text-xs ">{user.fullName}</h5>
                        <small className="capitalize text-gray-600 text-[10px] flex items-center gap-1">
                          <span className="text-black">
                            {user.totalProjects}
                          </span>
                          Projects
                        </small>

                        {/* <small className="capitalize text-gray-600 text-[11px] flex items-center gap-2">
                          <span className="text-black">{user.strikes}</span>{" "}
                          Strikes
                        </small> */}
                      </div>
                      <div className="flex items-center flex-shrink-0 gap-2">
                        {isLoggedIn &&
                          (user.isFollowing ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleUnfollowClick(
                                  user.id,
                                  user.fullName,
                                  user.profilePhotoUrl
                                );
                              }}
                              className="px-2 py-1 hover:bg-red-200 text-xs bg-red-100 text-red-600 rounded"
                            >
                              {loadingUserId === user.id &&
                              unFollowUser.isPending ? (
                                <Loader2
                                  className="animate-spin inline-block"
                                  size={14}
                                />
                              ) : (
                                "Unlink"
                              )}
                            </button>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFollow(user.id);
                              }}
                              className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                            >
                              {loadingUserId === user.id &&
                              followUser.isPending ? (
                                <Loader2
                                  className="animate-spin inline-block"
                                  size={14}
                                />
                              ) : (
                                "+ Link"
                              )}
                            </button>
                          ))}

                        <button className="px-2 py-1 cursor-pointer bg-red-100 text-red-600 rounded hover:bg-red-200 leading-none">
                          <i className="ph ph-x text-xs"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
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
}

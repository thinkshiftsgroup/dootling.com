import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, Globe, MoreHorizontal, Loader2 } from "lucide-react";
import { ProjectI } from "@/types/project";

interface ProjectCardProps extends ProjectI {
  onManageClick?: () => void;
  onCPEClick?: () => void;
  onConfirmCPEClick?: () => void;
}

const EscrowProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  isPublic,
  title,
  _count,
  createdAt,
  onManageClick,
  onCPEClick,
  onConfirmCPEClick,
}) => {
  const router = useRouter();
  return (
    <div className="bg-white h-40 flex rounded-md shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="w-2/5 h-full bg-gradient-to-br from-gray-100 to-gray-200">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
            {title}
          </div>
        )}
      </div>

      <div className="w-3/5 p-4 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-semibold text-gray-900 truncate">
            {title}
          </h3>
          <button className="text-gray-400 hover:text-gray-600 transition">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            {_count.contributors || 0} Contributors
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Created {new Date(createdAt).toLocaleDateString("en-US")}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-2">
          {isPublic ? (
            <>
              <Globe className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 text-sm">Public</span>
            </>
          ) : (
            <>
              <Lock className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 text-sm">Private</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <span
            onClick={() => onCPEClick?.()}
            className="flex gap-1 bg-[#F8F9FA] text-gray-800 hover:text-gray-950 hover:bg-[#d0d0d0] rounded-sm p-1 px-1 items-center cursor-pointer shadow-sm text-[10px]  transition-colors transistion-shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeWidth={0.5}
                stroke="currentColor"
              >
                <path d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352z"></path>
                <path d="M19.846 4.318a2.2 2.2 0 0 0-.437-.692a2 2 0 0 0-.654-.463a1.92 1.92 0 0 0-1.544 0a2 2 0 0 0-.654.463l-.546.578l2.852 3.02l.546-.579a2.1 2.1 0 0 0 .437-.692a2.24 2.24 0 0 0 0-1.635M17.45 8.721L14.597 5.7L9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.5.5 0 0 0 .255-.145l4.778-5.06Z"></path>
              </g>
            </svg>{" "}
            Manage Escrow Project
          </span>

          <span
            onClick={() => router.push("/projects")}
            className="flex gap-1 bg-[#F8F9FA] text-gray-800 hover:text-gray-950 hover:bg-[#d0d0d0] rounded-sm p-1 px-1 items-center cursor-pointer shadow-sm text-[10px]  transition-colors transistion-shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M17 12.667C17 16.933 13.444 18 11.667 18C10.11 18 7 16.933 7 12.667C7 10.81 8.063 9.633 8.956 9.04c.408-.271.916-.098.942.391c.058 1.071.883 1.931 1.523 1.07c.584-.788.873-1.858.873-2.501c0-.947.958-1.548 1.707-.968C15.459 8.162 17 10.056 17 12.667"
                clipRule="evenodd"
                strokeWidth={0.5}
                stroke="currentColor"
              ></path>
            </svg>{" "}
            Heatup Project
          </span>
        </div>
      </div>
    </div>
  );
};

export default EscrowProjectCard;
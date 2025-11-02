import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, Globe, MoreHorizontal, Loader2 } from "lucide-react";
import { ProjectI } from "@/types/project";

interface ProjectCardProps extends ProjectI {
  onManageClick?: () => void;
  onConfirmCPEClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectImageUrl,
  isPublic,
  title,
  _count,
  createdAt,
}) => {
  const router = useRouter();
  return (
    <div className="bg-white h-40 flex rounded-md shadow-sm border border-gray-200 overflow-scroll hide-scrollbar hover:shadow-md transition-shadow">
      <div className="w-2/5 h-full bg-gradient-to-br from-gray-100 to-gray-200">
        {projectImageUrl ? (
          <img
            src={projectImageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
            {title}
          </div>
        )}
      </div>

      <div className="w-3/5 overflow-y-scroll hide-scrollbar md:!p-4 p-2 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <h3 className="sm:!text-base text-sm font-semibold text-gray-900 truncate">
            {title}
          </h3>
        </div>

        <div>
          <p className="sm:!text-sm text-xs text-gray-600">
            {_count.contributors || 0} Contributors
          </p>
          <p className="sm:!text-xs text-[10px] text-gray-400 mt-1">
            Created {new Date(createdAt).toLocaleDateString("en-US")}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-2">
          {isPublic ? (
            <>
              <Globe className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 text-xs sm:!text-sm">Public</span>
            </>
          ) : (
            <>
              <Lock className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 text-xs sm:!text-sm">Private</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

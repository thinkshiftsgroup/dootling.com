"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { TiPencil } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface ProjectChatSidebarProps {
  projects: any[];
  onSelectProject: (id: string) => void;
  selectedProjectId?: any;
  isLoading: boolean;
}

const ProjectChatSidebar: React.FC<ProjectChatSidebarProps> = ({
  projects = [],
  onSelectProject,
  selectedProjectId,
  isLoading,
}) => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    return projects.filter((project: any) =>
      project.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, projects]);

  return (
    <div className="w-full col-span-8 md:!col-span-2 bg-white border-r shadow-sm flex flex-col h-[86vh]">
      <div className="md:!p-4 p-2 border-b flex items-center gap-2">
        <div className="flex items-center bg-white rounded-sm w-full px-1 sm:!px-3 py-2 border">
          <FiSearch className="text-[#157bff]" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for projects"
            className="bg-transparent outline-none w-full px-2 text-xs sm:!text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
        <TiPencil className="w-5 h-5 text-[#157bff] cursor-pointer" />
      </div>

      <div className="mx-1 flex-1 overflow-y-scroll h-[68vh]">
        {isLoading ? (
          <div className="flex justify-center items-center my-5">
            <Loader2 className="animate-spin" />
          </div>
        ) : filteredProjects.length > 0 ? (
          filteredProjects.map((project: any, i: number) => {
            const isActive = selectedProjectId === project.id;
            const projectInitial =
              project.title?.charAt(0)?.toUpperCase() || "P";
            const imageSrc = project.imageUrl || "";

            return (
              <div
                key={project.id || i}
                onClick={() => {
                  onSelectProject(project.id);
                  // if (window.innerWidth < 768) {
                  //   router.push(`/projects/read-projects/${project.id}`);
                  // }
                }}
                className={`relative flex items-center justify-between px-2 md:!py-3 py-1 my-2 rounded-sm cursor-pointer border-b transition-all duration-200 ${
                  isActive
                    ? "bg-[#E8F0FE] border-l-4 border-[#157bff] shadow-[0_0_4px_rgba(21,123,255,0.2)]"
                    : "bg-white hover:bg-gray-50 border-transparent"
                }`}
              >
                <div className="flex items-center gap-2 sm:!gap-3">
                  <div className="relative flex-none">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={project.title}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                        {projectInitial}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <p
                      className={`sm:text-sm text-xs font-medium truncate ${
                        isActive ? "text-[#157bff]" : "text-gray-800"
                      }`}
                    >
                      {project.title}
                    </p>

                    {project.isEscrowed && (
                      <p className="p-0.5 text-[9px] rounded-[3px] bg-[#E2F7E8] text-[#3A8457] font-medium w-fit mt-[2px]">
                        Escrow
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-8 text-center text-gray-500">
            <p className="text-sm font-medium">No projects yet</p>
            {/* <p className="text-xs">Start by creating on profile</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectChatSidebar;

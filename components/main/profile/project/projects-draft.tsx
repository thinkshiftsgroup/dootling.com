import React, { useState } from "react";
import { Lock, Globe, MoreHorizontal } from "lucide-react";
import AddProjectsModal from "./addProject";
import { useRouter } from "next/navigation";
import ManageProject from "./manageProject";
import ConvertProjectToEscrow from "./CPEcrow";

// ======================
// Type Definitions
// ======================
interface ProjectCardProps extends Project {
  onManageClick?: () => void;
  onCPEClick?: () => void;
}

interface Project {
  id: number;
  imageSrc: string | null;
  isPrivate: boolean;
  projectName: string;
  collaborators: number;
  createdDate: string;
}

interface ProjectCardProps extends Project {}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}

interface ProjectDashboardProps {
  projects?: Project[];
  invited?: Project[];
  peerConfirmation?: Project[];
}

// ======================
// ProjectCard Component
// ======================
const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  isPrivate,
  projectName,
  collaborators,
  createdDate,
  onManageClick,
  onCPEClick
}) => {
  const router = useRouter();
  return (
    <div className="bg-white h-40 flex rounded-md shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="w-2/5 h-full bg-gradient-to-br from-gray-100 to-gray-200">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={projectName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
            Project Image
          </div>
        )}
      </div>

      {/* Info */}
      <div className="w-3/5 p-4 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-semibold text-gray-900 truncate">
            {projectName}
          </h3>
          <button className="text-gray-400 hover:text-gray-600 transition">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div>
          <p className="text-sm text-gray-600">{collaborators} Contributors</p>
          <p className="text-xs text-gray-400 mt-1">Created {createdDate}</p>
        </div>

        <div className="flex items-center gap-2 mt-2">
          {isPrivate ? (
            <>
              <Lock className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 text-sm">Private</span>
            </>
          ) : (
            <>
              <Globe className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 text-sm">Public</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <span
            onClick={onManageClick}
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
            Manage Project
          </span>
          <span
            onClick={onCPEClick}
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
            Convert Project to Escrow
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

// ======================
// TabButton Component
// ======================
const TabButton: React.FC<TabButtonProps> = ({
  active,
  onClick,
  icon,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-sm font-medium transition-colors flex items-center gap-2 ${
        active
          ? "bg-[#D8D8D8] text-[#202224]"
          : "bg-[#F8F9FA] text-[#202224] hover:bg-gray-100"
      }`}
    >
      <span className="text-lg">{icon}</span>
      {children}
    </button>
  );
};

// ======================
// Main Dashboard
// ======================
const ProjectDashboard: React.FC<ProjectDashboardProps> = ({
  projects = [],
}) => {
  const [activeTab, setActiveTab] = useState<string>("my-projects");
  const [showModal, setShowModal] = useState(false);
  const [manageProject, setManageProject] = useState(false);
  const [CPEcrow, setCPEcrow] = useState(false);

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <TabButton
                active={activeTab === "my-projects"}
                onClick={() => setActiveTab("my-projects")}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                    >
                      <circle cx={17} cy={7} r={3}></circle>
                      <circle cx={7} cy={17} r={3}></circle>
                      <path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></path>
                    </g>
                  </svg>
                }
              >
                My Projects
              </TabButton>

              <TabButton
                active={activeTab === "invited"}
                onClick={() => setActiveTab("invited")}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3h6m-3-3v6"
                    ></path>
                  </svg>
                }
              >
                Invited Projects
              </TabButton>

              <TabButton
                active={activeTab === "peer-confirmation"}
                onClick={() => setActiveTab("peer-confirmation")}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="m13.5 13.5l-1.778-1.778M3.903 5.816q-.35.027-.708.028c-.474 0-.939-.043-1.392-.094A1.326 1.326 0 0 1 .638 4.582C.59 4.132.55 3.67.55 3.198c0-.47.041-.933.09-1.383c.064-.61.555-1.1 1.164-1.168c.453-.05.918-.094 1.392-.094s.939.043 1.391.094c.61.068 1.1.558 1.165 1.168c.049.45.09.912.09 1.383q-.001.336-.025.666M3.195 8.155c-.474 0-.939.044-1.392.094c-.61.068-1.1.559-1.165 1.168c-.048.45-.089.913-.089 1.384s.041.933.09 1.384c.064.61.555 1.1 1.164 1.168c.453.05.918.094 1.392.094s.939-.044 1.391-.094M7.931 3.198c0-.471.04-.933.089-1.383c.065-.61.556-1.1 1.165-1.168c.453-.05.918-.094 1.392-.094s.938.043 1.391.094c.61.068 1.1.558 1.165 1.168c.048.45.09.912.09 1.383c0 .472-.042.934-.09 1.384a1.3 1.3 0 0 1-.11.4m-4.199 7.711c2.479 0 3.873-1.394 3.873-3.873s-1.394-3.873-3.873-3.873S4.951 6.34 4.951 8.82s1.394 3.873 3.873 3.873"
                    ></path>
                  </svg>
                }
              >
                Peer Confirmation
              </TabButton>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="bg-[#157BFF] whitespace-nowrap justify-center hover:bg-blue-700 text-white px-4 py-2 rounded-sm flex items-center gap-2 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"></path>
              </svg>
              Create Project
            </button>
            {/* <button
              onClick={() => setManageProject(true)}
              className="bg-[#157BFF] whitespace-nowrap justify-center hover:bg-blue-700 text-white px-4 py-2 rounded-sm flex items-center gap-2 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"></path>
              </svg>
              Convert 
            </button> */}
          </div>

          <div className="space-y-2">
            {projects.map((project) => (
              <ProjectCard
                onManageClick={() => setManageProject(true)}
                onCPEClick={()=>setCPEcrow(true)}
                key={project.id}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
      {CPEcrow && <ConvertProjectToEscrow setOpenModal={setCPEcrow} />}
      <ManageProject
        open={manageProject}
        onClose={() => setManageProject(false)}
      />
      <AddProjectsModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ProjectDashboard;

import React, { useState } from "react";
import { useProject } from "@/hooks/useProjects";

const AdminUserProject = ({}) => {
  const [activeTab, setActiveTab] = useState<string>("my-projects");
  const [showModal, setShowModal] = useState(false);
  const [manageProject, setManageProject] = useState(false);
  const [ConfirmCPEscrow, setConfirmCPEscrow] = useState(false);

  const [selectedProjectId, setSelectedProjectId] = useState<string>("");
  const [selectedProjectName, setSelectedProjectName] = useState<string>("");

  const { getAllProject } = useProject();
  const isLoading = getAllProject?.isLoading;
  const data = getAllProject?.data?.data || [];

  return (
    <div className="w-full bg-gray-50 sm:!py-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-3 sm:!p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div className="mb-2">
              <ul className="flex whitespace-nowrap flex-wrap w-full items-center gap-4 *:cursor-pointer font-medium text-gray-500">
                <li
                  onClick={() => setActiveTab("my-projects")}
                  className={` flex items-center gap-1 ${
                    activeTab === "my-projects"
                      ? "border-b-2 text-[#157bff] px-2 border-b-[#157bff]"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
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
                  Projects
                </li>
                <li
                  onClick={() => setActiveTab("escrow-projects")}
                  className={` flex items-center gap-1 ${
                    activeTab === "escrow-projects"
                      ? "border-b-2 text-[#157bff] px-2 border-b-[#157bff]"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="m243.07 65.728l34.263 14.684v46.42l-41.306-17.703l-107.695 61.54l116.919 66.811L256 243.623v146.285l106.667-60.952v-94.288h42.666v119.048l-10.749 6.143l-149.333 85.333l-10.584 6.048l-10.585-6.048l-149.333-85.333L64 353.716V158.289l10.749-6.142l149.333-85.333l9.224-5.271zm-29.737 324.18V268.383l-106.666-60.952v121.525zm106.666-283.24h55.163l-91.581 91.582l30.17 30.17l91.581-91.582v55.163h42.667v-128h-128z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Escrow Projects
                </li>
                <li
                  onClick={() => setActiveTab("invited")}
                  className={` flex items-center gap-1 ${
                    activeTab === "invited"
                      ? "border-b-2 text-[#157bff] px-2 border-b-[#157bff]"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
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
                  Invited Projects
                </li>
                <li
                  onClick={() => setActiveTab("peer-confirmation")}
                  className={` flex items-center gap-1 ${
                    activeTab === "peer-confirmation"
                      ? "border-b-2 text-[#157bff] px-2 border-b-[#157bff]"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
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
                  Peer Confirmation
                </li>
              </ul>
            </div>
            {activeTab === "my-projects" && (
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#157BFF] whitespace-nowrap justify-center hover:bg-blue-700 text-white px-2 sm:!px-4 py-2 rounded-sm flex items-center gap-2 transition"
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
            )}
          </div>
          {activeTab === "my-projects" && (
            <MyProjectsContent
              projects={data}
              setManageProject={setManageProject}
              isLoading={isLoading}
              setSelectedProjectId={setSelectedProjectId}
              setConfirmCPEscrow={setConfirmCPEscrow}
            />
          )}
          {activeTab === "escrow-projects" && (
            <EscrowProjectsContent
              projects={data}
              setManageProject={setManageProject}
              isLoading={isLoading}
              setSelectedProjectId={setSelectedProjectId}
              selectedProjectId={selectedProjectId}
            />
          )}
          {activeTab === "invited" && <InvitedProjectsContent />}
          {activeTab === "peer-confirmation" && <PeerConfirmationContent />}
        </div>
      </div>

      <ManageProject
        open={manageProject}
        onClose={() => setManageProject(false)}
        projectId={selectedProjectId}
      />

      {ConfirmCPEscrow && (
        <ConfirmConvertProjectToEscrow
          projectId={selectedProjectId!}
          setOpenModal={setConfirmCPEscrow}
        />
      )}

      <AddProjectsModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default AdminUserProject;

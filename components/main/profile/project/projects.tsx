import React, { useState } from "react";
import { Lock, Globe, MoreHorizontal } from "lucide-react";
import AddProjectsModal from "./addProject";
import ManageProject from "./manageProject";
import ConvertProjectToEscrow from "./CPEcrow";
import { useRouter } from "next/navigation";
import ConfirmConvertProjectToEscrow from "./confirmCPEscrow";
import WithdrawFunds from "../finance/withdrawFunds";
import FundWalletSideModal from "../finance/fundEscrowWallet.tsx";
import ManageEscrowFunds from "../finance/manageEscrow";
import RecallEscrowWallet from "../finance/recallEscrowFund";

// ======================
// Type Definitions
// ======================
interface ProjectCardProps extends Project {
  onManageClick?: () => void;
  onCPEClick?: () => void;
  onConfirmCPEClick?: () => void;
}

interface Project {
  id: number;
  imageSrc: string | null;
  isPrivate: boolean;
  projectName: string;
  collaborators: number;
  createdDate: string;
}

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
  onCPEClick,
  onConfirmCPEClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-white h-40 flex rounded-md shadow-sm border border-gray-200 overflow-scroll hide-scrollbar hover:shadow-md transition-shadow">
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
      <div className="w-3/5 md:!p-4 p-2 flex flex-col justify-between">
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
        <div className="flex md:!flex-row flex-col whitespace-nowrap items-center gap-1.5 mt-2">
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
            onClick={() => onConfirmCPEClick?.()}
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
// EscrowProjectCard Component
// ======================
const EscrowProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  isPrivate,
  projectName,
  collaborators,
  createdDate,
  onManageClick,
  onCPEClick,
  onConfirmCPEClick,
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
// Tab Content Components (Placeholder)
// ======================

const MyProjectsContent: React.FC<{
  projects: Project[];
  onManageClick?: (id: number) => void;
  onCPEClick?: (id: number) => void;
  onConfirmCPEClick?: (id: number) => void;
}> = ({ projects, onManageClick, onCPEClick, onConfirmCPEClick }) => {
  return (
    <div className="space-y-2">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            onManageClick={() => onManageClick?.(project.id)}
            onCPEClick={() => onCPEClick?.(project.id)}
            onConfirmCPEClick={() => onConfirmCPEClick?.(project.id)}
            key={project.id}
            {...project}
          />
        ))
      ) : (
        <div className="sm:!py-8 py-4 text-center text-gray-500">
          <p className="text-lg font-medium">No Projects</p>
          <p className="text-sm mt-1">
            Create your first project to get started
          </p>
        </div>
      )}
    </div>
  );
};

const EscrowProjectsContent: React.FC<{
  projects: Project[];
  onManageClick?: (id: number) => void;
  onCPEClick?: (id: number) => void;
}> = ({ projects, onManageClick, onCPEClick }) => {
  const [showManageFunds, setManageFunds] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showTransactionFilter, setShowTransactionFilter] = useState(false);
  const [showAPT, setShowAPT] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "transactions" | "escrow" | "fund"
  >("transactions");
  const [recallFunds, setRecallFunds] = useState(false);
  const [withdrawFunds, setWithdrawFunds] = useState(false);

  return (
    <>
      <div className="space-y-2">
        <div className="flex lg:!flex-row flex-col items-center justify-between gap-2 my-5">
          <div className="flex w-full h-[110px] overflow-y-scroll hide-scrollbar flex-col justify-between gap-3 p-2 bg-white shadow-md min-w-[250px] rounded">
            <div className="flex items-center">
              <p
                className="text-white font-bold text-xl w-full px-3 py-2 rounded-sm leading-none"
                style={{ backgroundColor: "#202224" }}
              >
                $625.00
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p
                onClick={() => setActiveTab("transactions")}
                className={`text-xs cursor-pointer transition-colors duration-200 ${
                  activeTab === "transactions" ? "text-black" : "text-gray-300"
                }`}
              >
                In Escrow
              </p>
            </div>
          </div>

          <div className="flex w-full h-[110px] overflow-y-scroll hide-scrollbar flex-col justify-between gap-3 p-2 bg-white shadow-md min-w-[250px] rounded">
            <div className="flex items-center">
              <p
                className="text-white font-bold text-xl w-full px-3 py-2 rounded-sm leading-none"
                style={{ backgroundColor: "#A6A6A6" }}
              >
                $425.00
              </p>
            </div>
            <div className="mt-2">
              <div className="flex flex-row lg:flex-col gap-1">
                {/* <button
                  onClick={() => setActiveTab("fund")}
                  className="bg-black w-full text-white text-[9px] py-1 rounded flex items-center justify-center gap-1"
                >
                  Allocate Funds
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.2053 17.5884C37.8606 17.5874 39.4652 17.0169 40.7497 15.9727C42.0341 14.9284 42.9202 13.4741 43.2591 11.8538H49.5235C49.8088 11.8518 50.0873 11.7657 50.324 11.6064C50.5608 11.4471 50.7454 11.2216 50.8547 10.958C50.9641 10.6944 50.9934 10.4045 50.939 10.1244C50.8846 9.84424 50.7488 9.58635 50.5487 9.38289C50.2755 9.1131 49.9075 8.96099 49.5235 8.95911H43.2693C42.939 7.32827 42.0548 5.86185 40.7667 4.8085C39.4786 3.75515 37.8658 3.17969 36.2018 3.17969C34.5379 3.17969 32.9251 3.75515 31.637 4.8085C30.3489 5.86185 29.4647 7.32827 29.1343 8.95911H7.07062C6.69893 8.97718 6.34844 9.13756 6.09177 9.407C5.8351 9.67645 5.69193 10.0343 5.69193 10.4064C5.69193 10.7786 5.8351 11.1364 6.09177 11.4059C6.34844 11.6753 6.69893 11.8357 7.07062 11.8538H29.148C29.4872 13.4752 30.3742 14.9305 31.6601 15.9748C32.9459 17.0192 34.5521 17.589 36.2087 17.5884M36.2087 14.581C35.6567 14.581 35.11 14.4723 34.6 14.261C34.09 14.0498 33.6266 13.7401 33.2363 13.3498C32.8459 12.9594 32.5363 12.496 32.3251 11.986C32.1138 11.476 32.0051 10.9294 32.0051 10.3774C32.0051 9.82538 32.1138 9.27876 32.3251 8.76875C32.5363 8.25875 32.8459 7.79535 33.2363 7.40501C33.6266 7.01467 34.09 6.70504 34.6 6.49379C35.11 6.28254 35.6567 6.17381 36.2087 6.17381C37.3235 6.17381 38.3927 6.61669 39.1811 7.40501C39.9694 8.19334 40.4123 9.26254 40.4123 10.3774C40.4123 11.4923 39.9694 12.5615 39.1811 13.3498C38.3927 14.1381 37.3235 14.581 36.2087 14.581ZM21.1578 35.0077C22.8193 35.0085 24.4301 34.4355 25.7179 33.3856C27.0057 32.3357 27.8914 30.8733 28.2253 29.2457L49.5269 29.2218C49.8115 29.2191 50.0891 29.1329 50.3252 28.9737C50.5612 28.8146 50.7453 28.5896 50.8545 28.3267C50.9638 28.0638 50.9934 27.7746 50.9396 27.4951C50.8858 27.2155 50.7511 26.9579 50.5521 26.7543C50.2789 26.4845 49.9109 26.3324 49.5269 26.3305L28.2253 26.351C27.89 24.7257 27.0044 23.2657 25.7178 22.2174C24.4313 21.1691 22.8225 20.5967 21.1629 20.5967C19.5033 20.5967 17.8945 21.1691 16.608 22.2174C15.3214 23.2657 14.4358 24.7257 14.1005 26.351L7.07062 26.3305C6.68722 26.3305 6.31952 26.4828 6.04841 26.7539C5.77731 27.0251 5.625 27.3928 5.625 27.7762C5.625 28.1596 5.77731 28.5273 6.04841 28.7984C6.31952 29.0695 6.68722 29.2218 7.07062 29.2218L14.1005 29.2457C14.4342 30.8722 15.3189 32.3337 16.6052 33.3835C17.8916 34.4332 19.4974 35.0069 21.1578 35.0077ZM21.1612 32.0002C20.0463 32.0002 18.9771 31.5574 18.1888 30.769C17.4005 29.9807 16.9576 28.9115 16.9576 27.7967C16.9576 26.6818 17.4005 25.6126 18.1888 24.8243C18.9771 24.0359 20.0463 23.5931 21.1612 23.5931C22.2761 23.5931 23.3453 24.0359 24.1336 24.8243C24.9219 25.6126 25.3648 26.6818 25.3648 27.7967C25.3648 28.9115 24.9219 29.9807 24.1336 30.769C23.3453 31.5574 22.2761 32.0002 21.1612 32.0002ZM36.1916 52.2937C37.8569 52.2932 39.4708 51.7163 40.7591 50.661C42.0474 49.6057 42.9307 48.137 43.2591 46.5043L49.5235 46.5932C49.8088 46.5912 50.0873 46.5051 50.324 46.3458C50.5608 46.1865 50.7454 45.961 50.8547 45.6974C50.9641 45.4339 50.9934 45.1439 50.939 44.8638C50.8846 44.5837 50.7488 44.3258 50.5487 44.1223C50.2755 43.8525 49.9075 43.7004 49.5235 43.6985L43.2488 43.6063C42.9088 41.9863 42.0218 40.5326 40.7368 39.4893C39.4517 38.446 37.8468 37.8765 36.1916 37.8765C34.5363 37.8765 32.9315 38.446 31.6464 39.4893C30.3614 40.5326 29.4744 41.9863 29.1343 43.6063L7.06721 43.6985C6.69552 43.7166 6.34502 43.877 6.08835 44.1464C5.83168 44.4159 5.68852 44.7737 5.68852 45.1459C5.68852 45.518 5.83168 45.8759 6.08835 46.1453C6.34502 46.4148 6.69552 46.5751 7.06721 46.5932L29.1241 46.5043C29.4524 48.137 30.3358 49.6057 31.6241 50.661C32.9124 51.7163 34.5262 52.2932 36.1916 52.2937ZM36.1916 49.2862C35.0767 49.2862 34.0075 48.8433 33.2192 48.055C32.4309 47.2667 31.988 46.1975 31.988 45.0826C31.988 43.9678 32.4309 42.8986 33.2192 42.1102C34.0075 41.3219 35.0767 40.8791 36.1916 40.8791C37.3064 40.8791 38.3756 41.3219 39.164 42.1102C39.9523 42.8986 40.3952 43.9678 40.3952 45.0826C40.3952 46.1975 39.9523 47.2667 39.164 48.055C38.3756 48.8433 37.3064 49.2862 36.1916 49.2862Z"
                      fill="white"
                    />
                  </svg>
                </button> */}
                {/* <button
                  onClick={() => setShowModal(true)}
                  className=" bg-[#979797] w-full text-white text-[9px] py-1 rounded flex items-center justify-center gap-1"
                >
                 All Transaction
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 55 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.6627 4.48438L42.0286 9.5973C42.485 9.73979 42.884 10.0245 43.1672 10.4097C43.4504 10.795 43.603 11.2607 43.6028 11.7389V15.6969H48.0878C48.6826 15.6969 49.253 15.9332 49.6735 16.3537C50.0941 16.7743 50.3304 17.3447 50.3304 17.9394V35.8795C50.3304 36.4743 50.0941 37.0447 49.6735 37.4652C49.253 37.8858 48.6826 38.122 48.0878 38.122L40.867 38.1243C39.9991 39.268 38.9451 40.2771 37.7274 41.1068L25.6627 49.3346L13.598 41.1091C11.7873 39.8744 10.3055 38.2162 9.28151 36.2785C8.25756 34.3408 7.72243 32.1823 7.72266 29.9907V11.7389C7.72293 11.2611 7.87579 10.7959 8.15896 10.4111C8.44214 10.0262 8.84082 9.74192 9.2969 9.59954L25.6627 4.48438ZM25.6627 9.18019L12.2077 13.3871V29.9907C12.2074 31.3636 12.5222 32.7183 13.1279 33.9504C13.7337 35.1824 14.6141 36.259 15.7015 37.0972L16.1253 37.4022L25.6627 43.9055L34.1439 38.122H23.4202C22.8255 38.122 22.2551 37.8858 21.8345 37.4652C21.414 37.0447 21.1777 36.4743 21.1777 35.8795V17.9394C21.1777 17.3447 21.414 16.7743 21.8345 16.3537C22.2551 15.9332 22.8255 15.6969 23.4202 15.6969H39.1178V13.3871L25.6627 9.18019ZM25.6627 26.9095V33.637H45.8453V26.9095H25.6627ZM25.6627 22.4245H45.8453V20.1819H25.6627V22.4245Z"
                      fill="white"
                    />
                  </svg>
                </button> */}
                <p
                  onClick={() => setActiveTab("transactions")}
                  className={`text-xs whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                    activeTab === "transactions"
                      ? "text-black"
                      : "text-gray-300"
                  }`}
                >
                  Total Paid out
                </p>
                {/* <button
                  onClick={() => setRecallFunds(true)}
                  className=" w-full bg-[#FAAF40] text-white text-[9px] py-1 rounded flex items-center justify-center gap-1"
                >
                  Contributors
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 57 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.875 29.8819V18.3906H49.2435V29.8819C49.2435 38.5486 49.2435 42.883 46.5499 45.5743C43.8564 48.2655 39.5242 48.2678 30.8575 48.2678H26.261C17.5943 48.2678 13.2598 48.2678 10.5685 45.5743C7.8773 42.8807 7.875 38.5486 7.875 29.8819Z"
                      stroke="white"
                      stroke-width="3.44737"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.875 18.3897L9.86298 13.9701C11.4074 10.5412 12.1773 8.82897 13.7401 7.8637C15.3029 6.89844 17.3093 6.89844 21.3197 6.89844H35.7987C39.8091 6.89844 41.8132 6.89844 43.3783 7.8637C44.9411 8.82897 45.711 10.5412 47.2555 13.9701L49.2435 18.3897M28.5592 18.3897V6.89844"
                      stroke="white"
                      stroke-width="3.44737"
                      stroke-linecap="round"
                    />
                    <path
                      d="M20.5163 31.0262H33.1567C34.3757 31.0262 35.5449 31.5105 36.4069 32.3725C37.2689 33.2345 37.7532 34.4036 37.7532 35.6227C37.7532 36.8417 37.2689 38.0109 36.4069 38.8729C35.5449 39.7349 34.3757 40.2192 33.1567 40.2192H30.8584M23.9637 26.4297L19.3672 31.0262L23.9637 35.6227"
                      stroke="white"
                      stroke-width="3.44737"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button> */}
              </div>
            </div>
          </div>

          <div className="flex w-full h-[110px] overflow-y-scroll hide-scrollbar flex-col justify-between gap-3 p-2 bg-white shadow-md min-w-[250px] rounded">
            <div className="flex items-center">
              <p
                className="text-white font-bold text-xl w-full px-3 py-2 rounded-sm leading-none"
                style={{ backgroundColor: "#555454" }}
              >
                $200.00
              </p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p
                onClick={() => setActiveTab("escrow")}
                className={`text-xs pt-1 cursor-pointer transition-colors duration-200 ${
                  activeTab === "escrow" ? "text-black" : "text-gray-300"
                }`}
              >
                Available Balance
              </p>
              <button
                onClick={() => setWithdrawFunds(true)}
                className="bg-[#FAAF40] cursor-pointer text-white text-[10px] flex items-center gap-1 p-1 rounded"
              >
                Withdraw Funds
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.46484 20.2267C5.46484 17.4995 6.56302 15.8294 8.83683 14.5627L18.2009 9.35204C23.1062 6.62483 25.5601 5.25781 28.2485 5.25781C30.937 5.25781 33.3908 6.62483 38.2961 9.35204L47.6602 14.5627C49.9318 15.8294 51.0322 17.4995 51.0322 20.2267C51.0322 20.9649 51.0322 21.3363 50.9525 21.6393C50.5287 23.2341 49.0819 23.487 47.6853 23.487H8.81177C7.41513 23.487 5.97064 23.2364 5.54459 21.6393C5.46484 21.334 5.46484 20.9649 5.46484 20.2267Z"
                    stroke="white"
                    stroke-width="3.41755"
                  />
                  <path
                    d="M28.2383 16.6484H28.2588"
                    stroke="white"
                    stroke-width="4.55674"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0216 23.4844V42.8505M19.1351 23.4844V42.8505M37.362 23.4844V42.8505M46.4755 23.4844V42.8505M44.1971 42.8505H12.2999C10.4872 42.8505 8.74863 43.5706 7.4668 44.8525C6.18497 46.1343 5.46484 47.8728 5.46484 49.6856C5.46484 49.9877 5.58486 50.2775 5.7985 50.4911C6.01214 50.7048 6.3019 50.8248 6.60403 50.8248H49.893C50.1952 50.8248 50.4849 50.7048 50.6986 50.4911C50.9122 50.2775 51.0322 49.9877 51.0322 49.6856C51.0322 47.8728 50.3121 46.1343 49.0303 44.8525C47.7484 43.5706 46.0099 42.8505 44.1971 42.8505Z"
                    stroke="white"
                    stroke-width="3.41755"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {projects.length > 0 ? (
          projects.map((project) => (
            <EscrowProjectCard
              onManageClick={() => onManageClick?.(project.id)}
              onCPEClick={() => onCPEClick?.(project.id)}
              key={project.id}
              {...project}
            />
          ))
        ) : (
          <div className="py-8 text-center text-gray-500">
            <p className="text-lg font-medium">No Projects</p>
            <p className="text-sm mt-1">
              Create your first project to get started
            </p>
          </div>
        )}
      </div>
      <WithdrawFunds
        open={withdrawFunds}
        onClose={() => setWithdrawFunds(false)}
      />
      <FundWalletSideModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
      <ManageEscrowFunds
        open={showManageFunds}
        onClose={() => setManageFunds(false)}
      />
      <RecallEscrowWallet
        open={recallFunds}
        onClose={() => setRecallFunds(false)}
      />
    </>
  );
};
const InvitedProjectsContent: React.FC = () => {
  return (
    <div className="py-8 text-center text-gray-500">
      <p className="text-lg font-medium">Invited Projects</p>
      <p className="text-sm mt-1">Add your invited projects content here</p>
    </div>
  );
};

const PeerConfirmationContent: React.FC = () => {
  return (
    <div className="py-8 text-center text-gray-500">
      <p className="text-lg font-medium">Peer Confirmation</p>
      <p className="text-sm mt-1">Add your peer confirmation content here</p>
    </div>
  );
};

// ======================
// Main Dashboard
// ======================
const ProjectDashboard: React.FC<ProjectDashboardProps> = ({
  projects = [
    {
      id: 1,
      imageSrc: null,
      isPrivate: true,
      projectName: "Project Alpha",
      collaborators: 5,
      createdDate: "2 days ago",
    },
    {
      id: 2,
      imageSrc: null,
      isPrivate: false,
      projectName: "Project Beta",
      collaborators: 3,
      createdDate: "1 week ago",
    },
  ],
}) => {
  const [activeTab, setActiveTab] = useState<string>("my-projects");
  const [showModal, setShowModal] = useState(false);
  const [manageProject, setManageProject] = useState(false);
  const [CPEcrow, setCPEcrow] = useState(false);
  const [ConfirmCPEscrow, setConfirmCPEscrow] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "my-projects":
        return (
          <MyProjectsContent
            projects={projects}
            onManageClick={(id) => setManageProject(true)}
            onCPEClick={(id) => setCPEcrow(true)}
            onConfirmCPEClick={(id) => setConfirmCPEscrow(true)}
          />
        );
      case "escrow-projects":
        return (
          <EscrowProjectsContent
            projects={projects}
            onManageClick={(id) => setManageProject(true)}
            onCPEClick={(id) => setCPEcrow(true)}
          />
        );
      case "invited":
        return <InvitedProjectsContent />;
      case "peer-confirmation":
        return <PeerConfirmationContent />;
      default:
        return (
          <MyProjectsContent
            projects={projects}
            onManageClick={(id) => setManageProject(true)}
            onCPEClick={(id) => setCPEcrow(true)}
            onConfirmCPEClick={(id) => setConfirmCPEscrow(true)}
          />
        );
    }
  };
  const renderCreateProject = () => {
    switch (activeTab) {
      case "my-projects":
        return (
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#157BFF] whitespace-nowrap justify-center hover:bg-blue-700 text-white sm:!px-4 px-2 py-2 rounded-sm flex items-center gap-2 transition"
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
        );
      case "escrow-projects":
        return;
      case "invited":
        return;
      case "peer-confirmation":
        return;
      default:
        return (
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
        );
    }
  };

  return (
    <div className="w-full bg-gray-50 sm:!py-8 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-3 sm:!p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

            <div className="mb-2">
              <ul className="flex w-full items-center gap-4 *:cursor-pointer font-medium text-gray-500">
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
                  Escrow Projects
                </li>
                <li
                  onClick={() => setActiveTab("invited")}
                  className={` flex items-center gap-1 ${
                    activeTab === "Audit Log"
                      ? "border-b-2 text-[#157bff] px-2 border-b-[#157bff]"
                      : ""
                  }`}
                >
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
                  Peer Confirmation
                </li>
              </ul>
            </div>

            {renderCreateProject()}
          </div>

          {/* Tab Content */}
          {renderTabContent()}
        </div>
      </div>
      {CPEcrow && <ConvertProjectToEscrow setCPEcrow={setCPEcrow} />}
      {ConfirmCPEscrow && (
        <ConfirmConvertProjectToEscrow setOpenModal={setConfirmCPEscrow} />
      )}
      <ManageProject
        open={manageProject}
        onClose={() => setManageProject(false)}
      />

      <AddProjectsModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ProjectDashboard;

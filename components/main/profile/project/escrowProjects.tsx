import { useState } from "react";
import FundWalletSideModal from "../finance/fundEscrowWallet.tsx";
import ManageEscrowFunds from "../finance/manageEscrow";
import RecallEscrowWallet from "../finance/recallEscrowFund";
import EscrowProjectCard from "./escrowCard";
import { Loader2 } from "lucide-react";
import WithdrawFunds from "../finance/withdrawFunds";
import ConvertProjectToEscrow from "./CPEcrow";
import { ProjectI } from "@/types/project";

const EscrowProjectsContent: React.FC<{
  projects: ProjectI[];
  isLoading: boolean;
  setManageProject: any;
  setSelectedProjectId: any;
  selectedProjectId: string;
}> = ({
  projects,
  isLoading,
  setSelectedProjectId,
  setManageProject,
  selectedProjectId,
}) => {
  const [showManageFunds, setManageFunds] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "transactions" | "escrow" | "fund"
  >("transactions");

  const [CPEcrow, setCPEcrow] = useState(false);

  const [recallFunds, setRecallFunds] = useState(false);
  const [withdrawFunds, setWithdrawFunds] = useState(false);

  const onManageClick = (id: string) => {
    setSelectedProjectId(id);
    setManageProject(true);
  };

  const onCPEClick = (id: string) => {
    setSelectedProjectId(id);
    setCPEcrow(true);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
        <Loader2 size={20} className="animate-spin text-[#157bff]" />
        <p className="text-sm font-medium">Loading escrow projects...</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-2">
        <div className="flex overflow-x-scroll hide-scrollbar  lg:!flex-row flex-col items-center justify-between gap-2 my-5">
          <div className="flex w-full h-[110px] overflow-y-scroll hide-scrollbar flex-col justify-between gap-3 p-2 bg-white shadow-md min-w-[250px] rounded">
            <div className="flex items-center">
              <p
                className="text-white font-bold text-xl w-full px-3 py-2 rounded-sm leading-none"
                style={{ backgroundColor: "#A6A6A6" }}
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
              </div>
            </div>
          </div>

          <div className="flex w-full h-[110px] overflow-y-scroll hide-scrollbar flex-col justify-between gap-3 p-2 bg-white shadow-md min-w-[250px] rounded">
            <div className="flex items-center">
              <p
                className="text-white font-bold text-xl w-full px-3 py-2 rounded-sm leading-none"
                style={{ backgroundColor: "#A6A6A6" }}
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
          projects
            ?.filter((project: any) => project.isEscrowed)
            .map((project: any) => (
              <EscrowProjectCard
                key={project.id}
                {...project}
                onManageClick={() => onManageClick(project.id)}
                onCPEClick={() => onCPEClick(project.id)}
              />
            ))
        ) : (
          <div className="py-8 text-center text-gray-500">
            <p className="text-lg font-medium">No Escrow Projects</p>
            <p className="text-sm mt-1">Convert your projects to escrow</p>
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

      {CPEcrow && selectedProjectId && (
        <ConvertProjectToEscrow
          setCPEcrow={setCPEcrow}
          project={projects.find((p) => p.id === selectedProjectId)!}
        />
      )}
    </>
  );
};

export default EscrowProjectsContent;

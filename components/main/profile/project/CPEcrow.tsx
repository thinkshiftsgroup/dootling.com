"use client";
import { X } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AuditTrialsTable from "../finance/auditTrails";
import ContributionHeatmap from "../../landing-page/heatMap";
import Tabs from "./convertEscrowToProject/tabs";
import OverviewTab from "./convertEscrowToProject/overViewTab";
import MilestonesTab from "./convertEscrowToProject/milestonesTab";
import ContributorsTab from "./convertEscrowToProject/contributorsTab";
import SettingsTab from "./convertEscrowToProject/settingsTab";
import WithdrawFunds from "../finance/withdrawFunds";
import FundWalletSideModal from "../finance/fundEscrowWallet.tsx";

const ConvertProjectToEscrow = ({
  setCPEcrow,
  
}: {
  setCPEcrow: (open: boolean) => void;
}) => {
  const [userName, setUserName] = useState("");
  const [userList, setUserList] = useState<string[]>([]);

  const [withdrawFunds, setWithdrawFunds] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = () => {
    if (!userName.trim()) return;
    setUserList((prev) => [...prev, userName.trim()]);
    setUserName("");
  };

  const [purpose, setPurpose] = useState("");
  const [selected, setSelectedRadio] = useState("invite");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };

  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    setCollaborators([...collaborators, inputValue.trim()]);
    setInputValue("");
  };

  const handleDelete = (index: number) => {
    const updated = collaborators.filter((_, i) => i !== index);
    setCollaborators(updated);
  };

  const [tabs, setTabs] = useState("Overview");

  return (
    <div
      onClick={() => setCPEcrow(false)}
      className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 h-[90vh] overflow-y-scroll hide-scrollbar rounded shadow-lg max-w-4xl w-full mx-4"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="sm:!text-xl !text-base text-[#525256] font-bold">
              Escrow Smart Contract
            </h1>
            <p className=" sm:!text-base text-xs  text-[#404040]">
              <span className="text-[#157BFF]">For:</span>Thinkemphaty Vault App
              Project
            </p>
          </div>
          <X
            size={20}
            className="text-[#525256] cursor-pointer"
            onClick={() => setCPEcrow(false)}
          />
        </div>
        <Tabs tabs={tabs} setTabs={setTabs} />
        {tabs === "Overview" && (
          <OverviewTab
            handleChange={handleChange}
            selected={selected}
            setWithdrawFunds={setWithdrawFunds}
            setShowModal={setShowModal}
          />
        )}
        {/* {tabs === "Milsetones" && <MilestonesTab />} */}
        {tabs === "Contributors" && <ContributorsTab />}

        {tabs === "Audit Log" && (
          <div>
            <AuditTrialsTable />
          </div>
        )}
        {tabs === "Settings" && <SettingsTab />}
      </div>
      <WithdrawFunds
        open={withdrawFunds}
        onClose={() => setWithdrawFunds(false)}
      />
      <FundWalletSideModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default ConvertProjectToEscrow;

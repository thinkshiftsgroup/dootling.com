"use client";
import { ChevronDown, Filter } from "lucide-react";
import React, { useState } from "react";
import TransactionsTable from "./transactionsTable";
import FundWalletSideModal from "./fundEscrowWallet.tsx";
import ManageEscrowFunds from "./manageEscrow";
import FundAllocation from "./fundAllocation";
import PayoutTransaction from "./payoutTransaction";
import PayoutTransactions from "./payoutTransaction";
import PayoutTable from "./payoutTransaction";
import RecallEscrowWallet from "./recallEscrowFund";
import WithdrawFunds from "./withdrawFunds";
import { useRoleStore } from "@/stores/userRoleStore";

const ProfileFinance = () => {
  const [showManageFunds, setManageFunds] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showTransactionFilter, setShowTransactionFilter] = useState(false);
  const [showAPT, setShowAPT] = useState(false);

  // const [showTransactions, setShowTransactions] = useState(true);
  // const [fundAllocation, setFundAllocation] = useState(false);
  // const [showEscrowTransactions, setShowEscrowTransactions] = useState(false);

  const [activeTab, setActiveTab] = useState<
    "transactions" | "escrow" | "fund"
  >("transactions");

  const [recallFunds, setRecallFunds] = useState(false);

  const [withdrawFunds, setWithdrawFunds] = useState(false);

  const { isUser } = useRoleStore();
  
  return (
    <div className="rounded-sm bg-white px-4 py-2">
      <div className="flex lg:flex-row flex-col items-center justify-between gap-2 my-5">
        <div className="flex w-full h-[160px] overflow-y-scroll hide-scrollbar flex-col justify-between gap-3 p-2 bg-white shadow-md min-w-[250px] rounded">
          <h1 className="font-bold text-base border-b-2 border-gray-100 pb-1 text-black leading-tight w-fit">
            Available Wallet Balance
          </h1>
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
                activeTab === "transactions" ? "text-black" : "text-gray-400"
              }`}
            >
              All Transactions
            </p>
            {isUser && ( <button
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
            </button>)}
          </div>
        </div>

        <div className="flex w-full h-[160px] overflow-y-scroll hide-scrollbar flex-col justify-between gap-3 p-2 bg-white shadow-md min-w-[250px] rounded">
          <h1 className="font-bold text-base border-b-2 border-gray-100 pb-1 text-black leading-tight w-fit">
            Next payout
          </h1>
          <div className="flex items-center">
            <p
              className="text-white font-bold text-xl w-full px-3 py-2 rounded-sm leading-none"
              style={{ backgroundColor: "#A6A6A6" }}
            >
              $122.00
            </p>
          </div>
          <div className="mt-2">
            <p
              className={`text-xs pt-1 cursor-pointer transition-colors duration-200 text-gray-400 `}
            >
              All Payout Transactions
            </p>
          </div>
        </div>

        <div className="flex w-full h-[160px] overflow-y-scroll hide-scrollbar flex-col justify-between gap-3 p-2 bg-white shadow-md min-w-[250px] rounded">
          <h1 className="font-bold text-base border-b-2 border-gray-100 pb-1 text-black leading-tight w-fit">
            Total Payout
          </h1>
          <div className="flex items-center">
            <p
              className="text-white font-bold text-xl w-full px-3 py-2 rounded-sm leading-none"
              style={{ backgroundColor: "#A6A6A6" }}
            >
              $1220.00
            </p>
          </div>
          <div className="mt-2">
            <p
              onClick={() => setActiveTab("escrow")}
              className={`text-xs pt-1 cursor-pointer transition-colors duration-200 ${
                activeTab === "escrow" ? "text-black" : "text-gray-400"
              }`}
            >
              Total Payout
            </p>
          </div>
        </div>
      </div>

      {activeTab === "transactions" && (
        <div className="!rounded !bg-white !p-4 !shadow-md !my-5">
          <div>
            <div className="!flex !items-center !justify-between !mb-5">
              <h1 className="!text-base lg:!text-lg !font-semibold !text-black">
                All Transactions
              </h1>
              <Filter
                className="block sm:!hidden"
                onClick={() => setShowTransactionFilter((prev) => !prev)}
                size={20}
              />
            </div>

            <div className="!text-black !p-2 sm:!p-0 !whitespace-nowrap !border !bg-[#F9F9FB] !text-xs !font-medium !justify-around !border-[#D5D5D5] hidden sm:!flex sm:!flex-row !flex-col !items-center !rounded-md">
              <span className="!flex sm:!pl-1 !pl-0 !w-full sm:!w-1/3 !cursor-pointer">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 91 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.1609 56.8028L82.3762 77.0181C83.0867 77.7292 83.4857 78.6933 83.4853 79.6985C83.485 80.7038 83.0853 81.6676 82.3743 82.3782C81.6633 83.0887 80.6991 83.4877 79.6939 83.4874C78.6887 83.487 77.7248 83.0873 77.0142 82.3763L56.7989 62.161C50.7558 66.8416 43.1565 69.0443 35.547 68.3209C27.9376 67.5974 20.8895 64.0023 15.8366 58.2668C10.7837 52.5313 8.10559 45.0863 8.34705 37.4463C8.58851 29.8063 11.7314 22.5453 17.1364 17.1403C22.5414 11.7353 29.8024 8.59242 37.4424 8.35095C45.0824 8.10949 52.5274 10.7876 58.2629 15.8405C63.9984 20.8934 67.5935 27.9415 68.317 35.551C69.0404 43.1604 66.8377 50.7597 62.1571 56.8028M38.3947 60.9398C44.374 60.9398 50.1084 58.5646 54.3364 54.3366C58.5644 50.1086 60.9397 44.3742 60.9397 38.3949C60.9397 32.4156 58.5644 26.6812 54.3364 22.4532C50.1084 18.2252 44.374 15.85 38.3947 15.85C32.4155 15.85 26.6811 18.2252 22.4531 22.4532C18.2251 26.6812 15.8498 32.4156 15.8498 38.3949C15.8498 44.3742 18.2251 50.1086 22.4531 54.3366C26.6811 58.5646 32.4155 60.9398 38.3947 60.9398Z"
                    fill="#041827"
                  />
                </svg>
              </span>

              <div className="!self-stretch !w-px !bg-[#D5D5D5]" />

              <span className="!flex !items-center !py-3 !px-0 sm:!px-2 !w-full sm:!w-[220px]">
                <select
                  className="!bg-transparent !outline-none !cursor-pointer !w-full !text-[#041827]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Transaction Channels
                  </option>
                  <option value="bank">Bank</option>
                  <option value="wallet">Wallet</option>
                  <option value="card">Card</option>
                </select>
              </span>

              <div className="!self-stretch !w-px !bg-[#D5D5D5]" />

              <span className="!flex !items-center !py-3 !px-0 sm:!px-2 !w-full sm:!w-[120px]">
                <select
                  className="!bg-transparent !outline-none !cursor-pointer !w-full !text-[#041827]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Date
                  </option>
                  <option value="today">Today</option>
                  <option value="this-week">This Week</option>
                  <option value="this-month">This Month</option>
                </select>
              </span>

              <div className="!self-stretch !w-px !bg-[#D5D5D5]" />

              <span className="!flex !items-center !py-3 !px-0 sm:!px-2 !w-full sm:!w-[140px]">
                <select
                  className="!bg-transparent !outline-none !cursor-pointer !w-full !text-[#041827]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Projects
                  </option>
                  <option value="project-1">Project 1</option>
                  <option value="project-2">Project 2</option>
                </select>
              </span>

              <div className="!self-stretch !w-px !bg-[#D5D5D5]" />

              <span className="!flex !items-center !py-3 !px-0 sm:!px-2 !w-full sm:!w-[200px]">
                <select
                  className="!bg-transparent !outline-none !cursor-pointer !w-full !text-[#041827]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Transaction Status
                  </option>
                  <option value="success">Successful</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>
              </span>

              <div className="!self-stretch !w-px !bg-[#D5D5D5]" />

              <span className="!flex !cursor-pointer !items-center !py-3 !px-2 !text-[#EA0234]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 50 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="!mr-1"
                >
                  <path
                    d="M24.6619 10.3563V2.23438L14.5094 12.3868L24.6619 22.5393V14.4173C31.3828 14.4173 36.8448 19.8793 36.8448 26.6002C36.8448 33.3211 31.3828 38.7832 24.6619 38.7832C17.941 38.7832 12.4789 33.3211 12.4789 26.6002H8.41797C8.41797 35.575 15.6871 42.8441 24.6619 42.8441C33.6366 42.8441 40.9058 35.575 40.9058 26.6002C40.9058 17.6255 33.6366 10.3563 24.6619 10.3563Z"
                    fill="#EA0234"
                  />
                </svg>
                <p>Reset filter</p>
              </span>
            </div>

            {showTransactionFilter && (
              <div className="!text-black !p-2 sm:!p-0 !whitespace-nowrap !border !bg-[#F9F9FB] !text-xs !font-medium !justify-around !border-[#D5D5D5] sm:!hidden !flex sm:!flex-row !flex-col !items-center !rounded-md">
                <span className="!flex sm:!pl-1 !pl-0 !w-full sm:!w-1/3 !cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 91 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.1609 56.8028L82.3762 77.0181C83.0867 77.7292 83.4857 78.6933 83.4853 79.6985C83.485 80.7038 83.0853 81.6676 82.3743 82.3782C81.6633 83.0887 80.6991 83.4877 79.6939 83.4874C78.6887 83.487 77.7248 83.0873 77.0142 82.3763L56.7989 62.161C50.7558 66.8416 43.1565 69.0443 35.547 68.3209C27.9376 67.5974 20.8895 64.0023 15.8366 58.2668C10.7837 52.5313 8.10559 45.0863 8.34705 37.4463C8.58851 29.8063 11.7314 22.5453 17.1364 17.1403C22.5414 11.7353 29.8024 8.59242 37.4424 8.35095C45.0824 8.10949 52.5274 10.7876 58.2629 15.8405C63.9984 20.8934 67.5935 27.9415 68.317 35.551C69.0404 43.1604 66.8377 50.7597 62.1571 56.8028M38.3947 60.9398C44.374 60.9398 50.1084 58.5646 54.3364 54.3366C58.5644 50.1086 60.9397 44.3742 60.9397 38.3949C60.9397 32.4156 58.5644 26.6812 54.3364 22.4532C50.1084 18.2252 44.374 15.85 38.3947 15.85C32.4155 15.85 26.6811 18.2252 22.4531 22.4532C18.2251 26.6812 15.8498 32.4156 15.8498 38.3949C15.8498 44.3742 18.2251 50.1086 22.4531 54.3366C26.6811 58.5646 32.4155 60.9398 38.3947 60.9398Z"
                      fill="#041827"
                    />
                  </svg>
                </span>

                <div className="!self-stretch !w-px !bg-[#D5D5D5]" />

                <span className="!flex !items-center !py-3 !px-0 sm:!px-2 !w-full sm:!w-[220px]">
                  <select
                    className="!bg-transparent !outline-none !cursor-pointer !w-full !text-[#041827]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Transaction Channels
                    </option>
                    <option value="bank">Bank</option>
                    <option value="wallet">Wallet</option>
                    <option value="card">Card</option>
                  </select>
                </span>

                <div className="!self-stretch !w-px !bg-[#D5D5D5]" />

                <span className="!flex !items-center !py-3 !px-0 sm:!px-2 !w-full sm:!w-[120px]">
                  <select
                    className="!bg-transparent !outline-none !cursor-pointer !w-full !text-[#041827]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Date
                    </option>
                    <option value="today">Today</option>
                    <option value="this-week">This Week</option>
                    <option value="this-month">This Month</option>
                  </select>
                </span>

                <div className="!self-stretch !w-px !bg-[#D5D5D5]" />

                <span className="!flex !items-center !py-3 !px-0 sm:!px-2 !w-full sm:!w-[140px]">
                  <select
                    className="!bg-transparent !outline-none !cursor-pointer !w-full !text-[#041827]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Projects
                    </option>
                    <option value="project-1">Project 1</option>
                    <option value="project-2">Project 2</option>
                  </select>
                </span>

                <div className="!self-stretch !w-px !bg-[#D5D5D5]" />

                <span className="!flex !items-center !py-3 !px-0 sm:!px-2 !w-full sm:!w-[200px]">
                  <select
                    className="!bg-transparent !outline-none !cursor-pointer !w-full !text-[#041827]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Transaction Status
                    </option>
                    <option value="success">Successful</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </span>

                <div className="!self-stretch !w-px !bg-[#D5D5D5]" />

                <span className="!flex !cursor-pointer !items-center !py-3 !px-2 !text-[#EA0234]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 50 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="!mr-1"
                  >
                    <path
                      d="M24.6619 10.3563V2.23438L14.5094 12.3868L24.6619 22.5393V14.4173C31.3828 14.4173 36.8448 19.8793 36.8448 26.6002C36.8448 33.3211 31.3828 38.7832 24.6619 38.7832C17.941 38.7832 12.4789 33.3211 12.4789 26.6002H8.41797C8.41797 35.575 15.6871 42.8441 24.6619 42.8441C33.6366 42.8441 40.9058 35.575 40.9058 26.6002C40.9058 17.6255 33.6366 10.3563 24.6619 10.3563Z"
                      fill="#EA0234"
                    />
                  </svg>
                  <p>Reset filter</p>
                </span>
              </div>
            )}
          </div>

          <TransactionsTable />
        </div>
      )}

      {activeTab === "escrow" && (
        <div className="rounded bg-white p-4 shadow-md my-5">
          <div className="">
            <div className="!flex !items-center !justify-between !mb-5">
              <h1 className=" text-base lg:text-lg whitespace-nowrap font-semibold mb-2 text-black">
                All Payout Transactions
              </h1>
              <Filter
                className="block sm:!hidden"
                onClick={() => setShowAPT((prev) => !prev)}
                size={20}
              />
            </div>
            <div className="!text-black !p-2 sm:!p-0 !whitespace-nowrap !border !bg-[#F9F9FB] !text-xs !font-medium !justify-around !border-[#D5D5D5] hidden sm:!flex sm:!flex-row !flex-col !items-center !rounded-md">
              <span className="flex gap-2 pl-1 w-1/3 cursor-pointer">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 91 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.1609 56.8028L82.3762 77.0181C83.0867 77.7292 83.4857 78.6933 83.4853 79.6985C83.485 80.7038 83.0853 81.6676 82.3743 82.3782C81.6633 83.0887 80.6991 83.4877 79.6939 83.4874C78.6887 83.487 77.7248 83.0873 77.0142 82.3763L56.7989 62.161C50.7558 66.8416 43.1565 69.0443 35.547 68.3209C27.9376 67.5974 20.8895 64.0023 15.8366 58.2668C10.7837 52.5313 8.10559 45.0863 8.34705 37.4463C8.58851 29.8063 11.7314 22.5453 17.1364 17.1403C22.5414 11.7353 29.8024 8.59242 37.4424 8.35095C45.0824 8.10949 52.5274 10.7876 58.2629 15.8405C63.9984 20.8934 67.5935 27.9415 68.317 35.551C69.0404 43.1604 66.8377 50.7597 62.1571 56.8028M38.3947 60.9398C44.374 60.9398 50.1084 58.5646 54.3364 54.3366C58.5644 50.1086 60.9397 44.3742 60.9397 38.3949C60.9397 32.4156 58.5644 26.6812 54.3364 22.4532C50.1084 18.2252 44.374 15.85 38.3947 15.85C32.4155 15.85 26.6811 18.2252 22.4531 22.4532C18.2251 26.6812 15.8498 32.4156 15.8498 38.3949C15.8498 44.3742 18.2251 50.1086 22.4531 54.3366C26.6811 58.5646 32.4155 60.9398 38.3947 60.9398Z"
                    fill="#041827"
                  />
                </svg>
              </span>

              <div className="self-stretch w-px bg-[#D5D5D5]" />

              <span className="flex items-center py-3 ">
                <select
                  className="bg-transparent outline-none cursor-pointer w-full text-[#041827] appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Date
                  </option>
                  <option value="today">Today</option>
                  <option value="this-week">This Week</option>
                  <option value="this-month">This Month</option>
                </select>
              </span>

              <div className="self-stretch w-px bg-[#D5D5D5]" />

              <span className="flex items-center py-3 w-[180px]">
                <select
                  className="bg-transparent outline-none cursor-pointer w-full text-[#041827] appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Transaction Status
                  </option>
                  <option value="success">Successful</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>
              </span>

              <div className="self-stretch w-px bg-[#D5D5D5]" />

              <span className="flex cursor-pointer items-center gap-2 py-3 px-2 text-[#EA0234]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 50 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.6619 10.3563V2.23438L14.5094 12.3868L24.6619 22.5393V14.4173C31.3828 14.4173 36.8448 19.8793 36.8448 26.6002C36.8448 33.3211 31.3828 38.7832 24.6619 38.7832C17.941 38.7832 12.4789 33.3211 12.4789 26.6002H8.41797C8.41797 35.575 15.6871 42.8441 24.6619 42.8441C33.6366 42.8441 40.9058 35.575 40.9058 26.6002C40.9058 17.6255 33.6366 10.3563 24.6619 10.3563Z"
                    fill="#EA0234"
                  />
                </svg>
                <p>Reset filter</p>
              </span>
            </div>

            {showAPT && (
              <div className="!text-black !p-2 sm:!p-0 !whitespace-nowrap !border !bg-[#F9F9FB] !text-xs !font-medium !justify-around !border-[#D5D5D5] sm:!hidden !flex sm:!flex-row !flex-col !items-center !rounded-md">
                <span className="flex gap-2 pl-0 sm:!pl-1 w-full sm:!w-1/3 cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 91 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.1609 56.8028L82.3762 77.0181C83.0867 77.7292 83.4857 78.6933 83.4853 79.6985C83.485 80.7038 83.0853 81.6676 82.3743 82.3782C81.6633 83.0887 80.6991 83.4877 79.6939 83.4874C78.6887 83.487 77.7248 83.0873 77.0142 82.3763L56.7989 62.161C50.7558 66.8416 43.1565 69.0443 35.547 68.3209C27.9376 67.5974 20.8895 64.0023 15.8366 58.2668C10.7837 52.5313 8.10559 45.0863 8.34705 37.4463C8.58851 29.8063 11.7314 22.5453 17.1364 17.1403C22.5414 11.7353 29.8024 8.59242 37.4424 8.35095C45.0824 8.10949 52.5274 10.7876 58.2629 15.8405C63.9984 20.8934 67.5935 27.9415 68.317 35.551C69.0404 43.1604 66.8377 50.7597 62.1571 56.8028M38.3947 60.9398C44.374 60.9398 50.1084 58.5646 54.3364 54.3366C58.5644 50.1086 60.9397 44.3742 60.9397 38.3949C60.9397 32.4156 58.5644 26.6812 54.3364 22.4532C50.1084 18.2252 44.374 15.85 38.3947 15.85C32.4155 15.85 26.6811 18.2252 22.4531 22.4532C18.2251 26.6812 15.8498 32.4156 15.8498 38.3949C15.8498 44.3742 18.2251 50.1086 22.4531 54.3366C26.6811 58.5646 32.4155 60.9398 38.3947 60.9398Z"
                      fill="#041827"
                    />
                  </svg>
                </span>

                <div className="self-stretch w-px bg-[#D5D5D5]" />

                <span className="flex items-center sm:!w-auto w-full py-3 ">
                  <select
                    className="bg-transparent outline-none cursor-pointer w-full text-[#041827] "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Date
                    </option>
                    <option value="today">Today</option>
                    <option value="this-week">This Week</option>
                    <option value="this-month">This Month</option>
                  </select>
                </span>

                <div className="self-stretch w-px bg-[#D5D5D5]" />

                <span className="flex items-center py-3 w-full sm:!w-[180px]">
                  <select
                    className="bg-transparent outline-none cursor-pointer w-full text-[#041827] "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Transaction Status
                    </option>
                    <option value="success">Successful</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </span>

                <div className="self-stretch w-px bg-[#D5D5D5]" />

                <span className="flex cursor-pointer items-center gap-2 py-3 px-2 text-[#EA0234]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 50 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.6619 10.3563V2.23438L14.5094 12.3868L24.6619 22.5393V14.4173C31.3828 14.4173 36.8448 19.8793 36.8448 26.6002C36.8448 33.3211 31.3828 38.7832 24.6619 38.7832C17.941 38.7832 12.4789 33.3211 12.4789 26.6002H8.41797C8.41797 35.575 15.6871 42.8441 24.6619 42.8441C33.6366 42.8441 40.9058 35.575 40.9058 26.6002C40.9058 17.6255 33.6366 10.3563 24.6619 10.3563Z"
                      fill="#EA0234"
                    />
                  </svg>
                  <p>Reset filter</p>
                </span>
              </div>
            )}
          </div>
          <PayoutTable />
        </div>
      )}

      {activeTab === "fund" && <FundAllocation />}

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
    </div>
  );
};

export default ProfileFinance;

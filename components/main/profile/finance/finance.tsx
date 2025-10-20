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
              All Transactions
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
            {/* <div className="flex flex-row lg:flex-col gap-1"> */}{" "}
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
                Fund Wallet
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
              </button>
              <button
                onClick={() => setRecallFunds(true)}
                className=" w-full bg-[#FAAF40] text-white text-[9px] py-1 rounded flex items-center justify-center gap-1"
              >
                Recall Funds
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
            {/* </div> */}
            <p
              // onClick={() => setActiveTab("escrow")}
              className={`text-xs pt-1 cursor-pointer transition-colors duration-200 ${
                activeTab === "escrow" ? "text-black" : "text-gray-300"
              }`}
            >
              Total Payout
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
              style={{ backgroundColor: "#555454" }}
            >
              $1220.00
            </p>
          </div>
          <div className="mt-2">
            <p
              onClick={() => setActiveTab("escrow")}
              className={`text-xs pt-1 cursor-pointer transition-colors duration-200 ${
                activeTab === "escrow" ? "text-black" : "text-gray-300"
              }`}
            >
              All Payout Transactions
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

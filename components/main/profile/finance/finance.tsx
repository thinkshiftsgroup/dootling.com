"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import TransactionsTable from "./transactionsTable";
import FundWalletSideModal from "./fundWallet";
import ManageEscrowFunds from "./manageEscrow";
import FundAllocation from "./fundAllocation";
import PayoutTransaction from "./payoutTransaction";

const ProfileFinance = () => {
  const [showModal, setShowModal] = useState(false);
  const [showManageFunds, setManageFunds] = useState(false);

  const [showTransactions, setShowTransactions] = useState(true);
  const [showEscrowTransactions, setShowEscrowTransactions] = useState(false);

  return (
    <div className="rounded-sm bg-white px-4 py-2">
      <div className="flex items-start justify-between gap-2 my-5">
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
              onClick={() => setShowTransactions((prev) => !prev)}
              className={`text-xs cursor-pointer transition-colors duration-200 ${
                showTransactions ? "text-black" : "text-gray-300"
              }`}
            >
              All Transactions
            </p>
            <button
              onClick={() => setShowModal(true)}
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
            In Escrow Wallet
          </h1>
          <div className="flex items-center">
            <p
              className="text-white font-bold text-xl w-full px-3 py-2 rounded-sm leading-none"
              style={{ backgroundColor: "#555454" }}
            >
              $122.00
            </p>
          </div>
          <div className="mt-2">
            <div className="flex flex-row lg:flex-col gap-1">
              <button className=" bg-black w-full text-white text-[9px] py-1 rounded flex items-center justify-center gap-1">
                Allocate Funds
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.1857 17.5806C37.8411 17.5796 39.4457 17.0091 40.7301 15.9648C42.0146 14.9206 42.9006 13.4663 43.2396 11.846H49.5039C49.7893 11.8439 50.0677 11.7579 50.3045 11.5986C50.5412 11.4393 50.7258 11.2138 50.8352 10.9502C50.9446 10.6866 50.9739 10.3967 50.9194 10.1166C50.865 9.83642 50.7293 9.57853 50.5292 9.37508C50.2559 9.10529 49.8879 8.95318 49.5039 8.9513H43.2498C42.9195 7.32046 42.0353 5.85404 40.7472 4.80069C39.459 3.74734 37.8463 3.17188 36.1823 3.17188C34.5183 3.17187 32.9056 3.74734 31.6175 4.80069C30.3293 5.85404 29.4452 7.32046 29.1148 8.9513H7.05109C6.6794 8.96937 6.32891 9.12974 6.07224 9.39919C5.81557 9.66864 5.6724 10.0265 5.6724 10.3986C5.6724 10.7708 5.81557 11.1286 6.07224 11.3981C6.32891 11.6675 6.6794 11.8279 7.05109 11.846H29.1285C29.4676 13.4674 30.3547 14.9226 31.6406 15.967C32.9264 17.0114 34.5326 17.5812 36.1891 17.5806M36.1891 14.5732C35.6371 14.5732 35.0905 14.4644 34.5805 14.2532C34.0705 14.0419 33.6071 13.7323 33.2168 13.342C32.8264 12.9516 32.5168 12.4882 32.3055 11.9782C32.0943 11.4682 31.9856 10.9216 31.9856 10.3696C31.9856 9.81756 32.0943 9.27095 32.3055 8.76094C32.5168 8.25094 32.8264 7.78754 33.2168 7.3972C33.6071 7.00686 34.0705 6.69723 34.5805 6.48598C35.0905 6.27473 35.6371 6.166 36.1891 6.166C37.304 6.166 38.3732 6.60887 39.1615 7.3972C39.9499 8.18553 40.3927 9.25473 40.3927 10.3696C40.3927 11.4844 39.9499 12.5536 39.1615 13.342C38.3732 14.1303 37.304 14.5732 36.1891 14.5732ZM21.1382 34.9999C22.7998 35.0007 24.4106 34.4277 25.6984 33.3778C26.9862 32.3279 27.8719 30.8655 28.2057 29.2379L49.5073 29.214C49.792 29.2113 50.0696 29.125 50.3057 28.9659C50.5417 28.8068 50.7258 28.5818 50.835 28.3189C50.9443 28.056 50.9738 27.7668 50.9201 27.4873C50.8663 27.2077 50.7316 26.9501 50.5326 26.7465C50.2593 26.4767 49.8913 26.3246 49.5073 26.3227L28.2057 26.3432C27.8705 24.7179 26.9849 23.2579 25.6983 22.2096C24.4117 21.1613 22.8029 20.5889 21.1434 20.5889C19.4838 20.5889 17.875 21.1613 16.5884 22.2096C15.3019 23.2579 14.4162 24.7179 14.081 26.3432L7.05109 26.3227C6.66769 26.3227 6.29999 26.475 6.02888 26.7461C5.75778 27.0172 5.60547 27.3849 5.60547 27.7683C5.60547 28.1517 5.75778 28.5194 6.02888 28.7906C6.29999 29.0617 6.66769 29.214 7.05109 29.214L14.081 29.2379C14.4146 30.8644 15.2993 32.3259 16.5857 33.3757C17.8721 34.4254 19.4779 34.9991 21.1382 34.9999ZM21.1417 31.9924C20.0268 31.9924 18.9576 31.5496 18.1693 30.7612C17.3809 29.9729 16.9381 28.9037 16.9381 27.7888C16.9381 26.674 17.3809 25.6048 18.1693 24.8165C18.9576 24.0281 20.0268 23.5853 21.1417 23.5853C22.2565 23.5853 23.3257 24.0281 24.114 24.8165C24.9024 25.6048 25.3453 26.674 25.3453 27.7888C25.3453 28.9037 24.9024 29.9729 24.114 30.7612C23.3257 31.5496 22.2565 31.9924 21.1417 31.9924ZM36.1721 52.2859C37.8374 52.2854 39.4513 51.7085 40.7396 50.6532C42.0279 49.5979 42.9112 48.1292 43.2396 46.4965L49.5039 46.5854C49.7893 46.5834 50.0677 46.4973 50.3045 46.338C50.5412 46.1787 50.7258 45.9532 50.8352 45.6896C50.9446 45.426 50.9739 45.1361 50.9194 44.856C50.865 44.5758 50.7293 44.3179 50.5292 44.1145C50.2559 43.8447 49.8879 43.6926 49.5039 43.6907L43.2293 43.5984C42.8893 41.9785 42.0023 40.5248 40.7172 39.4815C39.4322 38.4382 37.8273 37.8687 36.1721 37.8687C34.5168 37.8687 32.9119 38.4382 31.6269 39.4815C30.3418 40.5248 29.4548 41.9785 29.1148 43.5984L7.04768 43.6907C6.67598 43.7088 6.32549 43.8692 6.06882 44.1386C5.81215 44.4081 5.66898 44.7659 5.66898 45.1381C5.66898 45.5102 5.81215 45.868 6.06882 46.1375C6.32549 46.4069 6.67598 46.5673 7.04768 46.5854L29.1046 46.4965C29.4329 48.1292 30.3162 49.5979 31.6045 50.6532C32.8928 51.7085 34.5067 52.2854 36.1721 52.2859ZM36.1721 49.2784C35.0572 49.2784 33.988 48.8355 33.1997 48.0472C32.4113 47.2589 31.9685 46.1897 31.9685 45.0748C31.9685 43.96 32.4113 42.8908 33.1997 42.1024C33.988 41.3141 35.0572 40.8712 36.1721 40.8712C37.2869 40.8712 38.3561 41.3141 39.1444 42.1024C39.9328 42.8908 40.3756 43.96 40.3756 45.0748C40.3756 46.1897 39.9328 47.2589 39.1444 48.0472C38.3561 48.8355 37.2869 49.2784 36.1721 49.2784Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
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
              <button className=" w-full bg-[#FAAF40] text-white text-[9px] py-1 rounded flex items-center justify-center gap-1">
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
              </button>
            </div>
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
              onClick={() => setShowEscrowTransactions((prev) => !prev)}
              className={`text-xs pt-1 cursor-pointer transition-colors duration-200 ${
                showEscrowTransactions ? "text-black" : "text-gray-300"
              }`}
            >
              All Payout Transactions
            </p>
          </div>
        </div>
      </div>

      {showTransactions && (
        <div className="rounded bg-white p-4 shadow-md my-5">
          <div>
            <h1 className="text-lg font-semibold text-black mb-5">
              All Transactions
            </h1>
            <div className="text-black border bg-[#F9F9FB] text-xs font-medium justify-around border-[#D5D5D5] flex items-center rounded-md">
              <span className="flex items-center gap-2 px-3 cursor-pointer">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 57 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.4901 27.0768C43.0684 27.0768 54.8864 21.6223 54.8864 14.8939C54.8864 8.16542 43.0684 2.71094 28.4901 2.71094C13.9118 2.71094 2.09375 8.16542 2.09375 14.8939C2.09375 21.6223 13.9118 27.0768 28.4901 27.0768Z"
                    stroke="black"
                    strokeWidth="4.06098"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.09375 14.8828C2.1006 27.1077 10.5031 37.7273 22.3986 40.5455V57.5231C22.3986 60.8873 25.1259 63.6145 28.4901 63.6145C31.8543 63.6145 34.5816 60.8873 34.5816 57.5231V40.5455C46.4771 37.7273 54.8796 27.1077 54.8864 14.8828"
                    stroke="black"
                    strokeWidth="4.06098"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="self-stretch w-px bg-[#D5D5D5]" />
              <span className="flex items-center gap-2 py-2 px-3">
                <p>Filter by</p>
              </span>
              <div className="self-stretch w-px bg-[#D5D5D5]" />
              <span className="flex cursor-pointer items-center gap-2 py-3 px-2">
                <p>Date</p> <ChevronDown size={16} />
              </span>
              <div className="self-stretch w-px bg-[#D5D5D5]" />
              <span className="flex cursor-pointer items-center gap-2 py-3 px-2">
                <p>Projects</p> <ChevronDown size={16} />
              </span>
              <div className="self-stretch w-px bg-[#D5D5D5]" />
              <span className="flex cursor-pointer items-center gap-2 py-3 px-2">
                <p>Transaction Status</p> <ChevronDown size={16} />
              </span>
              <div className="self-stretch w-px bg-[#D5D5D5]" />
              <span className="flex cursor-pointer items-center gap-2 py-3 px-2">
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
          </div>
          <TransactionsTable />
        </div>
      )}

      {showEscrowTransactions && (
        <div className="rounded bg-white p-4 shadow-md my-5">
          <h1 className="text-lg font-semibold text-black mb-5">
            All Payout Transactions
          </h1>
          <TransactionsTable />
        </div>
      )}

      <FundWalletSideModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
      <ManageEscrowFunds
        open={showManageFunds}
        onClose={() => setManageFunds(false)}
      />
    </div>
  );
};

export default ProfileFinance;

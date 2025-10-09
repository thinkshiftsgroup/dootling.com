"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import TransactionsTable from "./transactionsTable";
import FundWalletSideModal from "./fundWallet";
import ManageEscrowFunds from "./manageEscrow";
import FundAllocation from "./fundAllocation";

const cards = [
  {
    title: "Available Wallet Balance",
    amount: "$625.00",
    bgColor: "#00B69B",
    buttonText: "Fund Wallet",
    svg: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.5212 1.09501C49.164 0.128685 51.2899 1.48154 50.9034 3.4142L43.9458 45.1596C43.7525 46.7057 42.1098 47.5754 40.7569 46.9956L28.7744 41.8741L22.5899 49.4114C21.2371 51.0542 18.5314 50.1845 18.5314 47.8653V40.0381L41.7232 11.7246C42.2064 11.1448 41.4333 10.4684 40.9502 10.9516L13.2166 35.3997L2.87684 31.0512C1.13745 30.3748 0.944182 27.8623 2.68357 26.896L47.5212 1.09501Z"
          fill="white"
        />
      </svg>
    ),
    showButton: true,
  },
  {
    title: "In Escrow Wallet",
    amount: "$122.00",
    bgColor: "#000000",
    buttonText: "Manage Funds",
    svg: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.7161 17.6375C37.3592 17.6365 38.9519 17.0702 40.2267 16.0338C41.5016 14.9973 42.3811 13.5538 42.7175 11.9455H48.9353C49.2185 11.9435 49.4949 11.8581 49.7299 11.7C49.9649 11.5419 50.1481 11.318 50.2567 11.0564C50.3652 10.7948 50.3943 10.507 50.3403 10.229C50.2863 9.95093 50.1516 9.69496 49.9529 9.49301C49.6817 9.22523 49.3164 9.07425 48.9353 9.07239H42.7277C42.3998 7.45367 41.5222 5.99816 40.2437 4.95264C38.9651 3.90712 37.3643 3.33594 35.7127 3.33594C34.0612 3.33594 32.4604 3.90712 31.1818 4.95264C29.9033 5.99816 29.0257 7.45367 28.6978 9.07239H6.79816C6.42923 9.09032 6.08134 9.2495 5.82658 9.51695C5.57182 9.78439 5.42972 10.1396 5.42972 10.509C5.42972 10.8783 5.57182 11.2335 5.82658 11.501C6.08134 11.7684 6.42923 11.9276 6.79816 11.9455H28.7114C29.048 13.5549 29.9285 14.9993 31.2048 16.0359C32.4811 17.0725 34.0753 17.6381 35.7195 17.6375M35.7195 14.6525C35.1716 14.6525 34.6291 14.5445 34.1229 14.3349C33.6166 14.1252 33.1567 13.8178 32.7692 13.4304C32.3818 13.043 32.0745 12.583 31.8648 12.0768C31.6551 11.5706 31.5472 11.028 31.5472 10.4801C31.5472 9.93221 31.6551 9.38965 31.8648 8.88344C32.0745 8.37723 32.3818 7.91728 32.7692 7.52984C33.1567 7.14241 33.6166 6.83507 34.1229 6.6254C34.6291 6.41572 35.1716 6.3078 35.7195 6.3078C36.8261 6.3078 37.8874 6.74738 38.6698 7.52984C39.4523 8.31231 39.8919 9.37356 39.8919 10.4801C39.8919 11.5867 39.4523 12.6479 38.6698 13.4304C37.8874 14.2129 36.8261 14.6525 35.7195 14.6525ZM20.7806 34.9273C22.4297 34.9281 24.0286 34.3594 25.3068 33.3173C26.585 32.2752 27.4641 30.8237 27.7955 29.2081L48.9387 29.1844C49.2212 29.1817 49.4968 29.0961 49.7311 28.9382C49.9654 28.7802 50.1481 28.5569 50.2565 28.296C50.3649 28.035 50.3943 27.748 50.3409 27.4705C50.2875 27.193 50.1538 26.9374 49.9563 26.7353C49.6851 26.4675 49.3198 26.3165 48.9387 26.3146L27.7955 26.335C27.4627 24.7217 26.5837 23.2726 25.3067 22.2321C24.0297 21.1916 22.4329 20.6234 20.7856 20.6234C19.1384 20.6234 17.5416 21.1916 16.2646 22.2321C14.9876 23.2726 14.1085 24.7217 13.7758 26.335L6.79816 26.3146C6.4176 26.3146 6.05264 26.4658 5.78355 26.7349C5.51446 27.004 5.36328 27.3689 5.36328 27.7495C5.36328 28.1301 5.51446 28.495 5.78355 28.7641C6.05264 29.0332 6.4176 29.1844 6.79816 29.1844L13.7758 29.2081C14.1069 30.8225 14.9851 32.2732 16.2619 33.3151C17.5387 34.3571 19.1325 34.9265 20.7806 34.9273ZM20.7839 31.9422C19.6774 31.9422 18.6161 31.5026 17.8337 30.7201C17.0512 29.9377 16.6116 28.8764 16.6116 27.7699C16.6116 26.6633 17.0512 25.602 17.8337 24.8196C18.6161 24.0371 19.6774 23.5975 20.7839 23.5975C21.8905 23.5975 22.9518 24.0371 23.7342 24.8196C24.5167 25.602 24.9563 26.6633 24.9563 27.7699C24.9563 28.8764 24.5167 29.9377 23.7342 30.7201C22.9518 31.5026 21.8905 31.9422 20.7839 31.9422ZM35.7026 52.0847C37.3555 52.0842 38.9574 51.5117 40.2361 50.4642C41.5149 49.4167 42.3916 47.959 42.7175 46.3384L48.9353 46.4266C49.2185 46.4246 49.4949 46.3392 49.7299 46.1811C49.9649 46.023 50.1481 45.7991 50.2567 45.5375C50.3652 45.2759 50.3943 44.9881 50.3403 44.7101C50.2863 44.432 50.1516 44.176 49.9529 43.9741C49.6817 43.7063 49.3164 43.5553 48.9353 43.5535L42.7073 43.4619C42.3698 41.854 41.4894 40.4111 40.2139 39.3756C38.9384 38.34 37.3455 37.7748 35.7026 37.7748C34.0596 37.7748 32.4667 38.34 31.1912 39.3756C29.9157 40.4111 29.0353 41.854 28.6978 43.4619L6.79476 43.5535C6.42584 43.5714 6.07795 43.7306 5.82319 43.998C5.56843 44.2655 5.42632 44.6207 5.42632 44.99C5.42632 45.3594 5.56843 45.7146 5.82319 45.9821C6.07795 46.2495 6.42584 46.4087 6.79476 46.4266L28.6876 46.3384C29.0135 47.959 29.8903 49.4167 31.169 50.4642C32.4477 51.5117 34.0496 52.0842 35.7026 52.0847ZM35.7026 49.0996C34.596 49.0996 33.5348 48.66 32.7523 47.8776C31.9698 47.0951 31.5302 46.0339 31.5302 44.9273C31.5302 43.8207 31.9698 42.7595 32.7523 41.977C33.5348 41.1945 34.596 40.755 35.7026 40.755C36.8091 40.755 37.8704 41.1945 38.6529 41.977C39.4353 42.7595 39.8749 43.8207 39.8749 44.9273C39.8749 46.0339 39.4353 47.0951 38.6529 47.8776C37.8704 48.66 36.8091 49.0996 35.7026 49.0996Z"
          fill="white"
        />
      </svg>
    ),
    showButton: true,
  },
  {
    title: "Total Payout",
    amount: "$1220.00",
    bgColor: "#157BFF",
    showButton: false,
  },
];

const ProfileFinance = () => {
  const [showModal, setShowModal] = useState(false);
  const [showManageFunds, setManageFunds] = useState(false);

  const [showTransactions, setShowTransactions] = useState(true);
  const [showEscrowTransactions, setShowEscrowTransactions] = useState(false);
  return (
    <div className="rounded-sm bg-white px-4 py-2">
      <div className="flex items-start justify-between gap-5 my-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex w-full h-[160px] flex-col justify-between gap-3 p-4 bg-white shadow-md min-w-[250px] rounded"
          >
            <h1 className="font-bold text-xl border-b-2 border-gray-100 pb-1 text-black leading-tight w-fit">
              {card.title}
            </h1>

            <div className="flex items-center">
              <p
                className="text-white font-bold text-xl w-full px-3 py-2 rounded-sm leading-none"
                style={{ backgroundColor: card.bgColor }}
              >
                {card.amount}
              </p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <p
                onClick={() => {
                  if (card.buttonText === "Fund Wallet") {
                    setShowTransactions((prev) => !prev);
                  } else if (card.buttonText === "Manage Funds") {
                    setShowEscrowTransactions((prev) => !prev);
                  }
                }}
                className={`text-xs cursor-pointer transition-colors duration-200 ${
                  (card.buttonText === "Fund Wallet" && showTransactions) ||
                  (card.buttonText === "Manage Funds" && showEscrowTransactions)
                    ? "text-[#157BFF]"
                    : "text-gray-300"
                }`}
              >
                All Transactions
              </p>

              {card.showButton && (
                <button
                  onClick={() => {
                    if (card.buttonText === "Fund Wallet") {
                      setShowModal(true);
                    } else if (card.buttonText === "Manage Funds") {
                      setManageFunds(true);
                    }
                  }}
                  className="bg-[#FAAF40] cursor-pointer text-white text-xs flex items-center gap-2 px-2 py-1.5 rounded"
                >
                  {card.buttonText} {card.svg}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {showTransactions && (
        <div className="rounded bg-white p-4 shadow-md my-5">
          <div className="flex items-center justify-between mb-5 gap-5">
            <h1 className="text-lg font-semibold text-black">
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
                <p>Date</p>
                <ChevronDown size={16} />
              </span>

              <div className="self-stretch w-px bg-[#D5D5D5]" />

              <span className="flex cursor-pointer items-center gap-2 py-3 px-2">
                <p>Projects</p>
                <ChevronDown size={16} />
              </span>

              <div className="self-stretch w-px bg-[#D5D5D5]" />

              <span className="flex cursor-pointer items-center gap-2 py-3 px-2">
                <p>Transaction Status</p>
                <ChevronDown size={16} />
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

          <div>
            <TransactionsTable />
          </div>
        </div>
      )}
      {showEscrowTransactions && <FundAllocation />}

      <div>
        <FundWalletSideModal
          open={showModal}
          onClose={() => setShowModal(false)}
        />
        <ManageEscrowFunds
          open={showManageFunds}
          onClose={() => setManageFunds(false)}
        />
      </div>
    </div>
  );
};

export default ProfileFinance;

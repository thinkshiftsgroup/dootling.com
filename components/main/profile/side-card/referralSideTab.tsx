"use client";
import React from "react";

const ReferralSideTab = () => {
  const referralLink = "Dootling.com/invite/444hhskdfskjdsdds";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralLink);
  };

  return (
    <div className="rounded-lg shadow bg-white max-w-sm w-full">
      <div className="flex justify-between items-center p-4 py-3 border-b border-[#f1f1f1]">
        <div className="header-title">
          <h4 className="text-lg font-bold">Referrals</h4>
        </div>
        <span className="text-xs text-gray-500 cursor-pointer hover:underline">
          View commissions
        </span>
      </div>

      <div className="p-4 flex flex-col space-y-2">
        <div className="rounded-md py-2 px-2 flex items-center justify-between gap-2 border border-dotted border-black">
          <p className="text-xs truncate">{referralLink}</p>

          <button
            onClick={handleCopy}
            className="p-1 hover:bg-gray-100 rounded transition"
            title="Copy link"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 243 243"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-700"
            >
              <path
                d="M210.474 129.958C212.202 125.784 212.202 120.479 212.202 109.889C212.202 99.2992 212.202 93.9941 210.474 89.8208C209.332 87.0614 207.657 84.5542 205.545 82.4424C203.433 80.3306 200.926 78.6555 198.166 77.5129C193.993 75.7849 188.688 75.7849 178.098 75.7849H112.163C99.4306 75.7849 93.0645 75.7849 88.204 78.2607C83.9221 80.4411 80.4411 83.9221 78.2607 88.204C75.7849 93.0544 75.7849 99.4205 75.7849 112.163V178.098C75.7849 188.688 75.7849 193.993 77.5129 198.166C79.8269 203.734 84.2529 208.17 89.8208 210.474C93.9941 212.202 99.2992 212.202 109.889 212.202C120.479 212.202 125.784 212.202 129.958 210.474M210.474 129.958C209.332 132.717 207.657 135.224 205.545 137.336C203.433 139.448 200.926 141.123 198.166 142.266C193.993 143.994 188.688 143.994 178.098 143.994C167.508 143.994 162.203 143.994 158.029 145.722C155.27 146.864 152.763 148.539 150.651 150.651C148.539 152.763 146.864 155.27 145.722 158.029C143.994 162.203 143.994 167.508 143.994 178.098C143.994 188.688 143.994 193.993 142.266 198.166C141.123 200.926 139.448 203.433 137.336 205.545C135.224 207.657 132.717 209.332 129.958 210.474M210.474 129.958C205.038 148.701 195.039 165.805 181.372 179.736C167.705 193.668 150.797 203.993 132.161 209.787L129.958 210.474M166.73 75.7849V66.6905C166.73 53.9582 166.73 47.592 164.254 42.7315C162.076 38.4512 158.599 34.9704 154.321 32.7882C149.45 30.3125 143.084 30.3125 130.352 30.3125H66.6905C53.9582 30.3125 47.592 30.3125 42.7315 32.7882C38.4497 34.9687 34.9687 38.4497 32.7882 42.7315C30.3125 47.5819 30.3125 53.9481 30.3125 66.6905V130.352C30.3125 143.084 30.3125 149.45 32.7882 154.311C34.9709 158.595 38.447 162.071 42.7315 164.254C47.5819 166.73 53.9582 166.73 66.7006 166.73H75.7849"
                stroke="currentColor"
                strokeWidth="15.1575"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <p className="text-[10px] -mt-2 text-right bg-[#FFBA00] inline-block rounded-sm text-black px-1 py-1 self-end">
          $1 per person who joins through your link
        </p>
      </div>
    </div>
  );
};

export default ReferralSideTab;

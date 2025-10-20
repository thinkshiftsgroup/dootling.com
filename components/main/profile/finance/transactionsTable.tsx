"use cclient";
import React, { useState } from "react";
import EscrowManager from "./escrowManager";

const transactions = [
  {
    project: "Apple Watch iOS Create",
    client: "John Felix",
    channel: "Zub X Qub",
    amount: "+$150",
    type: "credit",
    date: "12.09.2019 12:53 PM",
    transactionId: "1638hvdjshskdhtU",
    status: "Credited",
  },
  {
    project: "Apple Watch iOS Create",
    client: "Felix Hohn",
    channel: "Bank",
    amount: "-$150",
    type: "debit",
    date: "12.09.2019 12:53 PM",
    transactionId: "2638hvdjshskdhtU",
    status: "Credited",
  },
  {
    project: "Apple Watch iOS Create",
    client: "Felix Hohn",
    channel: "Tom Pack Fig",
    amount: "+$150",
    type: "credit",
    date: "12.09.2019 12:53 PM",
    transactionId: "8638hvdjshskdhtU",
    status: "Credited",
  },
  {
    project: "Apple Watch iOS Create",
    client: "Felix Hohn",
    channel: "Link",
    amount: "+$150",
    type: "credit",
    date: "12.09.2019 12:53 PM",
    transactionId: "8638hvdjshskdhtU",
    status: "Credited",
  },
];

const TransactionsTable = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="bg-white mt-10 rounded-md ">
      <div className="overflow-x-auto hide-scrollbar">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#F1F4F9] rounded-md text-black font-semibold">
            <tr>
              <th className=" px-3 lg:px-6 py-3">Project</th>
              <th className=" px-3 lg:px-6 py-3">Client</th>
              <th className=" px-3 lg:px-6 py-3">Channel</th>
              <th className=" px-3 lg:px-6 py-3">Amount</th>
              <th className=" px-3 lg:px-6 py-3">Date</th>
              <th className=" px-3 lg:px-6 py-3">Transaction ID</th>
              <th className=" px-3 lg:px-6 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((txn, i) => (
              <tr key={i} className=" ">
                <td className="pl-3 py-1 lg:py-5 border-b-[#979797]/20 border-b text-gray-700">
                  {txn.project}
                </td>
                <td className="lg:px-6 px-3 py-1 lg:py-5 border-b-[#979797]/20 border-b text-gray-700">
                  {txn.client}
                </td>
                <td className="lg:px-6 px-3 py-1 lg:py-5 border-b-[#979797]/20 border-b font-medium text-gray-700">
                  {txn.channel}
                </td>
                <td className="lg:px-6 px-3 py-1 lg:py-5 border-b-[#979797]/20 border-b">
                  <span
                    className={`flex flex-col px-3 py-1 rounded-md font-semibold ${
                      txn.type === "credit"
                        ? "text-[#299D91] border border-[#299D91] "
                        : "text-[#EA0234] border border-[#EA0234] "
                    }`}
                  >
                    {txn.amount}
                    <span className="ml-5 text-gray-400 text-[10px]">
                      1 Tax 7%
                    </span>
                  </span>
                </td>
                <td className="lg:px-6 px-3 py-1 lg:py-5 text-gray-600 border-b-[#979797]/20 border-b">
                  {txn.date}
                </td>
                <td className="lg:px-6 px-3 py-1 lg:py-5 text-gray-600 border-b-[#979797]/20 border-b">
                  {txn.transactionId}
                </td>
                <td className="pr-3 py-1 lg:py-5 border-b-[#979797]/20 border-b">
                  {txn.status === "Manage Escrow" && (
                    <span
                      onClick={() => setModal(true)}
                      className="bg-black cursor-pointer flex items-center gap-1 text-white text-xs font-medium p-2 rounded"
                    >
                      Manage Escrow
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 52 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M47.3337 1.4622C48.9765 0.495872 51.1024 1.84873 50.7159 3.78139L43.7583 45.5268C43.565 47.0729 41.9223 47.9426 40.5694 47.3628L28.5869 42.2413L22.4024 49.7786C21.0496 51.4214 18.3439 50.5517 18.3439 48.2325V40.4052L41.5357 12.0918C42.0189 11.512 41.2458 10.8356 40.7627 11.3188L13.0291 35.7669L2.68934 31.4184C0.949948 30.742 0.756682 28.2295 2.49607 27.2632L47.3337 1.4622Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  )}
                  {txn.status === "Credited" && (
                    <span className="bg-[#157BFF] text-white text-xs font-medium p-2 rounded">
                      Credited
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal && <EscrowManager open={modal} onClose={() => setModal(false)} />}
    </div>
  );
};

export default TransactionsTable;

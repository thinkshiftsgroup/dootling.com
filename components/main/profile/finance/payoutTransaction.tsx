import React from "react";

const transactions = [
  {
    requestDate: "10.08.2024 11:25 AM",
    amount: "-$320",
    type: "debit",
    beneficiary: "Sarah Johnson",
    expectedDate: "13.08.2024 03:00 PM",
    transactionId: "TXN-2398ABCD12",
    status: "Processing",
  },
  {
    requestDate: "15.08.2024 09:10 AM",
    amount: "+$850",
    type: "credit",
    beneficiary: "Michael Chen",
    expectedDate: "18.08.2024 12:30 PM",
    transactionId: "TXN-5834QWER45",
    status: "Completed",
  },
  {
    requestDate: "22.08.2024 01:40 PM",
    amount: "-$210",
    type: "debit",
    beneficiary: "Aisha Bello",
    expectedDate: "25.08.2024 10:15 AM",
    transactionId: "TXN-7812LKJH98",
    status: "Rejected",
  },
  {
    requestDate: "01.09.2024 04:00 PM",
    amount: "+$1,250",
    type: "credit",
    beneficiary: "John Felix",
    expectedDate: "04.09.2024 02:00 PM",
    transactionId: "TXN-9945POIU76",
    status: "Completed",
  },
  {
    requestDate: "06.09.2024 07:50 AM",
    amount: "+$540",
    type: "credit",
    beneficiary: "Emily Davis",
    expectedDate: "09.09.2024 05:15 PM",
    transactionId: "TXN-4421NMKL33",
    status: "Processing",
  },
];

const PayoutTable = () => {
  return (
    <div className="bg-white mt-10 rounded-md">
      <div className="overflow-x-auto hide-scrollbar">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#F1F4F9] text-black font-semibold">
            <tr>
              <th className=" px-3 lg:px-6 py-3">Request Date</th>
              <th className=" px-3 lg:px-6 py-3">Amount</th>
              <th className=" px-3 lg:px-6 py-3">Beneficiary</th>
              <th className=" px-3 lg:px-6 py-3">Expected Date</th>
              <th className=" px-3 lg:px-6 py-3">Transaction ID</th>
              <th className=" px-3 lg:px-6 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((txn, i) => (
              <tr key={i} className="">
                <td className="pl-3 py-1 lg:py-5 border-b border-[#979797]/20 text-gray-700">
                  {txn.requestDate}
                </td>
                <td className=" px-3 lg:px-6 py-1 lg:py-5 border-b border-[#979797]/20">
                  <span
                    className={`flex flex-col px-3 py-1 rounded-md font-semibold ${
                      txn.type === "credit"
                        ? "text-[#299D91] border border-[#299D91]"
                        : "text-[#EA0234] border border-[#EA0234]"
                    }`}
                  >
                    {txn.amount}
                    <span className="ml-5 text-gray-400 text-[10px]">
                      Tax 7%
                    </span>
                  </span>
                </td>
                <td className=" px-3 lg:px-6 py-1 lg:py-5 border-b border-[#979797]/20 text-gray-700">
                  {txn.beneficiary}
                </td>
                <td className=" px-3 lg:px-6 py-1 lg:py-5 border-b border-[#979797]/20 text-gray-700">
                  {txn.expectedDate}
                </td>
                <td className=" px-3 lg:px-6 py-1 lg:py-5 border-b border-[#979797]/20 text-gray-600">
                  {txn.transactionId}
                </td>
                <td className="pr-3 py-1 lg:py-5 border-b border-[#979797]/20">
                  {txn.status === "Processing" && (
                    <span className="bg-[#00B69B] flex items-center gap-1 text-white text-xs font-medium p-2 rounded">
                      Processing
                    </span>
                  )}
                  {txn.status === "Rejected" && (
                    <span className="bg-[#FF0000] text-white text-xs font-medium p-2 rounded">
                      Rejected
                    </span>
                  )}
                  {txn.status === "Completed" && (
                    <span className="bg-[#157BFF] text-white text-xs font-medium p-2 rounded">
                      Completed
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayoutTable;

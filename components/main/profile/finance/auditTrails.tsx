import React from "react";

const transactions = [
  {
    project: "Web3 Dev System",
    collaborator: "Sarah Johnson",
    note: "Smart contract deployment",
    date: "10.08.2024 11:25 AM",
    transactionId: "TXN-2398ABCD12",
    status: "Executed",
  },
  {
    project: "AI Research Portal",
    collaborator: "Michael Chen",
    note: "API integration testing",
    date: "15.08.2024 09:10 AM",
    transactionId: "TXN-5834QWER45",
    status: "Rejected",
  },
  {
    project: "Finance Tracker App",
    collaborator: "Aisha Bello",
    note: "Design updates",
    date: "22.08.2024 01:40 PM",
    transactionId: "TXN-7812LKJH98",
    status: "Executed",
  },
];

const columns = [
  { label: "Project", key: "project" },
  { label: "Collaborator", key: "collaborator" },
  { label: "Note", key: "note" },
  { label: "Date", key: "date" },
  { label: "Transaction ID", key: "transactionId" },
  { label: "Status", key: "status" },
];

const AuditTrialsTable = () => {
  return (
    <div className="bg-white mt-10 rounded-md">
      <div className="overflow-x-auto hide-scrollbar">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#F1F4F9] text-black font-semibold">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-3">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {transactions.map((txn, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                {columns.map((col) => {
                  const value = txn[col.key as keyof typeof txn];

                  if (col.key === "status") {
                    return (
                      <td
                        key={col.key}
                        className="pr-3 py-5 border-b border-[#979797]/20"
                      >
                        {value === "Executed" && (
                          <span className="bg-[#157BFF] flex items-center gap-1 text-white text-xs font-medium p-2 rounded">
                            Executed
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 52 53"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M48.137 1.22694C49.8228 0.235252 52.0045 1.62361 51.6079 3.60699L44.4677 46.4478C44.2694 48.0345 42.5835 48.9271 41.1952 48.332L28.8982 43.0761L22.5515 50.8113C21.1631 52.4971 18.3864 51.6046 18.3864 49.2246V41.1919L42.1868 12.1355C42.6827 11.5405 41.8893 10.8463 41.3935 11.3421L12.9321 36.4318L2.32105 31.9692C0.536015 31.275 0.337678 28.6967 2.12271 27.705L48.137 1.22694Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        )}
                        {value === "Rejected" && (
                          <span className="bg-[#FF0000] text-white text-xs font-medium p-2 rounded">
                            Rejected
                          </span>
                        )}
                      </td>
                    );
                  }

                  return (
                    <td
                      key={col.key}
                      className="px-6 py-5 border-b border-[#979797]/20 text-gray-700"
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditTrialsTable;

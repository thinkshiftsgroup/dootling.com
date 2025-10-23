"use client";
import React, { useState } from "react";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WithdrawFunds from "@/components/main/profile/finance/withdrawFunds";

interface Employee {
  name: string;
  age: number;
  startDate: string;
  status: "Pending" | "Cleared";
}

const Referrals = () => {
  const employees: Employee[] = [
    { name: "John Doe", age: 1, startDate: "2021-04-12", status: "Pending" },
    {
      name: "Jane Smith",
      age: 1,
      startDate: "2020-06-01",
      status: "Cleared",
    },
    {
      name: "Michael Brown",
      age: 1,
      startDate: "2018-09-15",
      status: "Pending",
    },
    {
      name: "Alice Johnson",
      age: 1,
      startDate: "2019-11-23",
      status: "Cleared",
    },
    { name: "David Lee", age: 1, startDate: "2022-02-10", status: "Pending" },
    { name: "Sarah Kim", age: 1, startDate: "2017-05-08", status: "Cleared" },
    {
      name: "Robert Wilson",
      age: 1,
      startDate: "2016-03-01",
      status: "Pending",
    },
    {
      name: "Sophia Martinez",
      age: 1,
      startDate: "2021-08-19",
      status: "Cleared",
    },
    { name: "James White", age: 1, startDate: "2019-12-04", status: "Pending" },
    {
      name: "Emma Davis",
      age: 1,
      startDate: "2020-01-17",
      status: "Cleared",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = employees.slice(startIndex, startIndex + itemsPerPage);

  const [withdrawFunds, setWithdrawFunds] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-2 mt-[1rem]">
        <div className="rounded-sm bg-[#157bff] w-full p-5  gap-1 md:!h-[170px] h-auto flex md:!flex-row flex-col items-center justify-between  ">
          <div className="flex flex-col justify-center">
            <h1 className="text-white text-xl font-semibold">
              Community Passive Income
            </h1>
            <p className="text-white">
              Be part of building the community where you learn, show your
              workings, network, and earn globally.
            </p>
          </div>
          <div className="flex sm:!flex-row flex-col items-center gap-2">
            <div className="flex w-full overflow-y-scroll hide-scrollbar flex-col justify-between gap-3 p-2 bg-white shadow-md min-w-[250px] rounded">
              <h1 className="font-semibold sm:!text-xs text-sm border-b-2 border-gray-100 pb-1 text-black leading-tight w-fit">
                Available Balance
              </h1>
              <div className="flex items-center">
                <p
                  className="text-white font-bold text-base sm:!text-sm w-full px-3 py-2 rounded-sm leading-none"
                  style={{ backgroundColor: "#157bff" }}
                >
                  $122.00
                </p>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p
                  className={`text-[10px] pt-1 cursor-pointer transition-colors duration-200 text-gray-400 `}
                >
                  441 Approved referrals
                </p>
                <button
                  onClick={() => setWithdrawFunds(true)}
                  className="bg-[#FAAF40] cursor-pointer text-white text-[10px] flex items-center gap-1 p-1 rounded"
                >
                  Withdraw
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

            <div className="flex w-full overflow-y-scroll hide-scrollbar flex-col justify-between gap-3 p-2 bg-white shadow-md min-w-[250px] rounded">
              <h1 className="font-semibold sm:!text-xs text-sm border-b-2 border-gray-100 pb-1 text-black leading-tight w-fit">
                Total Payout
              </h1>
              <div className="flex items-center">
                <p
                  className="text-white font-bold text-base sm:!text-sm w-full px-3 py-2 rounded-sm leading-none"
                  style={{ backgroundColor: "#A6A6A6" }}
                >
                  $1220.00
                </p>
              </div>
              <div className="mt-2">
                <p
                  className={`text-[10px] pt-1 cursor-pointer text-black transition-colors duration-200 `}
                >
                  Next Payout $228
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" my-5">
          <div className="overflow-x-auto">
            <div className="overflow-y-auto">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-white sticky top-0 z-10">
                  <tr className="text-left uppercase border text-gray-700 font-semibold">
                    <th className="py-3 px-4">Referred</th>
                    <th className="py-3 px-4">Joined</th>
                    <th className="py-3 px-4">Commission</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((emp, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 !== 0 ? "bg-gray-100" : "bg-white"
                      } hover:bg-blue-50 transition-colors`}
                    >
                      <td className="py-3 px-4 border font-medium text-gray-800">
                        {emp.name}
                      </td>
                      <td className="py-3 px-4 border">{emp.startDate}</td>
                      <td className="py-3 px-4 border">${emp.age}</td>
                      <td
                        className={`py-3 px-4 border font-medium ${
                          emp.status === "Cleared"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {emp.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-end mt-4 text-sm text-gray-700">
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className={`w-7 h-7 flex justify-center items-center py-1 rounded-full border ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`w-7 h-7 flex justify-center items-center py-1 rounded-full border ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <WithdrawFunds
        open={withdrawFunds}
        onClose={() => setWithdrawFunds(false)}
      />
    </div>
  );
};

export default Referrals;

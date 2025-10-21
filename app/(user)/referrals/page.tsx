"use client";
import React, { useState } from "react";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  return (
    <div>
      <Navbar />
      <div className="container mx-auto md:!px-0 px-2 mt-[1rem]">

        <div className="rounded-sm bg-[#157bff] w-full p-5 flex flex-col gap-1 h-[150px] justify-center">
          <h1 className="text-white text-xl font-semibold">
            Community Passive Income
          </h1>
          <p className="text-white">
            Be part of building the community where you learn, show your
            workings, network, and earn globally.
          </p>
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
    </div>
  );
};

export default Referrals;

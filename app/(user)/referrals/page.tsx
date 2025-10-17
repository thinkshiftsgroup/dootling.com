"use client";
import React, { useState } from "react";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Employee {
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
}
const Referrals = () => {
  const employees: Employee[] = [
    {
      name: "John Doe",
      position: "Developer",
      office: "London",
      age: 32,
      startDate: "2021-04-12",
      salary: "$120,000",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      office: "New York",
      age: 28,
      startDate: "2020-06-01",
      salary: "$90,000",
    },
    {
      name: "Michael Brown",
      position: "Manager",
      office: "Tokyo",
      age: 41,
      startDate: "2018-09-15",
      salary: "$150,000",
    },
    {
      name: "Alice Johnson",
      position: "QA Engineer",
      office: "Berlin",
      age: 30,
      startDate: "2019-11-23",
      salary: "$85,000",
    },
    {
      name: "David Lee",
      position: "Data Analyst",
      office: "Paris",
      age: 27,
      startDate: "2022-02-10",
      salary: "$95,000",
    },
    {
      name: "Sarah Kim",
      position: "HR Specialist",
      office: "Seoul",
      age: 34,
      startDate: "2017-05-08",
      salary: "$78,000",
    },
    {
      name: "Robert Wilson",
      position: "Team Lead",
      office: "London",
      age: 38,
      startDate: "2016-03-01",
      salary: "$130,000",
    },
    {
      name: "Sophia Martinez",
      position: "Frontend Dev",
      office: "Toronto",
      age: 29,
      startDate: "2021-08-19",
      salary: "$110,000",
    },
    {
      name: "James White",
      position: "Backend Dev",
      office: "New York",
      age: 35,
      startDate: "2019-12-04",
      salary: "$115,000",
    },
    {
      name: "Emma Davis",
      position: "Product Owner",
      office: "Paris",
      age: 33,
      startDate: "2020-01-17",
      salary: "$140,000",
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
          <h1 className="text-white text-xl font-semibold ">Referrals (5)</h1>
          <p className="text-white">Lorem Ipsum</p>
        </div>

        <div className="rounded-sm border p-4 bg-white my-5">
          <h1 className="text-black font-semibold text-lg">Referrals Table</h1>
          <p className="text-sm mt-2 mb-5">Referrals list</p>

          <div className="overflow-x-auto">
            <div className="overflow-y-auto">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-white sticky top-0 z-10">
                  <tr className="text-left uppercase border text-gray-700 font-semibold">
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Position</th>
                    <th className="py-3 px-4">Office</th>
                    <th className="py-3 px-4">Age</th>
                    <th className="py-3 px-4">Start Date</th>
                    <th className="py-3 px-4">Salary</th>
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
                      <td className="py-3 px-4 border  font-medium text-gray-800">
                        {emp.name}
                      </td>
                      <td className="py-3 px-4 border ">{emp.position}</td>
                      <td className="py-3 px-4 border ">{emp.office}</td>
                      <td className="py-3 px-4 border ">{emp.age}</td>
                      <td className="py-3 px-4 border ">{emp.startDate}</td>
                      <td className="py-3 px-4 border ">{emp.salary}</td>
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
                className={` w-7 h-7 flex justify-center items-center py-1 rounded-full border ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <ChevronLeft/>
              </button>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={` w-7 h-7 flex justify-center items-center py-1 rounded-full border ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
               <ChevronRight/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;

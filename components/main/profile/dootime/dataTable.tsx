"use client";
import { Filter } from "lucide-react";
import React, { useState } from "react";

export default function DataTable() {
  const sampleData = [
    {
      no: 1,
      customer: "Felix Hohno",
      timeZone: { date: "23rd December 2025", zone: "18:00 Europe/London" },
      amountPaid: "$500",
      paymentDate: "12.09.2019 12:53 PM",
      purpose: "Subscription Renewal",
      transactionId: "1638hvdjshskdhtU",
      location: "London, UK",
      phone: "+44 7823 556789",
      email: "felixhorn36748@gmail.com",
      status: "Executed",
      link: "#",
    },
    {
      no: 2,
      customer: "Jane Smith",
      timeZone: { date: "5th January 2026", zone: "14:30 Europe/Paris" },
      amountPaid: "$350",
      paymentDate: "01.05.2020 3:15 PM",
      purpose: "Invoice Payment",
      transactionId: "TXN2024ABC987",
      location: "Paris, France",
      phone: "+33 612 444 321",
      email: "janesmith@example.com",
      status: "Rejected",
      link: "#",
    },
    {
      no: 3,
      customer: "Michael Johnson",
      timeZone: { date: "15th March 2026", zone: "09:00 America/New_York" },
      amountPaid: "$820",
      paymentDate: "03.11.2020 10:20 AM",
      purpose: "Product Purchase",
      transactionId: "TXN0036KJD89",
      location: "New York, USA",
      phone: "+1 917 334 1290",
      email: "michaeljohnson@example.com",
      status: "Executed",
      link: "#",
    },
    {
      no: 4,
      customer: "Sarah Williams",
      timeZone: { date: "27th April 2026", zone: "22:15 Africa/Lagos" },
      amountPaid: "$1200",
      paymentDate: "04.25.2021 08:47 PM",
      purpose: "Consulting Fee",
      transactionId: "TXN0048PLM23",
      location: "Lagos, Nigeria",
      phone: "+234 802 888 6543",
      email: "sarahwilliams@example.com",
      status: "Rejected",
      link: "#",
    },
  ];

  const [showAPT, setShowAPT] = useState(false);
  return (
    <div className=" ">
      <Filter
        className="block sm:!hidden"
        onClick={() => setShowAPT((prev) => !prev)}
        size={20}
      />
      <div className="!text-black my-2 !p-2 sm:!p-0 !whitespace-nowrap !border !bg-[#F9F9FB] !text-xs !font-medium !justify-around !border-[#D5D5D5] hidden sm:!flex sm:!flex-row !flex-col !items-center !rounded-md">
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

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-max border-collapse">
          <thead>
            <tr className="bg-[#E7F1FF] text-left text-sm font-medium text-gray-900">
              <th className="px-4 py-2 whitespace-nowrap">No</th>
              <th className="px-4 py-2 whitespace-nowrap">Customer</th>
              <th className="px-4 py-2 whitespace-nowrap">Time/Zone</th>
              <th className="px-4 py-2 whitespace-nowrap">Amount Paid</th>
              <th className="px-4 py-2 whitespace-nowrap">Payment Date</th>
              <th className="px-4 py-2 whitespace-nowrap">Purpose</th>
              <th className="px-4 py-2 whitespace-nowrap">Transaction ID</th>
              <th className="px-4 py-2 whitespace-nowrap">Location</th>
              <th className="px-4 py-2 whitespace-nowrap">Phone Number</th>
              <th className="px-4 py-2 whitespace-nowrap">Email Address</th>
              <th className="px-4 py-2 whitespace-nowrap">Status</th>
              <th className="px-4 py-2 whitespace-nowrap">Link</th>
            </tr>
          </thead>

          <tbody>
            {sampleData.map((row, index) => (
              <tr
                key={row.no}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-[#E7F1FF]/40"
                } border-b border-gray-100`}
              >
                <td className="px-4 py-1 text-sm text-gray-700">{row.no}</td>
                <td className="px-4 py-1 text-sm font-medium text-gray-900">
                  {row.customer}
                </td>
                <td className="px-4 py-1 text-sm text-gray-700">
                  <div className="flex flex-col border border-[#299D91] rounded-md px-3 py-2">
                    <span>{row.timeZone.date}</span>
                    <span className="text-xs text-gray-500">
                      {row.timeZone.zone}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-1 text-sm text-gray-700">
                  {row.amountPaid}
                </td>
                <td className="px-4 py-1 text-sm text-gray-700">
                  {row.paymentDate}
                </td>
                <td className="px-4 py-1 text-sm text-gray-700">
                  {row.purpose}
                </td>
                <td className="px-4 py-1 text-sm text-gray-700">
                  {row.transactionId}
                </td>
                <td className="px-4 py-1 text-sm text-gray-700">
                  {row.location}
                </td>
                <td className="px-4 py-1 text-sm text-gray-700">{row.phone}</td>
                <td className="px-4 py-1 text-sm text-gray-700">{row.email}</td>
                <td className="px-4 py-1 text-sm">
                  <span
                    className={`px-4 py-2 rounded-sm text-xs font-medium flex items-center gap-2 ${
                      row.status === "Executed"
                        ? "bg-[#157bff] text-white"
                        : "bg-[#EA0234] text-white"
                    }`}
                  >
                    {row.status}
                    {row.status === "Executed" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 120 121"
                        fill="none"
                      >
                        <path
                          d="M110.209 3.08857C114.085 0.808229 119.102 4.00071 118.19 8.56141L101.771 107.072C101.315 110.721 97.4388 112.773 94.2463 111.405L65.97 99.3192L51.3758 117.106C48.1833 120.982 41.7983 118.93 41.7983 113.457V94.9865L96.5266 28.1724C97.6668 26.8042 95.8425 25.2079 94.7024 26.3481L29.2564 84.0409L4.85674 73.7793C0.752115 72.1831 0.296046 66.2542 4.40067 63.9738L110.209 3.08857Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </span>
                </td>
                <td className="px-4 py-1 text-sm text-[#157bff] underline cursor-pointer">
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

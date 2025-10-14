"use client";
import { X } from "lucide-react";
import React, { useRef, useState } from "react";
import ReusableButton from "../../atom/mainBtn";
import CreateProjectEscrow from "./createProjectEscrow";
import AuditTrialsTable from "./auditTrails";

const FundAllocation = () => {
  const [openModal, setOpenModal] = useState(false);
  const [vault, setVault] = useState("");
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleCreateProject = () => {
    const selectedValue = selectRef.current?.value;
    if (selectedValue) {
      setVault(selectedValue);
      console.log("Vault created for:", selectedValue);
    } else {
      alert("Please select a project first!");
    }
  };
  return (
    <div className="rounded  bg-white p-4 shadow-md my-5">
      <h1 className="text-lg font-bold text-black">Fund Allocation</h1>

      <div className="flex sm:!flex-row !flex-col items-center my-4 !gap-2 sm:!gap-4">
        <select
          name=""
          ref={selectRef}
          className=" border sm:!w-1/2 w-full text-sm text-black border-gray-300/70 rounded-sm p-1.5"
          // onChange={(e) => setVault(e.target.value)}
          // value={vault}
        >
          <option value="">Select Project</option>
          <option value="developer">Developing Investor Vaults</option>
          <option value="marketer">Marketing Vaults</option>
        </select>

        <button
          onClick={handleCreateProject}
          className="bg-[#157BFF] sm:!text-base !text-sm hover:bg-blue-600 text-white px-2 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 188 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M164.5 109.667V148.833C164.5 152.988 162.849 156.973 159.911 159.911C156.973 162.849 152.988 164.5 148.833 164.5H39.1667C35.0116 164.5 31.0267 162.849 28.0887 159.911C25.1506 156.973 23.5 152.988 23.5 148.833V39.1667C23.5 35.0116 25.1506 31.0267 28.0887 28.0887C31.0267 25.1506 35.0116 23.5 39.1667 23.5H78.3333V39.1667H39.1667V148.833H148.833V109.667H164.5Z"
              fill="white"
            />
            <path
              d="M164.497 54.8333H133.164V23.5H117.497V54.8333H86.1641V70.5H117.497V101.833H133.164V70.5H164.497V54.8333Z"
              fill="white"
            />
          </svg>
          Create Project Escrow
        </button>
      </div>

      {vault && (
        <div>
          <div className="mr-10 flex flex-col gap-1 w-full max-w-2xl">
            {[
              {
                name: "Amelia Shaw",
                color: "#0b50ab",
                percent: 50,
                amount: "$1,250",
              },
              {
                name: "Ronald Nunez",
                color: "gray",
                percent: 30,
                amount: "$550",
              },
              {
                name: "Carolyn Ortiz",
                color: "#9ca3af",
                percent: 20,
                amount: "$200",
              },
            ].map((person, i) => (
              <div
                key={i}
                className="flex !flex-col sm:!flex-row items-center sm:items-center gap-3 sm:gap-4 w-full"
              >
                <div className="w-full sm:!w-1/4 text-center sm:!text-left">
                  <p className="font-semibold whitespace-nowrap !text-base sm:!text-lg text-black">
                    {person.name}
                  </p>
                </div>

                <div className="w-full sm:!flex-1 h-3 bg-gray-100 rounded relative overflow-hidden !mt-1 sm:!mt-0">
                  <div
                    className="absolute top-0 left-0 h-full rounded transition-all duration-300"
                    style={{
                      width: `${person.percent}%`,
                      backgroundColor: person.color,
                    }}
                  ></div>
                </div>

                <div className="flex items-center justify-between sm:!justify-end gap-2 w-full sm:!w-28 mt-1 sm:!mt-0">
                  <p className="font-bold !text-base sm:!text-lg text-black">
                    {person.percent}%
                  </p>
                  <p className="font-bold !text-base sm:!text-lg text-[#157BFF]">
                    {person.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="mt-5 w-full overflow-x-auto">
              <div className="min-w-[400px] max-w-xl w-full">
                {[
                  {
                    name: "Amelia Shaw",
                    email: "ameliashaw@example.com",
                    percent: "50%",
                  },
                  {
                    name: "Ronald Nunez",
                    email: "ronaldnunez@example.com",
                    percent: "30%",
                  },
                  {
                    name: "Carolyn Ortiz",
                    email: "carolynortiz@example.com",
                    percent: "20%",
                  },
                ].map((person, index) => (
                  <div
                    key={index}
                    className="py-2.5 flex !flex-row items-center justify-between text-gray-800 text-sm sm:text-base border-t border-gray-300/50 !whitespace-nowrap"
                  >
                    <p className="!w-1/3 !font-semibold text-left">
                      {person.name}
                    </p>
                    <p className="!w-1/3 text-left sm:text-center truncate">
                      {person.email}
                    </p>
                    <p className="!w-1/3 !font-bold text-right">
                      {person.percent}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-3">
              <ReusableButton
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M66.4603 127.999C100.449 127.999 127.999 100.449 127.999 66.4603C127.999 32.4714 100.449 4.92188 66.4603 4.92188C32.4714 4.92188 4.92188 32.4714 4.92188 66.4603C4.92188 100.449 32.4714 127.999 66.4603 127.999ZM66.4603 118.153C95.0093 118.153 118.153 95.0093 118.153 66.4603C118.153 37.9114 95.0093 14.768 66.4603 14.768C37.9114 14.768 14.768 37.9114 14.768 66.4603C14.768 95.0093 37.9114 118.153 66.4603 118.153Z"
                      fill="white"
                    />
                    <path
                      opacity="0.2"
                      d="M78.7701 41.8438H98.4624C99.1153 41.8438 99.7414 42.1031 100.203 42.5647C100.665 43.0263 100.924 43.6524 100.924 44.3053V63.9976C100.924 64.6504 100.665 65.2765 100.203 65.7382C99.7414 66.1998 99.1153 66.4591 98.4624 66.4591H78.7701C78.1173 66.4591 77.4912 66.1998 77.0296 65.7382C76.5679 65.2765 76.3086 64.6504 76.3086 63.9976V44.3053C76.3086 43.6524 76.5679 43.0263 77.0296 42.5647C77.4912 42.1031 78.1173 41.8438 78.7701 41.8438ZM49.2317 68.9207H68.924C70.2297 68.9207 71.4819 69.4394 72.4051 70.3626C73.3284 71.2859 73.8471 72.5381 73.8471 73.8438V93.5361C73.8471 94.8417 73.3284 96.0939 72.4051 97.0172C71.4819 97.9405 70.2297 98.4591 68.924 98.4591H49.2317C47.926 98.4591 46.6738 97.9405 45.7505 97.0172C44.8273 96.0939 44.3086 94.8417 44.3086 93.5361V73.8438C44.3086 72.5381 44.8273 71.2859 45.7505 70.3626C46.6738 69.4394 47.926 68.9207 49.2317 68.9207Z"
                      fill="white"
                    />
                    <path
                      d="M41.1254 90.3607C40.6632 90.8229 40.0363 91.0825 39.3826 91.0825C38.729 91.0825 38.1021 90.8229 37.6398 90.3607C37.1776 89.8985 36.918 89.2716 36.918 88.6179C36.918 87.9642 37.1776 87.3373 37.6398 86.8751L57.3322 67.1828C57.7944 66.7206 58.4213 66.4609 59.0749 66.4609C59.7286 66.4609 60.3555 66.7206 60.8177 67.1828C61.2799 67.645 61.5396 68.2719 61.5396 68.9256C61.5396 69.5792 61.2799 70.2061 60.8177 70.6684L41.1254 90.3607Z"
                      fill="white"
                    />
                    <path
                      d="M61.5364 88.6148C61.5364 89.2676 61.277 89.8937 60.8154 90.3554C60.3538 90.817 59.7277 91.0763 59.0748 91.0763C58.422 91.0763 57.7959 90.817 57.3342 90.3554C56.8726 89.8937 56.6133 89.2676 56.6133 88.6148V68.9225C56.6133 68.2696 56.8726 67.6435 57.3342 67.1819C57.7959 66.7203 58.422 66.4609 59.0748 66.4609C59.7277 66.4609 60.3538 66.7203 60.8154 67.1819C61.277 67.6435 61.5364 68.2696 61.5364 68.9225V88.6148Z"
                      fill="white"
                    />
                    <path
                      d="M39.3834 71.3865C38.7306 71.3865 38.1045 71.1272 37.6428 70.6656C37.1812 70.2039 36.9219 69.5778 36.9219 68.925C36.9219 68.2721 37.1812 67.646 37.6428 67.1844C38.1045 66.7228 38.7306 66.4634 39.3834 66.4634H59.0757C59.7286 66.4634 60.3547 66.7228 60.8163 67.1844C61.2779 67.646 61.5373 68.2721 61.5373 68.925C61.5373 69.5778 61.2779 70.2039 60.8163 70.6656C60.3547 71.1272 59.7286 71.3865 59.0757 71.3865H39.3834ZM70.6646 60.8216C70.4358 61.0505 70.1641 61.232 69.8651 61.3559C69.566 61.4797 69.2455 61.5435 68.9219 61.5435C68.5982 61.5435 68.2777 61.4797 67.9787 61.3559C67.6797 61.232 67.408 61.0505 67.1791 60.8216C66.9502 60.5927 66.7687 60.321 66.6448 60.022C66.521 59.723 66.4572 59.4025 66.4572 59.0788C66.4572 58.7552 66.521 58.4347 66.6448 58.1357C66.7687 57.8366 66.9502 57.5649 67.1791 57.3361L86.8714 37.6438C87.3336 37.1815 87.9605 36.9219 88.6142 36.9219C89.2678 36.9219 89.8947 37.1815 90.357 37.6438C90.8192 38.106 91.0788 38.7329 91.0788 39.3865C91.0788 40.0402 90.8192 40.6671 90.357 41.1293L70.6646 60.8216Z"
                      fill="white"
                    />
                    <path
                      d="M68.9225 61.5403C68.2696 61.5403 67.6435 61.2809 67.1819 60.8193C66.7203 60.3577 66.4609 59.7316 66.4609 59.0787C66.4609 58.4259 66.7203 57.7998 67.1819 57.3382C67.6435 56.8765 68.2696 56.6172 68.9225 56.6172H88.6148C89.2676 56.6172 89.8937 56.8765 90.3554 57.3382C90.817 57.7998 91.0763 58.4259 91.0763 59.0787C91.0763 59.7316 90.817 60.3577 90.3554 60.8193C89.8937 61.2809 89.2676 61.5403 88.6148 61.5403H68.9225Z"
                      fill="white"
                    />
                    <path
                      d="M71.384 59.0757C71.384 59.7286 71.1247 60.3547 70.663 60.8163C70.2014 61.2779 69.5753 61.5373 68.9225 61.5373C68.2696 61.5373 67.6435 61.2779 67.1819 60.8163C66.7203 60.3547 66.4609 59.7286 66.4609 59.0757V39.3834C66.4609 38.7306 66.7203 38.1045 67.1819 37.6428C67.6435 37.1812 68.2696 36.9219 68.9225 36.9219C69.5753 36.9219 70.2014 37.1812 70.663 37.6428C71.1247 38.1045 71.384 38.7306 71.384 39.3834V59.0757Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M63.9994 120.615C95.2659 120.615 120.615 95.2659 120.615 63.9994C120.615 32.7329 95.2659 7.38401 63.9994 7.38401C32.7329 7.38401 7.38401 32.7329 7.38401 63.9994C7.38401 95.2659 32.7329 120.615 63.9994 120.615ZM63.9994 125.538C97.9883 125.538 125.538 97.9883 125.538 63.9994C125.538 30.0105 97.9883 2.46094 63.9994 2.46094C30.0105 2.46094 2.46094 30.0105 2.46094 63.9994C2.46094 97.9883 30.0105 125.538 63.9994 125.538Z"
                      fill="white"
                    />
                  </svg>
                }
                text="Manage 'DEVELOPER PROJECT DEV TEAM' Smart Contract"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>

          {openModal && <CreateProjectEscrow setOpenModal={setOpenModal} />}

          <div className="rounded bg-white my-5">
            <div className="">
              <h1 className="sm:!text-lg text-base font-normal mb-2 text-black">
                Developer Project Dev Team{" "}
                <span className="font-bold">Audit Trials</span>
              </h1>
              <div className="text-black w-full border bg-[#F9F9FB] text-xs font-medium justify-around border-[#D5D5D5] flex items-center rounded-md">
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
            </div>
            <AuditTrialsTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default FundAllocation;

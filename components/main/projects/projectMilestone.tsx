import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import AddTaskModal from "./tabs/addTaskModal";
import ManageTasks from "./tabs/manageTasks";
import ContributionHeatmap from "../landing-page/heatMap";
import MileStoneHeatMap from "./mileStoneHeatMap";
import AddMileStone from "./addMileModal";
import EditMileStone from "./editMilestone";
import { useProject } from "@/hooks/useProjects";

const ProjectMilestone = ({ projectId }: any) => {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [manageTasksModal, setManageTasksMmodal] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<any>(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedRow((prev) => (prev === index ? null : index));
  };

  const { getMilestonebyId, getAllProjectById } = useProject();
  const { data, isLoading } = getMilestonebyId(projectId!);
  const { data: projectData, isLoading: projectDataLoad } = getAllProjectById(
    projectId!
  );

  //search filter
  const filteredData =
    data?.filter((milestone: any) => {
      const term = searchTerm.toLowerCase();
      return milestone.title.toLowerCase().includes(term);
    }) || [];

  //pagination
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="flex-1 w-full p-2 overflow-y-scroll hide-scrollbar space-y-4">
      <div className="flex md:!flex-row flex-col items-center gap-5">
        <div className="flex md:!flex-row flex-col items-center w-full gap-2">
          <button
            onClick={() => setAddTaskModal(true)}
            className="text-[#157bff] flex items-center gap-2 bg-[#157bff]/10 cursor-pointer rounded-sm py-2 px-4"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 250 250"
              fill="none"
              className="flex-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.8706 0.578125H205.966C217.618 0.578125 228.793 5.20698 237.033 13.4464C245.272 21.6858 249.901 32.8609 249.901 44.5132V205.608C249.901 217.261 245.272 228.436 237.033 236.675C228.793 244.914 217.618 249.543 205.966 249.543H44.8706C33.2183 249.543 22.0432 244.914 13.8038 236.675C5.5644 228.436 0.935547 217.261 0.935547 205.608V44.5132C0.935547 32.8609 5.5644 21.6858 13.8038 13.4464C22.0432 5.20698 33.2183 0.578125 44.8706 0.578125ZM44.8706 15.2231C37.1024 15.2231 29.6524 18.309 24.1594 23.802C18.6665 29.2949 15.5806 36.745 15.5806 44.5132V205.608C15.5806 213.377 18.6665 220.827 24.1594 226.319C29.6524 231.812 37.1024 234.898 44.8706 234.898H205.966C213.734 234.898 221.184 231.812 226.677 226.319C232.17 220.827 235.256 213.377 235.256 205.608V88.4482H118.096V15.2231H44.8706ZM235.256 44.5132C235.256 36.745 232.17 29.2949 226.677 23.802C221.184 18.309 213.734 15.2231 205.966 15.2231H132.741V73.8032H235.256V44.5132ZM74.1606 205.608V176.318H44.8706V161.673H74.1606V132.383H88.8056V161.673H118.096V176.318H88.8056V205.608H74.1606Z"
                fill="#157BFF"
              />
            </svg>
            <p className="text-sm whitespace-nowrap font-semibold">
              Add Milestone
            </p>
          </button>
          <div className="relative md:!w-1/2 w-full ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 259 259"
              fill="none"
              className="absolute left-2 top-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M96.1281 191.323C69.523 191.323 47.0088 182.106 28.5853 163.673C10.1619 145.24 0.945318 122.725 0.935555 96.1301C0.925791 69.5347 10.1424 47.0205 28.5853 28.5873C47.0283 10.1541 69.5426 0.9375 96.1281 0.9375C122.714 0.9375 145.233 10.1541 163.686 28.5873C182.138 47.0205 191.35 69.5347 191.321 96.1301C191.321 106.87 189.612 116.999 186.195 126.518C182.778 136.038 178.14 144.459 172.282 151.781L254.294 233.793C256.979 236.478 258.322 239.895 258.322 244.045C258.322 248.194 256.979 251.611 254.294 254.296C251.609 256.981 248.192 258.324 244.043 258.324C239.893 258.324 236.476 256.981 233.791 254.296L151.779 172.284C144.457 178.142 136.036 182.78 126.517 186.197C116.997 189.614 106.868 191.323 96.1281 191.323ZM96.1281 162.033C114.434 162.033 129.997 155.628 142.816 142.818C155.636 130.009 162.04 114.446 162.031 96.1301C162.021 77.8141 155.616 62.2562 142.816 49.4564C130.017 36.6567 114.454 30.2471 96.1281 30.2275C77.8023 30.208 62.2445 36.6176 49.4545 49.4564C36.6645 62.2952 30.2549 77.8531 30.2256 96.1301C30.1963 114.407 36.6059 129.97 49.4545 142.818C62.303 155.667 77.8609 162.072 96.1281 162.033Z"
                fill="#157BFF"
              />
            </svg>

            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-[#157bff] text-sm rounded-sm py-2 px-4 indent-4 w-full placeholder:text-[#D8D8D8]"
            />
          </div>
        </div>

        <div className="flex flex-wrap w-full items-center gap-2">
          <div className="flex -space-x-2 items-center">
            {projectData?.contributors
              ?.slice(0, 3)
              .map((contributor: any, index: number) => {
                const user = contributor.user;
                const initial = user.fullName?.charAt(0)?.toUpperCase() || "?";

                return user.profilePhotoUrl ? (
                  <Image
                    key={index}
                    alt={user.fullName}
                    src={user.profilePhotoUrl}
                    width={100}
                    height={100}
                    className="rounded-full w-7 h-7 object-cover object-top border-2 border-white"
                  />
                ) : (
                  <div
                    key={index}
                    className="rounded-full w-7 h-7 flex items-center justify-center bg-gray-300 text-[10px] font-semibold text-gray-700 border-2 border-white"
                  >
                    {initial}
                  </div>
                );
              })}
          </div>

          <p className="flex whitespace-nowrap items-center gap-1 text-black font-semibold">
            {projectData?.contributors?.[0]?.user.fullName}{" "}
            {projectData?.contributors?.length > 1 && (
              <span className="text-gray-500">
                And {projectData.contributors.length - 1} Others
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="mt-3 md:flex-row flex-col flex items-center justify-between gap-2">
        <div className="md:!w-[60vw] w-full">
          <MileStoneHeatMap pageType={"profile"} />
        </div>

        <div className=" flex flex-col gap-1 w-full">
          {[
            {
              name: "Amelia Shaw",
              color: "#2a7fcc",
              percent: 50,
              amount: "Contribution",
            },
            {
              name: "Ronald Nunez",
              color: "gray",
              percent: 30,
              amount: "Contribution",
            },
            {
              name: "Carolyn Ortiz",
              color: "#9ca3af",
              percent: 20,
              amount: "Contribution",
            },
          ].map((person, i) => (
            <div
              key={i}
              className="flex !flex-col sm:!flex-row items-center sm:items-center gap-3 sm:gap-4 w-full"
            >
              <div className="w-full sm:!w-1/4 text-center sm:!text-left">
                <p className="font-semibold whitespace-nowrap !text-xs sm:!text-sm text-black">
                  {person.name}
                </p>
              </div>

              <div className="w-full sm:!flex-1 h-2.5 bg-gray-100 rounded relative overflow-hidden !mt-1 sm:!mt-0">
                <div
                  className="absolute top-0 left-0 h-full rounded transition-all duration-300"
                  style={{
                    width: `${person.percent}%`,
                    backgroundColor: person.color,
                  }}
                ></div>
              </div>

              <div className="flex  items-center justify-between sm:!justify-end gap-1 w-full sm:!w-28 mt-1 sm:!mt-0">
                <p className=" !text-xs sm:!text-sm text-black">
                  {person.percent}%
                </p>
                <p className=" !text-xs sm:!text-sm text-[#157BFF]">
                  {person.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="min-w-[600px] sm:min-w-full border-collapse">
        <table className="min-w-full border-collapse">
          <thead className="bg-[#E7F1FF]/30 font-medium text-xs sm:!text-sm text-left">
            <tr>
              <th className="py-3 px-2">Title</th>
              <th className="py-3 px-2">Release</th>
              <th className="py-3 px-2">Due Date</th>
              <th className="py-3 px-2">Release Date</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2">Rule</th>

              <th className="py-3 px-2">Manage</th>
            </tr>
          </thead>

          <tbody className="[&>tr:nth-child(even)]:bg-[#E7F1FF]/30 text-xs sm:text-sm">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  Loading milestones...
                </td>
              </tr>
            ) : paginatedData?.length ? (
              paginatedData.map((milestone: any, index: any) => (
                <>
                  <tr key={index}>
                    <td className="py-3">
                      <div className="flex flex-col px-1">
                        <p className="text-sm font-medium">{milestone.title}</p>
                        <p className="text-[#B0B0B0] text-[10px] sm:!text-xs">
                          {new Date(milestone.createdAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-[10px] sm:!text-xs text-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-sm">
                        {milestone.releasePercentage}%
                      </span>
                    </td>

                    <td className="py-3 px-2">
                      {new Date(milestone.dueDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-3 px-2">
                      {milestone.releaseDate
                        ? new Date(milestone.releaseDate).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )
                        : "—"}
                    </td>

                    <td className="py-3 px-2 text-[10px] sm:!text-xs font-medium text-center">
                      {milestone.releaseDate ? (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-sm">
                          Released
                        </span>
                      ) : (
                        <span className="bg-yellow-600 text-white px-3 py-1 rounded-sm">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-2 text-gray-600 text-sm text-left">
                      {milestone.description.length > 20
                        ? milestone.description.slice(0, 20) + "..."
                        : milestone.description}
                      <span
                        onClick={() => handleToggle(milestone.id)}
                        className="text-[#157bff] cursor-pointer text-[10px] sm:!text-xs ml-1"
                      >
                        {expandedRow === milestone.id
                          ? "show less"
                          : "show more"}
                      </span>
                    </td>

                    <td className="py-3 px-2 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span
                          onClick={() => {
                            setSelectedMilestone(milestone);
                            setManageTasksMmodal(true);
                          }}
                          className="cursor-pointer"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 352 352"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M226.597 110.539C237.237 110.533 247.551 106.865 255.807 100.153C264.064 93.441 269.759 84.0927 271.938 73.6777H312.204C314.038 73.6647 315.828 73.1117 317.35 72.0877C318.872 71.0637 320.058 69.6141 320.761 67.9198C321.464 66.2256 321.653 64.3618 321.303 62.5612C320.953 60.7606 320.081 59.1029 318.794 57.7952C317.038 56.061 314.672 55.0833 312.204 55.0712H272.003C269.88 44.5883 264.197 35.1624 255.917 28.3916C247.637 21.6209 237.27 17.9219 226.575 17.9219C215.879 17.9219 205.512 21.6209 197.232 28.3916C188.953 35.1624 183.269 44.5883 181.146 55.0712H39.3235C36.9343 55.1873 34.6814 56.2182 33.0316 57.9501C31.3817 59.6821 30.4615 61.9824 30.4615 64.3744C30.4615 66.7664 31.3817 69.0667 33.0316 70.7987C34.6814 72.5307 36.9343 73.5615 39.3235 73.6777H181.234C183.414 84.1 189.116 93.4541 197.381 100.167C205.646 106.88 215.971 110.543 226.619 110.539M226.619 91.2078C223.07 91.2078 219.557 90.5089 216.278 89.151C213 87.7931 210.022 85.8028 207.513 83.2938C205.003 80.7847 203.013 77.8061 201.655 74.5278C200.297 71.2496 199.599 67.736 199.599 64.1877C199.599 60.6394 200.297 57.1258 201.655 53.8476C203.013 50.5694 205.003 47.5907 207.513 45.0816C210.022 42.5726 213 40.5823 216.278 39.2244C219.557 37.8665 223.07 37.1677 226.619 37.1677C233.785 37.1677 240.657 40.0144 245.725 45.0816C250.792 50.1489 253.639 57.0215 253.639 64.1877C253.639 71.3539 250.792 78.2265 245.725 83.2938C240.657 88.361 233.785 91.2078 226.619 91.2078ZM129.874 222.508C140.554 222.513 150.908 218.83 159.185 212.081C167.463 205.333 173.156 195.933 175.302 185.47L312.226 185.317C314.056 185.299 315.84 184.745 317.357 183.722C318.875 182.699 320.058 181.253 320.76 179.563C321.462 177.873 321.652 176.015 321.307 174.218C320.961 172.421 320.095 170.765 318.816 169.456C317.06 167.722 314.694 166.744 312.226 166.732L175.302 166.864C173.148 156.416 167.455 147.032 159.185 140.294C150.915 133.555 140.574 129.876 129.907 129.876C119.239 129.876 108.898 133.555 100.628 140.294C92.3582 147.032 86.6656 156.416 84.5107 166.864L39.3235 166.732C36.859 166.732 34.4955 167.711 32.7529 169.454C31.0103 171.196 30.0313 173.56 30.0312 176.024C30.0313 178.489 31.0103 180.852 32.7529 182.595C34.4955 184.338 36.859 185.317 39.3235 185.317L84.5107 185.47C86.6553 195.925 92.342 205.32 100.611 212.067C108.879 218.815 119.201 222.503 129.874 222.508ZM129.896 203.176C122.729 203.176 115.857 200.329 110.79 195.262C105.722 190.195 102.876 183.322 102.876 176.156C102.876 168.99 105.722 162.117 110.79 157.05C115.857 151.983 122.729 149.136 129.896 149.136C137.062 149.136 143.934 151.983 149.002 157.05C154.069 162.117 156.916 168.99 156.916 176.156C156.916 183.322 154.069 190.195 149.002 195.262C143.934 200.329 137.062 203.176 129.896 203.176ZM226.509 333.619C237.213 333.616 247.587 329.908 255.868 323.125C264.149 316.342 269.827 306.901 271.938 296.406L312.204 296.978C314.038 296.965 315.828 296.411 317.35 295.387C318.872 294.363 320.058 292.914 320.761 291.22C321.464 289.525 321.653 287.662 321.303 285.861C320.953 284.06 320.081 282.403 318.794 281.095C317.038 279.361 314.672 278.383 312.204 278.371L271.872 277.778C269.686 267.365 263.985 258.021 255.724 251.315C247.464 244.609 237.148 240.948 226.509 240.948C215.869 240.948 205.553 244.609 197.293 251.315C189.033 258.021 183.331 267.365 181.146 277.778L39.3015 278.371C36.9124 278.487 34.6594 279.518 33.0096 281.25C31.3598 282.982 30.4395 285.282 30.4395 287.674C30.4395 290.066 31.3598 292.367 33.0096 294.099C34.6594 295.831 36.9124 296.861 39.3015 296.978L181.08 296.406C183.19 306.901 188.868 316.342 197.149 323.125C205.43 329.908 215.804 333.616 226.509 333.619ZM226.509 314.288C219.343 314.288 212.47 311.441 207.403 306.374C202.335 301.307 199.489 294.434 199.489 287.268C199.489 280.102 202.335 273.229 207.403 268.162C212.47 263.095 219.343 260.248 226.509 260.248C233.675 260.248 240.548 263.095 245.615 268.162C250.682 273.229 253.529 280.102 253.529 287.268C253.529 294.434 250.682 301.307 245.615 306.374C240.548 311.441 233.675 314.288 226.509 314.288Z"
                              fill="#157BFF"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                  </tr>
                  {expandedRow === milestone.id && (
                    <tr className="bg-[#E7F1FF]/20">
                      <td
                        colSpan={7}
                        className="py-3 px-4 text-sm text-gray-700"
                      >
                        <p>{milestone.description}</p>
                      </td>
                    </tr>
                  )}
                </>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No milestones found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex sm:!flex-row flex-col gap-2 items-center justify-between py-3 px-2">
        <p className="text-xs text-gray-600">
          Showing{" "}
          <span className="font-medium">
            {(currentPage - 1) * itemsPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="font-medium">
            {Math.min(currentPage * itemsPerPage, totalItems)}
          </span>{" "}
          of <span className="font-medium">{totalItems}</span> results
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 text-xs disabled:opacity-50"
          >
            <FaAngleLeft />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i + 1)}
              className={`px-3 py-1 border rounded-md text-xs hover:bg-gray-100 ${
                currentPage === i + 1
                  ? "bg-blue-50 border-blue-400 text-blue-600"
                  : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-[#157bff] text-xs disabled:opacity-50"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
      {addTaskModal && (
        <AddMileStone
          projectId={projectId}
          open={addTaskModal}
          onClose={() => setAddTaskModal(false)}
        />
      )}
      {manageTasksModal && selectedMilestone && (
        <EditMileStone
          open={manageTasksModal}
          onClose={() => {
            setManageTasksMmodal(false);
            setSelectedMilestone(null);
          }}
          milestone={selectedMilestone}
          projectId={projectId}
        />
      )}
    </div>
  );
};

export default ProjectMilestone;

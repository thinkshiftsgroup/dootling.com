import React, { useState } from "react";
import Image from "next/image";
import EditContPercentage from "./editContributorsPercentage";
import AddContributorsModal from "./addContributorsModal";
import { useProject } from "@/hooks/useProjects";

const ContributorsTab = ({ project }: any) => {
  const [openModal, setOpenModal] = useState(false);
  const [addContributorsModal, setAddContributorsModal] = useState(false);
  const [selectedContributorId, setSelectedContributorId] = useState<
    string | null
  >(null);

  const { getAllProjectById } = useProject();
  const { data, isLoading } = getAllProjectById(project.id!);

  const contributors = data?.contributors || [];

  const handleOpenModal = (id: string) => {
    setSelectedContributorId(id);
    setOpenModal(true);
  };

  return (
    <div className="overflow-x-auto my-5">
      <div className="flex justify-end w-full">
        <button
          onClick={() => setAddContributorsModal(true)}
          className="text-[#157bff] mb-3 flex items-center gap-2 bg-[#157bff]/10 cursor-pointer rounded-sm py-2 px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeWidth="2"
              d="M16 20v-1a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v1M12.5 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm3 4a4 4 0 0 0 0-8M23 20v-1a4 4 0 0 0-4-4"
            />
          </svg>
          <p className="text-sm whitespace-nowrap font-semibold">
            Add Contributors
          </p>
        </button>
      </div>

      <table className="min-w-full border-collapse">
        <thead className="bg-[#E7F1FF]/30 font-medium text-xs sm:!text-sm text-left">
          <tr>
            <th className="py-3 px-2">Contributor</th>
            <th className="py-3 px-2">Role</th>
            <th className="py-3 px-2">Released</th>
            <th className="py-3 px-2">Budget</th>
            <th className="py-3 px-2">Status</th>
            <th className="py-3 px-2">Manage</th>
          </tr>
        </thead>

        <tbody className="[&>tr:nth-child(even)]:bg-[#E7F1FF]/30">
          {contributors.length > 0 ? (
            contributors.map((cont: any, i: number) => (
              <tr key={i} className="hover:bg-[#E7F1FF]/10">
                <td className="py-3">
                  <div className="flex items-center gap-1">
                    <Image
                      alt="user-img"
                      src={
                        cont.user.profilePhotoUrl || "/images/user/taskUser.png"
                      }
                      width={100}
                      height={100}
                      className="rounded-sm w-10 h-10 object-cover object-top border-2 border-white"
                    />
                    <div className="flex flex-col gap-0.5">
                      <p className="font-semibold text-xs sm:!text-sm text-black whitespace-nowrap">
                        {cont.user.fullName}
                      </p>
                      {cont.user.inviteSent && (
                        <p className="text-[10px] flex-none text-center text-black bg-gray-100 rounded-sm">
                          invite sent
                        </p>
                      )}
                    </div>
                  </div>
                </td>

                <td className="py-3 px-1 text-sm font-medium">
                  {cont.user.role || "—"}
                </td>

                <td className="py-3 px-2 text-[10px] sm:!text-xs text-left">
                  <div className="flex flex-col">
                    <div>
                      ${cont.user.releasedAmount || 0}
                      <span className="text-[10px] ml-1.5 flex-none text-center text-black bg-gray-200 rounded-sm p-1">
                        {cont.user.releasedPercent || 0}%
                      </span>
                    </div>
                    <p>{cont.user.releasedDate || "--"}</p>
                  </div>
                </td>

                <td className="py-3 px-2 text-[10px] sm:!text-xs text-left">
                  <div className="flex flex-col">
                    <div>
                      ${cont.user.balanceAmount || 0}
                      <span className="text-[10px] ml-1.5 flex-none text-center text-black bg-gray-200 rounded-sm p-1">
                        {cont.user.balancePercent || 0}%
                      </span>
                    </div>
                    <p>{cont.user.balanceDate || "--"}</p>
                  </div>
                </td>

                <td className="py-3 px-2 text-xs text-center">
                  <p
                    className={`p-1 rounded-sm text-white ${
                      cont.user.status === "Completed"
                        ? "bg-green-500"
                        : "bg-[#FAAF40]"
                    }`}
                  >
                    {cont.user.status || "In Progress"}
                  </p>
                </td>

                <td className="py-3 px-2">
                  <div className="flex items-center justify-center gap-2">
                    <span
                      onClick={() => handleOpenModal(cont.user.id)}
                      className="cursor-pointer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 352 352"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M226.597 110.539C237.237 110.533 247.551 106.865 255.807 100.153C264.064 93.441 269.759 84.0927 271.938 73.6777H312.204C314.038 73.6647 315.828 73.1117 317.35 72.0877C318.872 71.0637 320.058 69.6141 320.761 67.9198C321.464 66.2256 321.653 64.3618 321.303 62.5612C320.953 60.7606 320.081 59.1029 318.794 57.7952C317.038 56.061 314.672 55.0833 312.204 55.0712H272.003C269.88 44.5883 264.197 35.1624 255.917 28.3916C247.637 21.6209 237.27 17.9219 226.575 17.9219C215.879 17.9219 205.512 21.6209 197.232 28.3916C188.953 35.1624 183.269 44.5883 181.146 55.0712H39.3235C36.9343 55.1873 34.6814 56.2182 33.0316 57.9501C31.3817 59.6821 30.4615 61.9824 30.4615 64.3744C30.4615 66.7664 31.3817 69.0667 33.0316 70.7987C34.6814 72.5307 36.9343 73.5615 39.3235 73.6777H181.234C183.414 84.1 189.116 93.4541 197.381 100.167C205.646 106.88 215.971 110.543 226.619 110.539M226.619 91.2078C223.07 91.2078 219.557 90.5089 216.278 89.151C213 87.7931 210.022 85.8028 207.513 83.2938C205.003 80.7847 203.013 77.8061 201.655 74.5278C200.297 71.2496 199.599 67.736 199.599 64.1877C199.599 60.6394 200.297 57.1258 201.655 53.8476C203.013 50.5694 205.003 47.5907 207.513 45.0816C210.022 42.5726 213 40.5823 216.278 39.2244C219.557 37.8665 223.07 37.1677 226.619 37.1677C233.785 37.1677 240.657 40.0144 245.725 45.0816C250.792 50.1489 253.639 57.0215 253.639 64.1877C253.639 71.3539 250.792 78.2265 245.725 83.2938C240.657 88.361 233.785 91.2078 226.619 91.2078ZM129.874 222.508C140.554 222.513 150.908 218.83 159.185 212.081C167.463 205.333 173.156 195.933 175.302 185.47L312.226 185.317C314.056 185.299 315.84 184.745 317.357 183.722C318.875 182.699 320.058 181.253 320.76 179.563C321.462 177.873 321.652 176.015 321.307 174.218C320.961 172.421 320.095 170.765 318.816 169.456C317.06 167.722 314.694 166.744 312.226 166.732L175.302 166.864C173.148 156.416 167.455 147.032 159.185 140.294C150.915 133.555 140.574 129.876 129.907 129.876C119.239 129.876 108.898 133.555 100.628 140.294C92.3582 147.032 86.6656 156.416 84.5107 166.864L39.3235 166.732C36.859 166.732 34.4955 167.711 32.7529 169.454C31.0103 171.196 30.0313 173.56 30.0312 176.024C30.0313 178.489 31.0103 180.852 32.7529 182.595C34.4955 184.338 36.859 185.317 39.3235 185.317L84.5107 185.47C86.6553 195.925 92.342 205.32 100.611 212.067C108.879 218.815 119.201 222.503 129.874 222.508ZM129.896 203.176C122.729 203.176 115.857 200.329 110.79 195.262C105.722 190.195 102.876 183.322 102.876 176.156C102.876 168.99 105.722 162.117 110.79 157.05C115.857 151.983 122.729 149.136 129.896 149.136C137.062 149.136 143.934 151.983 149.002 157.05C154.069 162.117 156.916 168.99 156.916 176.156C156.916 183.322 154.069 190.195 149.002 195.262C143.934 200.329 137.062 203.176 129.896 203.176ZM226.509 333.619C237.213 333.616 247.587 329.908 255.868 323.125C264.149 316.342 269.827 306.901 271.938 296.406L312.204 296.978C314.038 296.965 315.828 296.411 317.35 295.387C318.872 294.363 320.058 292.914 320.761 291.22C321.464 289.525 321.653 287.662 321.303 285.861C320.953 284.06 320.081 282.403 318.794 281.095C317.038 279.361 314.672 278.383 312.204 278.371L271.872 277.778C269.686 267.365 263.985 258.021 255.724 251.315C247.464 244.609 237.148 240.948 226.509 240.948C215.869 240.948 205.553 244.609 197.293 251.315C189.033 258.021 183.331 267.365 181.146 277.778L39.3015 278.371C36.9124 278.487 34.6594 279.518 33.0096 281.25C31.3598 282.982 30.4395 285.282 30.4395 287.674C30.4395 290.066 31.3598 292.367 33.0096 294.099C34.6594 295.831 36.9124 296.861 39.3015 296.978L181.08 296.406C183.19 306.901 188.868 316.342 197.149 323.125C205.43 329.908 215.804 333.616 226.509 333.619ZM226.509 314.288C219.343 314.288 212.47 311.441 207.403 306.374C202.335 301.307 199.489 294.434 199.489 287.268C199.489 280.102 202.335 273.229 207.403 268.162C212.47 263.095 219.343 260.248 226.509 260.248C233.675 260.248 240.548 263.095 245.615 268.162C250.682 273.229 253.529 280.102 253.529 287.268C253.529 294.434 250.682 301.307 245.615 306.374C240.548 311.441 233.675 314.288 226.509 314.288Z"
                          fill="#157BFF"
                        />{" "}
                      </svg>
                    </span>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="text-center py-6 text-sm text-gray-500"
              >
                No contributors yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {openModal && (
        <EditContPercentage
          project={project}
          onClose={() => setOpenModal(false)}
          contributorId={selectedContributorId}
        />
      )}

      <AddContributorsModal
        project={project}
        onClose={() => setAddContributorsModal(false)}
        open={addContributorsModal}
      />
    </div>
  );
};

export default ContributorsTab;

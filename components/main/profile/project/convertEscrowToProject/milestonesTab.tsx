import ContributionHeatmap from "@/components/main/landing-page/heatMap";
import React from "react";

const MilestoneTab = () => {
  return (
    <div className="mt-3">
      <ContributionHeatmap pageType={"profile"} />
      <div className="mr-10 flex flex-col gap-1 w-full max-w-2xl">
        {[
          {
            name: "Amelia Shaw",
            color: "#0b50ab",
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
              <p className="font-semibold whitespace-nowrap !text-sm sm:!text-base text-black">
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

            <div className="flex ml-5 items-center justify-between sm:!justify-end gap-1 w-full sm:!w-28 mt-1 sm:!mt-0">
              <p className=" !text-sm sm:!text-base text-black">
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
  );
};

export default MilestoneTab;

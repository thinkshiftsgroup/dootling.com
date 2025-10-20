import React from "react";
import AvailabilityScheduler from "./availabilityScheduler";

const ServiceDetailsTab = () => {
  return (
    <div className="lg:!h-[72vh] h-[67vh] overflow-y-scroll hide-scrollbar">
      <div>
        <label
          className="font-semibold text-gray-600 sm:!text-base  text-sm"
          htmlFor="Amount"
        >
          Booking Page Title*
        </label>
        <div className="flex my-2">
          <input
            type="text"
            className="w-full border rounded-md text-sm p-2 border-[#f1f1f1] transition focus:border-[#157BFF]  focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label
          className="font-semibold text-gray-600 sm:!text-base  text-sm"
          htmlFor="Amount"
        >
          Booking Page Username
        </label>
        <div className="relative my-2">
          <input
            type="text"
            className="w-full border rounded-md text-sm p-2 border-[#f1f1f1] transition focus:border-[#157BFF]  focus:outline-none"
          />
          <div className="absolute border-l py-2 pl-2 right-2 top-0.5 rounded-sm">
            <div className="flex items-center gap-1">
              <div className="flex-shrink-0 w-5 h-5 text-sm sm:!text-base bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-green-500 font-medium">Available</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label
          className="font-semibold text-gray-600 sm:!text-base  text-sm"
          htmlFor="Amount"
        >
          Service and Payment Terms*
        </label>
        <div className="flex my-2">
          <textarea className="w-full h-[100px] border rounded-md text-sm p-2 border-[#f1f1f1] transition focus:border-[#157BFF]  focus:outline-none" />
        </div>
      </div>
      <AvailabilityScheduler />
      <button className="sm:!w-1/3 w-full font-semibold mt-2 text-white bg-[#157bff] rounded-sm p-2 mx-auto">
        Update Details
      </button>
    </div>
  );
};

export default ServiceDetailsTab;

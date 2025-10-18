"use client";
import React, { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";

interface FeeTier {
  id: number;
  name: string;
  usd: number;
  ngn: number;
  place: string;
  duration: string;
  description: string;
  default: boolean;
  approval: boolean;
}

export default function FeeTier() {
  const [feeTiers, setFeeTiers] = useState<FeeTier[]>([
    {
      id: Date.now(),
      name: "",
      usd: 0,
      ngn: 0,
      place: "",
      duration: "",
      description: "",
      default: false,
      approval: false,
    },
  ]);

  const addFeeTier = () => {
    setFeeTiers([
      ...feeTiers,
      {
        id: Date.now(),
        name: "",
        usd: 0,
        ngn: 0,
        place: "",
        duration: "",
        description: "",
        default: false,
        approval: false,
      },
    ]);
  };

  const removeFeeTier = (id: number) => {
    setFeeTiers(feeTiers.filter((tier) => tier.id !== id));
  };

  const handleChange = (
    id: number,
    field: keyof FeeTier,
    value: string | number | boolean
  ) => {
    setFeeTiers(
      feeTiers.map((tier) =>
        tier.id === id ? { ...tier, [field]: value } : tier
      )
    );
  };

  return (
    <div className="lg:!h-[72vh] h-[67vh] overflow-y-scroll hide-scrollbar">
            {/* <div>
        <div className="flex items-center border rounded-sm p-2 cursor-pointer gap-2 mb-2">
          <label className="font-semibold text-gray-700 text-base">
            Add Fee Tiers*
          </label>
          <svg
            className="cursor-pointer"
            onClick={addFeeTier}
            width="20"
            height="20"
            viewBox="0 0 586 586"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M170.917 292.997H268.583V195.331H293V292.997H390.667V317.414H293V415.081H268.583V317.414H170.917V292.997ZM146.5 97.6641H415.083C434.51 97.6641 453.142 105.381 466.879 119.118C480.616 132.856 488.333 151.487 488.333 170.914V439.497C488.333 458.924 480.616 477.556 466.879 491.293C453.142 505.03 434.51 512.747 415.083 512.747H146.5C127.073 512.747 108.441 505.03 94.7044 491.293C80.9674 477.556 73.25 458.924 73.25 439.497V170.914C73.25 151.487 80.9674 132.856 94.7044 119.118C108.441 105.381 127.073 97.6641 146.5 97.6641ZM146.5 122.081C133.549 122.081 121.128 127.226 111.97 136.384C102.812 145.542 97.6667 157.963 97.6667 170.914V439.497C97.6667 452.449 102.812 464.87 111.97 474.028C121.128 483.186 133.549 488.331 146.5 488.331H415.083C428.035 488.331 440.456 483.186 449.614 474.028C458.772 464.87 463.917 452.449 463.917 439.497V170.914C463.917 157.963 458.772 145.542 449.614 136.384C440.456 127.226 428.035 122.081 415.083 122.081H146.5Z"
              fill="#157BFF"
            />
          </svg>
        </div>
      </div> */}
      <div className="space-y-4">
        {feeTiers.map((tier, index) => (
          <div key={tier.id} className="border rounded-md p-2 relative">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h1 className="font-semibold text-black">Add Fee Tier</h1>
                <p className="text-xs">
                  Create the service tiers your customers can pay for:
                </p>
              </div>
              {index !== 0 && (
                <RiDeleteBin2Line
                  onClick={() => removeFeeTier(tier.id)}
                  size={20}
                  className="text-green-500 cursor-pointer"
                />
              )}
            </div>
            <div className="space-y-2 ">
              <div>
                <label className="font-semibold text-black " htmlFor="Amount">
                  Fee Tier Name*
                </label>
                <div className="flex my-2">
                  <input
                    type="text"
                    className="w-full border rounded-md text-sm p-2 border-[#f1f1f1] transition focus:border-[#157BFF]  focus:outline-none"
                  />
                </div>
              </div>
              <div className="bg-gray-50 flex items-center gap-2 rounded border p-2">
                <div className="w-full">
                  <label className="font-semibold text-black text-xs">
                    Service Price (USD) Default*
                  </label>
                  <div className="flex my-2">
                    <input
                      type="number"
                      className="w-full border rounded-md text-sm p-2 border-[#f1f1f1] transition focus:border-[#157BFF]  focus:outline-none"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="font-semibold text-black text-xs">
                    Service Price (GBP)*
                  </label>
                  <div className="flex my-2">
                    <input
                      type="number"
                      className="w-full border rounded-md text-sm p-2 border-[#f1f1f1] transition focus:border-[#157BFF]  focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <label className="font-semibold text-black text-xs">
                  Where Would This Service Take Place*
                </label>
                <div className="flex my-2">
                  <input
                    type="text"
                    className="w-full border rounded-md text-sm p-2 border-[#f1f1f1] transition focus:border-[#157BFF]  focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="font-semibold text-black text-xs">
                  Service Tier Subscription*
                </label>
                <div className="flex my-2">
                  <textarea className="w-full h-[100px] border rounded-md text-sm p-2 border-[#f1f1f1] transition focus:border-[#157BFF]  focus:outline-none" />
                </div>
              </div>
            </div>
            <div className="space-y-4 my-5">
              <label className="flex text-xs font-semibold text-[#157bff] capitalize gap-2 items-start">
                <input
                  type="checkbox"
                  className="accent-[#157bff] mt-0.5"
                  checked={tier.default}
                  onChange={(e) =>
                    handleChange(tier.id, "default", e.target.checked)
                  }
                />
                If you need to close sales for this Fee Tier At a later time,
                return to this section
              </label>

              <label className="flex text-xs font-semibold text-[#157bff] capitalize gap-2 items-start">
                <input
                  type="checkbox"
                  className="accent-[#157bff] mt-0.5"
                  checked={tier.approval}
                  onChange={(e) =>
                    handleChange(tier.id, "approval", e.target.checked)
                  }
                />
                Make this service tier the default price
              </label>

              <label className="flex text-xs font-semibold text-[#157bff] capitalize gap-2 items-start">
                <input type="checkbox" className="accent-[#157bff] mt-0.5" />
                Requires Approval
              </label>
            </div>
            <div
              onClick={addFeeTier}
              className="flex justify-center items-center cursor-pointer bg-slate-50 text-[#157bff] rounded-sm p-2 gap-2 mb-2"
            >
              <FiPlus size={20} />
              <label className="font-semibold text-sm">Add Fee Tiers</label>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="sm:!w-1/3 w-full font-semibold mt-2 text-white bg-[#157bff] rounded-sm p-2 mx-auto">
          Update Details
        </button>
      </div>
    </div>
  );
}

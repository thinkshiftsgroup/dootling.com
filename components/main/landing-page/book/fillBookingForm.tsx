import { ArrowLeftCircleIcon } from "lucide-react";
import React from "react";

const FillBookingForm = ({ setPage }: any) => {
  return (
    <div className="p-6">
      <ArrowLeftCircleIcon
        size={20}
        className="text-[#157bff]"
        onClick={() => setPage(1)}
      />

      <div className="space-y-3 my-3">
        <select name="" id="" className="border rounded-sm p-2 text-sm w-full ">
          <option value="">$100 1:1 Clarity Session</option>
        </select>

        <div className="flex">
          <div className="w-1/3 -mr-10 bg-gray-200 rounded-sm p-2 relative">
            <select className="bg-gray-200  font-bold text-sm uppercase w-full focus:outline-none cursor-pointer">
              <option value="USD">USD</option>
            </select>
          </div>

          <input
            type="text"
            className="w-full indent-4 bg-white z-10 text-gray-600 rounded-sm border border-gray-400/50"
            inputMode="numeric"
          />
        </div>

        <input
          type="text"
          className="w-full bg-white p-2 z-10 text-gray-600 rounded-sm text-sm border border-gray-400/50"
          placeholder="Full Name"
        />
        <input
          type="text"
          className="w-full bg-white p-2 z-10 text-gray-600 rounded-sm text-sm border border-gray-400/50"
          placeholder="Phone Number"
        />
        <input
          type="text"
          className="w-full bg-white p-2 z-10 text-gray-600 rounded-sm text-sm border border-gray-400/50"
          placeholder="Email"
        />
        <input
          type="text"
          className="w-full bg-white p-2 z-10 text-gray-600 rounded-sm text-sm border border-gray-400/50"
          placeholder="Location"
        />
        <textarea
          className="w-full bg-white h-[100px] p-2 z-10 text-gray-600 rounded-sm text-sm border border-gray-400/50"
          placeholder="Purpose"
        />
      </div>
      <button className="rounded-sm bg-[#157bff] text-white font-bold p-2 uppercase">
        Book now
      </button>
    </div>
  );
};

export default FillBookingForm;

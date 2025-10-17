"use client";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import moment from "moment-timezone";

const AvailabilityScheduler = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeZone, setTimeZone] = useState("Africa/Lagos");
  const [availability, setAvailability] = useState<
    Record<string, { from: string; to: string }[]>
  >({});

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const toggleDay = (day: string) => {
    setAvailability((prev) => {
      const newAvail = { ...prev };
      if (newAvail[day]) delete newAvail[day];
      else newAvail[day] = [{ from: "09:00", to: "17:00" }];
      return newAvail;
    });
  };

  const addSlot = (day: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: [...(prev[day] || []), { from: "09:00", to: "17:00" }],
    }));
  };

  const removeSlot = (day: string, index: number) => {
    setAvailability((prev) => {
      const newSlots = [...(prev[day] || [])];
      newSlots.splice(index, 1);
      return { ...prev, [day]: newSlots };
    });
  };

  const updateSlot = (
    day: string,
    index: number,
    field: "from" | "to",
    value: string
  ) => {
    setAvailability((prev) => {
      const newSlots = [...(prev[day] || [])];
      newSlots[index][field] = value;
      return { ...prev, [day]: newSlots };
    });
  };

  const timeZones = moment.tz.names();

  return (
    <div className="space-y-4 border mt-2 rounded-md p-4 text-sm">
      <div className="flex items-center gap-2">
        <label className="font-semibold text-gray-700 text-base">
          Set Availability*
        </label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
          className="accent-[#157bff] w-5 h-5 cursor-pointer"
        />
      </div>

      {isActive && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <label className="font-semibold text-gray-700">
              Select your Time Zone
            </label>
            <select
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:border-[#157bff]"
            >
              {timeZones.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 font-medium">
              Tick the days of the week you provide your services on:
            </p>

            {days.map((day) => (
              <div key={day} className="space-y-2">
                <label className="flex text-[#157bff] items-center gap-1 font-bold">
                  <input
                    type="checkbox"
                    checked={!!availability[day]}
                    onChange={() => toggleDay(day)}
                    className="accent-[#157bff] w-4 h-4 cursor-pointer"
                  />
                  {day}
                </label>

                {availability[day] && (
                  <div className="ml-3 border-l-2 border-[#157bff] pl-3 space-y-2">
                    <p className="text-xs text-gray-500">
                      Set when you are typically available for meetings
                    </p>

                    {availability[day].map((slot, idx) => (
                      <div
                        key={idx}
                        className="flex text-black items-center gap-2"
                      >
                        <input
                          type="time"
                          value={slot.from}
                          onChange={(e) =>
                            updateSlot(day, idx, "from", e.target.value)
                          }
                          className="border p-1 rounded-md"
                        />
                        <span>–</span>
                        <input
                          type="time"
                          value={slot.to}
                          onChange={(e) =>
                            updateSlot(day, idx, "to", e.target.value)
                          }
                          className="border p-1 rounded-md"
                        />
                        <button
                          onClick={() => removeSlot(day, idx)}
                          disabled={availability[day].length === 1}
                          className="bg-red-500 text-white px-1 py-1 rounded-sm disabled:opacity-50"
                        >
                          <IoIosClose size={14} />
                        </button>
                        {idx === availability[day].length - 1 && (
                          <button
                            onClick={() => addSlot(day)}
                            className="bg-[#157bff] text-white text-xs px-2 py-1.5 rounded-sm"
                          >
                            <FaPlus size={12} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailabilityScheduler;

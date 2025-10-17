"use client";

import React, { useEffect, useState } from "react";
import {
  format,
  addMinutes,
  startOfDay,
  isBefore,
  startOfToday,
  isWeekend,
} from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import moment from "moment-timezone";
import { FaGlobeAfrica } from "react-icons/fa";

const SelectTimeDate = ({ setPage }: any) => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeZone, setTimeZone] = useState("Africa/Lagos");

  const times = Array.from({ length: 48 }, (_, i) =>
    addMinutes(startOfDay(new Date()), i * 30)
  );

  const timeZones = moment.tz.names();

  return (
    <div className="p-6 h-[84vh] overflow-y-scroll hide-scrollbar">
      <p className="text-xl font-bold text-black mb-4">Select a Date & Time</p>

      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-4 w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(day) => day && setDate(day)}
            className="w-full"
            disabled={(day) => isBefore(day, startOfToday())}
            modifiers={{
              workingDays: (day) =>
                !isWeekend(day) && !isBefore(day, startOfToday()),
            }}
            modifiersClassNames={{
              today:
                "border border-[#157bff] text-[#157bff] font-semibold rounded-full",
              workingDays: "bg-[#157bff]/10 text-[#157bff] rounded-full",
            }}
          />
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-xs font-medium text-gray-900">
              Time Zone
            </label>
            <div className="relative">
              <select
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                className="mt-1 text-black indent-7 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#157bff]"
              >
                {timeZones.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
              <FaGlobeAfrica
                className="absolute top-3 left-2 text-gray-600"
                size={16}
              />
            </div>
          </div>
        </div>

        <div className="col-span-3 w-full">
          {date && (
            <div className="text-gray-800 text-sm">
              <p className="text-sm font-medium">
                {format(date, "EEEE, MMMM do")}
              </p>
              <div className="p-1.5 my-2 text-xs justify-center flex items-center gap-1 bg-[#157bff]/10 text-black rounded">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Times you are available
              </div>
            </div>
          )}

          {date && (
            <div className="h-[60vh] my-5 space-y-2 overflow-y-scroll hide-scrollbar">
              {times.map((t, i) => {
                const label = format(t, "HH:mm");
                const isSelected = selectedTime === label;

                return (
                  <div key={i} className="relative">
                    <div className="flex items-center gap-1">
                      <div
                        onClick={() => setSelectedTime(label)}
                        className={cn(
                          "py-3 px-4 w-full rounded-sm border flex items-center justify-center gap-2 cursor-pointer transition",
                          isSelected
                            ? "bg-gray-500 text-white font-semibold"
                            : "border-[#157bff] text-[#157bff] hover:bg-gray-100 font-semibold"
                        )}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        {label}
                      </div>
                      {isSelected && (
                        <p
                          onClick={() => setPage(2)}
                          className="w-full py-3 px-4 text-center font-semibold text-white cursor-pointer rounded-sm bg-[#157bff]"
                        >
                          Next
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectTimeDate;

import React, { useState } from "react";

interface DayData {
  date: Date;
  count: number;
  level: number;
}

interface MonthLabel {
  month: string;
  weekIndex: number;
}

interface MileStoneHeatMapProps {
  pageType?: "profile" | "space";
  size?: "mini" | "normal";
}

const MileStoneHeatMap: React.FC<MileStoneHeatMapProps> = ({
  pageType = "profile",
  size = "normal",
}) => {
  const generateData = (): DayData[] => {
    const data: DayData[] = [];
    const startDate = new Date("2024-01-01");
    const endDate = new Date("2024-12-31");

    for (
      let d = new Date(startDate);
      d <= endDate;
      d.setDate(d.getDate() + 1)
    ) {
      const level = Math.floor(Math.random() * 5);
      data.push({
        date: new Date(d),
        count: level,
        level: level,
      });
    }
    return data;
  };

  const [data] = useState<DayData[]>(generateData());
  const [hoveredCell, setHoveredCell] = useState<DayData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const getColor = (level: number): string => {
    if (pageType === "space") {
      const colors: Record<number, string> = {
        0: "#FFF4E0",
        1: "#FFD89A",
        2: "#FFC766",
        3: "#FAAF40",
        4: "#D89030",
      };
      return colors[level] || colors[0];
    } else {
      const colors: Record<number, string> = {
        0: "#e6f3ff",
        1: "#b3dbff",
        2: "#80c3ff",
        3: "#50b5ff",
        4: "#2a7fcc",
      };
      return colors[level] || colors[0];
    }
  };

  const groupByWeeks = (): DayData[][] => {
    const weeks: DayData[][] = [];
    let currentWeek: DayData[] = [];

    data.forEach((day, index) => {
      currentWeek.push(day);
      if (day.date.getDay() === 6 || index === data.length - 1) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    });

    return weeks;
  };

  const weeks = groupByWeeks();

  const getMonthLabels = (): MonthLabel[] => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const labels: MonthLabel[] = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      const firstDay = week[0];
      const month = firstDay.date.getMonth();
      if (month !== lastMonth) {
        labels.push({ month: months[month], weekIndex });
        lastMonth = month;
      }
    });

    return labels;
  };

  const monthLabels = getMonthLabels();
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const cellSize = size === "mini" ? 6 : 14;
  const gap = size === "mini" ? 0.5 : 1;
  const fontSize = size === "mini" ? "0.6rem" : "0.75rem";
  const padding = size === "mini" ? "p-2" : "p-4";
  const width = size === "mini" ? "w-[100px]" : "w-full";
  const height = size === "mini" ? "h-[40px]" : "auto";
  const bgColor = size === "mini" ? "" : "bg-white";

  return (
    <div
      className={`w-full hide-scrollbar p-2 overflow-x-scroll ${bgColor} rounded-md`}
    >
      <div className="mx-auto">
        <div className="relative">
          {size !== "mini" && (
            <div className="flex  ">
              {monthLabels.map((label, index) => (
                <div
                  key={index}
                  className="text-gray-600"
                  style={{
                    fontSize,
                    marginLeft:
                      index === 0
                        ? `${label.weekIndex * (cellSize + gap)}px`
                        : `${(label.weekIndex -
                          monthLabels[index - 1].weekIndex) *
                        (cellSize + gap)
                        }px`,
                  }}
                >
                  {label.month}
                </div>
              ))}
            </div>
          )}

          <div className="flex">
            {size !== "mini" && (
              <div className="flex flex-col text-gray-600 mr-2 mt-1">
                {dayLabels.map((day, index) => (
                  <div
                    key={day}
                    className="flex items-center"
                    style={{
                      height: `${cellSize}px`,
                      fontSize,
                      marginBottom: `${gap}px`,
                      opacity: index % 2 === 0 ? 1 : 0,
                    }}
                  >
                    {day}
                  </div>
                ))}
              </div>
            )}

            <div className="flex" style={{ gap: `${gap}px` }}>
              {weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="flex flex-col"
                  style={{ gap: `${gap}px` }}
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
                    const dayData = week.find(
                      (d: DayData) => d.date.getDay() === dayIndex
                    );
                    return (
                      <div
                        key={dayIndex}
                        className="cursor-pointer transition-all hover:ring-1 hover:ring-gray-400"
                        style={{
                          width: `${cellSize}px`,
                          height: `${cellSize}px`,
                          backgroundColor: dayData
                            ? getColor(dayData.level)
                            : "#ebedf0",
                          borderRadius: "2px",
                        }}
                        onMouseEnter={(e) => {
                          if (dayData) {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setTooltipPosition({ x: rect.left + rect.width / 2, y: rect.top });
                            setHoveredCell(dayData);
                          }
                        }}
                        onMouseLeave={() => setHoveredCell(null)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {hoveredCell && (
            <div
              className="fixed z-50 text-xs rounded py-1 px-2 whitespace-nowrap pointer-events-none"
              style={{
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y}px`,
                transform: 'translate(-50%, calc(4% + 10px))',
              }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {hoveredCell.date.toLocaleDateString('en-US', { weekday: 'long' })}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="5" cy="5" r="2" />
                        <circle cx="5" cy="10" r="2" />
                        <circle cx="5" cy="15" r="2" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{hoveredCell.count} tasks
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{hoveredCell.count} commit</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7" viewBox="0 0 48 48">
                        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
                        <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
                        <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
                        <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" />
                        <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{hoveredCell.count} emails sent</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7" viewBox="0 0 48 48">
                        <path fill="#00832d" d="M35,28c0,0.552-0.448,1-1,1h-6c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1V28z" />
                        <path fill="#0066da" d="M22,28c0,0.552-0.448,1-1,1h-6c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1V28z" />
                        <path fill="#e94235" d="M35,20v8l8-6z" />
                        <path fill="#2684fc" d="M22,20v8l-8-6z" />
                        <path fill="#00ac47" d="M43,24c0,0.82-0.216,1.584-0.584,2.256L35,20l7.416-6.256C42.784,14.416,43,15.18,43,16V24z" />
                        <path fill="#00ac47" d="M6,24c0-0.82,0.216-1.584,0.584-2.256L14,28l-7.416,6.256C6.216,33.584,6,32.82,6,32V24z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{hoveredCell.count} meetings</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{hoveredCell.count} design created</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MileStoneHeatMap;
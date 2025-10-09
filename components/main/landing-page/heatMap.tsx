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

interface ContributionHeatmapProps {
  pageType?: "profile" | "space";
  size?: "mini" | "normal";
}

const ContributionHeatmap: React.FC<ContributionHeatmapProps> = ({
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

  const cellSize = size === "mini" ? 6 : 13;
  const gap = size === "mini" ? 0.5 : 1;
  const fontSize = size === "mini" ? "0.6rem" : "0.75rem";
  const padding = size === "mini" ? "p-2" : "p-4";
  const width = size === "mini" ? "w-[100px]" : "w-full";
  const height = size === "mini" ? "h-[40px]" : "auto";
  const bgColor = size === "mini" ? "" : "bg-white"
 
  return (
    <div
      className={`${width} ${height} hide-scrollbar overflow-x-scroll ${padding} ${bgColor} rounded-md`}
    >
      <div className="mx-auto">
        <div className="relative">
          {size !== "mini" && (
            <div className="flex ml-6 mb-1">
              {monthLabels.map((label, index) => (
                <div
                  key={index}
                  className="text-gray-600"
                  style={{
                    fontSize,
                    marginLeft:
                      index === 0
                        ? `${label.weekIndex * (cellSize + gap)}px`
                        : `${
                            (label.weekIndex -
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
                        onMouseEnter={() => dayData && setHoveredCell(dayData)}
                        onMouseLeave={() => setHoveredCell(null)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {hoveredCell && size !== "mini" && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
              {hoveredCell.count} contributions on{" "}
              {hoveredCell.date.toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContributionHeatmap;

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

const ContributionHeatmap: React.FC = () => {
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
    // const colors: { [key: number]: string } = {
    //   0: '#ebedf0',
    //   1: '#9be9a8',
    //   2: '#40c463',
    //   3: '#30a14e',
    //   4: '#216e39'
    // };
    const colors: { [key: number]: string } = {
      0: "#e6f3ff",
      1: "#b3dbff",
      2: "#80c3ff",
      3: "#50b5ff",
      4: "#2a7fcc",
    };

    return colors[level] || colors[0];
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

  return (
    <div className="w-full overflow-x-scroll p-4 bg-white  rounded-md">
      <div className=" mx-auto">
        <div className="relative">
          <div className="flex ml-8 mb-2">
            {monthLabels.map((label, index) => (
              <div
                key={index}
                className="text-xs text-gray-600"
                style={{
                  marginLeft:
                    index === 0
                      ? `${label.weekIndex * 14}px`
                      : `${
                          (label.weekIndex - monthLabels[index - 1].weekIndex) *
                          14
                        }px`,
                }}
              >
                {label.month}
              </div>
            ))}
          </div>

          <div className="flex">
            <div className="flex flex-col text-xs text-gray-600 mr-2 mt-1">
              {dayLabels.map((day, index) => (
                <div
                  key={day}
                  className="h-3 mb-1 flex items-center"
                  style={{ opacity: index % 2 === 0 ? 1 : 0 }}
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="flex gap-1">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
                    const dayData = week.find(
                      (d: DayData) => d.date.getDay() === dayIndex
                    );

                    return (
                      <div
                        key={dayIndex}
                        className="w-[13px] h-[13px] cursor-pointer transition-all hover:ring-2 hover:ring-gray-400"
                        style={{
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

          {hoveredCell && (
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

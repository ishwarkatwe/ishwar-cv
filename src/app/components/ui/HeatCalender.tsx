import React from "react";
import moment from "moment";

type DayData = {
  date: string; // Format: YYYY-MM-DD
  count: number;
};

type HeatmapCalendarProps = {
  data: DayData[]; // Data containing date and count for each day
  onSelect: Function;
};

const HeatCalendar: React.FC<HeatmapCalendarProps> = ({ data, onSelect }) => {
  const currentMonth = moment().month();
  const currentYear = moment().year();
  const daysInMonth = moment().daysInMonth();
  const today = moment().format("YYYY-MM-DD");
  const startDayOfMonth = moment().startOf("month").format("YYYY-MM-DD");

  // Generate an array representing the days of the current month
  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const date = moment([currentYear, currentMonth, i + 1]).format(
      "YYYY-MM-DD"
    );
    const count = data.find((d) => d.date === date)?.count || 0;
    return { date, count };
  });

  const getColor = (count: number): string => {
    if (count > 25) return "bg-primary-600";
    if (count > 20) return "bg-primary-500";
    if (count > 15) return "bg-primary-400";
    if (count > 10) return "bg-primary-300";
    if (count > 5) return "bg-primary-200";
    if (count > 0) return "bg-primary-100";
    return "bg-primary-50";
  };

  return (
    <div className="p-1">
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-sm font-bold text-center">
            {day}
          </div>
        ))}
        {Array.from(
          { length: moment([currentYear, currentMonth, 1]).day() },
          (_, i) => (
            <div key={`empty-${i}`} className="h-10"></div>
          )
        )}
        {days.map(({ date, count }) => (
          <div
            key={date}
            className={`h-10 relative flex items-center justify-center rounded-md cursor-pointer ${getColor(
              count
            )} ${date === today ? "ring-2 ring-blue-600 shadow-inner" : ""}`}
            title={`${moment(date).format("Do MMM, YYYY")}: ${count} tasks`}
            onClick={() => onSelect && onSelect([date, date])}
          >
            {count > 0 && (
              <div className=" absolute top-1 left-1 text-sm h-[25px] min-w[25px] px-1 bg-white flex justify-center items-center rounded-sm">
                {count}
              </div>
            )}

            <span className="text-sm font-medium">{moment(date).date()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatCalendar;

// Example Usage
// Pass in `data` as props to this component:
// const exampleData = [
//   { date: "2024-12-01", count: 3 },
//   { date: "2024-12-02", count: 8 },
//   { date: "2024-12-05", count: 12 },
// ];
// <HeatmapCalendar data={exampleData} />

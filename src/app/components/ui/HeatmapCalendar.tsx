import React from "react";

const HeatmapCalendar = () => {
  const daysInMonth = 31; // Adjust for the current month dynamically
  const calendarData = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    count: Math.floor(Math.random() * 20), // Random count for demonstration
  }));

  const getHeatmapClass = (count: number) => {
    if (count >= 25) return "bg-primary-900";
    if (count >= 20) return "bg-primary-800";
    if (count >= 15) return "bg-primary-600";
    if (count >= 10) return "bg-primary-400";
    if (count >= 5) return "bg-primary-200";
    return "bg-primary-100";
  };

  return (
    <div className="w-full flex items-center mx-auto p-2">
      <div className="grid grid-cols-7 gap-2 w-[100%]">
        {/* Weekday Labels */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-thin text-sm">
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {calendarData.map((item, index) => (
          <div
            key={index}
            className={`h-9 relative cursor-pointer flex items-center justify-center text-sm text-white font-bold rounded ${getHeatmapClass(
              item.count
            )}`}
          >
            <span className="text-xs text-gray-600 flex items-center justify-center absolute top-1 left-1 bg-gray-50 w-[1.2rem] h-[1.2rem] rounded-sm">
              {item.day}
            </span>
            <div className="text-sm" title={`${item.count} invoices due`}>
              {item.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatmapCalendar;

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { createRef, useEffect } from "react";

const Daygrid = () => {
  const calendarRef = createRef();

  const events = [
    { title: "Meeting", date: "2025-03-01" },
    { title: "Conference", date: "2025-03-05" },
    { title: "Workshop", date: "2025-03-10" },
  ];

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.render();
    }
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        dayCellClassNames={({ date }) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Normalize today’s date
          const day = date.getDay();
          const dateString = date.toISOString().split("T")[0];
          const hasEvent = events.some((event) => event.date === dateString);

          if (date.getTime() === today.getTime()) {
            return "bg-green-300 text-black font-bold"; // Highlight today's date in green
          }

          if (hasEvent) {
            return "bg-orange-300"; // Change event dates to orange
          }

          if (day === 0 || day === 6) {
            return "bg-red-100"; // Weekend background
          }

          return "";
        }}
        eventClassNames={() => "bg-blue-500 text-white p-1 rounded"}
      />
    </div>
  );
};

export default Daygrid;

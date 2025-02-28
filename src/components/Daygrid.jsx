// import React, { useEffect, useRef } from "react";
// import { Calendar } from "@fullcalendar/core";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction"; // Enables dateClick

// export const Daygrid = () => {
//   const calendarRef = useRef(null); // Reference for the calendar div

//   useEffect(() => {
//     if (calendarRef.current) {
//       const calendar = new Calendar(calendarRef.current, {
//         plugins: [dayGridPlugin, interactionPlugin], // Plugins for month view and interactions
//         initialView: "dayGridMonth",
//         dateClick: (info) => {
//           highlightActiveDate(info.dateStr); // Highlight clicked date
//         },
//         dayCellClassNames: (info) => {
//           return highlightWeekends(info.date);
//         },
//       });

//       calendar.render(); // Render the calendar

//       return () => {
//         calendar.destroy(); // Cleanup on unmount
//       };
//     }
//   }, []);

//   // Function to highlight active date
//   const highlightActiveDate = (selectedDate) => {
//     // Remove existing highlights
//     document.querySelectorAll(".fc-daygrid-day").forEach((day) => {
//       day.classList.remove("bg-blue-500", "text-white");
//     });

//     // Find and highlight the clicked date
//     const activeDay = document.querySelector(`[data-date='${selectedDate}']`);
//     if (activeDay) {
//       activeDay.classList.add("bg-blue-500", "text-white", "rounded-lg");
//     }
//   };

//   // Function to style weekends (Saturday & Sunday)
//   const highlightWeekends = (date) => {
//     const day = date.getDay();
//     return day === 0 || day === 6 ? "bg-green-200" : ""; // Gray shade for weekends
//   };

//   return (
//     <div className=" bg-gray-100 p-4">
//       <div
//         ref={calendarRef}
//         id="calendar"
//         className=" shadow-lg rounded-lg p-4 bg-white"
//       ></div>
//     </div>
//   );
// };

// export default Daygrid;

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Daygrid = () => {
  const events = [
    { title: "Meeting", date: "2025-03-01" },
    { title: "Conference", date: "2025-03-05" },
    { title: "Workshop", date: "2025-03-10" },
  ];

  return (
    <div className="p-4">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
      />
    </div>
  );
};

export default Daygrid;

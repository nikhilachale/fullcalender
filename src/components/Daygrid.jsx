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

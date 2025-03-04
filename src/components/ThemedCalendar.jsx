import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import bootstrap5Plugin from "@fullcalendar/bootstrap5";

const ThemedCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([...events, { id: Date.now(), title, start: info.startStr, end: info.endStr, allDay: info.allDay }]);
    }
  };

  return (
    <div className=" mt-4">
      <h2 className="">Bootstrap Themed FullCalendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, bootstrap5Plugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleSelect}
        events={events}
        editable={true}
        themeSystem="bootstrap5" // Enable Bootstrap 5 theme
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
      />
    </div>
  );
};

export default ThemedCalendar;
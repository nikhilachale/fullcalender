import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { createRef, useEffect } from "react";

const Draganddrop = () => {
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
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        editable={true}
        droppable={true}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
      />
    </div>
  );
};

export default Draganddrop;

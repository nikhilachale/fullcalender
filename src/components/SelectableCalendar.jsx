import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const SelectableCalendar = () => {
  const [events, setEvents] = useState([]);

  // Handle date selection (when user clicks and drags across dates)
  const handleSelect = (info) => {
    const title = prompt("Enter event title:");
    if (title) {
      const newEvent = {
        id: Date.now().toString(), // Unique ID
        title,
        start: info.startStr, // Start date
        end: info.endStr, // End date (exclusive)
        allDay: info.allDay, // Determines if it's a full-day event
      };
      setEvents([...events, newEvent]); // Update state
    }
  };

  // Handle event click (edit or delete)
  const handleEventClick = (info) => {
    const newTitle = prompt("Edit event title:", info.event.title);

    if (newTitle === null) return; // If user cancels, do nothing

    if (newTitle.trim() === "") {
      // If empty title, delete the event
      setEvents(events.filter((event) => event.id !== info.event.id));
    } else {
      // Update event title
      setEvents(
        events.map((event) =>
          event.id === info.event.id ? { ...event, title: newTitle } : event
        )
      );
    }
  };

  return (
    <div className="p-4">
     
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true} // Enables date selection
        select={handleSelect} // Function to handle selection
        events={events} // Render events
        editable={true} // Enable drag & drop
        eventClick={handleEventClick} // Enable event editing
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
      />
    </div>
  );
};

export default SelectableCalendar;
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className="react-calendar__tile--hover"
      />
      <p> {value.toString()}</p>
    </div>
  );
}

import React, { useState } from "react";
import DatePicker from "sassy-datepicker";
import "../assets/Datepicker.css";

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
      <DatePicker onChange={onChange} value={date} weekStartsFrom="Monday" />
    </>
  );
}
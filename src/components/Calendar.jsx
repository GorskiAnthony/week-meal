import React, { useState } from "react";
import DatePicker from "sassy-datepicker";
import "../assets/Datepicker.css";

export default function MyCalendar({ date, onChange }) {
  return (
    <>
      <DatePicker onChange={onChange} value={date} weekStartsFrom="Monday" />
    </>
  );
}

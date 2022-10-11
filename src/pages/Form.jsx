import { useState } from "react";
import Calendar from "@components/Calendar.jsx";

const Form = () => {
  const [date, setDate] = useState(new Date());

  const hChange = (newDate) => {
    setDate(newDate);
  };

  console.log(date.toLocaleDateString().split("/").reverse().join("-"));
  return (
    <>
      <Calendar onChange={hChange} date={date} />
    </>
  );
};

export default Form;

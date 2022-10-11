import { useState } from "react";
import Calendar from "@components/Calendar.jsx";

const Form = () => {
  const [date, setDate] = useState(new Date());
  const [meal, setMeal] = useState([]);

  const hChange = (newDate) => {
    setDate(newDate);
  };

  const hSubmit = (e) => {
    e.preventDefault();
    const newMeal = {
      id: new Date().getTime().toString(),
      date: date.toLocaleDateString().split("/").reverse().join("-"),
      meal: [
        {
          midi: e.target.lunchtime.value,
          soir: e.target.dinner.value,
        },
      ],
    };
    if (newMeal.meal[0].midi === "" || newMeal.meal[0].soir === "") {
      alert("Veuillez remplir au moins un des champs");
    } else {
      for (let i = 0; i < meal.length; i++) {
        if (meal[i].date === newMeal.date) {
          alert("Vous avez déjà rempli le formulaire pour cette date");
          e.target.reset();
          return;
        }
      }
      setMeal([...meal, newMeal]);
      e.target.reset();
    }
  };

  console.log(meal);
  // console.log(date.toLocaleDateString().split("/").reverse().join("-"));

  return (
    <>
      <Calendar onChange={hChange} date={date} />
      <form onSubmit={hSubmit}>
        <label htmlFor="lunchtime">lunchtime</label>
        <input type="text" id="lunchtime" name="lunchtime" />
        <label htmlFor="dinner">dinner</label>
        <input type="text" id="dinner" name="dinner" />
        <button>
          <span>Submit</span>
        </button>
      </form>
    </>
  );
};

export default Form;

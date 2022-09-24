import Card from "./Card";

export default function Weeks() {
  const meals = [
    {
      id: 1,
      date: "2021-07-01",
      meal: [
        {
          midi: "Poulet au curry",
          soir: "Poulet au curry",
        },
      ],
    },
    {
      id: 2,
      date: "2021-07-02",
      meal: [
        {
          midi: "Poulet au curry",
          soir: "Poulet au curry",
        },
      ],
    },
    {
      id: 3,
      date: "2021-07-03",
      meal: [
        {
          midi: "Poulet au curry",
          soir: "Poulet au curry",
        },
      ],
    },
    {
      id: 4,
      date: "2021-07-04",
      meal: [
        {
          midi: "Poulet au curry",
          soir: "Poulet au curry",
        },
      ],
    },
    {
      id: 5,
      date: "2021-07-15",
      meal: [
        {
          midi: "Poulet au curry",
          soir: "Poulet au curry",
        },
      ],
    },
    {
      id: 6,
      date: "2021-07-06",
      meal: [
        {
          midi: "Poulet au curry",
          soir: "Poulet au curry",
        },
      ],
    },
    {
      id: 7,
      date: "2021-07-07",
      meal: [
        {
          midi: "Poulet au curry",
          soir: "Poulet au curry",
        },
      ],
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          {meals.map((meal) => (
            <Card key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}

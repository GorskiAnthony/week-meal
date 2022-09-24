import Card from "./Card";
import data from "@services/fakeData.json";

export default function Weeks() {
  const meals = data.meals;
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

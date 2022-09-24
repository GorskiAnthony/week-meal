import { SunIcon, MoonIcon } from "@heroicons/react/20/solid/index.js";
import DetailDate from "@services/DetailDate.js";

export default function Card({ meal }) {
  const date = new DetailDate(meal.date);
  return (
    <div className="py-8 px-4 lg:w-1/3">
      <div className="h-full flex items-start">
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
            {date.getMonth()}
          </span>
          <span className="font-medium text-lg text-gray-800 title-font leading-none">
            {date.getDay()}
          </span>
        </div>
        <div className="flex-grow pl-6">
          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
            <ul>
              <li className="flex items-center mb-2">
                <SunIcon className="h-4 w-4  mr-2 text-gray-400" />
                {meal.meal[0].midi}
              </li>
              <li className="flex items-center">
                <MoonIcon className="h-4 w-4 mr-2  text-gray-400" />
                {meal.meal[0].soir}
              </li>
            </ul>
          </h1>
        </div>
      </div>
    </div>
  );
}

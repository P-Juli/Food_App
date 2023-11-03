import React from "react";

import "./AvailableMeals.css";
import MealItem from "./MealItem/MealItem";

import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "fried_fish",
    description: "Finest fish and veggies",
    price: 200,
  },
  {
    id: "m2",
    name: "_roti_",
    description: "made from wheat!",
    price: 150,
  },
  {
    id: "m3",
    name: "mo:mo",
    description: "fat less",
    price: 140,
  },
  {
    id: "m4",
    name: "chowmein",
    description: "cooked in olive oil",
    price: 120,
  },
];

const AvailableMeals = () => {
  return (
    <section className="meals">
      <Card>
        {DUMMY_MEALS.map((meal, index) => {
          return (
            <MealItem
              key={meal.id + index}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          );
        })}
      </Card>
    </section>
  );
};

export default AvailableMeals;

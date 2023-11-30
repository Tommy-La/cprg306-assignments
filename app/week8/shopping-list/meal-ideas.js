"use client"
import React, { useState, useEffect } from 'react';

function MealIdeas({ingredient}){
    let [meals, setMeals] = useState([]);

    
    const fetchMealIdeas = async (ingredient) => {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
          const data = await response.json();
          console.log(data);
          setMeals(data.meals || []);
        } catch (error) {
          console.error('Cannot fetch meal ideas:', error);
          setMeals([]);
        }
    }

    useEffect(() => {
      fetchMealIdeas(ingredient);
    }, [ingredient]);

    return(
        <div className="mb-8 text-center">
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <p className="mt-2 text-lg font-bold">{meal.strMeal }</p>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-40 h-auto rounded-md mx-auto"/>
          </li>
        ))}
      </ul>
    </div>
    )
}

export default MealIdeas;
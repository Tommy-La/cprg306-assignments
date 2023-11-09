"use client"
import React, { useState, useEffect } from 'react';

function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}');
          const data = await response.json();
          return data.meals || [];
        } catch (error) {
          console.error('Error fetching meal ideas:', error);
          return [];
        }
    }


const FetchMealIdeas = async ()=>{
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
}
    return(
        <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
    )
}

export default MealIdeas;
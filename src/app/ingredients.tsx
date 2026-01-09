"use client";
import IngredientSearch from "./ingredient-search";
import IngredientList from "./ingredient-list";
import { useState } from "react";
import ingredientData from "@/data/ingredients-list.json" assert { type: "json" };
import RecipeList from "./recipe-list";

export default function Ingredients() {
  const [ingredients, setIngredients] = useState<
    { id: number; name: string }[]
  >([]);
  const [ingredientSearch, setIngredientSearch] = useState("");
  const [ingredientResults, setIngredientResults] = useState<
    { id: number; name: string }[]
  >([]);

  const handleSearch = (e: string) => {
    // Conditional prevents empty search string returning alphabetical list
    if (e != "") {
      setIngredientSearch(e);

      const ingredients = ingredientData.filter((ingredient) =>
        ingredient.name.toUpperCase().startsWith(e.toUpperCase()),
      );
      const displayedIngredients = ingredients.slice(0, 9);
      setIngredientResults(displayedIngredients);
    } else {
      setIngredientSearch("");
      setIngredientResults([]);
    }
  };

  const handleAddIngredient = (ingredient: { id: number; name: string }) => {
    const currentIngredients = [...ingredients];
    currentIngredients.push(ingredient);
    setIngredients(currentIngredients);
  };

  const handleDeleteIngredient = (id: number) => {
    const currentIngredients = [...ingredients];
    const filteredIngredients = currentIngredients.filter(
      (ingredient) => ingredient.id !== id,
    );
    setIngredients(filteredIngredients);
  };

  return (
    <>
      <IngredientSearch
        ingredientSearch={ingredientSearch}
        ingredientResults={ingredientResults}
        handleSearch={handleSearch}
        handleAddIngredient={handleAddIngredient}
      />
      <IngredientList
        ingredients={ingredients}
        handleDeleteIngredient={handleDeleteIngredient}
      />
      <RecipeList />
    </>
  );
}

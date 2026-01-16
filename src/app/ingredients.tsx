"use client";
import IngredientList from "./ingredient-list";
import { useEffect, useState } from "react";
import RecipeList from "./recipe-list";
import { fetchRecipes } from "~/server_actions/fetch-recipes";

interface ingredientDb {
  name: string;
  id: number;
}

interface recipeDb {
  name: string | null;
  id: number;
  url: string;
  image_url: string | null;
  last_mod: Date | null;
}

export default function Ingredients({
  ingredientsData,
}: {
  ingredientsData: ingredientDb[];
}) {
  const [ingredients, setIngredients] = useState<ingredientDb[]>([]);
  const [ingredientSearch, setIngredientSearch] = useState("");
  const [ingredientResults, setIngredientResults] = useState<
    { id: number; name: string }[]
  >([]);
  const [recipes, setRecipes] = useState<recipeDb[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const fetchedRecipes = await fetchRecipes(ingredients);
        const slicedRecipes = fetchedRecipes.slice(0, 10);
        setRecipes(slicedRecipes);
      } catch (err) {
        console.log(err);
      }
    };
    void getRecipes();
  }, [ingredients]);

  const handleSearch = (e: string) => {
    // Conditional prevents empty search string from returning alphabetical list
    if (e != "") {
      setIngredientSearch(e);

      const ingredients = ingredientsData.filter((ingredient) =>
        ingredient.name.toUpperCase().startsWith(e.toUpperCase()),
      );
      const displayedIngredients = ingredients.slice(0, 9);
      setIngredientResults(displayedIngredients);
    } else {
      setIngredientSearch("");
      setIngredientResults([]);
    }
  };

  const handleAddIngredient = (ingredient: ingredientDb) => {
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
      <IngredientList
        ingredients={ingredients}
        handleDeleteIngredient={handleDeleteIngredient}
        ingredientSearch={ingredientSearch}
        ingredientResults={ingredientResults}
        handleSearch={handleSearch}
        handleAddIngredient={handleAddIngredient}
      />
      <RecipeList recipes={recipes} />
    </>
  );
}

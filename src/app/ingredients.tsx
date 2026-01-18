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
  const [selectedIngredients, setSelectedIngredients] = useState<
    ingredientDb[]
  >([]);
  const [ingredientSearch, setIngredientSearch] = useState("");
  const [ingredientResults, setIngredientResults] = useState<
    { id: number; name: string }[]
  >([]);
  const [recipes, setRecipes] = useState<recipeDb[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const fetchedRecipes = await fetchRecipes(selectedIngredients);
        const slicedRecipes = fetchedRecipes.slice(0, 10);
        setRecipes(slicedRecipes);
      } catch (err) {
        console.log(err);
      }
    };
    void getRecipes();
  }, [selectedIngredients]);

  const handleSearch = (e: string) => {
    // Conditional prevents empty search string from returning alphabetical list
    if (e != "") {
      setIngredientSearch(e);

      const ingredients = ingredientsData.filter((ingredient) =>
        ingredient.name.toUpperCase().startsWith(e.toUpperCase()),
      );

      const normalizedIngredients = ingredients.map((ingredient) => {
        const lowercaseIngredient = {
          ...ingredient,
          name: ingredient.name.toLowerCase(),
        };
        return lowercaseIngredient;
      });

      const filteredIngredients = normalizedIngredients.filter(
        (ingredient) =>
          !selectedIngredients.some(
            (selectedIngredient) => selectedIngredient.id == ingredient.id,
          ),
      );

      const displayedIngredients = filteredIngredients.slice(0, 20);
      setIngredientResults(displayedIngredients);
    } else {
      setIngredientSearch("");
      setIngredientResults([]);
    }
  };

  const handleAddIngredient = (ingredient: ingredientDb) => {
    const currentIngredients = [...selectedIngredients];
    currentIngredients.push(ingredient);
    setSelectedIngredients(currentIngredients);
  };

  const handleDeleteIngredient = (id: number) => {
    const currentIngredients = [...selectedIngredients];
    const filteredIngredients = currentIngredients.filter(
      (ingredient) => ingredient.id !== id,
    );
    setSelectedIngredients(filteredIngredients);
  };

  return (
    <>
      <div className="text-center font-semibold">
        Ingredients
        <IngredientList
          ingredients={selectedIngredients}
          handleDeleteIngredient={handleDeleteIngredient}
          ingredientSearch={ingredientSearch}
          ingredientResults={ingredientResults}
          handleSearch={handleSearch}
          handleAddIngredient={handleAddIngredient}
          selectedIngredients={selectedIngredients}
        />
      </div>

      <div className="text-center font-semibold">
        Recipes
        <RecipeList
          recipes={recipes}
          selectedIngredients={selectedIngredients}
        />
      </div>
    </>
  );
}

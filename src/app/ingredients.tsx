"use client";
import IngredientList from "./ingredient-list";
import React, { useEffect, useState } from "react";
import RecipeList from "./recipe-list";
import { fetchRecipes } from "~/server_actions/fetch-recipes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

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
  const [api, setApi] = React.useState<CarouselApi>();
  const [isLoading, setIsLoading] = useState(false);

  const getRecipes = async () => {
    try {
      setIsLoading(true);
      api?.scrollTo(2, false);
      const fetchedRecipes = await fetchRecipes(selectedIngredients);
      const slicedRecipes = fetchedRecipes.slice(0, 10);
      setRecipes(slicedRecipes);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

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
      <Carousel className="w-full max-w-xs" setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <div className="flex flex-col items-center">
              <IngredientList
                ingredients={selectedIngredients}
                handleDeleteIngredient={handleDeleteIngredient}
                ingredientSearch={ingredientSearch}
                ingredientResults={ingredientResults}
                handleSearch={handleSearch}
                handleAddIngredient={handleAddIngredient}
                selectedIngredients={selectedIngredients}
                getRecipes={getRecipes}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col items-center">
              <RecipeList
                recipes={recipes}
                selectedIngredients={selectedIngredients}
                isLoading={isLoading}
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </>
  );
}

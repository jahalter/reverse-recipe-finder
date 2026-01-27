"use server";

import prisma from "lib/prisma";

interface ingredientDb {
  name: string;
  id: number;
}

export async function fetchRecipes(ingredients: ingredientDb[]) {
  const ingredientIds = ingredients.map((ingredient) => ingredient.id);

  const ingredientsRecipes = await prisma.ingredients.findMany({
    where: { id: { in: [...ingredientIds] } },
    select: { ingredients_recipes: { select: { recipe_id: true } } },
  });

  const recipeObjs = ingredientsRecipes.map(
    (ingredientsRecipe) => ingredientsRecipe.ingredients_recipes,
  );

  const recipeIds = recipeObjs.map((recipeObj) =>
    recipeObj.map((recipe) => recipe.recipe_id),
  );

  const commonRecipeIds = recipeIds.reduce(
    (accumulator, currentValue) =>
      accumulator?.filter((item) => currentValue.includes(item)),
    recipeIds[0],
  );

  if (commonRecipeIds !== undefined) {
    const recipes = await prisma.recipes.findMany({
      where: { id: { in: [...commonRecipeIds] } },
      include: { ingredients_recipes: true },
    });
    return recipes;
  } else {
    return [];
  }
}

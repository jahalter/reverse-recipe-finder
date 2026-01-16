import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";
import IngredientSearch from "./ingredient-search";

interface ingredientDb {
  name: string;
  id: number;
}

type Props = {
  ingredients: ingredientDb[];
  handleDeleteIngredient: (id: number) => void;
  ingredientSearch: string;
  ingredientResults: { id: number; name: string }[];
  handleSearch: (e: string) => void;
  handleAddIngredient: (ingredient: { id: number; name: string }) => void;
};

export default function IngredientList({
  ingredients,
  handleDeleteIngredient,
  ingredientSearch,
  ingredientResults,
  handleSearch,
  handleAddIngredient,
}: Props) {
  return (
    <div className="h-[20.4rem] w-[300px] flex-col gap-6 overflow-scroll rounded-lg bg-white text-neutral-500">
      <IngredientSearch
        ingredientSearch={ingredientSearch}
        ingredientResults={ingredientResults}
        handleSearch={handleSearch}
        handleAddIngredient={handleAddIngredient}
      />
      <ItemGroup hidden={ingredientSearch ? true : false}>
        {ingredients.map((ingredient) => {
          console.log(ingredient.name);
          return (
            <Item
              key={ingredient.name}
              className="rounded-none border-b-neutral-200 p-2"
              variant="default"
              size="sm"
            >
              <ItemContent>
                <ItemTitle>{ingredient.name}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <Button
                  onClick={() => handleDeleteIngredient(ingredient.id)}
                  variant="ghost"
                  size="sm"
                >
                  x
                </Button>
              </ItemActions>
            </Item>
          );
        })}
      </ItemGroup>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";
import IngredientSearch from "./ingredient-search";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <div className="h-[20.4rem] w-[330px] overflow-hidden rounded-lg bg-white text-neutral-500">
      <IngredientSearch
        ingredientSearch={ingredientSearch}
        ingredientResults={ingredientResults}
        handleSearch={handleSearch}
        handleAddIngredient={handleAddIngredient}
      />
      <ScrollArea className="h-full flex-col">
        <ItemGroup hidden={ingredientSearch ? true : false}>
          {ingredients.map((ingredient) => {
            return (
              <Item
                key={ingredient.id}
                className="rounded-none p-0.5 px-1"
                variant="default"
                size="sm"
              >
                <ItemContent className="text-nowrap">
                  <ItemTitle className="rounded-2xl bg-[#79ddb0] p-0.5 px-2.5 py-1 pb-1.5 font-semibold text-white">
                    {ingredient.name.length > 24
                      ? ingredient.name.slice(0, 24) + "..."
                      : ingredient.name}
                  </ItemTitle>
                </ItemContent>
                <ItemActions>
                  <Button
                    className="mr-2 active:bg-[#caf1dd]!"
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
      </ScrollArea>
    </div>
  );
}

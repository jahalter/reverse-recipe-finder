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
  selectedIngredients: ingredientDb[];
  getRecipes: () => void;
};

export default function IngredientList({
  ingredients,
  handleDeleteIngredient,
  ingredientSearch,
  ingredientResults,
  handleSearch,
  handleAddIngredient,
  selectedIngredients,
  getRecipes,
}: Props) {
  return (
    <div className="h-[24.48rem] w-[396px] overflow-hidden rounded-lg bg-white text-neutral-500">
      <div className="flex h-full flex-col">
        <div className="flex-none">
          <IngredientSearch
            ingredientSearch={ingredientSearch}
            ingredientResults={ingredientResults}
            handleSearch={handleSearch}
            handleAddIngredient={handleAddIngredient}
            selectedIngredients={selectedIngredients}
          />
        </div>
        <div
          className="flex grow flex-col"
          hidden={ingredientSearch ? true : false}
        >
          <ScrollArea className="relative flex h-0 grow flex-col overflow-hidden border-b">
            <ItemGroup className="mb-7">
              {ingredients.map((ingredient) => {
                return (
                  <Item
                    key={ingredient.id}
                    className="rounded-none p-0 px-1"
                    variant="default"
                    size="sm"
                  >
                    <ItemContent className="flex flex-row text-nowrap">
                      <span className="text-[1rem] font-extrabold text-[#79ddb0]">
                        +
                      </span>
                      {/* <ItemTitle className="rounded-2xl bg-[#79ddb0] p-0.5 px-2.5 py-1 pb-1.5 font-semibold text-white"> */}
                      <ItemTitle className="pl-0.5 font-semibold">
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
          <Button
            onClick={async () => getRecipes()}
            className="absolute bottom-0 flex-none self-center rounded-b-xs bg-[#68dfb5] p-2 text-white! hover:bg-[#a2e6c5]"
            variant="outline"
          >
            Search Recipes
          </Button>
        </div>
      </div>
    </div>
  );
}

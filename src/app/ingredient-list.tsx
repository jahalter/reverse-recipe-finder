import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";
import { ChevronRight } from "lucide-react";
import IngredientSearch from "./ingredient-search";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { EmblaCarouselType } from "embla-carousel";

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
  api: EmblaCarouselType | undefined;
  recipesLength: number;
  handleClearIngredients: () => void;
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
  api,
  recipesLength,
  handleClearIngredients,
}: Props) {
  return (
    <div>
      <div className="h-74 w-[316.8px] overflow-hidden rounded-lg bg-white text-neutral-500 sm:h-96 sm:w-[396px]">
        <div className="relative flex h-full flex-col">
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
            className="relative flex grow flex-col"
            hidden={ingredientSearch ? true : false}
          >
            <ScrollArea className="flex h-0 grow flex-col overflow-hidden border-b">
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
                        <ItemTitle className="pl-0.5 font-semibold">
                          {ingredient.name.length > 17
                            ? ingredient.name.slice(0, 17) + "..."
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
          <Button
            hidden={ingredientSearch || ingredients.length === 0 ? true : false}
            onClick={async () => getRecipes()}
            className="absolute bottom-0 flex-none self-center rounded-b-xs bg-[#68dfb5] p-2 text-white! hover:bg-[#a2e6c5]"
            variant="outline"
          >
            Search Recipes
          </Button>
          <Button
            hidden={ingredientSearch || ingredients.length === 0 ? true : false}
            onClick={handleClearIngredients}
            className="absolute right-1.5 bottom-0 h-6 flex-none self-center rounded-b-xs bg-neutral-500 p-0 px-1 text-[.5rem] font-bold text-white! hover:bg-neutral-400 sm:right-4 sm:text-[.6rem]"
            variant="outline"
          >
            CLEAR
          </Button>
        </div>
      </div>
      <Button
        hidden={recipesLength > 0 ? false : true}
        onClick={() => api?.scrollTo(1, false)}
        className="absolute top-35 right-5.5 rounded-none rounded-e-md bg-[#d6f4e5] p-0! text-black hover:cursor-pointer hover:bg-[#68dfb5] hover:text-white sm:top-46 sm:right-3"
      >
        <ChevronRight className="p-0" />
      </Button>
    </div>
  );
}

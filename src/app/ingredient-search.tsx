import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IconList } from "./icon-list";

interface ingredientDb {
  name: string;
  id: number;
}

type Props = {
  ingredientSearch: string;
  ingredientResults: { id: number; name: string }[];
  handleSearch: (e: string) => void;
  handleAddIngredient: (ingredient: { id: number; name: string }) => void;
  selectedIngredients: ingredientDb[];
};

export default function IngredientSearch({
  ingredientSearch,
  ingredientResults,
  handleSearch,
  handleAddIngredient,
  selectedIngredients,
}: Props) {
  return (
    <div>
      <Command className="w-[396px]" shouldFilter={false} autoFocus={false}>
        <CommandInput
          className="text-neutral-500"
          placeholder="Search ingredients..."
          value={ingredientSearch}
          onValueChange={(e) => handleSearch(e)}
        />
        {!ingredientSearch && selectedIngredients.length == 0 ? (
          <ScrollArea className="h-[550px]">
            <CommandList
              className="bg-white p-1 text-neutral-500"
              autoFocus={false}
            >
              <IconList />
            </CommandList>
          </ScrollArea>
        ) : (
          <ScrollArea className="h-[550px]" hidden={!ingredientSearch}>
            <CommandList
              className="bg-white p-1 text-neutral-500"
              autoFocus={false}
            >
              <CommandEmpty>No results found.</CommandEmpty>
              {ingredientResults.map((ingredient) => (
                <CommandItem
                  className="mr-1.5 cursor-pointer rounded-2xl p-1 px-2 hover:bg-[#79ddb0]! hover:text-white!"
                  key={ingredient.id}
                  onSelect={() => {
                    handleAddIngredient(ingredient);
                    handleSearch("");
                  }}
                >
                  <span>
                    {ingredient.name.length > 30
                      ? ingredient.name.slice(0, 30) + "..."
                      : ingredient.name}
                  </span>
                </CommandItem>
              ))}
            </CommandList>
          </ScrollArea>
        )}
      </Command>
    </div>
  );
}

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bean,
  Beef,
  Carrot,
  Citrus,
  Egg,
  Fish,
  Milk,
  Nut,
  Salad,
  Wheat,
} from "lucide-react";

const iconList = [
  { element: <Beef />, key: 1 },
  { element: <Fish />, key: 2 },
  { element: <Wheat />, key: 3 },
  { element: <Milk />, key: 4 },
  { element: <Citrus />, key: 5 },
  { element: <Salad />, key: 6 },
  { element: <Nut />, key: 7 },
  { element: <Egg />, key: 8 },
  { element: <Bean />, key: 9 },
  { element: <Carrot />, key: 10 },
];

const iconElements = iconList.map((icon) => (
  <CommandItem key={icon.key} onSelect={() => console.log("")}>
    <span>{icon.element}</span>
  </CommandItem>
));

type Props = {
  ingredientSearch: string;
  ingredientResults: { id: number; name: string }[];
  handleSearch: (e: string) => void;
  handleAddIngredient: (ingredient: { id: number; name: string }) => void;
};

export default function IngredientSearch({
  ingredientSearch,
  ingredientResults,
  handleSearch,
  handleAddIngredient,
}: Props) {
  return (
    <div>
      <Command className="w-[330px]" shouldFilter={false} autoFocus={false}>
        <CommandInput
          className="text-neutral-500"
          placeholder="Search ingredients..."
          value={ingredientSearch}
          onValueChange={(e) => handleSearch(e)}
        />
        <ScrollArea className="h-[400px]" hidden={!ingredientSearch}>
          <CommandList
            className="bg-white p-1 text-neutral-500"
            autoFocus={false}
          >
            {ingredientResults && !ingredientSearch ? (
              iconElements
            ) : (
              <>
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
              </>
            )}
          </CommandList>
        </ScrollArea>
      </Command>
    </div>
  );
}

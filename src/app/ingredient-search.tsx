import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
    <div className="">
      <Command className="w-[300px]" shouldFilter={false}>
        <CommandInput
          placeholder="Search ingredients..."
          value={ingredientSearch}
          onValueChange={(e) => handleSearch(e)}
        />
        <CommandList className="bg-white" hidden={!ingredientSearch}>
          {ingredientResults && !ingredientSearch ? (
            iconElements
          ) : (
            <>
              <CommandEmpty>No results found.</CommandEmpty>
              {ingredientResults.map((ingredient) => (
                <CommandItem
                  className="cursor-pointer active:bg-[#caf1dd]!"
                  key={ingredient.id}
                  onSelect={() => {
                    handleAddIngredient(ingredient);
                    handleSearch("");
                  }}
                >
                  <span>{ingredient.name}</span>
                </CommandItem>
              ))}
            </>
          )}
        </CommandList>
      </Command>
    </div>
  );
}

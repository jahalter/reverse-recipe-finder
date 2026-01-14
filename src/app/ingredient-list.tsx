import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";

interface ingredientDb {
  name: string;
  id: number;
}

export default function IngredientList({
  ingredients,
  handleDeleteIngredient,
}: {
  ingredients: ingredientDb[];
  handleDeleteIngredient: (id: number) => void;
}) {
  return (
    <div className="h-[20.4rem] w-[300px] flex-col gap-6 overflow-scroll rounded-lg border bg-white text-neutral-500">
      <ItemGroup>
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
                  variant="destructive"
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

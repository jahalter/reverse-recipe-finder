import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";

interface recipeDb {
  name: string | null;
  id: number;
  url: string;
  image_url: string | null;
  last_mod: Date | null;
}

export default function RecipeList({ recipes }: { recipes: recipeDb[] }) {
  return (
    <div className="h-[20.4rem] w-[300px] flex-col gap-6 overflow-scroll rounded-lg border bg-white text-neutral-500">
      <ItemGroup>
        {recipes.map((recipe) => {
          return (
            <Item
              key={recipe.id}
              className="rounded-none border-b-neutral-200 p-2"
              variant="default"
              size="sm"
            >
              <ItemContent>
                <ItemTitle>{recipe.name}</ItemTitle>
                <ItemDescription>{recipe.url}</ItemDescription>
              </ItemContent>
            </Item>
          );
        })}
      </ItemGroup>
    </div>
  );
}

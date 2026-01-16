import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";
import { ScrollArea } from "@/components/ui/scroll-area";

interface recipeDb {
  name: string | null;
  id: number;
  url: string;
  image_url: string | null;
  last_mod: Date | null;
}

export default function RecipeList({ recipes }: { recipes: recipeDb[] }) {
  return (
    <ScrollArea className="h-[20.4rem] w-[300px] flex-col gap-6 rounded-lg border bg-white text-neutral-500">
      <ItemGroup>
        {recipes.map((recipe) => (
          <Item
            key={recipe.id}
            className="rounded-none border-b-neutral-200 p-4"
            variant="default"
            size="sm"
          >
            <ItemContent>
              <ItemTitle>{recipe.name}</ItemTitle>
              <ItemDescription>{recipe.url}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </ScrollArea>
  );
}

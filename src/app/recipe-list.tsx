import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { LongIconList } from "./icon-list";

interface recipeDb {
  name: string | null;
  id: number;
  url: string;
  image_url: string | null;
  last_mod: Date | null;
}

interface ingredientDb {
  name: string;
  id: number;
}

export default function RecipeList({
  recipes,
  selectedIngredients,
}: {
  recipes: recipeDb[];
  selectedIngredients: ingredientDb[];
}) {
  return (
    <ScrollArea className="h-[24.48rem] w-[396px] flex-col gap-6 overflow-hidden rounded-lg bg-white text-neutral-500">
      {selectedIngredients.length == 0 ? (
        <LongIconList />
      ) : (
        <ItemGroup>
          {recipes.length == 0 ? (
            <div className="p-3">No recipes found...</div>
          ) : (
            recipes.map((recipe) => (
              <Item
                asChild
                key={recipe.id}
                className="mr-4 rounded-xl p-2 hover:bg-white!"
                variant="default"
                size="sm"
              >
                <a href={recipe.url}>
                  {" "}
                  <ItemMedia className="h-24 w-24 rounded-b-xs" variant="image">
                    {!recipe.image_url ? (
                      <div></div>
                    ) : (
                      <Image
                        src={recipe.image_url}
                        alt={""}
                        width={240}
                        height={240}
                        className="object-cover"
                      />
                    )}
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="m-auto">{recipe.name}</ItemTitle>
                  </ItemContent>
                </a>
              </Item>
            ))
          )}
        </ItemGroup>
      )}
    </ScrollArea>
  );
}

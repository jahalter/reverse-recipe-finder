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
import { Spinner } from "~/components/ui/spinner";
import { Button } from "~/components/ui/button";

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
  isLoading,
}: {
  recipes: recipeDb[];
  selectedIngredients: ingredientDb[];
  isLoading: boolean;
}) {
  return (
    <ScrollArea className="h-[24.48rem] w-[396px] flex-col gap-6 overflow-hidden rounded-lg bg-white text-neutral-500">
      {isLoading ? (
        <Spinner className="m-8 size-8 justify-self-center" />
      ) : (
        <span>
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
                      <ItemContent>
                        <ItemTitle className="m-auto">{recipe.name}</ItemTitle>
                      </ItemContent>
                      <ItemMedia
                        className="h-24 w-24 rounded-xs"
                        variant="image"
                      >
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
                    </a>
                  </Item>
                ))
              )}
            </ItemGroup>
          )}
        </span>
      )}
    </ScrollArea>
  );
}

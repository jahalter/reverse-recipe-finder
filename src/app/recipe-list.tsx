import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Spinner } from "~/components/ui/spinner";
import { Suspense } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

interface recipeDb {
  name: string | null;
  id: number;
  url: string;
  image_url: string | null;
  last_mod: Date | null;
  ingredients_recipes: {
    id: number;
    recipe_id: number;
    ingredient_id: number;
    full_text: string | null;
  }[];
}

interface ingredientDb {
  name: string;
  id: number;
}

type Props = {
  recipes: recipeDb[];
  selectedIngredients: ingredientDb[];
  isLoading: boolean;
};

export default function RecipeList({ recipes, isLoading }: Props) {
  return (
    <ScrollArea className="h-74 w-[316.8px] flex-col gap-6 overflow-hidden rounded-lg bg-white text-neutral-600 sm:h-[24.48rem] sm:w-[396px]">
      {isLoading ? (
        <Spinner className="m-8 size-8 justify-self-center" />
      ) : (
        <span>
          <ItemGroup>
            {recipes.length === 0 ? (
              <div className="p-3">No recipes found...</div>
            ) : (
              recipes.map((recipe) => (
                <Item
                  key={recipe.id}
                  className="m-1 mr-3 rounded-xl p-2"
                  variant="default"
                  size="sm"
                >
                  {" "}
                  <ItemHeader>
                    {recipe.image_url ? (
                      <Image
                        src={recipe.image_url}
                        alt={""}
                        width={260}
                        height={260}
                        className="m-auto object-cover"
                      />
                    ) : (
                      <div className="m-auto h-[260px] w-[260px] bg-neutral-300"></div>
                    )}
                  </ItemHeader>
                  <ItemContent>
                    <ItemTitle className="m-auto text-center">
                      <a className="hover:underline" href={recipe.url}>
                        {recipe.name}
                      </a>
                    </ItemTitle>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Ingredients</AccordionTrigger>
                        <AccordionContent>
                          <ul className="m-3.5 list-disc text-xs">
                            {recipe.ingredients_recipes.map((ingredient) => (
                              <li className="mb-2" key={ingredient.id}>
                                {ingredient.full_text}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </ItemContent>
                </Item>
              ))
            )}
          </ItemGroup>
        </span>
      )}
    </ScrollArea>
  );
}

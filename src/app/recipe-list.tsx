import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";

export default function RecipeList() {
  const recipes = [
    {
      id: 1,
      name: "Tonkatsu (Japanese Breaded Pork Cutlets)",
      url: "https://www.seriouseats.com/tonkatsu-chicken-pork-katsu-japanese-breaded-cutlets-recipe",
    },
    {
      id: 2,
      name: "Lasagna Bolognese",
      url: "https://www.seriouseats.com/no-holds-barred-lasagna-bolognese-pasta-italian-homemade-ricotta",
    },
    {
      id: 3,
      name: "No Knead Focaccia",
      url: "https://www.seriouseats.com/easy-no-knead-focaccia",
    },
  ];

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

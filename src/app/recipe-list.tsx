import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

interface recipeDb {
  name: string | null;
  id: number;
  url: string;
  image_url: string | null;
  last_mod: Date | null;
}

export default function RecipeList({ recipes }: { recipes: recipeDb[] }) {
  return (
    <ScrollArea className="h-[20.4rem] w-[330px] flex-col gap-6 rounded-lg bg-white text-neutral-500">
      <ItemGroup>
        {recipes.map((recipe) => (
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
                    width={72}
                    height={72}
                    className="object-cover"
                  />
                )}
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="m-auto">{recipe.name}</ItemTitle>
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
    </ScrollArea>
  );
}

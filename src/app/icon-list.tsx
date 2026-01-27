import React from "react";
import { CommandItem } from "@/components/ui/command";

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
  LeafyGreen,
  Ham,
  Cherry,
  Grape,
} from "lucide-react";

const icons = [
  { element: <Carrot />, key: 1 },
  { element: <Fish />, key: 2 },
  { element: <Wheat />, key: 3 },
  { element: <Milk />, key: 4 },
  { element: <Citrus />, key: 5 },
  { element: <Salad />, key: 6 },
  { element: <Nut />, key: 7 },
  { element: <Egg />, key: 8 },
  { element: <Bean />, key: 9 },
  { element: <LeafyGreen />, key: 10 },
  { element: <Beef />, key: 11 },
  { element: <Ham />, key: 12 },
];

const longIcons = [
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
  { element: <LeafyGreen />, key: 11 },
  { element: <Ham />, key: 12 },
  { element: <Cherry />, key: 13 },
  { element: <Grape />, key: 14 },
];

const iconElements = icons.map((icon) => (
  <CommandItem key={icon.key}>
    <div>{icon.element}</div>
  </CommandItem>
));

const longIconElements = longIcons.map((icon) => (
  <div className="h-[40px] p-1 pt-3 pl-2" key={icon.key}>
    {icon.element}
  </div>
));

export const IconList = () => {
  return <React.Fragment>{iconElements}</React.Fragment>;
};

export const LongIconList = () => {
  return <React.Fragment>{longIconElements}</React.Fragment>;
};

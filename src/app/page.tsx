"use server";
import Ingredients from "./ingredients";
import prisma from "lib/prisma";

export default async function HomePage() {
  const ingredientsData = await prisma.ingredients.findMany({});

  return (
    <main className="flex flex-col content-center items-center justify-center gap-10 md:flex-row">
      <Ingredients ingredientsData={ingredientsData} />
    </main>
  );
}

"use server";
import Ingredients from "./ingredients";
import prisma from "lib/prisma";

export default async function HomePage() {
  const start = performance.now();
  const ingredientsData = await prisma.ingredients.findMany({});
  const end = performance.now();

  console.log(`Fetched ${ingredientsData.length} items in ${end - start}ms`);

  return (
    <main className="flex flex-col content-center items-center justify-center gap-10 md:flex-row">
      <Ingredients ingredientsData={ingredientsData} />
    </main>
  );
}
// ingredientsData={ingredientsData}

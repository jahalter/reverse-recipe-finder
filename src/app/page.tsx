"use server";
import Ingredients from "./ingredients";
import prisma from "lib/prisma";

export default async function HomePage() {
  const ingredientsData = await prisma.ingredients.findMany({});

  return (
    <main className="mt-5 flex flex-col content-center items-center justify-center gap-10">
      <Ingredients ingredientsData={ingredientsData} />
    </main>
  );
}

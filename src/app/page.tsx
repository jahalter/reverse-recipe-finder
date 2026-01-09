import * as React from "react";
import Ingredients from "./ingredients";

export default function HomePage() {
  return (
    <main className="flex flex-col content-center items-center justify-center gap-10 md:flex-row">
      <Ingredients />
    </main>
  );
}

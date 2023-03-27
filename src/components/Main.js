import React from "react";
import CardsList from "./CardsList/CardsList";
import FindOut from "./FindOut/FindOut";
import Planning from "./Planning/Planning";

export default function Main() {
  return (
    <main>
      <FindOut />
      <Planning />
      <CardsList />
    </main>
  );
}

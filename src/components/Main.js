import React from "react";
import Album from "./Album/Album";
import CardGroup from "./CardGroup/CardGroup";
import CardsList from "./CardsList/CardsList";
import Contact from "./Contact/Contact";
import FindOut from "./FindOut/FindOut";
import Planning from "./Planning/Planning";

export default function Main() {
  return (
    <main>
      <FindOut />
      <Planning />
      <CardsList />
      <Contact />
      <Album />
      <CardGroup />
    </main>
  );
}

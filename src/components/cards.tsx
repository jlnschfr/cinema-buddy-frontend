"use client";

import Card from "../components/card";
import type { Movie } from "../types/movie";

interface CardsProps {
  cards?: Movie[];
}

export default function Cards({ cards = [] }: CardsProps) {
  const cardElements = cards.map((card) => (
    <Card key={card.title} title={card.title} releaseDate={card.releaseDate} imageSrc={card.imageSrc} />
  ));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cardElements}
      </div>
    </>
  );
}

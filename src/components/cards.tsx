"use client";

import Card from "../components/card";

interface CardType {
  title: string;
  release_date: string;
  imageSrc: string;
}

interface CardsProps {
  cards?: CardType[];
}

export default function Cards({ cards = [] }: CardsProps) {
  const cardElements = cards.map((card) => (
    <Card key={card.title} title={card.title} releaseDate={card.release_date} imageSrc={card.imageSrc} />
  ));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cardElements}
      </div>
    </>
  );
}

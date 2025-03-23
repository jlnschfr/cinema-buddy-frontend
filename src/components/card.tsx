"use client";
import Image from "next/image";

export default function Card({ title, releaseDate, imageSrc }: { title: string; releaseDate: string, imageSrc: string }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <Image
        src={imageSrc}
        alt={title}
        width={500}
        height={500}
        layout="responsive"
      />

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Release: {releaseDate}</p>
      </div>
    </div>
  );
}

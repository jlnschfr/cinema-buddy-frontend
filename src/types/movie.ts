export type Movie = {
  title: string;
  releaseDate: string;
  imageSrc: string;
  vote: string;
};

export type MovieResponse = {
  movies: Movie[];
};

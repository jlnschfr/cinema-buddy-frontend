export type Movie = {
  title: string;
  releaseDate: string;
  imageSrc: string;
};

export type MovieResponse = {
  movies: Movie[];
};

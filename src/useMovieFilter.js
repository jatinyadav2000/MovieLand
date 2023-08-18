import { useState, useEffect } from "react";

const useMovieFilter = (initialMovies) => {
  const [movies, setMovies] = useState(initialMovies);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterGenre, setFilterGenre] = useState("all");

  useEffect(() => {
    const sortedAndFilteredMovies = initialMovies
      .slice()
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return a.Title.localeCompare(b.Title);
        } else {
          return b.Title.localeCompare(a.Title);
        }
      })
      .filter((movie) => {
        if (filterGenre === "all") {
          return true;
        } else {
          return movie.Genre.includes(filterGenre);
        }
      });

    setMovies(sortedAndFilteredMovies);
  }, [initialMovies, sortOrder, filterGenre]);

  return {
    movies,
    setSortOrder,
    setFilterGenre,
  };
};

export default useMovieFilter;

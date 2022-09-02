import { Movie } from "./Movie";


export function MovieList({ moviesList }) {
  return (
    <div>
      <div className="movie-list">
        {moviesList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}

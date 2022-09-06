import { Movie } from "./Movie";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://627dfc9e271f386cefeeddb7.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => getMovies(), []);

  const deleteMovies = (id) => {
    //Delete -> Refresh data
    fetch(`https://627dfc9e271f386cefeeddb7.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            deleteButton={
              <IconButton color="error">
                <DeleteIcon onClick={() => deleteMovies(mv.id)}>
                  Delete me
                </DeleteIcon>
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}

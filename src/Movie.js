import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";

export function Movie({ movie, id }) {
  // rating > 8 -> green
  const [show, setShow] = useState(true);

  // Conditional styling
  const paraStyles = {
    display: show ? "block" : "none",
  };

  const styles = {
    color: movie.rating > 7.9 ? "green" : "red",
    // fontSize: "30px",
    // backgroundColor: "orange",
  };

  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <div className="image-container">
        <img src={movie.poster} alt={movie.name} className="movie-poster" />
      </div>
      <div className="movie-specs">
        <h3 className="movie-name">{movie.name}</h3>
        <p style={styles} className="movie-rating">
          ⭐{movie.rating}
        </p>
        <p className="movie-year">{movie.year}</p>
      </div>
      {/* update the show value to be opposite current value */}
      <button onClick={() => setShow(!show)}>Toggle summary</button>
      <button onClick={()=> navigate(`/movies/${id}`)}>Info</button>
      {/* Conditional styling
            <p style={paraStyles} className="movie-summary">
              {movie.summary}
            </p>
      
            Conditional rendering */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      year: year,
      summary: summary,
      trailer: trailer,
    };
    // Copy the MoviesList & add the newMovie to it
    // setAddMovie([...addMovie, newMovie]);

    // POST
    // 1. method - POST
    // 2. body - data & JSON
    // 3. headers -JSON

    fetch("https://627dfc9e271f386cefeeddb7.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(navigate("/movies"));
    console.log(newMovie);
  };

  return (
    <div className="add-movie-form">
      <TextField
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        label="Year"
        variant="outlined"
        onChange={(event) => setYear(event.target.value)}
      />
      <TextField
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        label="Trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)}
      />

      <Button variant="outlined" onClick={addMovie}>
        Add Movie
      </Button>
    </div>
  );
}

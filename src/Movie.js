import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
    <Card className="movie-container" sx={{ height: "min-content" }}>
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <CardContent sx={{ paddingTop: "0", paddingBottom: "0" }}>
        <div className="movie-specs">
          <div className="left-content">
            <h3 className="movie-name">{movie.name}</h3>
            <IconButton
              color="primary"
              aria-label="Movie-details"
              onClick={() => navigate(`/movies/${id}`)}
            >
              <InfoIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="Toggle-summary"
              onClick={() => setShow(!show)}
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </div>

          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>

        {/* update the show value to be opposite current value */}

        {/* Conditional styling
            <p style={paraStyles} className="movie-summary">
              {movie.summary}
            </p>
      
            Conditional rendering */}
        {show ? (
          <div>
            <p className="movie-year">{movie.year}</p>
            <p className="movie-summary">{movie.summary}</p>
          </div>
        ) : null}
      </CardContent>
      <CardActions sx={{ paddingTop: "0" }}>
        <Counter />
      </CardActions>
    </Card>
  );
}

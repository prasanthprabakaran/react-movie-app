import {
  useParams,
  useNavigate
} from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export function MovieDetails({ movieList }) {
  const { id } = useParams();

  const movie = movieList[id];

  const styles = {
    color: movie.rating > 7.9 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <div>
      <iframe
        width="100%"
        height="656"
        src={movie.trailer}
        title="Youtube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
          {/* <p className="movie-year">{movie.year}</p> */}
        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div>
      <div>
        <Button variant="outlined" startIcon={<KeyboardArrowLeftIcon/>} onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}

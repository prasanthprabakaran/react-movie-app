import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

const MovieValidationSchema = yup.object({
  name: yup.string().required("Why not fill this name? 😅"),
  poster: yup
    .string()
    .required("Why not fill this poster?")
    .min(5, "Need a bigger poster "),
  rating: yup.number().required("Why not fill this rating?").min(1),
  year: yup.number().required().min(4),
  summary: yup
    .string()
    .required("Why not fill this summary ")
    .min(10, "Need a bigger summary "),
  trailer: yup
    .string()
    .required("Why not fill this trailer?")
    .min(4, "Need a bigger trailer"),
});

export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [year, setYear] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const addMovie = (newMovie) => {
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   year: year,
    //   summary: summary,
    //   trailer: trailer,
    // };
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

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        year: "",
        summary: "",
        trailer: "",
      },
      validationSchema: MovieValidationSchema,
      onSubmit: (newMovie) => {
        console.log("onSubmit=", newMovie);
        addMovie(newMovie);
      },
    });

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && errors.name ? true : false}
        helperText={touched.name && errors.name ? errors.name : ""}
      />
      {/* {touched.name && errors.name ? errors.name : ""} */}

      <TextField
        label="Poster"
        variant="outlined"
        name="poster"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : ""}

      />
      {/* {touched.poster && errors.poster ? errors.poster : ""} */}

      <TextField
        label="Rating"
        variant="outlined"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : ""}
      />
      {/* {touched.rating && errors.rating ? errors.rating : ""} */}

      <TextField
        label="Year"
        variant="outlined"
        name="year"
        value={values.year}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.year && errors.year}
        helperText={touched.year && errors.year ? errors.year : ""}
      />
      {/* {touched.year && errors.year ? errors.year : ""} */}

      <TextField
        label="Summary"
        variant="outlined"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : ""}
      />
      {/* {touched.summary && errors.summary ? errors.summary : ""} */}

      <TextField
        label="Trailer"
        variant="outlined"
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : ""}
      />
      {/* {touched.trailer && errors.trailer ? errors.trailer : ""} */}

      <Button variant="outlined" type="submit">
        Add Movie
      </Button>
    </form>
  );
}

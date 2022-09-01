import { AddColor } from "./AddColor";
import "./App.css";
import { Movie } from "./Movie";
import Welcome from "./Welcome.js";

function App() {
  const moviesList = [
    {
      name: "Forrest Gump",
      poster:
        "https://w0.peakpx.com/wallpaper/1/639/HD-wallpaper-forrest-gump-love-movie.jpg",
      rating: 8.8,
      year: 1994,
      summary:
        "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny.",
    },
    {
      name: "Interstellar",
      poster:
        "https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg",
      rating: 8.6,
      year: 2014,
      summary:
        "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. How far love can get you!",
    },
    {
      name: "Saving Private Ryan",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
      rating: 8.6,
      year: 1998,
      summary:
        "Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action.",
    },
    {
      name: "The Dark Knight Rises",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
      rating: 8.4,
      year: 2012,
      summary:
        "Despite his tarnished reputation after the events of The Dark Knight (2008), in which he took the rap for Dent's crimes, Batman feels compelled to intervene to assist the city and its Police force, which is struggling to cope with Bane's plans to destroy the city. ",
    },
    {
      name: "Coco",
      poster:
        "https://www.fsm-media.com/wp-content/uploads/2017/06/Coco5936f029264c3-692x1024.jpg",
      rating: 8.4,
      year: 2017,
      summary:
        "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events",
    },
    {
      name: "Your Name",
      poster: "https://m.media-amazon.com/images/I/71mcgmCAEwL._AC_SL1500_.jpg",
      rating: 8.4,
      year: 2016,
      summary:
        "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
    },
    {
      name: "The Pursuit of Happyness",
      poster: "https://m.media-amazon.com/images/I/71qvP73Ht0L._SL1173_.jpg",
      rating: 8,
      year: 2006,
      summary:
        "Life is a struggle for single father Chris Gardner (Will Smith). Evicted from their apartment, he and his young son (Jaden Christopher Syre Smith) find themselves alone with no place to go.",
    },
  ];

  // ctrl + /
  return (
    <div className="App">

      <Welcome name={"Prasnth"} />
      {/* AddColor Component */}
      <AddColor />

      {/* Components + Loop */}
      {/* {students.map((student) => (
        <Message name={student.name} pic={student.pic} />
      ))} */}

      {/* {names.map((nm)=> (
        <Welcome name={nm} />
      ) )} */}
      <div className="movie-list">
        {moviesList.map((mv, index) => (
          <Movie key={index} movie={mv} />
        ))}
      </div>
    </div>
  );
  // JSX ends
}

// win + . -> emoji
// ctrl + cmd + space -> emoji

// Create Component
// function -> Component
// 1. First letter Captial
// 2. It should return one JSX element

// function Welcome(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hello, {props.name} 🎉🎉</h1>
//     </div>
//   );
// }

export default App;

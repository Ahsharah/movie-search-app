// App.js - The main component where all our movie magic happens!
import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
 // Got our secret decoder ring (API key)
 const apiKey = "98e3fb1f";
 
 // Setting up a cozy spot to store our movie data
 const [movie, setMovie] = useState(null);

 // This function goes and fetches our movie data - like a movie delivery service!
 const getMovie = async (searchTerm) => {
   try {
     const response = await fetch(
       `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
     );
     const data = await response.json();
     setMovie(data);
   } catch(e) {
     console.error(e); // Oops! Something went wrong!
   }
 };

 // When our page loads up, let's surprise ourselves with a random movie!
 useEffect(() => {
   // Our movie night options
   const movies = ["Clueless", "The Matrix", "Inception", "Jaws", "Avatar"];
   // Picking a random movie (eeny, meeny, miny, moe...)
   const randomIndex = Math.floor(Math.random() * movies.length);
   // Time to fetch our random pick!
   getMovie(movies[randomIndex]);
 }, []);

 // Putting it all together on the screen
 return (
   <div className="App">
     <Form moviesearch={getMovie} /> {/* Our search bar - find any movie you want! */}
     <MovieDisplay movie={movie} /> {/* Where the movie info shows up */}
   </div>
 );
}

export default App;
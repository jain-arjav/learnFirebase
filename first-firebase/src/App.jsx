import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/auth";
import Rating from "./components/rating";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
function App() {
  const [movieList, setMovieList] = useState([]);
  const movieCollectionRef = collection(db, "movies");

  const getMovieList = async () => {
    try {
      const data = await getDocs(movieCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <h1>Firebase </h1>

      <Auth />

      <div>
        <input
          className="border border-gray-300 text-sm"
          placeholder="Movie title.."
        ></input>
        <input
          className="border border-gray-300 text-sm "
          placeholder="Movie Rating.."
          type="number"
        ></input>
      </div>
      <div>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>
              rating {movie.rating}
              <Rating numberOfStars={movie.rating}> </Rating>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

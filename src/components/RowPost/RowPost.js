import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import "./RowPost.css";
import YouTube from "react-youtube";
 

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState();
  const [activeMovieId, setActiveMovieId] = useState(null);

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    
    autoplay: 1,
  },
};
  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);
  
function handleMovie(id) {
  if (activeMovieId === id) {
    setUrlId(null);
    setActiveMovieId(null);
  } else {
    axios
      .get("movie/" + id + "/videos?api_key=" + API_KEY + "&language=en-US")
      .then((res) => {
        if (res.data.results.length !== 0) {
          setUrlId(res.data.results[0]);
          setActiveMovieId(id);
          console.log("available");
        } else {
          console.log("not available");
        }
      });
  }
}

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
          return (
            <img
              key={obj.id}
              onClick={() => {
                handleMovie(obj.id);
              }}
              className={`${props.isSmall ? "smallposter" : "poster"}`}
              alt="poster"
              src={`${imageUrl + obj?.backdrop_path}`}
            />
          );
        })}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
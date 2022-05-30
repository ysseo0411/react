import React from "react";
import DefaultImg from "../../assets/img/default_img.jpg";

function MovieItem(props) {
  const MovieImg = `${props.results.poster_path}`;

  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${props.results.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {MovieImg === "null" ? (
          <img src={DefaultImg} alt={props.results.title} />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500/${MovieImg}`}
            alt={props.results.title}
          />
        )}
        <p>{props.results.title}</p>
      </a>
    </li>
  );
}

export default MovieItem;

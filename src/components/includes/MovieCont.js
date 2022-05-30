import React from "react";
import MovieItem from "./MovieItem";

function MovieCont(props) {
  const movieNofound = `${props.videos}`;
  //console.log(props);
  return (
    <ul>
      {movieNofound === "" ? (
        <p>검색된 결과값이 없습니다.</p>
      ) : (
        props.videos.map((list, index) => (
          <MovieItem key={index} results={list} />
        ))
      )}
    </ul>
  );
}

export default MovieCont;

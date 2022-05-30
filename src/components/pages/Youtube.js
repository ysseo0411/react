import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import YoutubeSearch from "../includes/YoutubeSearch";
import YoutubeCont from "../includes/YoutubeCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";

function Youtube() {
  const [videos, setVideos] = useState([]); // 리액트 훅

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyDU1RAmlKKJjrYuatIrDNdQ1bDoQmRAN9Y&type=video`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=nomadcoder&key=AIzaSyDU1RAmlKKJjrYuatIrDNdQ1bDoQmRAN9Y&type=video`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  // console.log(videos);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["youtube", "search"]} />
        <section className="youtube__cont">
          <div className="container">
            <div className="youtube__inner">
              <YoutubeSearch onSearch={search} />
              <YoutubeCont videos={videos} />
            </div>
          </div>
        </section>
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;

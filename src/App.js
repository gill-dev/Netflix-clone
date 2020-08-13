import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORGINIALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Comedies" fetchUrl={requests.fetchComedy} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
    </div>
  );
}

export default App;

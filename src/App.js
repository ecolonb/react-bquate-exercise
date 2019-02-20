import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
// Components
import Header from "./components/header/header";
import Tracks from "./components/tracks/tracks";
import Artists from "./components/artists/artists";
import Albums from "./components/albums/albums";

export default function() {
  return (
    <div className="App">
      <Header />
      <Route path="/tracks" component={Tracks} />
      <Route path="/artists" component={Artists} />
      <Route exact path="/albums" component={Albums} />
    </div>
  );
}

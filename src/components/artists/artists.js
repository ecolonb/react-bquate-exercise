import React, { useEffect, useState } from "react";
import { getArtistsHttp } from "../../services/api-rest-nodejs";

import "./artists.css";

export default function() {
  const [artists, setArtists] = useState([{}]);
  useEffect(() => {
    getArtists();
  }, []);

  async function getArtists() {
    const artistsHttp = await getArtistsHttp();
    setArtists(artistsHttp);
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Artists</h1>

      <table cellSpacing="0" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Id artist</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artists, index) => {
            return (
              <tr key={index}>
                <td>{artists.id}</td>
                <td>{artists.name}</td>
                <td>{artists.email}</td>
                <td>{artists.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

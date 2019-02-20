import React, { useEffect, useState } from "react";
import { getAlbumsHttp } from "../../services/api-rest-nodejs";
import "./albums.css";

export default function() {
  const [albums, setAlbums] = useState([{}]);

  useEffect(() => {
    getAlbums();
  }, []);

  //Se obtienen los datos de un servicio, para no realizar llamadas http en el mismo componente
  const getAlbums = async () => {
    getAlbumsHttp()
      .then(result => {
        setAlbums(result);
      })
      .catch(err => {});
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Albums</h1>

      <table cellSpacing="0" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Id album</th>
            <th>Title</th>
            <th>Genre</th>
            <th>User</th>
            <th>Country code</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((r, i) => {
            return (
              <tr key={i}>
                <td>{r.id}</td>
                <td>{r.title}</td>
                <td>{r.genre}</td>
                <td>{r.name}</td>
                <td>{r.countrycode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

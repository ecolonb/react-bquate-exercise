import React, { useEffect, useState } from "react";
import "./tracks.css";
import Modal from "../modal-deails/modal-details";
import { getTracksHttp } from "../../services/api-rest-nodejs";

export default function() {
  const [tracks, setTracks] = useState([{}]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(1);

  useEffect(() => {
    getTracks();
  }, []);

  async function getTracks() {
    const tracksFromHttpReq = await getTracksHttp();
    setTracks(tracksFromHttpReq);
  }

  const showDetails = id => {
    setId(id);
    setShow(true);
    console.log("id: ", id);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Tracks</h1>
      <div className="searchBar">
        <input type="text" name="search" placeholder="Search.." />
      </div>

      <table cellSpacing="0" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Id track</th>
            <th>Title</th>
            <th>Album</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((r, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  showDetails(r.id);
                }}
              >
                <td>{r.id}</td>
                <td>{r.track_title}</td>
                <td>{r.album_title}</td>
                <td>{r.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {show && <Modal data={id} saveChange={() => {}} setShow={setShow} />}
    </div>
  );
}

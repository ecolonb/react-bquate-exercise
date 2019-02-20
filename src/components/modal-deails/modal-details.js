import React from "react";
import "./modal-details.css";
export default function({ setShow, saveChnge, data }) {
  return (
    <div>
      <div style={{ display: "flex" }} className="modal">
        <div
          onClick={() => {
            setShow(false);
          }}
          id="tache"
        >
          X
        </div>
        <div className="modal-form">mostrando más detalle de Id = {data}</div>
      </div>
    </div>
  );
}

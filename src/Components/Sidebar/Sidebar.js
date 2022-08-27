import React from "react";
import "./Sidebar.css";

function Sidebar({ add, notes }) {
  const noteTitles = notes.map((noteTitle) => {
    return (
      <div key={noteTitle.id} className="noteTitle">
        <h3>Note {noteTitle.id}</h3>
      </div>
    );
  });

  return (
    <div>
      <div className="sidebar-header">
        <h1>Notes</h1>
        <button onClick={add} className="add">
          +
        </button>
      </div>
      <div className="note-list">{noteTitles}</div>
    </div>
  );
}

export default Sidebar;

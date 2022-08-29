import React from "react";
import "./Sidebar.css";

function Sidebar({ create, notes, currentNote, setCurrentNoteId }) {
  const noteTitles = notes.map((noteTitle, index) => {
    return (
      <div
        key={noteTitle.id}
        onClick={() => setCurrentNoteId(noteTitle.id)} // here, currentNoteId = noteTitle.Id
        className={`noteTitle ${
          noteTitle.id === currentNote.id ? "selected-note" : ""
        }`}
      >
        <h3>
          {noteTitle.body.split("\n")[0].length > 15
            ? noteTitle.body.split("\n")[0].substr(0, 15) + "..."
            : noteTitle.body.split("\n")[0].substr(0, 15)}
        </h3>
      </div>
    );
  });

  return (
    <div>
      <div className="sidebar-header">
        <h1>Notes</h1>
        <button onClick={create} className="create">
          +
        </button>
      </div>
      <div className="note-list">{noteTitles}</div>
    </div>
  );
}

export default Sidebar;

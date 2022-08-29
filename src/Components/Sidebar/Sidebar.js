import React from "react";
import "./Sidebar.css";

function Sidebar({ create, notes, currentNote, setCurrentNoteId }) {
  const noteTitles = notes.map((note, index) => {
    return (
      <div
        key={note.id}
        onClick={() => setCurrentNoteId(note.id)} // here, currentNoteId = note.Id
        className={`noteTitle ${
          note.id === currentNote.id ? "selected-note" : ""
        }`}
      >
        <h3>Note {index + 1}</h3>
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

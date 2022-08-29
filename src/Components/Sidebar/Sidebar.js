import React from "react";
import "./Sidebar.css";

function Sidebar({ create, notes, currentNote, setCurrentNoteId }) {
  const noteTitles = notes.map((noteTitle, index) => {
    const noteTitleText = noteTitle.body.split("\n")[0];

    return (
      <div
        key={noteTitle.id}
        onClick={() => setCurrentNoteId(noteTitle.id)} // here, currentNoteId = noteTitle.Id
        className={`noteTitle ${
          noteTitle.id === currentNote.id ? "selected-note" : ""
        }`}
      >
        <h3>
          {noteTitle.body === ""
            ? `Note ${index + 1}`
            : noteTitleText.length > 15
            ? noteTitleText.substr(0, 15) + "..."
            : noteTitleText.substr(0, 15)}
        </h3>
      </div>
    );
  });

  return (
    <div>
      <div className="sidebar-header">
        <h2>Notes</h2>
        <button onClick={create} className="create">
          +
        </button>
      </div>
      <div className="note-list">{noteTitles}</div>
    </div>
  );
}

export default Sidebar;

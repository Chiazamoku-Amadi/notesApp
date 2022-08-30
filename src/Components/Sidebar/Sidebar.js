import React from "react";
import "./Sidebar.css";
import { BsTrash } from "react-icons/bs";

function Sidebar({ create, notes, currentNote, setCurrentNoteId, deleteNote }) {
  const noteTitles = notes.map((noteTitle, index) => {
    const noteTitleText = noteTitle.body.split("\n")[0];
    return (
      <div
        key={noteTitle.id}
        onClick={() => setCurrentNoteId(noteTitle.id)}
        className={`noteTitle ${
          noteTitle.id === currentNote.id ? "selected-note" : ""
        }`}
      >
        <h3>
          {/* {if (noteTitle.body === "") {`Note ${index + 1}`} else if
          (noteTitleText.length > 15) {noteTitleText.substr(0, 15) + "..."} else{" "}
          {noteTitleText.substr(0, 15)}} */}
          {/* why isn't this working? */}

          {noteTitle.body === "" || noteTitle.body === "Type your title here"
            ? "Untitled"
            : noteTitleText.length > 15
            ? noteTitleText.substr(0, 15) + "..."
            : noteTitleText.substr(0, 15)}
        </h3>
        <button
          onClick={(event) => deleteNote(event, noteTitle.id)}
          className="delete"
        >
          <BsTrash />
        </button>
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

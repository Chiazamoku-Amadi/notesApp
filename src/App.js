import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Editor from "./Components/Editor/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([]);
  const curNoteId = notes[0] ? notes[0].id : "";
  const [currentNoteId, setCurrentNoteId] = useState(curNoteId);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: `Note ${notes.length + 1}`,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setCurrentNoteId(newNote.id);

    console.log(currentNoteId);
    console.log(newNote.id);
  }

  function getCurrentNote() {
    const currentNote =
      notes.find((note) => note.id === currentNoteId) || notes[0];
    return currentNote;
  }

  function editNote(text) {
    // why pass text?
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  return (
    <div className="App">
      {notes.length > 0 ? (
        <Split className="wrapper" sizes={[25, 75]} direction={"horizontal"}>
          <Sidebar
            create={createNewNote}
            notes={notes}
            currentNote={getCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={getCurrentNote()} editNote={editNote} />
          )}
        </Split>
      ) : (
        <div className="landing-page">
          <h3>You have no notes</h3>
          <button onClick={createNewNote} className="create-first-note">
            Create Note
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

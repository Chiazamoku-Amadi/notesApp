import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Editor from "./Components/Editor/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const curNoteId = notes[0] ? notes[0].id : "";
  const [currentNoteId, setCurrentNoteId] = useState(curNoteId);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      // body: `Note ${notes.length + 1}`,
      body: "Type your title here",
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setCurrentNoteId(newNote.id);

    // console.log(newNote.id);
    // console.log(currentNoteId); // Why is newNote.id != currentNoteId?
  }

  function getCurrentNote() {
    const currentNote =
      notes.find((note) => note.id === currentNoteId) || notes[0];
    return currentNote;
  }

  function editNote(text) {
    // why pass text?
    // setNotes((oldNotes) =>
    //   oldNotes.map((oldNote) => {
    //     return oldNote.id === currentNoteId
    //       ? { ...oldNote, body: text }
    //       : oldNote;
    //   })
    // );
    setNotes((prevNotes) => {
      const newArray = [];
      for (const prevNote of prevNotes) {
        prevNote.id === currentNoteId
          ? newArray.unshift({ ...prevNote, body: text })
          : newArray.push(prevNote);
      }
      return newArray;
    });
  }

  function deleteNote(event, noteId) {
    setNotes((notes) => notes.filter((note) => note.id !== noteId));
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
            deleteNote={deleteNote}
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

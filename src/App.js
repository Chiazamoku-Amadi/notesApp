import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Editor from "./Components/Editor/Editor";
import Split from "react-split";

function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote() {
    const newNote = {
      id: notes.length + 1,
      body: "Start Typing",
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <div className="App">
      <Split className="wrapper" sizes={[25, 75]} direction={"horizontal"}>
        <Sidebar add={addNewNote} notes={notes} />
        <Editor />
      </Split>
    </div>
  );
}

export default App;

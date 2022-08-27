import React from "react";
import "./Editor.css";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

function Editor() {
  return (
    <div className="note-editor">
      <ReactMde />
    </div>
  );
}

export default Editor;

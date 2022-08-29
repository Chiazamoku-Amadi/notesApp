import React, { useState } from "react";
import "./Editor.css";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import Showdown from "showdown";

function Editor({ currentNote, editNote }) {
  const [selectedTab, setSelectedTab] = useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <div className="note-editor">
      <ReactMde
        value={currentNote.body}
        onChange={editNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        loadingPreview="Loading..."
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </div>
  );
}

export default Editor;

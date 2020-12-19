import React from "react";

function Note() {
  const note = {
    title: "Titles",
    content: "Mycontent"
  };

  return (
    <div className="note" draggable="true">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}
export default Note;

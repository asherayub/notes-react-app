import React from "react";

const Body = (props) => {
  return (
    <div className="note-body" id = {props.id}>
      <textarea
        name="noteBody"
        value={props.noteBody}
        onChange={props.handleNoteBody}
        id="note-body"
        placeholder="Note Title Here"
      ></textarea>
    </div>
  );
};

export default Body;

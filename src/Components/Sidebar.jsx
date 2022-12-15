import React from "react";
import Add from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
const Sidebar = (props) => {
  const noteTitle = (title) => {
    return title.split("\n")[0];
  };
  return (
    <div className="note-sidebar">
      <div className="add-note">
        <button onClick={props.addNote} className="add-note-btn">
          Add <Add />
        </button>
        <h1>Note</h1>
      </div>
      <div className="notes" onClick={props.handleActive}>
        {props.notes.map((note) => {
          return (
            <div
              className="note"
              key={note.id}
              id={note.id}
            >
              <h2>{noteTitle(note.noteBody)}</h2>
              <DeleteIcon className="delete-icon" />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

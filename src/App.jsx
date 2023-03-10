import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import GitHubIcon from "@mui/icons-material/GitHub";
import { nanoid } from "nanoid";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
const App = () => {
  const [startPage, setStartPage] = React.useState(true);
  const [notes, setNotes] = React.useState([]);
  const addNote = () => {
    startPage && setStartPage(false);
    if (notes.length === 0) {
      setNotes([{ id: nanoid(), isActice: true, noteBody: "Title Here" }]);
    } else {
      setNotes((prev) => {
        return [
          { id: nanoid(), isActice: false, noteBody: "Title Here" },
          ...prev,
        ];
      });
    }
  };

  const handleNoteBody = (e) => {
    const { name, value } = e.target;
    setNotes((prev) => {
      return prev.map((note) => {
        if (note.id === e.target.parentElement.id) {
          return { ...note, [name]: value };
        } else {
          return note;
        }
      });
    });
  };
  const handleActive = (e) => {
    setNotes((prev) => {
      return prev.map((note) => {
        if (note.id === e.target.parentElement.id) {
          return { ...note, isActice: true };
        } else {
          return { ...note, isActice: false };
        }
      });
    });
  };

  const handleDelete = (e) => {
    setNotes((prev) => {
      return prev.filter((note) => note.id !== e.target.parentElement.id);
    });
  };

  return (
    <div className="wrapper">
      <a
        href="https://www.github.com/asherayub"
        target="_blank"
        className="github-link"
      >
        <GitHubIcon />
      </a>
      {startPage || notes.length === 0 ? (
        <div className="start-page">
          <h1>add notes to keep up with your work</h1>
          <button onClick={addNote} className="add-btn">
            Add
            <AddIcon />
          </button>
        </div>
      ) : (
        <div className="notes-ui">
          <Sidebar
            notes={notes}
            addNote={addNote}
            handleActive={handleActive}
            handleDelete={handleDelete}
          />
          {notes.map((note) => {
            if (note.isActice)
              return (
                <Body
                  key={note.id}
                  id={note.id}
                  noteBody={note.noteBody}
                  handleNoteBody={handleNoteBody}
                />
              );
          })}
        </div>
      )}
    </div>
  );
};

export default App;

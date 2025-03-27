import "./style/app.css";
import Navbar from "./Navbar";
import NoteList from "./NoteList";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [selectionValue, setSelectionValue] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState({
    id: undefined,
    on: false
  });
  function selectSelection(name) {
    setSelectionValue(name);
  }
  function switchDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  function switchModal() {
    setShowModal((prevShowModal) => !prevShowModal);
  }
  function handleCheck(id) {
    setNoteArray((prevNoteArray) => {
      const newNoteArray = [];
      prevNoteArray.map((note) => {
        newNoteArray.push(
          note.id === id ? { ...note, checked: !note.checked } : note
        );
      });

      return newNoteArray;
    });
  }
  function removeNote(id) {
    setNoteArray((prevNoteArray) => {
      const newNoteArray = [];
      prevNoteArray.map((note) => {
        note.id !== id && newNoteArray.push(note);
      });
      return newNoteArray;
    });
  }
  function addNote(noteName, id = noteArray.length + 1) {
    setNoteArray((prevNoteArray) => {
      if (id === noteArray.length + 1) {
        return [
          ...prevNoteArray,
          {
            id: id,
            checked: false,
            name: noteName
          }
        ];
      } else {
        setEditMode({
          id: undefined,
          on: false
        });
        const newNoteArray = [];
        prevNoteArray.map((note) => {
          newNoteArray.push(
            note.id === id
              ? {
                  ...note,
                  name: noteName
                }
              : note
          );
        });

        return newNoteArray;
      }
    });
  }
  function editNote(id) {
    setEditMode({
      id: id,
      on: true
    });
    switchModal();
  }

  const [noteArray, setNoteArray] = useState([]);
  return (
    <div className={`app ${darkMode && "dark-mode"}`}>
      <Navbar
        darkMode={darkMode}
        handle={{ switchDarkMode, selectSelection }}
        selectionValue={selectionValue}
      />
      <NoteList
        darkMode={darkMode}
        handle={{ handleCheck, removeNote, switchModal, editNote }}
        noteArray={noteArray}
        selectionValue={selectionValue}
      />
      {showModal && (
        <Modal
          handle={{ switchModal, addNote }}
          darkMode={darkMode}
          editMode={editMode}
        />
      )}
    </div>
  );
}

export default App;

/* eslint-disable react/prop-types */
import "./style/noteList.css";

import Note from "./Note";
import AddNoteButton from "./AddNoteButton";
import emptyImg from "/empty.svg";
import emptyImgDarkMode from "/emptyDarkMode.svg";
function NoteList(props) {
  const allNotesElement = props.noteArray.map((note) => {
    if (props.selectionValue === "Complete" && note.checked) {
      return (
        <Note
          key={note.id}
          id={note.id}
          checked={note.checked}
          name={note.name}
          handle={props.handle}
        />
      );
    } else if (
      props.selectionValue === "Incomplete" &&
      note.checked === false
    ) {
      return (
        <Note
          key={note.id}
          id={note.id}
          checked={note.checked}
          name={note.name}
          handle={props.handle}
        />
      );
    } else if (props.selectionValue === "All") {
      return (
        <Note
          key={note.id}
          id={note.id}
          checked={note.checked}
          name={note.name}
          handle={props.handle}
        />
      );
    }
  });

  return (
    <div style={{ width: "100%" }}>
      {props.noteArray.length > 0 ? (
        <ul className="note-list">{allNotesElement}</ul>
      ) : (
        <div className="empty-element">
          <img src={props.darkMode ? emptyImgDarkMode : emptyImg} />
          <p>Empty...</p>
        </div>
      )}
      <AddNoteButton handle={props.handle.switchModal} />
    </div>
  );
}
export default NoteList;

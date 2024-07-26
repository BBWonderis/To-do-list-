/* eslint-disable react/prop-types */
import "./style/note.css";
import editPencil from "/editPencil.svg";
import removeBin from "/removeBin.svg";

function Note(props) {
  return (
    <div
      style={{
        width: "45%"
      }}
    >
      <li className="note-element">
        <div className="note-functions">
          <input
            type="checkbox"
            className="note-input"
            checked={props.checked}
            onChange={() => props.handle.handleCheck(props.id)}
          />

          <span className="checkmark"></span>
          <p>{props.name}</p>
          <button
            className="edit-button"
            onClick={() => props.handle.editNote(props.id)}
          >
            <img src={editPencil} />
          </button>
          <button
            className="remove-button"
            onClick={() => props.handle.removeNote(props.id)}
          >
            <img src={removeBin} />
          </button>
        </div>
        <hr />
      </li>
    </div>
  );
}
export default Note;

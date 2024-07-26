/* eslint-disable react/prop-types */
import "./style/addOnButton.css";
import addOn from "/addOnButton.svg";

function AddNoteButton(props) {
  return (
    <button className="add-note-button" onClick={props.handle}>
      <img src={addOn} />
    </button>
  );
}
export default AddNoteButton;

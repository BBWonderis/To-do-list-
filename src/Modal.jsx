/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style/modal.css";

function Modal(props) {
  const [inputData, setInputData] = useState("");
  function handleChange(event) {
    setInputData(event.target.value);
  }

  return (
    <div className="modal">
      <div className="overlay">
        <div
          className="modal-box"
          style={
            props.darkMode
              ? { backgroundColor: "var(--main-color-dark-mode)" }
              : { backgroundColor: "white" }
          }
        >
          <div className="modal-content">
            <h3>NEW NOTE</h3>
            <input
              style={
                props.darkMode
                  ? {
                      backgroundColor: "var(--main-color-dark-mode)",
                      border: "1px solid white",
                      color: "white"
                    }
                  : {
                      backgroundColor: "white",
                      color: "var(--main-color-light-mode)"
                    }
              }
              value={inputData}
              onChange={handleChange}
              type="text"
              placeholder="Input your note..."
            />
            <div className="buttons">
              <button
                className="cancel-button"
                onClick={props.handle.switchModal}
              >
                <p>CANCEL</p>
              </button>
              <button
                className="apply-button"
                onClick={() => {
                  props.editMode.on
                    ? props.handle.addNote(inputData, props.editMode.id)
                    : props.handle.addNote(inputData);
                  props.handle.switchModal();
                }}
              >
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;

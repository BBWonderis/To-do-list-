/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style/navbar.css";
import darkMode from "/darkMode.svg";
import lightMode from "/lightMode.svg";
import searchIcon from "/searchIcon.svg";
import showmoreNarrow from "/showmoreNarrow.svg";

function Navbar(props) {
  const [selectionShow, setSelectionShow] = useState(false);

  function switchSelection() {
    setSelectionShow((prevSelectionShow) => !prevSelectionShow);
  }

  return (
    <nav className={`navigation`}>
      <h1>TODO LIST</h1>
      <div className="nav-bar">
        <div className={`search-note`}>
          <input
            style={
              props.darkMode
                ? { backgroundColor: "var(--main-color-dark-mode)" } && {
                    border: "1px solid white"
                  }
                : {
                    backgroundColor: "white",
                    color: "var(--main-color-light-mode)"
                  }
            }
            type="search"
            placeholder="Search note..."
            className={`${darkMode && "dark-mode"}`}
          />
          <img
            src={searchIcon}
            className="search-icon"
            style={
              props.darkMode
                ? {
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(1000%) contrast(100%)"
                  }
                : {}
            }
          />
        </div>
        <div className="select-notes">
          <button className="select-button" onClick={switchSelection}>
            <p>{props.selectionValue}</p>
            <img src={showmoreNarrow} />
          </button>
          {selectionShow && (
            <ul
              style={
                props.darkMode
                  ? { color: "white" }
                  : { color: "var(--main-color-light-mode)" }
              }
              onClick={(event) => {
                props.handle.selectSelection(event.target.textContent);
                setSelectionShow();
              }}
            >
              <li>All</li>
              <li>Complete</li>
              <li>Incomplete</li>
            </ul>
          )}
        </div>

        <button className="setDarkMode" onClick={props.handle.switchDarkMode}>
          <img src={props.darkMode ? lightMode : darkMode} />
        </button>
      </div>
    </nav>
  );
}
export default Navbar;

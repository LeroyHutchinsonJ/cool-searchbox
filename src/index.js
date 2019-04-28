import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="searchBox">
      <input
        className="searchText"
        type="text"
        name=""
        placeholder="Type to search"
      />
      <a className="searchBtn" href="#">
        <i className="fas fa-search" />
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

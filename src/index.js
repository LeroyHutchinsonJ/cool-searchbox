import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="searchBox">
      <input type="text" name="" placeholder="Type to search" />
      <a className="searchBtn" href="#" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

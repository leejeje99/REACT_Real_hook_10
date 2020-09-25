import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useConfirm = (Message = "", callback, rejection) => {
  if (!callback && typeof callback !== "function") {
    return;
  }
  if (rejection && typeof rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(Message)) {
      callback();
    } else rejection();
  };
  return confirmAction;
};

const App = () => {
  const deleteword = () => console.log("Deleting the word");
  const abort = () => console.log("Aborted");

  const confirmDelete = useConfirm("Are you sure?", deleteword, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>delete the word</button>
    </div>
  );
};

export default App;

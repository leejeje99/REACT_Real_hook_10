import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const { title, setTitle } = useState(initialTitle);

  const updateTItle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTItle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading....");
  setTimeout(() => titleUpdater("Home"), 5000);

  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;

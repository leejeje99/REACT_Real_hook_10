import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can I steel your Kimchi?", {
    body: "I love Kimchi, Don't you?"
  });

  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;

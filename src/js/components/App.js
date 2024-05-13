import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("Text");

  const savedText = localStorage.getItem

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={() => setText("Huinya ebana")}>New</button>
    </div>
  );
}

export default App;
import { useState } from "react";
import "./App.css";
import Message from "./Message";

const initState = {
  name: "Manny",
  message: "hello there!",
};

type State = Readonly<typeof initState>;

const App = (): any => {
  const [messageData, setMessageData] = useState<typeof initState>(initState);

  return (
    <div className="App">
      <header className="App-header">
        <Message name={messageData.name} message={messageData.message} />
      </header>
    </div>
  );
};

export default App;

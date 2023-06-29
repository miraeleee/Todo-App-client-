import { useState } from "react";
import "./App.css";
import Todo from "./component/Todo";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [addItem, setAddItem] = useState([]);

  const clickitem = () => {
    setAddItem([...addItem, inputItem]);
    setInputItem("");
  };
  return (
    <>
      <div>My Todo App</div>
      <input
        value={inputItem}
        type="text"
        placeholder="Add your new Todo"
        onChange={(event) => setInputItem(event.target.value)}
        // enterKey={[...addItem, inputItem]}
      />
      <button onClick={clickitem}>ADD</button>
      <Todo item={addItem} />
    </>
  );
}

export default App;

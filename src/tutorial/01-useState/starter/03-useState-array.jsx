import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  console.log(data);
  const [list, setlist] = useState(data);
  const handleRemove = (id) => {
    const newList = list.filter((person) => person.id !== id);
    setlist((prevList) => newList);
  };
  return (
    <>
      <h2>useState array example</h2>
      {list.map((person) => {
        return (
          <>
            <div key={person.id}>{person.name}</div>
            <button onClick={() => handleRemove(person.id)}>Remove</button>
          </>
        );
      })}
      <button className="btn" onClick={() => setlist([])}>
        Clear All Items
      </button>
    </>
  );
};

export default UseStateArray;

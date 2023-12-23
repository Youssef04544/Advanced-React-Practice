import { Person } from "./Person";
import { useState } from "react";
import { people } from "../../../data";

const List = () => {
  const [peopleList, setPeopleList] = useState(people);

  return (
    <>
      {/* Could use some work on the CSS styling */}
      <h2>Leverage Javascript</h2>
      <ul>
        {peopleList.map((person) => (
          <Person {...person} key={person.id} />
        ))}
      </ul>
    </>
  );
};
export default List;

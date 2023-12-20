import { Person } from "./Person";
import { useState } from "react";
import { people } from "../../../data";

const List = () => {
  const [peopleList, setPeopleList] = useState(people);
  console.log(peopleList);
  return (
    <>
      <h2>Leverage Javascript</h2>
      <ul>
        {peopleList.map((person) => (
          <Person person={person} key={person.id} />
        ))}
      </ul>
    </>
  );
};
export default List;

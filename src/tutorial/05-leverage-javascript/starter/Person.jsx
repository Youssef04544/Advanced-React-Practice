import React from "react";

export function Person({ person }) {
  return (
    <div>
      <li>{person.name}</li>
      <li>{person?.nickName}</li>
      {person.images ? (
        <li>
          <img
            src={person.images[0].small.url}
            alt={person.name}
            width={200}
            length={200}
          />
        </li>
      ) : (
        ""
      )}
    </div>
  );
}

import avatar from "../../../assets/default-avatar.svg";
import React from "react";

export function Person({ name, nickName = "soMainStream", images }) {
  const img = images?.[0].small.url;
  return (
    <div>
      <img src={img || avatar} alt={name} width={"50px"} />
      <li>{name}</li>
      <li>{nickName}</li>
    </div>
  );
}

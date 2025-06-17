"use client";

import { useState } from "react";

export default function Button() {
  const [clickcount, addClickCount] = useState(0);

  function handleClick() {
    addClickCount(clickcount + 1);
  }

  return (
    <>
      <button onClick={handleClick}>CLICK ME</button>
      <p>{clickcount}</p>
    </>
  );
}

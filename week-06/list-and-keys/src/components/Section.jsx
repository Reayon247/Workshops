import "./Section.css";
import { useState } from "react";

export default function Section(props) {
  const [showContent, setShowContent] = useState(false);

  function handleClick() {
    setShowContent(!showContent);
  }
  return (
    <>
      <h1 onClick={() => handleClick()} className="title">
        {props.title}
      </h1>
      {showContent ? <h2>{props.content}</h2> : null}
    </>
  );
}

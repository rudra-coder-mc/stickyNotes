import React, { useRef, useEffect } from "react";
import Trash from "../icons/Trash";

const NoteCard = ({ note }) => {
  const body = JSON.parse(note.body);
  let position = JSON.parse(note.position);
  const colors = JSON.parse(note.colors);
  const textAreaRef = useRef(null);

  function autoGrow(textAreaRef) {
    const { current } = textAreaRef;
    current.style.height = "auto"; // Reset the height
    current.style.height = current.scrollHeight + "px"; // Set the new height
  }
  
  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  return (
    <div
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <Trash />
      <div
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
      ></div>
      <div className="card-body">
        <textarea
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
        ></textarea>
      </div>
      {/* {body} */}
    </div>
  );
};

export default NoteCard;

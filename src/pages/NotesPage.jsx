import React from "react";
import NoteCard from "../components/NoteCard";
import { fakeData as notes } from "../assets/fakeData.js";

const NotesPage = () => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} />
      ))}
    </div>
  );
};

export default NotesPage;

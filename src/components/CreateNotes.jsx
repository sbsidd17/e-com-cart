import { nanoid } from "@reduxjs/toolkit";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../redux/noteSlice";

function CreateNotes() {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const descRef = useRef();

  function submitHandel(e) {
    e.preventDefault();
    if (titleRef.current.value === "") {
      alert("Title Required");
    } else if (descRef.current.value === "") {
      alert("Description Required");
    } else {
      dispatch(
        createNote({
          id: nanoid(10),
          title: titleRef.current.value,
          desc: descRef.current.value,
        })
      );
    }
  }

  return (
    <div className="createNotes">
      <form onSubmit={submitHandel}>
        <input ref={titleRef} type="text" placeholder="Title" required />
        <input ref={descRef} type="text" placeholder="Description" required />
        <input
          className="btn btn-primary"
          onClick={submitHandel}
          type="submit"
          value="Add Note"
        />
      </form>
    </div>
  );
}

export default CreateNotes;

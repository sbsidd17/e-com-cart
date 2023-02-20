import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RiDeleteBin2Line} from 'react-icons/ri'
import { deleteNote } from "../redux/noteSlice";


function NotesList() {
    const noteList = useSelector((state)=>{return state.noteSlice.notes});
    const dispatch = useDispatch()
    let d = new Date();
    let date = d.toDateString()
    let time = d.toLocaleTimeString()
  return (
    <div className="notesContainer">
          {
            noteList.map((item,key)=>{
              return(
                <div key={key} >
                    <div className="card">
                    <h1>{item.title}</h1>
                    <hr />
                    <p>{item.desc}</p>
                    <hr />
                    <h5>{date}</h5>
                    <h6>{time}</h6>
                    <button onClick={()=>dispatch(deleteNote(item.id))}><RiDeleteBin2Line size={32} /></button>
                    </div>
                </div>
              )
            })
          }
    </div>
  )
}

export default NotesList
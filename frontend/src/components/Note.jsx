import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Note.css"

function Note({ note, onDelete }) {
    const navigate = useNavigate();
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")
    const handleEdit = ()=>{
        navigate('/edit')
    }
    return (
        <div className="note-container" key={note.id}>
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>

            <button className="edit-button"onClick={() => navigate(`/edit/${note.id}`)}>Edit</button>

        </div>
    );
}

export default Note
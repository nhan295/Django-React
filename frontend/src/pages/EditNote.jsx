import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

function EditNote() {
  const { id } = useParams();
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    api
      .get(`/api/notes/edit/${id}/`)
      .then((res) => setNote(res.data))
      .catch((err)=>{
            console.error('Không thể tải ghi chứ',err)
        });
  }, [id]);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const editNote = (e) => {
    e.preventDefault();
    api
      .put(`/api/notes/edit/${id}/`, note)
      .then((res) => {
        if (res.status === 200 || res.status === 204) alert("Edit ok");
        else alert("Fail");
      })
      .catch((error) => alert(error));
  };

  return (
    <form onSubmit={editNote}>
      <h1>Edit Note</h1>
      <input
        name="title"
        value={note.title}
        onChange={handleChange}
        className="form-input"
        placeholder="Title"
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        className="form-input"
        placeholder="Content"
      />
      <button type="submit" className="form-button">Save</button>
    </form>
  );
}

export default EditNote;

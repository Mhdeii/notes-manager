import { useState } from 'react';
import './notes.css';

const AddNotesForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleNotesSubmit = (event) => {
    event.preventDefault();
    setTitle('');
    setDescription('');
    let note = { title, description };
    props.handleNotesSubmit(note);    
  };

  return(
    <form onSubmit={handleNotesSubmit}>
      <div className="form-outline mb-4">
        <label className="form-label">Title</label>
        <input type="text" name="username" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label">Body</label>
        <textarea rows="18" name="description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required> </textarea>
      </div>
      <div style={{textAlign: "right"}}>
        <button type="submit" className="btn btn-primary btn-block mb-4">Save</button>
      </div>
    </form>
  )
}

export default AddNotesForm;
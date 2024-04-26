import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './notes.css';
import NotesList from './notesList';
import AddNotesForm from './addNotesForm';
import { useSelector, useDispatch } from 'react-redux';
import { updateNotes } from '../../redux/notes/notesSlice';

const Notes = () => {
  const [isAddInputView, setAddInputView] = useState(false);

  let notesList = useSelector(state => state.notes);
  let notesData = [...notesList.notes];
  const dispatch = useDispatch();

  const handleNotesSubmit = (addedNotes) => {
    notesData.push(addedNotes);
    dispatch(updateNotes(notesData));
  };

  const onDeleteNote = (index) => {
    notesData.splice(index, 1);
    dispatch(updateNotes(notesData));
  }

  return (
    <>
      <div>
        <Card>
          <Card.Body style={{fontWeight: 'bold', background: "#e8e8e8"}}>
             <h2>Welcome to your notes manager</h2>
          </Card.Body>
        </Card>
        <div className='content-container'>
          <NotesList renderNotesList={notesData} deleteNote={onDeleteNote} />
          <div className='content-wrapper'>
            <div style={{textAlign: "right"}}>
              <Button variant="outline-dark" onClick={() => setAddInputView(true)}>+ Add Note</Button>
            </div>
            {isAddInputView && (
              <AddNotesForm handleNotesSubmit={handleNotesSubmit} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Notes;
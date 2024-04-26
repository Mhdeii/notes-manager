import { Card, Button } from 'react-bootstrap';
import './notes.css';

const NotesList = (props) => {
  return (
    <Card style={{width: "30%", height: "100%", overflowY: "auto"}}>
      <Card.Body style={{ padding: "0" }}>
          {props?.renderNotesList.length > 0 ? (
          props.renderNotesList.map((note, index) => (
            <Card key={index} style={{borderRight: "0", borderTop: "0", borderRadius: "unset"}}>
              <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                  <h5>{ note.title }</h5>
                  <p style={{marginBottom: "0"}}>{ note.description }</p>
                  </div>
                  <Button onClick={() => props.deleteNote(index)} variant="light" style={{fontWeight: 'bold', background: "#fff", border: "unset"}}>X</Button>
              </Card.Body>
            </Card>
          ))
          ): (
            <h5 style={{ textAlign: "center", padding: "10px" }}>there is no notes available please add some notes if</h5>
          ) }
      </Card.Body>
    </Card>
  )
}

export default NotesList;
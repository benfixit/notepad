import { useNotes } from "../store/NoteContext";
import { NoteType } from "./typings";
import "./Notes.css";


export const Notes = () => {
    const { notes, selectedNote, updateSelectedNote } = useNotes();

    const handleNoteClick = (note: NoteType) => {
        updateSelectedNote(note)
    }

    return (
        <ul>
            {notes.map(note => <li key={note.id} className={note.id === selectedNote.id ? `selected` : ``} onClick={() => handleNoteClick(note)}>{note.content}</li>)}
        </ul>
    );
}
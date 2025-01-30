import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import "./Editor.css";
import { useNotes } from '../store/NoteContext';

export const Editor = () => {
    const { selectedNote } = useNotes();

    return (
        <>
            <CKEditor
            editor={ ClassicEditor }
            config={ {
                licenseKey: 'GPL',
                plugins: [ Essentials, Paragraph, Bold, Italic ],
                toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter' ],
                initialData: selectedNote.content,
            }}
            data={selectedNote.content}
        />
        </>
    );
}
import React, { useState } from 'react';
import NotesEditor from '../components/NotesEditor';
import NotesList from '../components/NotesList';

const NotesPage = () => {
  const [noteToEdit, setNoteToEdit] = useState(null);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <NotesEditor
        noteToEdit={noteToEdit}
        clearEdit={() => setNoteToEdit(null)}
      />
      <NotesList onEdit={setNoteToEdit} />
    </div>
  );
};

export default NotesPage;

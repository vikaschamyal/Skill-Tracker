import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../features/notesSlice';

const NotesList = ({ onEdit }) => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Your Notes</h2>
      {notes.map((note) => (
        <div key={note.id} className="bg-gray-100 p-4 rounded shadow mb-2">
          <h3 className="font-bold">{note.title}</h3>
          <p>{note.content}</p>
          <div className="mt-2 space-x-2">
            <button
              className="bg-yellow-400 px-2 py-1 rounded"
              onClick={() => onEdit(note)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => dispatch(deleteNote(note.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;

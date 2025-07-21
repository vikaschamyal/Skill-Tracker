import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, updateNote } from '../features/notesSlice';

const NotesEditor = ({ noteToEdit, clearEdit }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    if (noteToEdit) {
      dispatch(updateNote({ id: noteToEdit.id, title, content }));
      clearEdit(); // reset edit mode
    } else {
      dispatch(addNote({ id: Date.now(), title, content }));
    }

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">{noteToEdit ? 'Edit Note' : 'Add Note'}</h2>
      <input
        className="w-full mb-2 p-2 border border-gray-300 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full mb-2 p-2 border border-gray-300 rounded"
        rows="4"
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {noteToEdit ? 'Update Note' : 'Save Note'}
      </button>
      {noteToEdit && (
        <button
          type="button"
          className="ml-2 text-red-500 underline"
          onClick={clearEdit}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default NotesEditor;

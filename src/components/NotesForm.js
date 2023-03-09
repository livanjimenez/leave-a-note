import React, { useState } from 'react';
import '../styles/form.css';

const NotesForm = ({ onSubmitHandler }) => {
  const [note, setNote] = useState('');

  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (note.trim() === '') {
      setNote('');
      return alert('You cannot submit an empty note.');
    }

    onSubmitHandler?.(note);
    setNote('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Write something silly! &#128512;"
          onChange={handleInputChange}
          className="form-input"
          value={note}
        />
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default NotesForm;

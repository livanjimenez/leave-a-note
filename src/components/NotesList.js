import { useState } from 'react';
import '../styles/list.css';

const NotesList = ({
  list,
  handleDelete,
  handleUpdate,
  handleEdit,
  editIndex,
}) => {
  const [editedItem, setEditedItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(editIndex, editedItem);
    setEditedItem('');
  };

  return (
    <>
      <div className="container">
        {list.map((item, index) => (
          <ul key={index}>
            <li className="list">
              {editIndex === index ? (
                <form onSubmit={handleSubmit} className="editForm-container">
                  <input
                    type="text"
                    value={editedItem}
                    onChange={(e) => setEditedItem(e.target.value)}
                    className="editForm-input"
                  />
                  <button type="submit" className="button-update">
                    Update
                  </button>
                </form>
              ) : (
                <>
                  <span class="span-text">{item}</span>
                  <div className="buttons">
                    <button
                      onClick={() => handleEdit(index)}
                      className="button-edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="button-delete"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default NotesList;

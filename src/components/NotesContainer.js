import { useState } from 'react';
import NotesForm from './NotesForm';
import NotesList from './NotesList';

const NotesContainer = () => {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (item) => {
    setItems([...items, item]);
  };

  const handleDelete = (index) => {
    const newList = [...items];
    newList.splice(index, 1);
    setItems(newList);
  };

  const handleUpdate = (index, updatedItem) => {
    const newList = [...items];
    newList[index] = updatedItem;
    setItems(newList);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <>
      <NotesForm onSubmitHandler={handleSubmit} />
      <NotesList
        list={items}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleEdit={handleEdit}
        editIndex={editIndex}
      />
    </>
  );
};

export default NotesContainer;

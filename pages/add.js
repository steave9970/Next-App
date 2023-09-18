// pages/add.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSilice';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

const AddNotePage = () => {
  const [noteText, setNoteText] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      dispatch(addNote({ text: noteText , id : uuidv4().toString()}));
      setNoteText('');
    }
  };

  return (
    <div>
      <h1>Add Note</h1>
      <br/>
      <Link href="/">
        <button className='add-note-button'>
        Back to Notes
        </button>
      </Link>
      <br/>
      <br/>

      <textarea
        className='text-area'
        placeholder="Enter your note here"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <br/>
      <br/>

      <button className='add-note-button' onClick={handleAddNote}>Save Note</button>
    </div>
  );
};

export default AddNotePage;

// pages/index.js
import Link from 'next/link';
import { useSelector } from 'react-redux';
import NoteList from '../components/noteList'; // Use lowercase "n"

const IndexPage = () => {
  // Use Redux to get the list of notes
  const notes = useSelector((state) => state.notes);

  return (
    <div>
      <h1>Notes</h1>
      <Link href="/add">
       <button className='add-note-button' >Add Note</button> 
      </Link>
      <br/>
      <br/>

      <NoteList notes={notes} />
    </div>
  );
};

export default IndexPage;

// components/NoteList.js
import { reorderNotes, deleteNote } from '../redux/notesSilice';
import { useDispatch } from 'react-redux';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { useGesture } from '@use-gesture/react';
import { connect } from 'react-redux';
import Swipeable from 'react-swipeable';
import styles from './NoteList.module.css';

const NoteItem = ({ note, index, dispatch }) => {

  const handleDeleteNote = () => {
    dispatch(deleteNote(note.id)); // Dispatch the deleteNote action with the note's ID
  };

  const bind = useGesture({
    onSwipe: (state) => {
      console.log('Swipe state:', state);
      if (state.direction[0] === 1) {
        handleDeleteNote();
      }
    },
  });
  

  return (
    <Draggable key={`${index}`}
    draggableId={`${index}`} index={index}>
      {(provided) => (
        // <Swipeable onSwipedLeft={handleDeleteNote}>
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.noteItem}
        >
          <div>
            {note.text}
            <span>
            <button className={styles.deleteButton} onClick={handleDeleteNote}>
              Delete
            </button>
            </span>
          </div>
        </div>
    //   </Swipeable>
      )}
    </Draggable>
  );
};

const NoteList = ({ notes }) => {
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    dispatch(
      reorderNotes({
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
    <Droppable droppableId="notes">
      {(provided) => (
        <div className='crdential-container'  ref={provided.innerRef} {...provided.droppableProps}>
          {notes.map((note, index) => (
            <NoteItem key={note.id} note={note} index={index} dispatch={dispatch} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => {
    return {
      // Replace 'notes' with the name of the reducer that holds your notes data
      notes: state.notes,
    };
  };

export default connect(mapStateToProps)(NoteList);

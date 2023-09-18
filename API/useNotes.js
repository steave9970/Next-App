// useNotes.js
import { useQuery, useMutation } from 'react-query';
import { fetchNotes, deleteNoteApi } from './mockApi';

export const useNotes = () => {
  const { data: notes } = useQuery('notes', fetchNotes);

  const deleteNoteMutation = useMutation((id) => deleteNoteApi(id), {
    onMutate: (deletedId) => {
      // Optimistically remove the note from the UI
      // You can implement this part based on your UI structure
    },
  });

  const deleteNote = (id) => {
    deleteNoteMutation.mutate(id);
  };

  return {
    notes,
    deleteNote,
  };
};

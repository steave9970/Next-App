// mockApi.js
const mockNotes = [
    { id: 1, text: 'Note 1' },
    { id: 2, text: 'Note 2' },
    { id: 3, text: 'Note 3' },
  ];
  
  export const fetchNotes = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockNotes);
      }, 1000);
    });
  };
  
  export const deleteNoteApi = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 500);
    });
  };
  
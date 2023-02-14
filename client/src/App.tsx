import { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query';
import './App.css'
import { api } from './util/trpc';

function App() {
    const queryClient = useQueryClient();
    const { data } = useQuery(["getNotes"], () => api.note.allNotes.query());

  return (
    <div className="App">
      <h1>{data?.allNotes.map((note, key ) => (
          <div key={key}>
            <h1>{note.title}</h1>
          </div>
      ))}</h1>
      
    </div>
  )
}

export default App

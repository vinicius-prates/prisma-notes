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
    <div>
      <button className='px-6 py-4 bg-slate-600 text-white rounded-xl' onClick={async () => {
         await api.note.createNote.mutate({
          title: 'lero',
          note: ' KKKKKKKKKKKKKK'
        })
      }}>lero</button>  
    </div>
    </div>
  )
}

export default App

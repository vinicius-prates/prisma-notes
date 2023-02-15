import { stringify } from "querystring";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import "./App.css";
import { api } from "./util/trpc";

function App() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery(["getNotes"], () =>
    api.note.allNotes.query()
  );

  return (
    <div className="flex flex-col  w-screen min-h-screen bg-[#1A120B]">
      <div className="flex flex-row gap-1 my-10 justify-evenly lg:mx-96 mx-4">
        <div className="flex flex-row gap-2 items-center self-center">
          <h1 className="lg:text-2xl  font-bold text-[whitesmoke]"> Made by:</h1>
          <a href="https://github.com/vinicius-prates" target="_blank" className="lg:text-2xl font-bold text-[#D5CEA3]">vinicius-prates</a>
        </div>
        <div className="flex flex-row gap-2 items-center self-center">

        <h1 className="lg:text-6xl text-4xl font-bold text-[#D5CEA3]">prt</h1>
        <h1 className="lg:text-6xl text-4xl text-[whitesmoke] font-bold">notes</h1>
        </div>

      </div>

      <div>
        <div className="flex flex-col items-center mx-5 lg:mx-0">
        {data?.allNotes.map((note, key) => (
          <div key={key} className="flex flex-col lg:w-[40rem] bg-[#3C2A21] px-4 py-2 rounded-md">

            <h1 className="text-[#D5CEA3] text-2xl font-bold ">{note.title}</h1>
            <p className="text-[whitesmoke] text-lg">{note.note}</p>
            
            <div className="text-[#D5CEA3] text-sm italic opacity-50 text-right">{note.createdAt.toString()}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;

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
      <div className="flex flex-row gap-1 my-10 justify-evenly lg:mx-96 mx-10">
        <div className="flex flex-row gap-2 items-center self-center">
          <h1 className="text-2xl font-bold text-[whitesmoke]"> Made by:</h1>
          <a href="https://github.com/vinicius-prates" target="_blank" className="text-2xl font-bold text-[#D5CEA3]">vinicius-prates</a>
        </div>
        <div className="flex flex-row gap-2 items-center self-center">

        <h1 className="text-6xl font-bold text-[#D5CEA3]">prt</h1>
        <h1 className="text-6xl text-[whitesmoke] font-bold">notes</h1>
        </div>

      </div>
    </div>
  );
}

export default App;

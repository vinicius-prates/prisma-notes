import React, { useState } from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { api } from "../util/trpc";

export const AllNotes = () => {
  const { data, isLoading, error } = useQuery(["getNotes"], () =>
    api.note.allNotes.query()
  );
  const queryClient = useQueryClient();

  const { mutate } = useMutation(["addNewNote"], api.note.createNote.mutate, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getNotes"]);
    },
  });
  return (
    <div>
      <div className="flex flex-col items-center gap-4 mx-5 lg:mx-0">
        {data?.allNotes.map((note, key) => (
          <div
            key={key}
            className="flex flex-col lg:w-[40rem] bg-[#3C2A21] px-4 py-2 rounded-md"
          >
            <h1 className="text-[#D5CEA3] text-2xl font-bold ">{note.title}</h1>
            <p className="text-[whitesmoke] text-lg truncate">{note.note}</p>

            <div className="text-[#D5CEA3] text-sm italic opacity-50 text-right">
              {note.createdAt.toString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

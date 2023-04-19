import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../util/trpc";
import { NavBar } from "./NavBar";
export const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) {
    navigate("/");
    console.log("Could not find this note.");
    return;
  }
  const { data } = useQuery(["GetNote"], () =>
    api.note.singleNote.query({ id })
  );

  return (
    <div className="flex flex-col bg-[#1A120B] h-screen ">
      <NavBar />
      <div className=" bg-[#1A120B] flex flex-col items-center justify-between">
        <div className=" lg:w-[40rem] bg-[#3C2A21] px-4 py-2 rounded-md ">
          <h1 className="text-[#D5CEA3] text-2xl font-bold ">{data?.title}</h1>
          <p className="text-[whitesmoke] text-lg break-words">{data?.note}</p>

          <div className="text-[#D5CEA3] text-sm italic opacity-50 text-right">
            {data?.createdAt.toString()}
          </div>
        </div>
      </div>
    </div>
  );
};

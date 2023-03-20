import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { api } from "../util/trpc"
import { NavBar } from "./NavBar";
export const NotePage = () => {

    const { id } = useParams();
    const {data} = useQuery(['GetNote'], ()=> api.note.singleNote.query({id}))
    return(
        <div className="h-screen bg-[#1A120B]">
            <NavBar/>
            <div className="bg-[#3C2A21] p-4 my-5 mx-96 rounded">
                <h1 className="text-[#D5CEA3] font-bold text-2xl">{data?.title}</h1>
                <p className="text-[whitesmoke] text-lg">{data?.note}</p>
            </div>
            
        </div>
    )
}

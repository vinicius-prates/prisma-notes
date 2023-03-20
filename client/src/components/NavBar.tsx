import React from 'react'
export const NavBar = () => {
    return(
        <div className="flex flex-col md:flex-row gap-1 justify-evenly lg:mx-96 py-10 x-4">
        <div className="flex flex-row  gap-2 items-center self-center">
          <h1 className="lg:text-2xl  font-bold text-[whitesmoke]">
            {" "}
            Made by:
          </h1>
          <a
            href="https://github.com/vinicius-prates"
            target="_blank"
            className="lg:text-2xl font-bold text-[#D5CEA3]"
          >
            vinicius-prates
          </a>
        </div>
        <div className="flex flex-row gap-2 items-center self-center">
          <h1 className="lg:text-6xl text-5xl font-bold text-[#D5CEA3]">prt</h1>
          <h1 className="lg:text-6xl text-5xl text-[whitesmoke] font-bold">
            notes
          </h1>
        </div>
      </div>
    )
}
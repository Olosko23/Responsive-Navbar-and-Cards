import React, { useState } from 'react'
import {FaTimes, FaBars} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'About'
    },
    {
      id:3,
      link:'Services'
    },
    {
      id:4,
      link:'Pricing'
    },
    {
      id:5,
      link:'Contact'
    },
  ]
  return (
    <div className="bg-blue w-full h-20 fixed z-10">
      <div className="flex flex-row justify-between">
        <div className="text-4xl font-bold font-signature">
          <p className="p-5 cursor-pointer hover:scale-110">Olosko</p>
        </div>
        <div className=" hidden sm:flex py-5 px-5 mr-5">
          <ul className="flex flex-row gap-5">
            {
              links.map(({id,link}) => (
                <li key={id} className="cursor-pointer hover:scale-110">
                  <button className="bg-blue1 rounded px-2 capitalize">{link}
                  </button></li>
              ))
            }
            </ul>
        </div>
        <div onClick={() => setNav(!nav)}className="p-7 flex z-10 sm:hidden">
          {nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
        </div>
        {nav && (
             <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-blue gap-10">
              {
                links.map(({id,link}) => (
                  <li key={id} className="text-4xl cursor-pointer hover:scale-110">
                    <button className="bg-blue1 rounded px-2 capitalize">{link}
                    </button></li>
                ))
              }
             </ul>
        )}
      </div>
    </div>
  )
}

export default Navbar
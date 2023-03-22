import React from 'react'
import { FcApproval } from "react-icons/fc";

import { FaHeart, FaSun  } from "react-icons/fa"
import { GrNotification ,GrUserSettings} from "react-icons/gr";
function Rightcontainer() {
  return (
    <div className='bg-black shadow-lg  bg-opacity-60 h-14 w-full text-white flex flex-row justify-between px-3 py-2 items-center' >
      <div className='space-x-4 text-white flex' >
       
       </div>
      <div className='space-x-4 flex px-5' >
        <div className='items-center align-center my-2 ' >
          <FaSun/>  
         </div>
        <div>
          <button className='text-white border border-white rounded-2xl px-3 py-1 text-sm' >Upgrade</button>
        </div>
        <div>c</div>
      </div>
    </div>
  )
}

export { Rightcontainer }
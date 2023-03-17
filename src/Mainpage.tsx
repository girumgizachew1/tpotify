import React from 'react'
import { Maincontainer } from './Components/Maincontainer'
import { Rightcontainer } from './Components/Rightcontainer'
import { SideMenu } from './Components/SideMenu'

function Mainpage() {
  return (
 <div className='h-screen w-full relative' >
<div className="h-screen w-full flex flex-row" style={{ backgroundImage: `url(./bg.jpg)`, backgroundSize: 'cover',  zIndex:'-1' }}>
 
           <div className='basis-2/12' ><SideMenu /></div>    
           <div className='basis-9/12' ><Maincontainer/></div>   
           <div className='basis-1/12' > <Rightcontainer/></div>  
    </div>
    </div>
  )
}

export default Mainpage
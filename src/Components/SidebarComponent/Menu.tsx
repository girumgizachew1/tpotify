import React from 'react';

interface MenuProps {
  title: string;
  menuobj: any; // replace "any" with the appropriate type for the menu object
}

function Menu({title, menuobj}: MenuProps) {
  console.log(menuobj)
  return (
    <div className='mt-10' >
      <p className='text-gray-400 text-sm' >{title}</p>

      <ul>
      {
  menuobj && menuobj.map((menu:any) => {
    return (
      <li className='flex flex-row space-x-2 space-y-4 text-gray-400' > 
         
        <i className='mt-5' >{menu.icon}</i>
        <span>{menu.name}</span>
        <a href="#" ></a>
      </li>
    )
  })
}
      </ul>
    </div>
  );
}

export {Menu};
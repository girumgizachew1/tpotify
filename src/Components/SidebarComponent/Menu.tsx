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
      <li key={menu.name} className='py-1 px-2 text-gray-400 hover:border-red-400 hover:border-l-4 '> 
       <a  href={menu.to} className='flex flex-row space-x-2 space-y-4' >
         <i className='mt-4' >{menu.icon}</i>
        <span>{menu.name}</span>
        </a>
      </li>
    )
  })
}
      </ul>
    </div>
  );
}

export {Menu};
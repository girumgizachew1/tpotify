import { Link } from 'react-router-dom';
import { useState } from 'react';

interface MenuProps {
  title: string;
  menuobj: any; // replace "any" with the appropriate type for the menu object
}

function Menu({ title, menuobj }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-2 md:mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium"></h2>
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 13H5v-2h14v2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <ul style={{zIndex: 50}} className={`relative mt-2 bg-black item-center md:bg-none md:mt-4 ${isOpen ? 'block' : 'hidden'} md:flex md:flex-col`}>
        {menuobj &&
          menuobj.map((menu: any) => {
            return (
              <li
                key={menu.name}
                className="py-1 px-2 text-gray-400 hover:border-red-400 hover:border-l-4"
              >
                <Link
                  to={menu.to}
                  className="flex flex-row space-x-2 space-y-3"
                  onClick={toggleMenu}
                >
                  <i className="mt-4">{menu.icon}</i>
                  <span>{menu.name}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export { Menu };

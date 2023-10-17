import { useState } from 'react';

import '../../styles/components/Navbar.scss';

import { GoVerified } from 'react-icons/go';
import { AiOutlineMenu } from 'react-icons/ai';

import Menu from './Menu';

function Navbar() {
  const navLinks = [
    { text: 'Início', href: '#' },
    { text: 'Sobre', href: '#about' },
    { text: 'Skills', href: '#technologies' },
    { text: 'Portfólio', href: '#projects' },
    { text: 'Contatos', href: '#contact' },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav
        id='navbar'
        className='navbar navbar-expand container py-3 d-flex justify-content-between'
      >
        <h2 className='logo'>DGA</h2>
        <ul className='navbar-nav'>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className='nav-item'
              
            >
              <a className='nav-link' href={link.href}>
                {link.text}
              </a>
              <hr />
            </li>
          ))}
        </ul>
        <GoVerified />
        <button id='menu_toggler' onClick={handleMenu}>
          <AiOutlineMenu />
        </button>
        {showMenu && <Menu event={handleMenu} />}
      </nav>
    </header>
  );
}

export default Navbar;

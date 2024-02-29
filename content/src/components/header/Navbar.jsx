import { useState } from 'react';

import '../../styles/components/Navbar.scss';

import { AiOutlineMenu } from 'react-icons/ai';

import Menu from './Menu';

function Navbar() {
  const navLinks = [
    { text: 'Portfólio', href: '#projects', class: 'nav-link ' },
    { text: 'Contatos', href: '#contact', class: 'navbar__btn' },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header id='header'>
      <nav
        id='navbar'
        className='navbar navbar-expand container d-flex justify-content-between'
      >
        <a href='#home' className='logo'>
          D <span>.</span>
        </a>
        <ul className='navbar_nav mb-0'>
          {navLinks.map((link, index) => (
            <li key={index} className='nav-item'>
              <a className={`${link.class}`} href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <button id='menu_toggler' onClick={handleMenu}>
          <AiOutlineMenu />
        </button>
        {showMenu && <Menu event={handleMenu} />}
      </nav>
    </header>
  );
}

export default Navbar;

import { useState } from 'react';
import { motion } from 'framer-motion';

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
        className='navbar navbar-expand container py-4 d-flex justify-content-between'
      >
        <h2 className='logo'>DGA</h2>
        <ul className='navbar-nav'>
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className='nav-item'
              initial={{
                y: -40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: index / 4,
              }}
            >
              <a className='nav-link' href={link.href}>
                {link.text}
              </a>
              <hr />
            </motion.li>
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

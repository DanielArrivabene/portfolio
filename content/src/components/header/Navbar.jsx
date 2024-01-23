import { useState } from 'react';

import '../../styles/components/Navbar.scss';

import Logo from '../../assets/assinature.png';

import { GoVerified } from 'react-icons/go';
import { AiOutlineMenu } from 'react-icons/ai';

import Menu from './Menu';

function Navbar() {
  const navLinks = [
    { text: 'Início', href: '#home', class: 'nav-link active' },
    { text: 'Sobre', href: '#about', class: 'nav-link' },
    { text: 'Skills', href: '#technologies', class: 'nav-link ' },
    { text: 'Portfólio', href: '#projects', class: 'nav-link ' },
    { text: 'Contatos', href: '#contact', class: 'nav-link ' },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  let sections = document.querySelectorAll('section');
  let links = document.querySelectorAll('header nav a');
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
        links.forEach((links) => {
          links.classList.remove('active');
          document
            .querySelector('header nav a[href*=' + id + ']')
            .classList.add('active');
        });
      }
    });
  };

  window.onscroll = () => {
    const header = document.querySelector('header');
    header.classList.toggle('header_active', window.scrollY > 0);
  }

  return (
    <header>
      <nav
        id='navbar'
        className='navbar navbar-expand container d-flex justify-content-between'
      >
        <img src={Logo} alt='Daniel Goulart Arrivabene' className='logo' />
        <ul className='navbar-nav'>
          {navLinks.map((link, index) => (
            <li key={index} className='nav-item'>
              <a className={`${link.class}`} href={link.href}>
                {link.text}
              </a>
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

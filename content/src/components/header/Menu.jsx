/* eslint-disable react/prop-types */
import '../../styles/components/Navbar.scss';

import { AiOutlineClose } from 'react-icons/ai';

function Menu(props) {
  const navLinks = [
    { text: 'Início', href: '#' },
    { text: 'Sobre', href: '#about' },
    { text: 'Skills', href: '#technologies' },
    { text: 'Portfólio', href: '#projects' },
    { text: 'Contatos', href: '#contact' },
  ];

  return (
    <section id='menu__content' className='vh-100 vw-100'>
      <ul className='menu__nav d-flex flex-column justify-content-center align-items-center p-0 w-100 h-100'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a className='nav-link' href={link.href}>
              {link.text}
            </a>
            <hr />
          </li>
        ))}
        <li className="close__menu" onClick={props.event}><AiOutlineClose /></li>
      </ul>
    </section>
  );
}

export default Menu;

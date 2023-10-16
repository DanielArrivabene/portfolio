import '../../styles/components/Navbar.scss';

import { GoVerified } from 'react-icons/go'

function Navbar() {

  const navLinks = [
    {text: 'Sobre', href:'#about'},
    {text: 'Skills', href:'#technologies'},
    {text: 'Portfólio', href:'#projects'},
    {text: 'Contatos', href:'#contact'},
  ]

  return (
    <header>
      <nav
        id='navbar'
        className='navbar navbar-expand container py-4 d-flex justify-content-between'
      >
        <h2 className='logo'>DGA</h2>
        <ul className='navbar-nav'>
          {navLinks.map((link, index) => (
            <li key={index} className='nav-item'>
            <a className='nav-link' href={link.href}>
              {link.text}
            </a>
            <hr/>
          </li>
          ))}
        </ul>
        <GoVerified />
      </nav>
    </header>
  );
}

export default Navbar;

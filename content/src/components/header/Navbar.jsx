import { useState } from 'react';

import '../../styles/components/Navbar.scss';

import { AiOutlineMenu } from 'react-icons/ai';
import { BsStars } from 'react-icons/bs';
<BsStars />;

import Logo from '../../assets/logo.png';

import Menu from './Menu';
import BtnPrimary from '../Buttons/BtnPrimary';

function Navbar() {
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
          <img src={Logo} alt='Daniel Goulart Arrivabene' />
        </a>
        <p className='navbar__message mb-0'>
          Free For Freelancer <BsStars />
        </p>
        <div className='navbar__links_container mb-0'>
          <a className='navbar__link' href='#projects'>
            Portfólio
          </a>
          <BtnPrimary text={'Faça um orçamento'} target={'#contact'} />
        </div>
        <button id='menu_toggler' onClick={handleMenu}>
          <AiOutlineMenu />
        </button>
        {showMenu && <Menu event={handleMenu} />}
      </nav>
    </header>
  );
}

export default Navbar;

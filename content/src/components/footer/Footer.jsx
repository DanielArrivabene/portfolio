import '../../styles/components/Footer.scss';

import { IoArrowUpOutline } from 'react-icons/io5';

import Logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer id='footer' className='d-flex align-items-center'>
      <section className='container d-flex justify-content-between align-items-center flex-wrap gap-3'>
        <div className='logo'>
          <img src={Logo} alt='Daniel Goulart Arrivabene' />
        </div>
        <p className='footer_text'>
          &copy; 2023 <span>DanielGoulart</span>.
        </p>
        <a href='#home' className='footer__link_top'>
          <IoArrowUpOutline />
        </a>
      </section>
    </footer>
  );
}

export default Footer;

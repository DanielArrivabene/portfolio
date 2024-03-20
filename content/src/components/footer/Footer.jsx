import '../../styles/components/Footer.scss';

import { IoArrowUpOutline } from 'react-icons/io5';
import { BiLogoLinkedin, BiLogoWhatsapp, BiLogoGithub } from 'react-icons/bi';

import Logo from '../../assets/logo.png';

function Footer() {
  const contactsList = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daniel-goulart-arrivabene/',
      icon: <BiLogoLinkedin />,
    },
    {
      name: 'Github',
      href: 'https://github.com/DanielArrivabene',
      icon: <BiLogoGithub />,
    },
    {
      name: 'Whatsapp',
      href: 'https://wa.me//5527996544482',
      icon: <BiLogoWhatsapp />,
    },
  ];

  return (
    <footer id='footer'>
      <section>
        <article className='container d-flex justify-content-between align-items-center flex-wrap gap-3 p-4'>
          <div className='logo'>
            <img src={Logo} alt='Daniel Goulart Arrivabene' />
          </div>

          <div className='footer__links_container d-flex gap-4 align-items-center'>
            <ul className='list-group footer__links_list align-items-center d-flex flex-row gap-4'>
              {contactsList &&
                contactsList.map((contact) => (
                  <li key={contact.name} className='list-group-item border-0'>
                    <a
                      href={contact.href}
                      target='_blank'
                      rel='noreferrer noopener'
                      className={contact.name}
                    >
                      {contact.icon}
                    </a>
                  </li>
                ))}
            </ul>
            <a href='#home' className='footer__link_top'>
              <IoArrowUpOutline />
            </a>
          </div>
        </article>
        <hr />
        <article className='container d-flex justify-content-between align-items-center flex-wrap gap-3 p-4'>
          <p className='footer_copy m-0'>
            &copy; 2023 <span>DanielGoulart</span>.
          </p>
        </article>
      </section>
    </footer>
  );
}

export default Footer;

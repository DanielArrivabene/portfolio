import '../../styles/components/Footer.scss';

import { BiLogoLinkedin, BiLogoWhatsapp, BiLogoGithub } from 'react-icons/bi';

function Footer() {
  const links = [
    { text: 'Início', href: '#home' },
    { text: 'Sobre', href: '#about' },
    { text: 'Skills', href: '#technologies' },
    { text: 'Portfólio', href: '#projects' },
    { text: 'Contatos', href: '#contact' },
  ];

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
    <footer id='footer' className='d-flex align-items-center'>
      <section className='container d-flex justify-content-between align-items-center'>
        <article className='row w-100 justify-content-around gap-4'>
          <div className='col-lg-5 footer__container'>
            <h3 className="mb-4">D.G.A</h3>
            <p>Elegância, Inovação <br/> e Produtividade</p>
            <ul className="footer__contacts_list p-0 my-4">
              {contactsList.map((contact) => (
                <li key={contact.name}>
                  <a href={contact.href}>{contact.icon}</a>
                </li>
              ))}
            </ul>
            <p>
              &copy; 2023 <span>DanielGArrivabene</span>.
            </p>
          </div>
          <div className='col-lg-5 text-center footer__container'>
            <h3 className='mb-4'>Links</h3>
            <ul className='p-0'>
              {links.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className='mb-2 d-block'>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </footer>
  );
}

export default Footer;

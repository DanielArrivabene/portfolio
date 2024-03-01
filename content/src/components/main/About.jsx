import '../../styles/components/About.scss';

import { BiLogoLinkedin, BiLogoWhatsapp, BiLogoGithub } from 'react-icons/bi';

import Avatar from '../../assets/eu.jpg';

function About() {
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
    <section id='about' className='d-flex justify-content-around section-area'>
      <article className='container d-flex flex-column align-items-center justify-content-center'>
        <h2 className='description__title mb-3'>
          Quem sou<span className='destaque--text'>?</span>
        </h2>
        <div className='row justify-content-between'>
          <div className='d-flex justify-content-end avatar__container'>
            <img src={Avatar} alt='Daniel Goulart Arrivabene' loading='lazy' />
          </div>
          <div className='description'>
            <p className='description__text mb-3'>
              Prazer, meu nome é <strong>Daniel Goulart Arrivabene</strong>. Eu
              atuo como Frontend Developer e Web Designer desenvolvendo websites
              de alto nível para que suas ideias se tornem realidade. Tudo
              através de código e uma boa xícara de café.
            </p>
            <ul className='list-group contacts_list d-flex flex-row mb-3'>
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
            <a className='description__link' href='#services'>
              Serviços
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;

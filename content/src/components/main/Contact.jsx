import '../../styles/components/Contact.scss';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BiLogoLinkedin, BiLogoWhatsapp, BiLogoGithub } from 'react-icons/bi';

import Form from './Form';

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

function Contact() {

  const { ref, inView } = useInView(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <section
      id='contact'
      className='min-vh-100 d-flex align-items-center mb-5 section-area'
    >
      <div className='container'>
        <div className='row justify-content-center flex-wrap gap-5'>
          <article className='col-md-5 contacts__container d-flex flex-column '>
            <h2>
              Você tem algum projeto em mente? Me envie uma mensagem
              <span className='destaque--text'>!</span>
            </h2>
            <p>
              Entre em contato comigo preenchendo o formulário, para iniciarmos
              o desenvolvimento de algo <strong>incrível</strong>!
            </p>
            <div>
              <p className='contact_label'>
                <BsFillTelephoneFill /> <strong>Telefone</strong>
              </p>
              <p>+55 (27) 99654-4482</p>
            </div>
            <div>
              <p className='contact_label'>
                <MdEmail /> <strong>E-mail</strong>
              </p>
              <p>danielg.arrivabene@gmail.com</p>
            </div>
            <ul ref={ref} className='list-group contacts_list d-flex flex-row'>
              {contactsList &&
                contactsList.map((contact, index) => (
                  <motion.li
                    key={contact.name}
                    className='list-group-item border-0'
                    initial={{
                      y: '100px',
                      opacity: 0,
                    }}
                    animate={animation}
                    transition={{
                      type: 'spring',
                      damping: 17,
                      stiffness: 500,
                      duration: 0.2,
                      delay: index / 3,
                    }}
                  >
                    <a
                      href={contact.href}
                      target='_blank'
                      rel='noreferrer noopener'
                      className={contact.name}
                    >
                      {contact.icon}
                    </a>
                  </motion.li>
                ))}
            </ul>
          </article>
          <article className='col-md-5 form__container'>
            <Form />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;

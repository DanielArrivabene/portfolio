import '../../styles/components/Apresentation.scss';

import { motion } from 'framer-motion';

import {
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiLogoGithub,
  BiDownArrowAlt,
} from 'react-icons/bi';


import Assinature from '../../assets/assinature.png'

const contactsList = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/daniel-goulart-arrivabene/',
    icon: <BiLogoLinkedin />,
  },
  {
    name: 'Whatsapp',
    href: 'https://wa.me//5527996544482',
    icon: <BiLogoWhatsapp />,
  },
  {
    name: 'Github',
    href: 'https://github.com/DanielArrivabene',
    icon: <BiLogoGithub />,
  },
];

function Apresentation() {
  return (
    <section
      id='Apresentation'
      className=' container min-vh-100 d-flex 
      flex-column
      justify-content-center align-items-center
    '
    >
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: 'tween',
          duration: 1.2,
          delay: 0.5,
        }}
      >
        <i>D</i>aniel <i>G</i>. <i>A</i>rrivabene
      </motion.h1>
      <motion.h2
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: 'tween',
          duration: 1.1,
          delay: 1.2,
        }}
      >
        Frontend Web Developer
      </motion.h2>
      <motion.a
        href='#contact'
        className='apresentation_button'
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Assinature
      </motion.a>
      {Assinature}

      <ul className='contacts-list list-group'>
        {contactsList &&
          contactsList.map((contact) => (
            <li key={contact.name} className='list-group-item'>
              <a href={contact.href}>{contact.icon}</a>
            </li>
          ))}
      </ul>

      <motion.a
        href='#about'
        className='scroll_link'
        initial={{
          y: 0,
        }}
        animate={{
          y: [-7, 0, -7],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          delay: 3,
        }}
      >
        Scroll Down <BiDownArrowAlt />
      </motion.a>
    </section>
  );
}

export default Apresentation;

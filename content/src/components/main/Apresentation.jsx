import '../../styles/components/Apresentation.scss';


import { BiLogoLinkedin, BiLogoWhatsapp, BiLogoGithub } from 'react-icons/bi';

const contactsList = [
  { name: 'LinkedIn', href: '#', icon: <BiLogoLinkedin /> },
  { name: 'Whatsapp', href: '#', icon: <BiLogoWhatsapp /> },
  { name: 'Github', href: '#', icon: <BiLogoGithub /> },
];

function Apresentation() {
  return (
    <section
      id='Apresentation'
      className=' container vh-100 d-flex 
      flex-column
      justify-content-center align-items-center
    '
    >
      <h1>
        <i>D</i>aniel <i>G</i>. <i>A</i>rrivabene
      </h1>
      <h2>Frontend Web Developer</h2>

      {contactsList &
        contactsList.map((contact) => (
          <ul key={contact.name} className='list-group contacts-list'>
            <li className='list-group-item'>
              <a href={contact.href}>{contact.icon}</a>
            </li>
          </ul>
        ))}
    </section>
  );
}

export default Apresentation;

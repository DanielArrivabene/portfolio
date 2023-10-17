import '../../styles/components/Contact.scss';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import {
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiLogoGithub,
} from 'react-icons/bi';

import Form from './Form';

const contactsList = [
  { name: 'LinkedIn', href: '#', icon: <BiLogoLinkedin /> },
  { name: 'Whatsapp', href: '#', icon: <BiLogoWhatsapp /> },
  { name: 'Github', href: '#', icon: <BiLogoGithub /> },
];

function Contact() {
  return (
    <section id='contact' className='min-vh-100 d-flex align-items-center mb-5'>
      <div className='container'>
        <div className='row justify-content-center flex-wrap gap-5'>
          <article className='col-md-5 contacts__container d-flex flex-column '>
            <h2>Você tem algum projeto em mente? Me envie uma mensagem</h2>
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
            <ul className='list-group contacts_list d-flex flex-row'>
              {contactsList &&
                contactsList.map((contact) => (
                  <li key={contact.name} className='list-group-item border-0'>
                    <a href={contact.href}>{contact.icon}</a>
                  </li>
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

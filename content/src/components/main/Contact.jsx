import '../../styles/components/Contact.scss';

import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

function Contact() {
  return (
    <section id='contact' className='min-vh-100 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <article className='col-6 contacts__container d-flex flex-column '>
            <h2>Você tem algum projeto em mente? Me envie uma mensagem</h2>
            <p>
              Entre em contato comigo preenchendo o formulário, para iniciarmos o
              desenvolvimento de algo <strong>incrível</strong>!
            </p>
            <div>
                <p className="contact_label"><BsFillTelephoneFill /> <strong>Telefone</strong></p>
                <p>+55 (27) 99654-4482</p>
            </div>
            <div>
                <p className="contact_label"><MdEmail /> <strong>E-mail</strong></p>
                <p>danielg.arrivabene@gmail.com</p>
            </div>
          </article>
          <article className='col-6 form__container'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            perspiciatis eveniet eius exercitationem maiores itaque optio
            reiciendis soluta explicabo, sit, error fugit quae nihil. Quis
            repellendus vel dolore error esse. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Excepturi aperiam facere eos odit
            perspiciatis molestiae eius iusto, iste quia, porro ipsam
            voluptatibus quibusdam? Aliquam quaerat vero ducimus praesentium
            voluptas magnam.
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import '../../styles/components/Contact.scss';

import { BsFillTelephoneFill } from 'react-icons/bs';

import Form from './Form';


function Contact() {
  return (
    <section
      id='contact'
      className='d-flex align-items-center section-area'
    >
      <div className='container'>
        <div className='row justify-content-center flex-wrap gap-5'>
          <article className='col-md-5 contacts__container d-flex flex-column '>
            <h2 className='mb-3'>Você tem algum projeto em mente?</h2>
            <p className="mb-5">
              Entre em contato comigo preenchendo o formulário, para iniciarmos
              o desenvolvimento de algo <strong>incrível</strong>!
            </p>
            <div>
              <p className='contact_label'>
                <BsFillTelephoneFill /> <strong>Telefone</strong>
              </p>
              <p className="mb-5">+55 (27) 99654-4482</p>
            </div>
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

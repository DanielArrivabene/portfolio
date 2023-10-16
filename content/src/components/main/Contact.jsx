import '../../styles/components/Contact.scss';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <section id='contact' className='min-vh-100 d-flex align-items-center'>
      <div className='container'>
        <div className='row justify-content-center'>
          <article className='col-6 contacts__container d-flex flex-column '>
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
          </article>
          <article className='col-5 form__container'>
            <form>
              <div className='form-group'>
                <label>Nome</label>
                <input
                  type='text'
                  className='form-control'
                  id='name_input'
                  placeholder='ex. João Silva'
                />
              </div>
              <div className='form-group'>
                <label>E-mail</label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  placeholder='ex. seuemail@exemplo.com'
                />
              </div>
              <div className='form-group'>
                <label>Telefone</label>
                <input
                  type='tel'
                  className='form-control'
                  id='exampleInputEmail1'
                  placeholder='ex. (99) 99999-9999'
                />
              </div>
              <div className='form-group'>
                <label>
                  Mensagem
                </label>
                <textarea
                  className='form-control'
                  id='message_input'
                  rows='2'
                  placeholder='Digite aqui ...'
                ></textarea>
              </div>
              <button type='submit' className='btn'>
                Enviar
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;

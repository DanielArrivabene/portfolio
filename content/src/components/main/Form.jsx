import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Form() {
  const { ref, inView } = useInView(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        width: '100%',
        opacity: 1,
      });
    }
  }, [inView, animation]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !number || !message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    } else {
      const url = `https://wa.me//5527996544482?text=Olá,%20meus%20dados%20são:%20Nome:%20${name},%20E-mail:%20${email},%20Número:%20${number}.%20Mensagem:%20${message}`;
      window.open(url, '_blank');
    }
  };

  return (
    <form ref={ref}>
      <div className='form-group'>
        <label>Nome</label>
        <motion.input
          required
          initial={{ width: 0, opacity: 0 }}
          animate={animation}
          transition={{ duration: 1, delay: 0.3 }}
          type='text'
          className='form-control'
          id='name_input'
          placeholder='ex. João Silva'
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <div className='form-group'>
        <label>E-mail</label>
        <motion.input
          required
          initial={{ width: 0, opacity: 0 }}
          animate={animation}
          transition={{ duration: 1, delay: 0.5 }}
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          placeholder='ex. seuemail@exemplo.com'
          onChange={handleEmailChange}
          value={email}
        />
      </div>
      <div className='form-group'>
        <label>Telefone</label>
        <motion.input
          required
          initial={{ width: 0, opacity: 0 }}
          animate={animation}
          transition={{ duration: 1, delay: 0.7 }}
          type='tel'
          className='form-control'
          id='exampleInputEmail1'
          placeholder='ex. (99) 99999-9999'
          onChange={handleNumberChange}
          value={number}
        />
      </div>
      <div className='form-group'>
        <label>Mensagem</label>
        <motion.textarea
          initial={{ width: 0, opacity: 0 }}
          animate={animation}
          transition={{ duration: 1, delay: 0.9 }}
          className='form-control'
          id='message_input'
          rows='5'
          placeholder='Digite aqui ...'
          onChange={handleMessageChange}
          value={message}
        ></motion.textarea>
      </div>
      <a
        type='submit'
        href={`https://wa.me//5527996544482?text=Olá,%20meus%20dados%20são:%20Nome:%20${name},%20E-mail:%20${email},%20Número:%20${number}.%20Mensagem:%20${message}`}
        target='_blank'
        rel='noreferrer noopener'
        className='btn'
        id='send'
        onClick={handleSubmit}
      >
        Enviar
      </a>
    </form>
  );
}

export default Form;

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
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    } else {
      const url = `https://wa.me//5527996544482?text=Olá,%20me%20chamo%20${name}.%20${message}`;
      window.open(url, '_blank');
    }
  };

  return (
    <form ref={ref}>
      <div className='form-group'>
        <label htmlFor='InputName'>Nome</label>
        <motion.input
          required
          initial={{ width: 0, opacity: 0 }}
          animate={animation}
          transition={{ duration: 1, delay: 0.3 }}
          type='text'
          className='form-control'
          id='InputName'
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='InputTel'>Telefone</label>
        <motion.input
          required
          initial={{ width: 0, opacity: 0 }}
          animate={animation}
          transition={{ duration: 1, delay: 0.7 }}
          type='tel'
          className='form-control'
          id='InputTel'
          onChange={handleNumberChange}
          value={number}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='InputMessage'>Mensagem</label>
        <motion.textarea
          initial={{ width: 0, opacity: 0 }}
          animate={animation}
          transition={{ duration: 1, delay: 0.9 }}
          className='form-control'
          id='InputMessage'
          rows='5'
          onChange={handleMessageChange}
          value={message}
        ></motion.textarea>
      </div>
      <a className='btn' id='send' onClick={handleSubmit}>
        Enviar
      </a>
    </form>
  );
}

export default Form;

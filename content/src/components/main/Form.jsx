import { motion } from 'framer-motion';

function Form() {
  return (
    <form>
      <div className='form-group'>
        <label>Nome</label>
        <motion.input
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.3 }}
          type='text'
          className='form-control'
          id='name_input'
          placeholder='ex. João Silva'
        />
      </div>
      <div className='form-group'>
        <label>E-mail</label>
        <motion.input
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.5 }}
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          placeholder='ex. seuemail@exemplo.com'
        />
      </div>
      <div className='form-group'>
        <label>Telefone</label>
        <motion.input
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.7 }}
          type='tel'
          className='form-control'
          id='exampleInputEmail1'
          placeholder='ex. (99) 99999-9999'
        />
      </div>
      <div className='form-group'>
        <label>Mensagem</label>
        <motion.textarea
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className='form-control'
          id='message_input'
          rows='5'
          placeholder='Digite aqui ...'
        ></motion.textarea>
      </div>
      <button type='submit' className='btn'>
        Enviar
      </button>
    </form>
  );
}

export default Form;

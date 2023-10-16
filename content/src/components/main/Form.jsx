function Form() {
  return (
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
        <label>Mensagem</label>
        <textarea
          className='form-control'
          id='message_input'
          rows='5'
          placeholder='Digite aqui ...'
        ></textarea>
      </div>
      <button type='submit' className='btn'>
        Enviar
      </button>
    </form>
  );
}

export default Form;

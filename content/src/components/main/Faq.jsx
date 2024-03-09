import '../../styles/components/Faq.scss';

function Faq() {
  const faqList = [
    {
      title: 'Quanto tempo até eu ter minha CNH?',
      answer:
        'Aqui na Klippel nós priorizamos a agilidade em conjunto com o aprendizado, por isso o tempo mínimo para tirar sua CNH é de apenas 2 meses. Isso também irá depender da sua disponibilidade fazer as aulas, testes e provas.',
    },
    {
      title: 'Quais são os documentos necessários?',
      answer:
        'Para dar início ao precesso você pode usar sua Identidade, Carteira de Trabalho ou Passaporte.',
    },
    {
      title: 'Vocês fazem reciclagem?',
      answer:
        'Sim! Disponibilizamos um curso de Reciclagem com 30 horas de duração, independente da categoria.',
    },
    {
      title: 'Os horários são flexíveis?',
      answer:
        'Sim! Você pode escolher o horário que melhor se adapta à sua rotina.',
    },
    {
      title: 'Quais são as formas de pagamento?',
      answer:
        'Nós trabalhamos com Pix, PicPay, Carnê, Cartão em até 12X e Dinheiro.',
    },
  ];

  return (
    <section
      id='faq'
      className='d-flex justify-content-around section-area min-vh-100'
    >
      <article className='container row'>
        <div className='col-lg-6 faq__image'></div>
        <div className='col-lg-6 faq__data'>
          <h2 className='faq_title mb-3'>Perguntas frequentes</h2>
          <div className='faq_container mb-3'>
            {faqList.map((item, index) => (
              <details
                key={index}
                className='mb-3'
                open={index == 0 ? true : false}
              >
                <summary className='faq_question'>{item.title}</summary>
                <p className='faq_answer'>{item.answer}</p>
              </details>
            ))}
          </div>
          <p className='faq__text mb-2'>Tem mais alguma dúvida em mente?</p>
          <a href='#' className='faq__link'>
            Fale comigo
          </a>
        </div>
      </article>
    </section>
  );
}

export default Faq;

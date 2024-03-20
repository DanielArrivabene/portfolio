import '../../styles/components/Phases.scss';

function Technologies() {
  const phasesList = [
    {
      name: 'Briefing',
      text: 'Levantamento de perguntas para entender a sua necessidade para compreendermos seus objetivos e chegarmos nos melhores resultados.',
    },
    {
      name: 'Pesquisa',
      text: 'Análise de mercado, concorrentes, referências e definição da semântica e conceitos. É aqui que o seu site começa a tomar forma.',
    },
    {
      name: 'Criação',
      text: 'Com dados e objetivos bem definidos, é iniciado o desenvolvimento do site para tornar o seu projeto único e transmitir a sua mensagem.',
    },
    {
      name: 'Entrega',
      text: 'A colaboração é essencial. Seus feedbacks são valiosos para garantir que o site comunique suas ideias e seja fiel a sua marca.',
    },
  ];

  return (
    <section id='phases' className='section-area px-0'>
      <article className='d-flex flex-column w-100'>
        <p className='container color--primary mb-1 px-5'>ETAPAS DE DESENVOLVIMENTO</p>
        <h2 className='phases__title container mb-5 px-5'>Não é magia, é código</h2>
        <div className='phases_container w-100'>
          {phasesList.map((item, index) => (
            <div key={index} className='phase'>
              <div className='container d-flex justify-content-between align-items-center flex-wrap gap-4 p-5'>
                <div className='d-flex gap-5 w-100 number__container align-items-center'>
                  <span className='phase__number '>{'0' + (index + 1)}</span>
                  <h3 className='m-0 phase_title'>{item.name}</h3>
                </div>
                <p className='phase_text'>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Technologies;

import '../../styles/components/Atributes.scss';

import Ray from '../../assets/ray.svg';
import Chain from '../../assets/chain.svg';
import Star from '../../assets/star.svg';

function Atributes() {
  const atributesData = [
    {
      title: 'Rápido e fácil',
      text: 'Rápido e fácil para que você possa otimizar seu tempo, entregando um conteúdo de qualidade ao seu público alvo.',
      icon: Ray,
    },
    {
      title: 'Rentável',
      text: 'Rentabilidade é a prioridade, tendo como principal objetivo fazer com que o dinheiro investido gere lucros cada vez maiores.',
      icon: Chain,
    },
    {
      title: 'Foco nos detalhes',
      text: 'Pequenos detalhes fazem grande diferença no dia a dia aumentando o engajamento e atraindo novos clientes.',
      icon: Star,
    },
  ];

  return (
    <section
      id='atributes'
      className='d-flex justify-content-around section-area'
    >
      <article className='container d-flex align-items-center justify-content-center'>
        <div className='w-100 row justify-content-around cards__container'>
          <h2 className='text-center mb-5'>Feito sob medida</h2>
          {atributesData &&
            atributesData.map((atribute, index) => (
              <div
                key={index}
                className='col-lg-4 w text-center atribute__card p-3'
              >
              {atribute.icon && <img src={atribute.icon} alt='atributes icons' />}
                <h3 className='card__title mb-3 mt-5'>{atribute.title}</h3>
                <p className='card__description'>{atribute.text}</p>
              </div>
            ))}
        </div>
      </article>
    </section>
  );
}

export default Atributes;

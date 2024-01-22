import '../../styles/components/Atributes.scss';

import { FaLink } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";

function Atributes() {
  const atributesData = [
    {
      title: 'Rápido e fácil',
      text: 'Rápido e fácil para que você possa gastar seu tempo criando ótimo conteúdo. Fácil porque ninguém gosta de difícil.',
      icon: <BsFillLightningFill />,
      iconClass: 'ray'
    },
    {
      title: 'Rentável',
      text: 'A confiabilidade é nossa primeira prioridade. Não queremos que você se preocupe com o que pode dar errado.',
      icon: <FaLink />,
      iconClass: 'chain'
    },
    {
      title: 'Foco nos detalhes',
      text: 'Pequenos detalhes divertidos que fazem você sorrir porque a maioria dos softwares B2B já é bastante chata.',
      icon: <IoStar />,
      iconClass: 'star'
    },
  ];
  

  return (
    <section
      id='atributes'
      className='d-flex justify-content-around section-area'
    >
      <article className='container d-flex align-items-center justify-content-center'>
        <div className='w-100 row justify-content-between cards__container'>
          <h2 className='text-center mb-5'>Feito com carinho</h2>
          {atributesData &&
            atributesData.map((atribute, index) => (
              <div key={index} className='col-lg-4 text-center atribute__card p-3'>
                <h3 className='card__title mb-3'>{atribute.title}</h3>
                <span className={atribute.iconClass}>{atribute.icon}</span>
                <p className='card__description'>{atribute.text}</p>
              </div>
            ))}
        </div>
      </article>
    </section>
  );
}

export default Atributes;

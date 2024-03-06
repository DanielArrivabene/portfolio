import '../../styles/components/Atributes.scss';
/*
import { GiCoffeeBeans } from 'react-icons/gi';
import { HiComputerDesktop } from 'react-icons/hi2';
import { PiCrownFill } from 'react-icons/pi';*/

function Atributes() {
  /*const atributesData = [
    {
      title: '612+',
      text: 'Xícaras de café.',
      icon: <GiCoffeeBeans />,
    },
    {
      title: '50+',
      text: 'Clientes satisfeitos.',
      icon: <PiCrownFill />,
    },
    {
      title: '1000+',
      text: 'Horas codando.',
      icon: <HiComputerDesktop />,
    },
  ];*/

  return (
    <section
      id='atributes'
      className='d-flex justify-content-around section-area'
    >
      <article className='container row justify-content-between align-items-center'>
        <div className='col-lg-6 atributes__container px-4 d-flex flex-wrap gap-4'>
          <div className='atribute one p-4 d-flex justify-content-between align-items-center'>
            <p className='atribute__service m-0'>
              <span>50+</span> Clients satisfeitos
            </p>
            <p className='atribute__service m-0'>
              <span>1000+</span> Horas codando
            </p>
            <p className='atribute__service m-0'>
              <span>650+</span> Xícaras de café
            </p>
          </div>
          <div className='atribute two p-4'>
            <h3>
              Título genérico top Título genérico top Título genérico top Título
              genérico top Título genérico top Título genérico top
            </h3>
          </div>
          <div className='atribute tree p-4'>
            <p className='mb-2'>
              ´´Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti, quae vero, perferendis ipsum quos totam aperiam´´
            </p>
            <p className='atribute_author'>Por Patrick Mendes</p>
            <a href='#testemonials' className='atribute__link'>
              Ver mais
            </a>
          </div>
        </div>
        <div className='col-lg-6 atributes__data p-4'>
          <p className='atributes__text mb-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            accusamus deserunt aperiam quas
          </p>
          <h2>Um pouco sobre o que faço</h2>
          <p className='atributes__text mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            accusamus deserunt aperiam quas
          </p>
          <a href='#' className='atributes__link mb-5'>
            Saiba mais
          </a>
        </div>
      </article>
    </section>
  );
}

export default Atributes;

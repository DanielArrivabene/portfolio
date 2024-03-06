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
      className='d-flex justify-content-around section-area min-vh-100'
    >
      <article className='container row justify-content-between align-items-center'>
        <div className='col-lg-6 atributes__image'></div>
        <div className='col-lg-6 atributes__data'>
          <h2>Um pouco sobre o que faço</h2>
          <p className='atributes__text mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            accusamus deserunt aperiam quas, iste eaque nulla praesentium nihil
            quod, libero porro. Consectetur fuga saepe dignissimos molestias
            accusamus similique voluptatum suscipit.
          </p>
          <a href='#' className='atributes__link mb-5'>
            Fale comigo
          </a>
        </div>
      </article>
    </section>
  );
}

export default Atributes;

import '../../styles/components/Atributes.scss';

import { GiCoffeeBeans } from 'react-icons/gi';
import { HiComputerDesktop } from 'react-icons/hi2';
import { PiCrownFill } from 'react-icons/pi';

function Atributes() {
  const atributesData = [
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
  ];

  return (
    <section
      id='atributes'
      className='d-flex justify-content-around section-area'
    >
      <article className='container d-flex align-items-center justify-content-center'>
        <div className='w-100 row justify-content-around cards_container'>
          {atributesData &&
            atributesData.map((atribute, index) => (
              <div
                key={index}
                className='col-lg-4 text-center atribute__card p-2 my-3'
              >
                {atribute.icon && atribute.icon}
                <h3 className='card__title mb-1 mt-2'>{atribute.title}</h3>
                <p className='card__description'>{atribute.text}</p>
              </div>
            ))}
        </div>
      </article>
    </section>
  );
}

export default Atributes;

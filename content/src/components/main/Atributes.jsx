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
    <div className='w-100 row justify-content-around atributes_container'>
      {atributesData &&
        atributesData.map((atribute, index) => (
          <div key={index} className='text-center atribute__card p-3 my-4'>
            {atribute.icon && atribute.icon}
            <h3 className='card__title mb-1 mt-2'>{atribute.title}</h3>
            <p className='card__description m-0'>{atribute.text}</p>
          </div>
        ))}
    </div>
  );
}

export default Atributes;

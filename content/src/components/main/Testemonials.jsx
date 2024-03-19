import '../../styles/components/Testemonials.scss';

import { MdOutlineStar } from 'react-icons/md';

import One from '../../assets/eu.jpg';

function Testemonials() {
  const testemonialsList = [
    {
      name: 'John Smith 1',
      photo: One,
      class: 'panel_a',
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumylorem ipsum dolor sit amet.',
    },
    {
      name: 'John Smith 2',
      photo: One,
      class: 'panel_b',
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumylorem ipsum dolor sit amet.',
    },
    {
      name: 'John Smith 3',
      photo: One,
      class: 'panel_c',
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumylorem ipsum dolor sit amet.',
    },
    {
      name: 'John Smith 4',
      photo: One,
      class: 'panel_c',
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumylorem ipsum dolor sit amet.',
    },
  ];

  return (
    <section id='testemonials' className='section-area'>
      <article className='container h-100'>
        <h2 className='text-center testemonials__title mb-5'>
          O que as pessoas estão{' '}
          <span className='color--primary'>dizendo?</span>
        </h2>
        <div className='container'>
          <div className='carousel'>
            {testemonialsList.map((item, index) => (
              <input
                key={index}
                type='radio'
                name='slides'
                id={`slide-${index + 1}`}
                checked='cheked'
              ></input>
            ))}
            <ul className='carousel__slides mb-5'>
              {testemonialsList.map((item, index) => (
                <li className='carousel__slide' key={index}>
                  <div className='upper_data__container mb-4'>
                    <h3 className='m-0'>{item.name}</h3>
                    <p className='m-0'>Fundador da fundação</p>
                  </div>
                  <p>{item.text}</p>
                  <div className='stars_container'>
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                  </div>
                </li>
              ))}
            </ul>
            <ul className='carousel__thumbnails'>
              <li>
                <label htmlFor='slide-1'>
                  <img src='https://picsum.photos/id/1041/150/150' alt=''></img>
                </label>
              </li>
              <li>
                <label htmlFor='slide-2'>
                  <img src='https://picsum.photos/id/1043/150/150' alt=''></img>
                </label>
              </li>
              <li>
                <label htmlFor='slide-3'>
                  <img src='https://picsum.photos/id/1044/150/150' alt=''></img>
                </label>
              </li>
              <li>
                <label htmlFor='slide-4'>
                  <img src='https://picsum.photos/id/1045/150/150' alt=''></img>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Testemonials;

import '../../styles/components/Testemonials.scss';

import { MdOutlineStar } from 'react-icons/md';

import One from '../../assets/eu.jpg';

function Testemonials() {
  const testemonialsList = [
    {
      name: 'John Smith',
      photo: One,
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam lorem, sed diam nonumy lorem, sed diam',
    },
    {
      name: 'John Smith',
      photo: One,
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumylorem ipsum dolor sit amet, consect',
    },
    {
      name: 'John Smith',
      photo: One,
      text: 'O melhor do east eua coast O melhor do east eua coast',
    },
    {
      name: 'John Smith',
      photo: One,
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam sed diam nonumy lorem, sed diam',
    },
    {
      name: 'John Smith',
      photo: One,
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem',
    },
    {
      name: 'John Smith',
      photo: One,
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumylorem ipsum  sed diam nonumy lorem, sed diam ',
    },
  ];

  return (
    <section
      id='testemonials'
      className='min-vh-100 d-flex flex-column align-items-center section-area'
    >
      <article className='container'>
        <h2 className='text-center testemonials__title mb-5'>
          O que as pessoas estão{' '}
          <span className='color--primary'>dizendo?</span>
        </h2>

        <div className='cards_container'>
          {testemonialsList.map((testemonial, index) => (
            <div key={index} className='testemonial p-4'>
              <div className='d-flex align-items-center gap-2 mb-3'>
                <img
                  src={testemonial.photo}
                  alt={testemonial.name}
                  className='testemonial__photo'
                />
                <p className='testemonial__name m-0'>{testemonial.name}</p>
              </div>
              <p className='testemonial__text mb-3'>{testemonial.text}</p>
              <span className='d-block w-100 text-center star_container'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Testemonials;

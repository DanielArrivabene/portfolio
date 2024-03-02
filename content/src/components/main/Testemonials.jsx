import '../../styles/components/Testemonials.scss';

import { BiSolidQuoteAltRight } from 'react-icons/bi';
import { MdOutlineStar } from 'react-icons/md';

import One from '../../assets/eu.jpg';

function Testemonials() {
  const testemonialsList = [
    {
      name: 'John Smith',
      photo: One,
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumylorem ipsum dolor sit amet, consect',
    },
    {
      name: 'John Smith',
      photo: One,
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumylorem ipsum dolor sit amet, consect',
    },
    {
      name: 'John Smith',
      photo: One,
      text: 'lorem ipsum dolor sit amet, consectetur adip lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumy lorem, sed diam nonumylorem ipsum dolor sit amet, consect',
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
              <div className='d-flex justify-content-between align-items-center mb-3 person_data'>
                <div className='d-flex align-items-center justify-content-center gap-2'>
                  <img
                    src={testemonial.photo}
                    alt={testemonial.name}
                    className='testemonial__photo'
                  />
                  <p className='testemonial__name m-0'>{testemonial.name}</p>
                </div>
                <BiSolidQuoteAltRight />
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

import '../../styles/components/Clients.scss';

import Kateli from '../../assets/kately-logo.png';
import Tutti from '../../assets/tutti-logo.png';
import V3 from '../../assets/v3-logo.png';
import Venture from '../../assets/venture-logo.png';

function Clients() {
  const clientsList = [
    {
      name: 'kateli',
      image: Kateli,
    },
    {
      name: 'v3system',
      image: V3,
    },
    {
      name: 'tutti',
      image: Tutti,
    },
    {
      name: 'venture',
      image: Venture,
    },
  ];

  return (
    <section
      id='clients'
      className='d-flex justify-content-around section-area'
    >
      <article className='container d-flex align-items-center justify-content-center'>
        <div className='w-100 row justify-content-around align-items-center cards_container'>
          {clientsList &&
            clientsList.map((client, index) => (
              <div
                key={index}
                className={`col-lg-2 text-center clients__card ${client.name}`}
              >
                <img src={client.image} alt={client.name} />
              </div>
            ))}
        </div>
      </article>
    </section>
  );
}

export default Clients;

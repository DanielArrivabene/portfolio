import '../../styles/components/Atributes.scss';

import { BsGraphUpArrow, BsArrowsAngleExpand } from "react-icons/bs";
import { PiClockCountdown } from "react-icons/pi";

function Atributes() {

  return (
    <section
      id='atributes'
      className='d-flex justify-content-around section-area'
    >
      <article className='container row justify-content-between align-items-center'>
        <div className='col-lg-6 atributes__container px-4 d-flex flex-wrap gap-4'>
          <div className='atribute one p-4 d-flex justify-content-between align-items-center'>
            <p className='atribute__service m-0'>
            <BsGraphUpArrow /> Escalável
            </p>
            <p className='atribute__service m-0'>
            <BsArrowsAngleExpand /> Responsivo
            </p>
            <p className='atribute__service m-0'>
            <PiClockCountdown /> Rápido
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

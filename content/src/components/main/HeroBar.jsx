import { useState } from 'react';

import '../../styles/components/HeroBar.scss';

import { IoClose } from 'react-icons/io5';

function HeroBar() {
  const [showBar, setShowBar] = useState(true);

  return (
    <>
      {showBar && (
        <div id='hero_bar'>
          <p className='hero_bar__text'>
            <span>FAÇA UM ORÇAMENTO </span> — É grátis!
          </p>
          <a href='#contact' className='hero_bar__link'
            onClick={() => {
              setShowBar(false);
            }}>
            Fale conosco
          </a>
          <button
            className='hero_bar__dismiss'
            onClick={() => {
              setShowBar(false);
            }}
          >
            <IoClose />
          </button>
        </div>
      )}
    </>
  );
}

export default HeroBar;

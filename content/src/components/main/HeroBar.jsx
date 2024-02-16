import { useState } from 'react';

import '../../styles/components/HeroBar.scss';

import { IoClose } from 'react-icons/io5';

function HeroBar() {
  const [showBar, setShowBar] = useState(true);

  return (
    <>
      {showBar && (
        <div id='hero_bar'>
          <p className='hero_bar__text'>Faça um orçamento — É GRÁTIS!</p>
          <a href='#contact' className='hero_bar__link'>
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

import '../../styles/components/Buttons.scss';

import { PiStarFour } from 'react-icons/pi';

function BtnPrimary(props) {
  return (
    <a href={props.target}  className="btn__primary">
      {props.text} <PiStarFour />
    </a>
  );
}

export default BtnPrimary;

import '../../styles/components/Buttons.scss';

import { HiArrowLongRight } from 'react-icons/hi2';

function BtnSecondary(props) {
  return (
    <a href={props.target} className="btn__secondary">
      {props.text} <HiArrowLongRight />
    </a>
  );
}

export default BtnSecondary;

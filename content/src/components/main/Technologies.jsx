import '../../styles/components/Technologies.scss';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandBootstrap,
  TbBrandTypescript,
  TbBrandFramerMotion,
} from 'react-icons/tb';
import { FaSass, FaReact } from 'react-icons/fa';
import { RiJavascriptLine, RiWordpressFill } from 'react-icons/ri';
import { SiAxios, SiRedux } from 'react-icons/si';
import { LiaGitAlt } from 'react-icons/lia';

function Technologies() {
  const technologiesList = [
    { name: 'HTML', icon: <TbBrandHtml5 /> },
    { name: 'Bootstrap', icon: <TbBrandBootstrap /> },
    { name: 'CSS', icon: <TbBrandCss3 /> },
    { name: 'Sass', icon: <FaSass /> },
    { name: 'Axios', icon: <SiAxios /> },
    { name: 'Javascript', icon: <RiJavascriptLine /> },
    { name: 'Typescript', icon: <TbBrandTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Git', icon: <LiaGitAlt /> },
    { name: 'Wordpress', icon: <RiWordpressFill /> },
    { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
  ];

  const { ref, inView } = useInView(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <section
      id='technologies'
      className='d-flex align-items-center justify-content-around'
    >
      <div className='container d-flex align-items-center'>
        <div className='row justify-content-between'>
          <article className='col-md-5 mb-5 tech__description'>
            <h2>Quais são as tecnologias que domino?</h2>
            <p>
              Desenvolvo interfaces intuitivas e responsivas. Melhorando a
              experiência do usuário com as tecnologias a seguir.
            </p>
            <p>
              Para mais informações <a href='#contact'>entre em contato</a>.
            </p>
          </article>
          <article className='col-md-6 tech__items' ref={ref}>
            <ul className='list-group tech__list'>
              {technologiesList.map((tech, index) => (
                <motion.li
                  key={tech.name}
                  className={`list-group-item d-flex
                 justify-content-center align-items-center ${tech.name}`}
                  initial={{ opacity: 0, y: -30 }}
                  animate={animation}
                  transition={{ duration: 1.4, delay: index / 3 }}
                >
                  <p className="tech__name">{tech.name}</p>
                  {tech.icon}
                </motion.li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Technologies;

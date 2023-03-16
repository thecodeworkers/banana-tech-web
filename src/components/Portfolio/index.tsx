import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';
import activo from '../../../public/resources/activo.svg';
import graysquare from '../../../public/resources/graysquare.png';
import GeneralButton from '../GeneralButton';

const Portfolio = () => {
  return (
    <div className={styles._main}>
      <div className={styles._content}>
        <div className={styles._imageLeftContainer}>
          <p className={styles._text}>Puntu</p>
          <Image className={styles._image} src={graysquare} alt={'empty'} quality={100} />
        </div>
        <div className={styles._imageRightContainer}>
          <p className={styles._text}>Banco Activo</p>
          <Image className={styles._image} src={graysquare} alt={'activo'} quality={100} />
        </div>
      </div>
      <div className={styles._content}>
        <div className={styles._imageLeftContainer}>
          <p className={styles._text}>Vippo</p>
          <Image className={styles._image} src={graysquare} alt={'empty'} quality={100} />
        </div>
        <div className={styles._imageRightContainer}>
          <p className={styles._text}>Sudeca</p>
          <Image className={styles._image} src={graysquare} alt={'activo'} quality={100} />
        </div>
      </div>
      <div className={styles._buttonContainer}>
        <GeneralButton text={'See more'} />
      </div>
    </div>
  );
};

export default Portfolio;

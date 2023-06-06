import Image from 'next/image';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import FadeIn from '../../components/FadeIn';

const AboutUs = forwardRef<HTMLDivElement>((props: any, ref): any => {
  return (
    <div ref={ref} className={styles._main}>
      <FadeIn className={styles._content}>
        <div className={styles._textBox}>
          <div className={styles._backgroundImage}>
            <Image
              src={props?.image}
              alt={props?.altImage}
              width={props?.imageWidth}
              height={props?.imageHeight}
              quality={100}
            />
          </div>
          <div className={styles._backgroundImageResponsive}>
            <Image
              src={props?.image}
              alt={props?.altImage}
              width={props?.imageWidthResponsive}
              height={props?.imageHeightResponsive}
              quality={100}
            />
          </div>
          <p className={styles._title}>
            {props?.firstTitle}{' '}
            <span style={{ color: props?.boldColor }} className={styles._greenTitleFirst}>
              {props?.firstBold}
            </span>
            <span style={{ color: props?.boldColor }} className={styles._greenTitleSecond}>
              {' '}
              {props?.secondBold}{' '}
            </span>
            {props?.secondTitle}
          </p>
        </div>
        <div className={styles._rightBox}>
          {props?.phases?.map((phase: string, index: string | number) => (
            <p key={index} className={styles._text}>
              {phase}
            </p>
          ))}
        </div>
      </FadeIn>
    </div>
  );
});

AboutUs.displayName = 'AboutUs';

export default AboutUs;

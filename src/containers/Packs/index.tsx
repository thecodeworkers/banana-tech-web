import React, { forwardRef, useEffect, useState } from 'react';
import { FadeIn, GeneralButton } from '@/components';
import { Icon } from '@iconify/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.scss';

const Packs = forwardRef<HTMLDivElement>((props: any, ref) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [height, setHeight] = useState<number>()
  const allPacksRefs: any = []
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: 'center',
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const getCurrentDimension = () => ({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const bookACall = (pack: string) => {
    window.open(`https://api.whatsapp.com/send?phone=${props?.phone}&text=${props?.packsMessage} "${pack}"`);
  };

  const getMinHeight = () => {
    const heights = allPacksRefs.map(({offsetHeight}: any) => offsetHeight)
    setHeight(Math.max(...heights))
  }

  const setMinHeight = () => allPacksRefs.map((ref: any) => {
    if (height) {
      const varDivide = isMobile ? 24 : 15
      ref.style.height = `${height/varDivide}rem`;
    }
    return null
  })

  useEffect(() => {
    setIsMobile(getCurrentDimension().width < 500)
  }, [])

  useEffect(() => {
    getMinHeight()
  }, [allPacksRefs.lenght])

  useEffect(() => {
    setMinHeight()
  }, [height])

  return (
    <div ref={ref} className={styles._main}>
      <FadeIn>
        <p className={styles._title}>{props?.title}</p>
        <div className={styles._packages}>
          <Slider {...settings}>
            {props?.packsContent?.map((pack: any, index: number) => (
              <div
                key={index}
                ref={ref => allPacksRefs.push(ref)}
                style={{ width: `${100 / props?.packsContent?.length}%` }}
                className={styles._packageContainer}>
                <div className={styles._packageContent}>
                  <div className={styles._textContent}>
                    <p className={styles._packTitle}>{pack?.title}</p>
                    <p className={styles._packSubTitle}>{pack?.text}</p>
                    <div className={styles._divider} />
                  </div>
                  <div className={styles._packagesTextContent}>
                    {pack?.props.map((prop: any, idx: number) => (
                      <div key={idx} className={styles._propContainer}>
                        <Icon icon={prop?.icon} color={prop?.color} width={22} height={22} />
                        <p className={prop?.icon == 'material-symbols:close' ? styles._disableText : styles._text}>
                          {prop?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className={styles._buttonMainContainer}>
                    <div className={styles._buttonContainer}>
                      <GeneralButton
                        method={() => {
                          bookACall(pack?.title);
                        }}
                        text={pack?.buttonText}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </FadeIn>
    </div>
  );
});

Packs.displayName = 'Packs';

export default Packs;

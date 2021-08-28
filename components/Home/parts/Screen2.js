
/* eslint-disable */
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Autoplay, Pagination, Navigation]);

import { FullPage } from 'styles/layouts';
import { Container, Flex, StyledImage } from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box } from 'styles/components/Shape';
import classes from 'components/Home/styles/Home.module.css';
import PageIdent from 'components/Home/components/PageIndent';

const View = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.test',
        scrub: 1,
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    tl.to('.vision-slide', {
      x: 400,
      ease: 'power4.in',
      duration: 1,
    });

    gsap.from('.vision-slide', {
      scrollTrigger: {
        trigger: '.test',
      },
      y: '150%',
      ease: 'power4.out',
      duration: 2,
      delay: 0.5,
    });
  }, []);

  return (
    <FullPage className="screen">
      <Flex
        className="test"
        bgColor="dark2"
        items="center"
        content="center"
        width="100%"
        height="100%"
      >
        <Container className="overflow-hidden" maxWidth={1147} height={510}>
          <Flex items="center" height="100%">
            <Swiper
              className="vision-slide"
              direction={'vertical'}
              loop={true}
              pagination={{
                clickable: true,
              }}
              centeredSlides={true}
            >
              <SwiperSlide>
                <Flex className={classes['vision-slide-item']}>
                  <Box>
                    <StyledImage src="/static/images/slider/slider-2-1.png" />
                  </Box>
                  <Typo
                    className={classes['vision-slide-item-content']}
                    color="#fff"
                    fontSize="1.8rem"
                    fontSizeSM="1rem"
                    lineHeight="2.6rem"
                    lineHeightSM="1.6rem"
                    marginLeft={30}
                    style={{ flex: 1 }}
                  >
                    <Typo as="span" fontWeight={500}>
                      We're here to listen and willing to be a part of your
                      vision.
                    </Typo>
                    <br />
                    <Typo as="span" color="grey4" fontWeight={500}>
                      Please feel free to consult with us about your ideas,
                      business flow or the comprehensive picture of your
                      product.
                    </Typo>
                  </Typo>
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex items="center">
                  <Box>
                    <StyledImage src="/static/images/slider/slider-2-1.png" />
                  </Box>
                  <Typo
                    className={classes['vision-slide-item-content']}
                    color="#fff"
                    fontSize="1.8rem"
                    fontSizeSM="1rem"
                    lineHeight="2.6rem"
                    lineHeightSM="1.6rem"
                    marginLeft={30}
                    style={{ flex: 1 }}
                  >
                    <Typo as="span" fontWeight={500}>
                      We're here to listen and willing to be a part of your
                      vision.
                    </Typo>
                    <br />
                    <Typo as="span" color="grey4" fontWeight={500}>
                      Please feel free to consult with us about your ideas,
                      business flow or the comprehensive picture of your
                      product.
                    </Typo>
                  </Typo>
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex items="center">
                  <Box>
                    <StyledImage src="/static/images/slider/slider-2-1.png" />
                  </Box>
                  <Typo
                    className={classes['vision-slide-item-content']}
                    color="#fff"
                    fontSize="1.8rem"
                    fontSizeSM="1rem"
                    lineHeight="2.6rem"
                    lineHeightSM="1.6rem"
                    marginLeft={30}
                    style={{ flex: 1 }}
                  >
                    <Typo as="span" fontWeight={500}>
                      We're here to listen and willing to be a part of your
                      vision.
                    </Typo>
                    <br />
                    <Typo as="span" color="grey4" fontWeight={500}>
                      Please feel free to consult with us about your ideas,
                      business flow or the comprehensive picture of your
                      product.
                    </Typo>
                  </Typo>
                </Flex>
              </SwiperSlide>
            </Swiper>
          </Flex>
        </Container>
        <Box other={{ position: 'relative' }}>
          {/* <StyledImage
            className={classes['tes-nav']}
            src="/static/images/icons/triangle-right-gold.svg"
            onClick={nextTes}
            style={{ cursor: 'pointer' }}
          /> */}
        </Box>
      </Flex>

      <PageIdent order="02" text="Introduce" />
    </FullPage>
  );
};

export default View;

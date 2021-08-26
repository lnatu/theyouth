/* eslint-disable */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Autoplay, Pagination, Navigation]);

import { FullPage } from 'styles/layouts';
import { Container, Flex, Stack, StyledImage } from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box, Line } from 'styles/components/Shape';
import classes from 'components/Home/styles/Home.module.css';
import PageIdent from 'components/Home/components/PageIndent';

const View = () => {
  const nextTes = () => {
    document.querySelector('.swiper-button-next').click();
  };

  return (
    <FullPage className="screen" height="auto">
      <Flex
        bgColor="dark2"
        items="center"
        content="center"
        padding="20rem 2rem"
      >
        <Container maxWidth="117rem">
          <Typo
            as="p"
            align="center"
            fontSize="1.4rem"
            lineHeight="1.68rem"
            marginBottom={10}
          >
            <Typo as="span" color="warning">
              Lorem Ipsum
            </Typo>{' '}
            <Typo as="span" color="grey3">
              is simply dummy text of the printing and typesetting industry.
            </Typo>{' '}
            <Typo as="span" color="#fff">
              Lorem Ipsum has been the industry's
            </Typo>
          </Typo>

          <Line bgColor="warning" />

          <Box other={{ position: 'relative' }}>
            <Swiper
              className={classes.testimonial}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              slidesPerGroup={3}
              spaceBetween={50}
              slidesPerView={3}
              loop={true}
              pagination={true}
              navigation={true}
              style={{ marginTop: 120 }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <SwiperSlide key={i}>
                  <Box bgColor="dark3" padding="2.5rem 2rem">
                    <Flex items="center">
                      <StyledImage src="/static/images/person1.png" />
                      <Typo color="#fff" marginLeft={10}>
                        <Typo
                          as="h2"
                          fontSize="1.4rem"
                          fontSizeSM="1rem"
                          fontWeight={500}
                          lineHeight="1.68rem"
                        >
                          Darlene Robertson
                        </Typo>
                        <Typo
                          as="p"
                          fontSize="1.2rem"
                          fontSize=".8rem"
                          lineHeight="1.44rem"
                          marginTop={5}
                          marginTopSM={0}
                        >
                          Weapps{' '}
                          <Typo as="span" fontWeight={300}>
                            manager assistant
                          </Typo>
                        </Typo>
                      </Typo>
                    </Flex>

                    <Typo
                      color="#fff"
                      fontSize="1.4rem"
                      fontSize="1rem"
                      lineHeight="2rem"
                      marginTop={15}
                    >
                      <Typo as="span" color="warning">
                        @Digital Transformation Strategy is
                      </Typo>{' '}
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to.
                    </Typo>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            <StyledImage
              className={classes['tes-nav']}
              src="/static/images/icons/triangle-right-gold.svg"
              onClick={nextTes}
              style={{ cursor: 'pointer' }}
            />
          </Box>

          <Box marginTop="8rem">
            <Flex style={{ margin: '-1.5rem' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <Box
                  className={classes['feedback-client']}
                  padding="1.5rem"
                  key={i}
                >
                  <Box bgColor="#fff" padding="2.5rem 0">
                    <Typo
                      as="p"
                      align="center"
                      color="#000"
                      fontSize="1.4rem"
                      lineHeight="1.68rem"
                    >
                      Logo Client
                    </Typo>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>
        </Container>
      </Flex>

      <PageIdent order="09" text="Feedback" />
    </FullPage>
  );
};

export default View;

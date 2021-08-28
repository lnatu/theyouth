/* eslint-disable */
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { FullPage } from 'styles/layouts';
import { Container, Flex, StyledImage } from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box, Line } from 'styles/components/Shape';
import PageIdent from 'components/Home/components/PageIndent';

const View = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const title = gsap.timeline({
      scrollTrigger: {
        trigger: '.why-us',
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    title.from('.why-us-title', {
      duration: 2,
      y: 200,
      skewY: 20,
      ease: 'power4.out',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.why-us',
        start: '50% bottom',
        end: 'bottom top',
      },
    });

    tl.from('.why-us-item', {
      duration: 1.5,
      delay: 0.5,
      x: '-100%',
      opacity: 0,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  }, []);

  return (
    <FullPage className="screen why-us" height="auto">
      <Flex
        bgColor="dark2"
        items="center"
        content="center"
        padding="33.2rem 2rem"
        paddingSM="20rem 2rem"
      >
        <Container maxWidth="117rem">
          <div class="overflow-hidden" style={{ paddingBottom: 5 }}>
            <Typo
              className="why-us-title"
              as="p"
              align="center"
              fontSize="1.4rem"
              fontSizeSM="1rem"
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

            <Line className="why-us-title" bgColor="warning" />
          </div>

          <Flex className="row g-4" marginTop="20rem" marginTopSM="10rem">
            {[1, 2, 3].map((i) => (
              <Box className="col-md-4 why-us-item" key={i}>
                <Typo align="center">
                  <StyledImage src="/static/images/screen-8-1.png" />
                  <Typo
                    as="h3"
                    color="#fff"
                    lineHeight="1.92rem"
                    fontSize="1.6rem"
                    fontSizeSM="1.5rem"
                    fontWeight="700"
                    marginTop="3rem"
                  >
                    Lorem Ipsum is simply dummy text
                  </Typo>
                  <Typo
                    as="p"
                    color="grey4"
                    fontSize="1.4rem"
                    fontSizeSM="1rem"
                    lineHeight="1.68rem"
                    letterSpacing="0.04em"
                    marginTop="1.5rem"
                  >
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown
                  </Typo>
                </Typo>
              </Box>
            ))}
          </Flex>
        </Container>
      </Flex>

      <PageIdent order="08" text="Why Digital Transformation Strategy" />
    </FullPage>
  );
};

export default View;

/* eslint-disable */
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Link from 'next/link';
import { FullPage } from 'styles/layouts';
import { Container, Flex, StyledImage } from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box, Line } from 'styles/components/Shape';
import PageIdent from 'components/Home/components/PageIndent';
import classes from 'components/Home/styles/Home.module.css';

const View = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const title = gsap.timeline({
      scrollTrigger: {
        trigger: '.steps',
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    title.from('.step-title', {
      duration: 2,
      y: 200,
      skewY: 20,
      ease: 'power4.out',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.steps',
        start: '50% bottom',
        end: 'bottom top',
      },
    });

    tl.from('.step-item', {
      duration: 2,
      delay: 1,
      x: '-100%',
      opacity: 0,
      ease: 'power4.out',
      stagger: {
        amount: 1,
      },
    });
  }, []);

  return (
    <FullPage className="screen steps" heightLG="auto">
      <Flex
        bgImage="url(/static/images/home-banner-6.png)"
        width="100%"
        height="100%"
        content="center"
        items="center"
        padding="20rem 2rem"
      >
        <Box width="100%">
          <div class="overflow-hidden" style={{ paddingBottom: 5 }}>
            <Typo
              className="step-title"
              as="p"
              align="center"
              fontSize="1.4rem"
              fontSizeSM="1rem"
              lineHeight="1.68rem"
              marginTop="5rem"
              marginBottom="1rem"
              paddingBottom="10px"
            >
              <Typo as="span" color="warning">
                Lorem Ipsum
              </Typo>{' '}
              <Typo as="span" color="grey4">
                is simply dummy text of the printing and typesetting industry.
              </Typo>{' '}
              <Typo as="span" color="#fff">
                Lorem Ipsum has been the industry's
              </Typo>
            </Typo>

            <Line className="step-title" bgColor="warning" />
          </div>

          <Container className="row" maxWidth="117rem" marginTop="17rem">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Box
                className={
                  i > 2
                    ? classes['process-card-outter'] + ' col-md-12 col-lg-2'
                    : classes['process-card-outter'] +
                      ' ' +
                      classes['active'] +
                      ' col-md-12 col-lg-2'
                }
                key={i}
              >
                <Box className={classes['process-card'] + ' step-item'} key={i}>
                  <Typo
                    as="h3"
                    align="center"
                    color="#fff"
                    fontWeight={700}
                    fontSize="1.4rem"
                    lineHeight="1.68rem"
                  >
                    Lorem Ipsum is simply dummy text
                  </Typo>
                  <Typo
                    as="p"
                    align="center"
                    color="grey4"
                    fontSize="1.3rem"
                    lineHeight="1.56rem"
                    letterSpacing="0.04em"
                    marginTop="1rem"
                  >
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took
                  </Typo>
                  <Link href="/">
                    <a>
                      <Flex items="center" content="center" marginTop="2rem">
                        <Typo
                          color="warning"
                          fontSize="1.4rem"
                          fontWeight="1.68rem"
                          marginRight={5}
                        >
                          Read more
                        </Typo>
                        <StyledImage src="/static/images/icons/next-icon.svg" />
                      </Flex>
                    </a>
                  </Link>
                  <Typo
                    className={
                      i > 2
                        ? classes['process-card-step']
                        : classes['process-card-step'] + ' ' + classes.active
                    }
                  >
                    {i}
                  </Typo>
                </Box>
              </Box>
            ))}
          </Container>
        </Box>
      </Flex>

      <PageIdent order="06" text="How we work with you" />
    </FullPage>
  );
};

export default View;

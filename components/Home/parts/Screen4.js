/* eslint-disable */
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { FullPage } from 'styles/layouts';
import { BlockText, Flex, Stack, StyledImage } from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box } from 'styles/components/Shape';
import PageIdent from 'components/Home/components/PageIndent';

const View = () => {
  const highlights = [
    {
      count: '12',
      title: 'What is Lorem Ipsum?',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      count: '5',
      title: 'What is Lorem Ipsum?',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      count: '99+',
      title: 'What is Lorem Ipsum?',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.highlight-container',
        start: '200px bottom',
        end: 'bottom top',
      },
    });

    tl.from('.highlight', {
      duration: 2,
      x: '-100%',
      opacity: 0,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });

    gsap.from('.highlight-count', {
      scrollTrigger: {
        trigger: '.highlight-container',
      },
      duration: 1,
      y: '100px',
      opacity: 0,
      ease: 'power4.out',
      delay: 1,
      stagger: {
        amount: 0.2,
      },
    });

    gsap.from('.highlight-title', {
      scrollTrigger: {
        trigger: '.highlight-container',
      },
      duration: 1,
      y: '100px',
      opacity: 0,
      ease: 'power4.out',
      delay: 1.6,
      stagger: {
        amount: 0.2,
      },
    });

    gsap.from('.highlight-text', {
      scrollTrigger: {
        trigger: '.highlight-container',
      },
      duration: 1,
      y: '100px',
      opacity: 0,
      ease: 'power4.out',
      delay: 2,
      stagger: {
        amount: 0.2,
      },
    });
  }, []);

  return (
    <FullPage className="screen highlight-container" height="auto">
      <Flex className="row g-0">
        {highlights.map((item, i) => (
          <Box
            className="col-lg-4"
            bgColor="#000"
            height="100vh"
            other={{ position: 'relative' }}
          >
            <StyledImage
              className="highlight"
              width="100%"
              height="100%"
              src="/static/images/home-banner-4-1.png"
            />
            <Stack
              bgColor="rgba(12, 12, 12, 0.8)"
              top={0}
              left={0}
              width="100%"
              height="100%"
              level={2}
            />
            <Stack top={0} left={0} width="100%" height="100%" level={3}>
              <Flex
                items="center"
                content="center"
                width="100%"
                height="100%"
                padding="0 2rem"
              >
                <BlockText align="center" color="#fff" maxWidth={370}>
                  <Typo
                    as="h3"
                    className="highlight-count"
                    fontWeight={900}
                    fontSize="9.6rem"
                  >
                    {item.count}
                  </Typo>
                  <Typo
                    as="h4"
                    className="highlight-title"
                    fontWeight={500}
                    fontSize="2.4rem"
                    lineHeight="3.456rem"
                  >
                    {item.title}
                  </Typo>
                  <Typo
                    as="h4"
                    className="highlight-text"
                    fontSize="1.4rem"
                    lineHeight="2.16rem"
                    marginTop={20}
                  >
                    {item.text}
                  </Typo>
                </BlockText>
              </Flex>
            </Stack>
          </Box>
        ))}
      </Flex>

      <PageIdent
        order="04"
        text="Highlight các con số về Khách hàng , Dự án, Đối tác"
      />
    </FullPage>
  );
};

export default View;

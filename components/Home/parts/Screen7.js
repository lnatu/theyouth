/* eslint-disable */
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { FullPage } from 'styles/layouts';
import {
  BlockText,
  Container,
  Flex,
  Stack,
  StyledImage,
} from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box, Line } from 'styles/components/Shape';
import { StyledCard } from 'components/Home/styles';
import StepCard from 'components/Home/components/ClientCard';
import PageIdent from 'components/Home/components/PageIndent';
import classes from 'components/Home/styles/Home.module.css';

const View = () => {
  const isXL = useMediaQuery({ query: '(min-width: 1200px)' });
  const isLg = useMediaQuery({ query: '(min-width: 992px)' });

  return (
    <FullPage
      bgImage="linear-gradient(to bottom, rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)), url(/static/images/home-banner-7.png)"
      // minHeight="100vh"
      height="auto"
    >
      <Flex
        className={classes['side-text']}
        height="100%"
        items="center"
        padding="8rem"
        marginLeft="auto"
      >
        <Box>
          <Box other={{ position: 'relative' }}>
            <StyledImage src="/static/images/home-banner-7-1.png" />
            <Stack
              className={classes['dts-client-stack']}
              height="auto"
              width="auto"
              bottom="4%"
              right="-5%"
              level="4"
            >
              <Typo
                as="p"
                align="center"
                color="#fff"
                fontSize="1.8rem"
                fontWeight={700}
                lineHeight="2.16rem"
                letterSpacing="0.45em"
              >
                Digital{' '}
                <Typo as="span" color="warning">
                  Transformation
                </Typo>{' '}
                Strategy{' '}
                <Typo as="span" color="warning">
                  - My
                </Typo>{' '}
                Client
              </Typo>
            </Stack>
          </Box>

          <Flex content="center">
            <Flex className={classes['slide-preview-small']} marginTop="8.5rem">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <Box className={classes['slide-preview-item']}>
                  <Box
                    border="1px solid #c4c4c4"
                    rounded={6}
                    padding={6}
                    key={i}
                  >
                    <StyledImage src="/static/images/home-banner-7-2.png" />
                  </Box>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Stack
        className={classes['side-text-stack']}
        bgColor="warning"
        position="absolute"
        top={0}
        left={0}
        height="100%"
        level={3}
      />

      <Stack
        bottom={80}
        left={isXL ? 45 : 10}
        width="100%"
        height="auto"
        className={classes['text-reverse']}
        level={4}
      >
        <Typo
          as="h2"
          fontSize={isXL ? '4.8rem' : '2rem'}
          lineHeight={isXL ? '5.76rem' : '2rem'}
        >
          <Typo as="span" color="#333" fontWeight={700}>
            Design for
          </Typo>{' '}
          <Typo as="span" color="#fff" fontWeight={700}>
            you
          </Typo>
        </Typo>
        <Typo
          as="p"
          fontSize={isXL ? '1.4rem' : '1.2rem'}
          lineHeight="1.68rem"
          marginTop={isXL ? '1.5rem' : '1rem'}
        >
          <Typo as="span" color="#fff">
            Lorem Ipsum is simply dummy text of the printing
          </Typo>{' '}
          <Typo as="span" color="#333">
            and <br /> typesetting industry. Lorem Ipsum has been the industry's
          </Typo>
        </Typo>
      </Stack>

      <PageIdent order="07" text="Design" />
    </FullPage>
  );
};

export default View;

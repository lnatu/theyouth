/* eslint-disable */
import { useEffect, useState, useRef } from 'react';
// import { TweenLite, Power3, TweenMax } from 'gsap';
// import hoverEffect from 'hover-effect';
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
import PageIdent from 'components/Home/components/PageIndent';
import classes from 'components/Home/styles/Home.module.css';

const View = () => {
  let imageList = useRef(null);
  let revealImg = useRef(null);
  let testimonialList = useRef(null);
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });
  const imageWidth = 0;

  return (
    <FullPage>
      <Stack className={classes['team-next']} level={5}>
        <StyledImage
          src="/static/images/icons/triangle-right.svg"
          style={{ cursor: 'pointer' }}
        />
      </Stack>

      <Flex
        bgColor="#000"
        items="center"
        content="center"
        width="100%"
        height="100%"
        ref={(el) => (imageList = el)}
      >
        <Box
          className={
            state.isActive1
              ? classes['feedback-item'] + ` ${classes.active}`
              : classes['feedback-item']
          }
          width="100%"
        >
          <Box other={{ position: 'relative' }}>
            <Typo align="center">
              <StyledImage
                className="test"
                src="/static/images/slider/slider-1.png"
              />
            </Typo>
            {/* 
            <Stack
              className={classes['reveal-img']}
              width="100%"
              height="100%"
              bgColor="#000"
              top={0}
              left={0}
              level={4}
              ref={revealImg}
            /> */}
          </Box>

          <Stack top="40%" left="17%" leftSM={30} level={4}>
            <Typo
              as="h2"
              color="#fff"
              fontSize="7.2rem"
              fontSizeSM="3rem"
              lineHeight="8.6rem"
              lineHeightSM="4rem"
            >
              <Typo as="span" color="warning" fontWeight={700}>
                Pr
              </Typo>
              <Typo as="span" fontWeight={700}>
                oject manager
              </Typo>
            </Typo>
          </Stack>

          <Stack
            className={classes['team-quote'] + ' ' + classes['team-quote--1']}
            level={4}
            bgColor="rgba(0, 0, 0, 0.8)"
            border="0.5px solid #FCB500"
            rounded="1.5rem"
            maxWidth="67rem"
          >
            <Typo
              as="h3"
              color="#fff"
              fontSize="3rem"
              fontSizeSM="1.3rem"
              lineHeight="3.6rem"
              lineHeightSM="2rem"
              fontWeight={500}
            >
              Founder
            </Typo>
            <Typo
              as="h4"
              color="#fff"
              fontSize="1.4rem"
              fontSizeSM=".8rem"
              lineHeight="1.6rem"
              lineHeightSM="1rem"
              marginTop="5px"
            >
              <Typo as="span" color="warning">
                Inro
              </Typo>
              <Typo as="span">duction</Typo>
            </Typo>
            <Typo
              as="p"
              color="grey4"
              fontSize="1.4rem"
              fontSizeSM=".8rem"
              lineHeight="1.68rem"
              lineHeightSM="1.2rem"
              marginTop="2rem"
              marginTopSM="1rem"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged Ipsum.
            </Typo>
          </Stack>
        </Box>

        <Box
          className={
            state.isActive2
              ? classes['feedback-item'] + ` ${classes.active}`
              : classes['feedback-item']
          }
          width="100%"
        >
          <Box other={{ position: 'relative' }}>
            <Typo align="center">
              <StyledImage src="/static/images/slider/slider-2.png" />
            </Typo>

            <Stack
              className={classes['reveal-img']}
              width="100%"
              height="100%"
              bgColor="#000"
              top={0}
              left={0}
              level={4}
            />
          </Box>

          <Stack top="50%" left="28%" level={4}>
            <Typo as="h2" color="#fff" fontSize="7.2rem" lineHeight="8.6rem">
              <Typo as="span" color="warning" fontWeight={700}>
                Des
              </Typo>
              <Typo as="span" fontWeight={700}>
                igner
              </Typo>
            </Typo>
          </Stack>

          <Stack
            top="60%"
            right="14%"
            level={4}
            bgColor="rgba(0, 0, 0, 0.8)"
            border="0.5px solid #FCB500"
            rounded="1.5rem"
            padding="4.5rem"
            maxWidth="67rem"
            width="100%"
          >
            <Typo
              as="h4"
              color="#fff"
              fontSize="1.4rem"
              lineHeight="1.6rem"
              marginTop="5px"
            >
              <Typo as="span" color="warning">
                Inro
              </Typo>
              <Typo as="span">duction</Typo>
            </Typo>
            <Typo
              as="p"
              color="grey4"
              fontSize="1.4rem"
              lineHeight="1.6rem"
              marginTop="2rem"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typo>
          </Stack>
        </Box>

        <Box
          className={
            state.isActive3
              ? classes['feedback-item'] + ` ${classes.active}`
              : classes['feedback-item']
          }
          width="100%"
        >
          <Box other={{ position: 'relative' }}>
            <Typo align="center">
              <StyledImage src="/static/images/slider/slider-3.png" />
            </Typo>

            <Stack
              className={classes['reveal-img']}
              width="100%"
              height="100%"
              bgColor="#000"
              top={0}
              left={0}
              level={4}
            />
          </Box>

          <Stack top="30%" left="20%" level={4} maxWidth="33.4rem">
            <Typo
              as="h2"
              align="right"
              color="#fff"
              fontSize="7.2rem"
              lineHeight="8.6rem"
            >
              <Typo as="span" color="warning" fontWeight={700}>
                Senior
              </Typo>
              <br />
              <Typo as="span" fontWeight={700}>
                fullstack
              </Typo>
              <br />
              <Typo as="span" color="warning" fontWeight={700}>
                dev
              </Typo>
              <Typo as="span" fontWeight={700}>
                eloper
              </Typo>
            </Typo>
          </Stack>

          <Stack
            top="50%"
            right="15%"
            level={4}
            bgColor="rgba(0, 0, 0, 0.8)"
            border="0.5px solid #FCB500"
            rounded="1.5rem"
            padding="4.5rem"
            maxWidth="67rem"
            width="100%"
          >
            <Typo
              as="h4"
              color="#fff"
              fontSize="1.4rem"
              lineHeight="1.6rem"
              marginTop="5px"
            >
              <Typo as="span" color="warning">
                Inro
              </Typo>
              <Typo as="span">duction</Typo>
            </Typo>
            <Typo
              as="p"
              color="grey4"
              fontSize="1.4rem"
              lineHeight="1.6rem"
              marginTop="2rem"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typo>
          </Stack>
        </Box>
      </Flex>

      <PageIdent order="10" text="Feedback" />
    </FullPage>
  );
};

export default View;

/* eslint-disable */
import Image from 'next/image';
import { FullPage } from 'styles/layouts';
import { BlockText, Flex, Overlay, Stack } from 'styles/components/Layouts';
import { Button } from 'styles/components/Buttons';
import { Typo } from 'styles/components/Typo';

const View = () => (
  <FullPage className="screen">
    <Overlay>
      <Flex
        items="center"
        content="center"
        width="100%"
        height="100%"
        padding="0 4rem"
      >
        <BlockText align="center">
          <Typo
            as="h1"
            fontSize="6.4rem"
            lineHeight="7.68rem"
            fontWeight={700}
            color="#fff"
            marginLeft={5}
            fontSizeSM="3rem"
            lineHeightSM="3.5rem"
          >
            Slogan{' '}
            <Typo as="span" color="warning" fontWeight={700}>
              Transformation
            </Typo>{' '}
            Strategy
          </Typo>

          <Typo
            as="p"
            color="grey4"
            fontSize="2rem"
            lineHeight="2.4rem"
            marginTop="2rem"
            fontSizeSM="1.3rem"
            lineHeightSM="2rem"
          >
            Digital Transformation Strategy is an outsourced team. We are the
            young generation with energetic engineers, <br />
            inventive designers and especially for product mindset. We're here
            to delivery outstanding service.
          </Typo>

          <Typo as="div" marginTop={66} marginTopSM="3rem">
            <Button as="a" bgColor="warning" color="grey2" fontWeight={500}>
              Contact Us
            </Button>
          </Typo>
        </BlockText>
      </Flex>
    </Overlay>

    <Stack position="absolute" bottom={30} left={45} level={3}>
      <Flex items="baseline">
        <Typo
          as="h3"
          fontSize="9.6rem"
          fontSizeSM="5rem"
          lineHeight="11.5rem"
          lineHeightSM="6rem"
          fontWeight={700}
          color="#fff"
        >
          01
        </Typo>
        <Typo
          as="p"
          fontSize="1.8rem"
          lineHeight="2.16rem"
          color="#fff"
          marginLeft={5}
        >
          Slogan
        </Typo>
      </Flex>
    </Stack>

    <Image
      src="/static/images/home-banner-1.png"
      layout="fill"
      objectFit="cover"
      quality={100}
      alt="Banner"
    />
  </FullPage>
);

export default View;

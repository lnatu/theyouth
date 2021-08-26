/* eslint-disable */
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
import PageIdent from 'components/Home/components/PageIndent';

const View = () => (
  <FullPage
    className="screen"
    height="auto"
    bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.89), rgba(0, 0, 0, 0.89)), url(/static/images/home-banner-5.png)"
  >
    <Container maxWidth="117rem" padding="33.5rem 0" paddingSM="20rem 1.5rem">
      <Typo align="center">
        <Typo
          color="#fff"
          fontSize="3.6rem"
          fontSizeSM="2rem"
          fontWeight={700}
          lineHeight="4.3rem"
        >
          <Typo as="span" color="warning" fontWeight={700}>
            Lorem
          </Typo>{' '}
          Ipsum is simply
        </Typo>

        <Typo
          as="p"
          align="center"
          fontSize="1.4rem"
          fontSizeSM="1rem"
          lineHeight="1.68rem"
          marginTop="5rem"
          marginTopSM="2rem"
          marginBottom="1rem"
        >
          <Typo as="span" color="warning">
            Lorem Ipsum
          </Typo>{' '}
          <Typo as="span" color="#fff">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </Typo>
        </Typo>
        <Line bgColor="warning" />

        <Typo
          color="grey4"
          fontSize="1.4rem"
          fontSizeSM="1rem"
          lineHeight="2.16rem"
          lineHeightSM="1.5rem"
          letterSpacing="0.04em"
          marginTop="3rem"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typo>
      </Typo>

      <Flex className="row g-5" marginTop="11rem" marginTopSM="2rem">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <Box className="col-md-6 col-lg-4" key={i}>
            <StyledCard>
              <StyledImage
                src="/static/images/home-banner-5-1.png"
                width="100%"
                height="100%"
              />
              <Stack
                bgColor="rgba(0, 0, 0, 0.7)"
                className="caption"
                width="100%"
                bottom={0}
                left={0}
                padding={20}
              >
                <Typo align="center" color="#fff" fontSize="1.6rem">
                  Some Text
                </Typo>
              </Stack>
            </StyledCard>
          </Box>
        ))}
      </Flex>

      <Box
        bgColor="warning"
        height={1}
        width="18rem"
        marginLeft="auto"
        marginRight="auto"
        marginTop="10rem"
        marginTopSM="5rem"
      />

      <Typo
        as="p"
        align="center"
        color="grey4"
        fontSize="1.4rem"
        fontSizeSM="1rem"
        fontWeight={300}
        lineHeight="2rem"
        lineHeightSM="1.5rem"
        letterSpacing="0.04em"
        marginTop="5rem"
        marginTopSM="2rem"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy .
      </Typo>
    </Container>

    <PageIdent order="05" text="Our clients" />
  </FullPage>
);

export default View;

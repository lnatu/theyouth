import { FullPage } from 'styles/layouts';
import { Container, Flex, Stack, StyledImage } from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box, Line } from 'styles/components/Shape';
import PageIdent from 'components/Home/components/PageIndent';

const View = () => (
  <FullPage height="auto">
    <Flex
      bgColor="dark2"
      items="center"
      content="center"
      padding="33.2rem 2rem"
      paddingSM="20rem 2rem"
    >
      <Container maxWidth="117rem">
        <Typo
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

        <Line bgColor="warning" />

        <Flex className="row g-4" marginTop="20rem" marginTopSM="10rem">
          <Box className="col-md-4">
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

          <Box className="col-md-4" marginTopSM="10rem">
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

          <Box className="col-md-4" marginTopSM="10rem">
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
        </Flex>
      </Container>
    </Flex>

    <PageIdent order="08" text="Why Digital Transformation Strategy" />
  </FullPage>
);

export default View;

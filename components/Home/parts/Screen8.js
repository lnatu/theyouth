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

const View = () => (
  <FullPage>
    <Flex
      bgColor="dark2"
      items="center"
      content="center"
      width="100%"
      height="100%"
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

        <Flex className="row g-4" marginTop="20rem">
          <Box className="col-4">
            <Typo align="center">
              <StyledImage src="/static/images/screen-8-1.png" />
              <Typo
                as="h3"
                color="#fff"
                lineHeight="1.92rem"
                fontSize="1.6rem"
                fontWeight="700"
                marginTop="3rem"
              >
                Lorem Ipsum is simply dummy text
              </Typo>
              <Typo
                as="p"
                color="grey4"
                fontSize="1.4rem"
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
          <Box className="col-4">
            <Typo align="center">
              <StyledImage src="/static/images/screen-8-1.png" />
              <Typo
                as="h3"
                color="#fff"
                lineHeight="1.92rem"
                fontSize="1.6rem"
                fontWeight="700"
                marginTop="3rem"
              >
                Lorem Ipsum is simply dummy text
              </Typo>
              <Typo
                as="p"
                color="grey4"
                fontSize="1.4rem"
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
          <Box className="col-4">
            <Typo align="center">
              <StyledImage src="/static/images/screen-8-1.png" />
              <Typo
                as="h3"
                color="#fff"
                lineHeight="1.92rem"
                fontSize="1.6rem"
                fontWeight="700"
                marginTop="3rem"
              >
                Lorem Ipsum is simply dummy text
              </Typo>
              <Typo
                as="p"
                color="grey4"
                fontSize="1.4rem"
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

    <Stack position="absolute" bottom={30} left={45} level={3}>
      <Flex items="baseline">
        <Typo
          as="h3"
          fontSize="9.6rem"
          lineHeight="11.5rem"
          fontWeight={700}
          color="#fff"
        >
          08
        </Typo>
        <Typo
          as="p"
          fontSize="1.8rem"
          lineHeight="2.16rem"
          color="#fff"
          marginLeft={5}
        >
          Why Digital Transformation Strategy
        </Typo>
      </Flex>
    </Stack>
  </FullPage>
);

export default View;

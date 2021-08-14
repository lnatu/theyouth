import { FullPage } from 'styles/layouts';
import {
  BlockText,
  Container,
  Flex,
  Stack,
  StyledImage,
} from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box } from 'styles/components/Shape';

const View = () => (
  <FullPage>
    <Container height="100%">
      <Flex className="row g-0" height="100%">
        <Box className="col-4" height="100%" other={{ position: 'relative' }}>
          <StyledImage
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
            <Flex items="center" content="center" width="100%" height="100%">
              <BlockText align="center" color="#fff" maxWidth={370}>
                <Typo as="h3" fontWeight={900} fontSize="9.6rem">
                  12
                </Typo>
                <Typo
                  as="h4"
                  fontWeight={500}
                  fontSize="2.4rem"
                  lineHeight="3.456rem"
                >
                  What is Lorem Ipsum?
                </Typo>
                <Typo
                  as="h4"
                  fontSize="1.4rem"
                  lineHeight="2.16rem"
                  marginTop={20}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </Typo>
              </BlockText>
            </Flex>
          </Stack>
        </Box>
        <Box className="col-4" height="100%" other={{ position: 'relative' }}>
          <StyledImage
            width="100%"
            height="100%"
            src="/static/images/home-banner-4-2.png"
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
            <Flex items="center" content="center" width="100%" height="100%">
              <BlockText align="center" color="#fff" maxWidth={370}>
                <Typo as="h3" fontWeight={900} fontSize="9.6rem">
                  5
                </Typo>
                <Typo
                  as="h4"
                  fontWeight={500}
                  fontSize="2.4rem"
                  lineHeight="3.456rem"
                >
                  What is Lorem Ipsum?
                </Typo>
                <Typo
                  as="h4"
                  fontSize="1.4rem"
                  lineHeight="2.16rem"
                  marginTop={20}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </Typo>
              </BlockText>
            </Flex>
          </Stack>
        </Box>
        <Box className="col-4" height="100%" other={{ position: 'relative' }}>
          <StyledImage
            width="100%"
            height="100%"
            src="/static/images/home-banner-4-3.png"
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
            <Flex items="center" content="center" width="100%" height="100%">
              <BlockText align="center" color="#fff" maxWidth={370}>
                <Typo as="h3" fontWeight={900} fontSize="9.6rem">
                  99+
                </Typo>
                <Typo
                  as="h4"
                  fontWeight={500}
                  fontSize="2.4rem"
                  lineHeight="3.456rem"
                >
                  What is Lorem Ipsum?
                </Typo>
                <Typo
                  as="h4"
                  fontSize="1.4rem"
                  lineHeight="2.16rem"
                  marginTop={20}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </Typo>
              </BlockText>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Container>
    <Stack position="absolute" bottom={30} left={45} level={3}>
      <Flex items="baseline">
        <Typo
          as="h3"
          fontSize="9.6rem"
          lineHeight="11.5rem"
          fontWeight={700}
          color="#fff"
        >
          04
        </Typo>
        <Typo
          as="p"
          fontSize="1.8rem"
          lineHeight="2.16rem"
          color="#fff"
          marginLeft={5}
        >
          Highlight các con số về Khách hàng , Dự án, Đối tác
        </Typo>
      </Flex>
    </Stack>
  </FullPage>
);

export default View;

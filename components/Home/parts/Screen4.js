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
import { Box } from 'styles/components/Shape';
import PageIdent from 'components/Home/components/PageIndent';

const View = () => (
  <FullPage className="screen" height="auto">
    <Flex className="row g-0">
      <Box className="col-lg-4" height="100vh" other={{ position: 'relative' }}>
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
          <Flex
            items="center"
            content="center"
            width="100%"
            height="100%"
            padding="0 2rem"
          >
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </Typo>
            </BlockText>
          </Flex>
        </Stack>
      </Box>
      <Box className="col-lg-4" height="100vh" other={{ position: 'relative' }}>
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
          <Flex
            items="center"
            content="center"
            width="100%"
            height="100%"
            padding="0 2rem"
          >
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </Typo>
            </BlockText>
          </Flex>
        </Stack>
      </Box>
      <Box className="col-lg-4" height="100vh" other={{ position: 'relative' }}>
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
          <Flex
            items="center"
            content="center"
            width="100%"
            height="100%"
            padding="0 2rem"
          >
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </Typo>
            </BlockText>
          </Flex>
        </Stack>
      </Box>
    </Flex>

    <PageIdent
      order="04"
      text="Highlight các con số về Khách hàng , Dự án, Đối tác"
    />
  </FullPage>
);

export default View;

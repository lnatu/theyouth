/* eslint-disable */
import { FullPage } from 'styles/layouts';
import { Flex, Stack, StyledImage } from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box } from 'styles/components/Shape';
import PageIdent from 'components/Home/components/PageIndent';
import classes from 'components/Home/styles/Home.module.css';

const View = () => {
  return (
    <FullPage
      bgImage="linear-gradient(to bottom, rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)), url(/static/images/home-banner-7.png)"
      minHeight="100vh"
      height="auto"
    >
      <Stack
        className={classes['sidebar-7']}
        bgColor="warning"
        height="100%"
        left={0}
        top={0}
        level={3}
      >
        <Typo className={classes['side-text-left']}>
          <Typo
            as="h3"
            color="#fff"
            fontSize="4.8rem"
            fontSizeMD="2rem"
            fontSizeSM="1.5rem"
            fontWeight={700}
            lineHeight="2.7rem"
            lineHeightSM="1.5rem"
          >
            <Typo as="span" color="#333" fontWeight={700}>
              Design
            </Typo>{' '}
            for you
          </Typo>

          <Typo
            as="p"
            color="#fff"
            fontSize="1.4rem"
            fontSizeMD="1rem"
            fontSizeSM=".9rem"
            lineHeight="1.6rem"
            lineHeightSM="1rem"
            marginRight="1.5rem"
            marginRightSM="1rem"
          >
            <Typo as="span" fontWeight={400}>
              Lorem Ipsum is simply dummy text of the printing
            </Typo>{' '}
            <Typo as="span" color="#333">
              and <br />
              typesetting industry. Lorem Ipsum has been the industry's
            </Typo>
          </Typo>
        </Typo>
      </Stack>

      <Flex className={classes['content-7']} marginLeft="auto" height="100%">
        <Box other={{ position: 'relative' }}>
          <Typo className={classes['side-text-right']}>
            <Typo
              as="h3"
              color="#fff"
              fontSize="1.8rem"
              fontSizeMD="1rem"
              fontSizeSM=".8rem"
              fontWeight={700}
              lineHeight="2.1rem"
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
          </Typo>
          <StyledImage src="/static/images/home-banner-7-1.png" />

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
                    <StyledImage
                      className={classes['client-7']}
                      src="/static/images/home-banner-7-2.png"
                    />
                  </Box>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <PageIdent order="07" text="Design" />
    </FullPage>
  );
};

export default View;

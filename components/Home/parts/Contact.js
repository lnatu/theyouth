/* eslint-disable */
import { useMediaQuery } from 'react-responsive';
import { FullPage } from 'styles/layouts';
import { Flex, Stack, StyledImage } from 'styles/components/Layouts';
import { Button } from 'styles/components/Buttons';
import { Input } from 'styles/components/Form';
import { Typo } from 'styles/components/Typo';
import { Box } from 'styles/components/Shape';

const View = () => {
  const isLg = useMediaQuery({ query: '(min-width: 992px)' });

  return (
    <FullPage height="auto">
      <Flex className="row g-0" height={isLg ? '100vh' : 'auto'}>
        <Box
          className="col-lg-6"
          height="100%"
          other={{
            position: 'relative',
            backgroundImage:
              'radial-gradient(66.44% 66.44% at 25.29% 0%, #414141 12.47%, #1C1C1C 100%)',
          }}
          padding={isLg ? '0' : '20rem 0 10rem 0'}
        >
          <Flex width="100%" height="100%" items="center" justify="center">
            <Box padding="0 8rem" paddingSM="0 2rem">
              <Box>
                <Typo
                  as="h5"
                  color="#fff"
                  fontSize="4.8rem"
                  lineHeight="8.4rem"
                  fontWeight={700}
                >
                  Cotact Form
                </Typo>
                <Typo
                  as="p"
                  color="#fff"
                  fontSize="1.4rem"
                  lineHeight="2rem"
                  letterSpacing="0.04em"
                >
                  <Typo as="span" color="warning">
                    Only five centuries,
                  </Typo>{' '}
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like
                </Typo>

                <Box marginTop="4.5rem">
                  <form>
                    <Flex className="row g-5">
                      <Box className="col-md-6">
                        <Input
                          color="grey4"
                          fontSize="1.4rem"
                          type="text"
                          placeholder="Name"
                        />
                      </Box>
                      <Box className="col-md-6">
                        <Input
                          color="grey4"
                          fontSize="1.4rem"
                          type="email"
                          placeholder="Email"
                        />
                      </Box>
                      <Box className="col-12">
                        <Input
                          as="textarea"
                          color="grey4"
                          fontSize="1.4rem"
                          placeholder="Email"
                          height="220px"
                        />
                      </Box>
                      <Box className="col-12">
                        <Button
                          bgColor="warning"
                          color="#fff"
                          fontSize="1.4rem"
                          rounded="4px"
                          minw="23rem"
                        >
                          Submit
                        </Button>
                      </Box>
                    </Flex>
                  </form>
                </Box>

                <Flex className="row" marginTop="10rem">
                  <Box className="col-lg-6">
                    <Flex items="center">
                      <StyledImage
                        src="/static/images/icons/map-pin.svg"
                        alt="dts map pin"
                      />
                      <Typo
                        color="grey5"
                        fontSize="1.4rem"
                        lineHeight="1.68rem"
                        marginLeft="1rem"
                        style={{ flex: 1 }}
                      >
                        373/226 Lý Thường Kiệt, P8, Q. Tân Bình, Tp.HCM
                      </Typo>
                    </Flex>
                    <Flex items="flex-start" marginTop="2rem">
                      <StyledImage
                        src="/static/images/icons/phone.svg"
                        alt="dts phone"
                      />
                      <Box>
                        <Typo
                          as="p"
                          color="#fff"
                          fontSize="1.4rem"
                          lineHeight="1.68rem"
                          marginLeft="1rem"
                        >
                          <Typo as="span" color="grey3">
                            Phone:
                          </Typo>{' '}
                          <Typo as="span" color="#fff">
                            1900 636 648
                          </Typo>
                        </Typo>
                        <Typo
                          as="p"
                          color="#fff"
                          fontSize="1.4rem"
                          lineHeight="1.68rem"
                          marginLeft="1rem"
                          marginTop="5px"
                        >
                          <Typo as="span" color="grey3">
                            Bấm
                          </Typo>{' '}
                          <Typo as="span" color="#fff">
                            108 -
                          </Typo>{' '}
                          <Typo as="span" color="#fff">
                            Phòng kinh doanh
                          </Typo>
                        </Typo>
                        <Typo
                          as="p"
                          color="#fff"
                          fontSize="1.4rem"
                          lineHeight="1.68rem"
                          marginLeft="1rem"
                          marginTop="5px"
                        >
                          <Typo as="span" color="grey3">
                            Bấm
                          </Typo>{' '}
                          <Typo as="span" color="#fff">
                            109 -
                          </Typo>{' '}
                          <Typo as="span" color="#fff">
                            Phòng kinh doanh
                          </Typo>
                        </Typo>
                        <Typo
                          as="p"
                          color="#fff"
                          fontSize="1.4rem"
                          lineHeight="1.68rem"
                          marginLeft="1rem"
                          marginTop="5px"
                        >
                          <Typo as="span" color="grey3">
                            Bấm
                          </Typo>{' '}
                          <Typo as="span" color="#fff">
                            103 -
                          </Typo>{' '}
                          <Typo as="span" color="#fff">
                            Phòng kỹ thuật
                          </Typo>
                        </Typo>
                      </Box>
                    </Flex>
                    <Flex items="center" marginTop="2rem">
                      <StyledImage
                        src="/static/images/icons/envelope.svg"
                        alt="dts email"
                      />
                      <Typo
                        color="grey5"
                        fontSize="1.4rem"
                        lineHeight="1.68rem"
                        marginLeft="1rem"
                      >
                        E-mail: minhdaoxxx@gmail.com
                      </Typo>
                    </Flex>
                  </Box>
                  <Box className="col-lg-6" marginTop={isLg ? '0' : '10rem'}>
                    <StyledImage
                      src="/static/images/logo-footer.png"
                      alt="dts logo"
                    />
                    <Typo
                      color="grey5"
                      fontSize="1.4rem"
                      lineHeight="1.68rem"
                      marginTop="2rem"
                    >
                      Giấy phép kinh doanh: 0313728397
                      <br /> Sở kế hoạch và đầu tư thành phố Hồ Chí Minh
                    </Typo>
                    <Flex marginTop="2rem">
                      <Box>
                        <StyledImage
                          src="/static/images/dmca.png"
                          alt="dts logo"
                        />
                      </Box>
                      <Box marginLeft="1rem">
                        <StyledImage
                          src="/static/images/bct.png"
                          alt="dts logo"
                        />
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>

        {isLg && (
          <Box
            className="col-lg-6"
            height="100%"
            other={{ position: 'relative' }}
          >
            <StyledImage
              width="100%"
              height="100%"
              src="/static/images/home-banner-11.png"
            />

            <Stack
              bgColor="rgba(12, 12, 12, 0.8)"
              top={0}
              left={0}
              width="100%"
              height="100%"
              level={2}
            />
          </Box>
        )}
      </Flex>
    </FullPage>
  );
};

export default View;

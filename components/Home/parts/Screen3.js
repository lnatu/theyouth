/* eslint-disable */
import Image from 'next/image';
import { FullPage } from 'styles/layouts';
import { Container, Flex, Stack } from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box, Line } from 'styles/components/Shape';
import utilClasses from 'styles/modules/Utilities.module.css';

const View = () => {
  const techStack = [
    [
      {
        title: 'Frontend',
        tech: [
          'Nextjs',
          'React Js',
          'Elm',
          'Ruby on rails',
          'JQuery',
          'Javascript',
          'Html5',
          'Css',
          'Scss',
        ],
      },
    ],
    [
      {
        title: 'Backend',
        tech: ['Ruby on rails', 'Nodejs', 'Firebase'],
      },
    ],
    [
      {
        title: 'Mobile App',
        tech: ['Android', 'Swift', 'React Native', 'Flutter'],
      },
    ],
    [
      {
        title: 'Design Skills',
        tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma (Software)'],
      },
      {
        title: 'Industry Knowledge',
        tech: ['Graphic Design', 'Web Design', 'Photography'],
      },
    ],
  ];

  return (
    <FullPage>
      <Stack
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        level={2}
      >
        <Flex items="center" content="center" width="100%" height="100%">
          <div style={{ width: '100%' }}>
            <Typo
              as="p"
              align="center"
              fontSize="1.4rem"
              lineHeight="1.68rem"
              marginBottom={10}
            >
              <Typo as="span" color="warning">
                We're ready
              </Typo>{' '}
              <Typo as="span" color="grey3">
                to keep up with
              </Typo>{' '}
              <Typo as="span" color="#fff">
                the latest technical skills and trendy design.
              </Typo>
            </Typo>
            <Line bgColor="warning" />

            <Container maxWidth="117rem">
              <Flex marginTop="9rem" className="row gx-4">
                {techStack.map((ts) => (
                  <div className="col-md-3">
                    <Box
                      bgColor="rgba(255, 255, 255, 0.2)"
                      padding="4rem 3rem"
                      rounded={3}
                      height="100%"
                      other={{ flex: 1 }}
                    >
                      {ts.map((item, i) => (
                        <>
                          <Typo
                            as="h3"
                            color="#fff"
                            fontWeight={500}
                            fontSize="2.2rem"
                            lineHeight="2.64rem"
                            marginBottom={25}
                            className={i > 0 ? utilClasses['mt-70'] : null}
                          >
                            {item.title}
                          </Typo>
                          {
                            <ul>
                              {item.tech.map((t, i) => (
                                <Flex
                                  as="li"
                                  items="center"
                                  className={
                                    i !== 0 ? utilClasses['mt-10'] : null
                                  }
                                >
                                  <Box
                                    bgColor="#fff"
                                    width={8}
                                    height={8}
                                    rounded={999}
                                  />
                                  <Typo
                                    as="p"
                                    color="#fff"
                                    fontSize="1.8rem"
                                    lineHeight="2.16rem"
                                    marginLeft={10}
                                  >
                                    {t}
                                  </Typo>
                                </Flex>
                              ))}
                            </ul>
                          }
                        </>
                      ))}
                    </Box>
                    ;
                  </div>
                ))}
              </Flex>
            </Container>
          </div>
        </Flex>
      </Stack>

      <Stack position="absolute" bottom={30} left={45} level={3}>
        <Flex items="baseline">
          <Typo
            as="h3"
            fontSize="9.6rem"
            lineHeight="11.5rem"
            fontWeight={700}
            color="#fff"
          >
            03
          </Typo>
          <Typo
            as="p"
            fontSize="1.8rem"
            lineHeight="2.16rem"
            color="#fff"
            marginLeft={5}
          >
            Techniques
          </Typo>
        </Flex>
      </Stack>

      <Image
        src="/static/images/home-banner-3.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Banner"
      />
    </FullPage>
  );
};

export default View;

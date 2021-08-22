import { FullPage } from 'styles/layouts';
import { Container, Flex } from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box, Line } from 'styles/components/Shape';
import PageIdent from 'components/Home/components/PageIndent';
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
    <FullPage height="auto" bgImage="url(/static/images/home-banner-3.png)">
      <Flex
        items="center"
        content="center"
        padding="27.3rem 0"
        paddingSM="20rem 0"
      >
        <div style={{ width: '100%' }}>
          <Typo
            as="p"
            align="center"
            fontSize="1.4rem"
            fontSizeSM="1rem"
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

          <Container maxWidth="117rem" padding="0 4rem">
            <Flex marginTop="9rem" marginTopSM="3rem" className="row g-4">
              {techStack.map((ts) => (
                <div className="col-md-6 col-lg-3">
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

      <PageIdent order="03" text="Techniques" />

      {/* <Image
        src="/static/images/home-banner-3.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Banner"
      /> */}
    </FullPage>
  );
};

export default View;

import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 2.8rem;
  left: 0;
  z-index: 99;

  padding: 0 12rem;

  width: 100%;

  @media only screen and (max-width: 62em) {
    padding: 0 5rem;
  }

  @media only screen and (max-width: 25.875em) {
    padding: 0 2rem;
  }
`;

export const FullPage = styled.section(
  ({ bgImage, height, heightLG, minHeight, padding, overflowLG }) => ({
    backgroundImage: bgImage,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: height || '100vh',

    minHeight: minHeight,
    width: '100%',
    position: 'relative',
    padding: padding,

    overflow: 'hidden',
    position: 'relative',

    '@media only screen and (max-width: 62em)': {
      height: heightLG,
      overflow: overflowLG,
    },
  })
);

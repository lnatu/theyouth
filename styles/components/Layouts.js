import styled from 'styled-components';
import { setMargins } from './common';

export const Container = styled.div(setMargins, ({ maxWidth, height }) => ({
  maxWidth: maxWidth,
  width: '100%',
  height: height,
  marginLeft: 'auto',
  marginRight: 'auto',

  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',

  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },

  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },

  '@media (min-width: 992px)': {
    maxWidth: maxWidth,
  },
}));

export const Overlay = styled.div`
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  );

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  width: 100%;
  height: 100%;
`;

export const Flex = styled.div(
  setMargins,
  ({
    bgColor,
    bgImage,
    direction,
    wrap,
    items,
    content,
    width,
    height,
    overflow,
    heightLG,
    theme,
  }) => ({
    backgroundColor: theme.colors[bgColor] || bgColor,
    backgroundImage: bgImage,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap || 'wrap',
    alignItems: items,
    justifyContent: content,

    height: height,
    width: width,

    position: 'relative',
    overflow: overflow,

    '@media only screen and (max-width: 62em)': {
      height: heightLG,
    },
  })
);

export const BlockText = styled.div(({ color, align, maxWidth }) => ({
  color: color,
  textAlign: align,
  maxWidth: maxWidth,
  width: '100%',
  margin: 'auto',
}));

export const Stack = styled.div(
  ({
    bgColor,
    border,
    rounded,
    position,
    top,
    right,
    bottom,
    left,
    topSM,
    rightSM,
    bottomSM,
    leftSM,
    level,
    width,
    maxWidth,
    height,
    padding,
    theme,
  }) => ({
    backgroundColor: theme.colors[bgColor] || bgColor,
    border: border,
    borderRadius: rounded,

    position: position || 'absolute',
    top: top,
    right: right,
    bottom: bottom,
    left: left,

    zIndex: level,

    width: width,
    maxWidth: maxWidth,
    height: height,

    padding: padding,

    wordBreak: 'break-all',

    '@media only screen and (max-width: 36em)': {
      top: topSM,
      right: rightSM,
      bottom: bottomSM,
      left: leftSM,
    },
  })
);

export const StyledImage = styled.img(({ width, height }) => ({
  maxWidth: '100%',
  width: width,
  height: height || 'auto',
  objectFit: 'cover',
}));

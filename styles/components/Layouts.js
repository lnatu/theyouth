import styled from 'styled-components';
import { setMargins } from './common';

export const Container = styled.div(setMargins, ({ maxWidth, height }) => ({
  maxWidth: maxWidth,
  width: '100%',
  height: height,
  marginLeft: 'auto',
  marginRight: 'auto',
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
  ({ bgColor, direction, wrap, items, content, width, height, theme }) => ({
    backgroundColor: theme.colors[bgColor] || bgColor,
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap || 'wrap',
    alignItems: items,
    justifyContent: content,

    height: height,
    width: width,
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
    position,
    top,
    right,
    bottom,
    left,
    level,
    width,
    height,
    padding,
    theme,
  }) => ({
    backgroundColor: theme.colors[bgColor] || bgColor,

    position: position || 'absolute',
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    zIndex: level,

    width: width,
    height: height,

    padding: padding,
  })
);

export const StyledImage = styled.img(({ width, height }) => ({
  maxWidth: '100%',
  width: width,
  height: height || 'auto',
  objectFit: 'cover',
}));

import styled from 'styled-components';
import { setMargins } from './common/index';

export const Line = styled.div(({ bgColor, theme }) => ({
  backgroundColor: theme.colors[bgColor] || bgColor,

  width: '100%',
  height: 1,
  maxWidth: '37rem',

  marginLeft: 'auto',
  marginRight: 'auto',

  position: 'relative',

  '&:after': {
    content: '""',
    backgroundColor: theme.colors[bgColor] || bgColor,
    borderRadius: '999px',

    width: 4,
    height: 4,

    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export const Box = styled.div(
  setMargins,
  ({ bgColor, padding, rounded, width, height, theme, other }) => ({
    backgroundColor: theme.colors[bgColor] || bgColor,
    borderRadius: rounded,
    padding: padding,
    width: width,
    height: height,
    ...other,
  })
);

export const CursorOutline = styled.div`
  z-index: 999;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;

  width: 5rem;
  height: 5rem;
  border: 2px solid #fff;
`;

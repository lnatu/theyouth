import styled from 'styled-components';
import { setMargins } from './common';

export const Typo = styled.div(
  setMargins,
  ({
    align,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    fontSizeSM,
    lineHeightSM,
    theme,
  }) => ({
    color: theme.colors[color] || color,
    fontSize: fontSize,
    fontWeight: fontWeight || 400,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
    textAlign: align,

    '@media only screen and (max-width: 36em)': {
      fontSize: fontSizeSM,
      lineHeight: lineHeightSM,
    },
  })
);

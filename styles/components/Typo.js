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
    theme,
  }) => ({
    color: theme.colors[color] || color,
    fontSize: fontSize,
    fontWeight: fontWeight || 400,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
    textAlign: align,
  })
);

import styled from 'styled-components';

export const Input = styled.input(
  ({
    align,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    height,
    letterSpacing,
    theme,
  }) => ({
    color: theme.colors[color] || color,
    fontSize: fontSize,
    fontWeight: fontWeight || 400,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
    textAlign: align,

    display: 'block',
    width: '100%',
    padding: '1.6rem 2rem',
    border: '1px solid #BDBDBD',
    borderRadius: '1rem',
    minHeight: '5rem',
    backgroundColor: 'transparent',
    backgroundClip: 'padding-box',
    appearance: 'none',
    resize: 'none',
    height: height,

    '::placeholder': {
      color: theme.colors[color] || color,
      opacity: 1,
    },
  })
);

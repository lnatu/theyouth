import styled from 'styled-components';

export const Button = styled.div(
  ({ bgColor, color, fontSize, fontWeight, rounded, minw, theme }) => ({
    backgroundColor: theme.colors[bgColor] || bgColor,
    border: '2px solid transparent',
    borderRadius: rounded,
    cursor: 'pointer',
    display: 'inline-block',

    color: theme.colors[color] || color,
    fontSize: fontSize || '1.6rem',
    fontWeight: fontWeight || 400,
    lineHeight: 1.5,
    textAlign: 'center',
    textDecoration: 'none',

    padding: '1.6rem 4.6rem',
    minHeight: '5rem',
    minWidth: minw,

    verticalAlign: 'middle',
    transition:
      'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    'user-select': 'none',

    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: theme.colors[bgColor] || bgColor,
      color: '#fff',
    },

    '@media only screen and (max-width: 576px)': {
      fontSize: '1rem',
      minHeight: 'auto',
      padding: '1rem 2rem',
    },
  })
);

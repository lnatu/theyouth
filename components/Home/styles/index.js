import styled from 'styled-components';

export const StyledCard = styled.div(({ theme }) => ({
  border: '2px solid transparent',
  borderRadius: 5,
  transition: 'all .3s',
  position: 'relative',
  overflow: 'hidden',

  '.caption': {
    transition: 'all .3s',
    transform: 'translateY(100%)',
  },

  '&:hover': {
    borderColor: theme.colors.warning,
  },

  '&:hover .caption': {
    transform: 'translateY(0)',
  },
}));

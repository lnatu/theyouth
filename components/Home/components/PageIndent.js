import { Flex, Stack } from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';

const View = ({ order, text }) => (
  <Stack
    position="absolute"
    bottom={30}
    left={45}
    bottomSM={20}
    leftSM={20}
    level={3}
  >
    <Flex items="baseline">
      <Typo
        as="h3"
        fontSize="9.6rem"
        fontSizeMD="5rem"
        fontSizeSM="3rem"
        lineHeight="11.5rem"
        lineHeightSM="6rem"
        fontWeight={700}
        color="#fff"
      >
        {order}
      </Typo>
      <Typo
        as="p"
        fontSize="1.8rem"
        fontSizeSM="1rem"
        lineHeight="2.16rem"
        lineHeightSM="1.6rem"
        color="#fff"
        marginLeft={5}
      >
        {text}
      </Typo>
    </Flex>
  </Stack>
);

export default View;

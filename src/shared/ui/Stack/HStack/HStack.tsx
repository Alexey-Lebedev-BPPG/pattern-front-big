import { forwardRef } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = forwardRef<RefDiv, HStackProps>((props, ref) => (
  <Flex ref={ref} direction='row' {...props} />
));

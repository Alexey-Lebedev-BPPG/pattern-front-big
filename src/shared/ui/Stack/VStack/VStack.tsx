import { forwardRef } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = forwardRef<RefDiv, VStackProps>((props, ref) => {
  const { align = 'start' } = props;
  return <Flex ref={ref} direction='column' align={align} {...props} />;
});

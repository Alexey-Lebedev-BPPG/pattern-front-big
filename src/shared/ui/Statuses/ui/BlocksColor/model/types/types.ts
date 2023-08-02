import { HTMLAttributes } from 'react';
import { AllStatuses, CountAmount } from '@/shared/types/ui';

export interface IBlockCoastsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  status: AllStatuses;
  amount?: CountAmount;
  countBoxes?: string;
  tooltip?: boolean;
  value1?: string;
  value2: string;
  subtitle?: string;
  typeListed?: 'card' | 'boxes';
  fullWidth?: boolean;
}

export interface IBlockStatusProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  status: AllStatuses;
}

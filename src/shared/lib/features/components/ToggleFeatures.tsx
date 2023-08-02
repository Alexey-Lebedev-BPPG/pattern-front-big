import { FC, ReactElement } from 'react';
import { getFeatureFlags } from '../lib/setGetFeatures';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface IToggleFeaturesProps {
  nameFeatures: keyof FeatureFlags;
  off: ReactElement | null;
  on: ReactElement;
}

export const ToggleFeatures: FC<IToggleFeaturesProps> = props => {
  const { nameFeatures, off, on } = props;

  if (getFeatureFlags(nameFeatures)) return on;

  return off;
};

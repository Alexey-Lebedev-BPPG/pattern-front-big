import { getFeatureFlags } from './setGetFeatures';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlags;
  off: () => T;
  on: () => T;
}

export const toggleFeatures = <T>({
  name,
  off,
  on,
}: ToggleFeaturesOptions<T>): T => (getFeatureFlags(name) ? on() : off());

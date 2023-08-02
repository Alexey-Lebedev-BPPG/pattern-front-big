import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatureFlags: FeatureFlags = {
  isCart: process.env.APP_ENV === 'local' || process.env.APP_ENV === 'dev',
  isDev: process.env.APP_ENV === 'local' || process.env.APP_ENV === 'dev',
};

let featureFlags: FeatureFlags = {
  ...defaultFeatureFlags,
};

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) featureFlags = newFeatureFlags;
};

export const getFeatureFlags = (flag: keyof FeatureFlags) =>
  featureFlags?.[flag];

export const getAllFeatureFlags = () => featureFlags;

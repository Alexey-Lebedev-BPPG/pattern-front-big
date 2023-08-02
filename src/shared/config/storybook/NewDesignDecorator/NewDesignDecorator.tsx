import { StoryFn } from '@storybook/react';
import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';

export const NewDesignDecorator = (StoryComponent: StoryFn) => {
  setFeatureFlags({ ...getAllFeatureFlags(), isDev: true });

  return (
    <div className='app-redesigned'>
      <StoryComponent />
    </div>
  );
};

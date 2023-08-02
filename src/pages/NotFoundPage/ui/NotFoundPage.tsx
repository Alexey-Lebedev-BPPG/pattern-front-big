import { FC, memo } from 'react';
import cls from './notFoundPage.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

const NotFoundPage: FC = memo(() => (
  <Page align='center'>
    <VStack
      max
      gap='2'
      align='center'
      justify='center'
      className={cls['not-found-page']}
    >
      <h2>{'Page not found'}</h2>
      <h1>{'Ooops! Something went wrong...'}</h1>
    </VStack>
  </Page>
));

export default NotFoundPage;

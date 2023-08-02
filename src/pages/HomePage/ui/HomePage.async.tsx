import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const HomePageAsync = lazyRetry(() => import('./HomePage'));

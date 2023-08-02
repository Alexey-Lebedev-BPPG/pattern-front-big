import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

import { AppRoutes, allRoutes } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

const { getRouteWelcome } = allRoutes;

export const routeConfigs: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.WELCOME_ROUTE]: {
    authOnly: false,
    element: <HomePage />,
    noHeaderFooter: true,
    path: getRouteWelcome(),
  },

  [AppRoutes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: '*',
  },
};

export const localPath = (pathname: string) => {
  const locals = Object.values(routeConfigs)
    .filter(path => !path.authOnly)
    .filter(i => {
      if (i.path) return pathname.startsWith(i.path);

      return [];
    });
  return locals;
};

// this func for mapping our routes, and return only route with noHeaderFooter
export const pathNoHeaderFooter = () => {
  const locals = Object.values(routeConfigs)
    .filter(path => path.noHeaderFooter)
    .map(p => p.path);
  return locals;
};

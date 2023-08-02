import { lazy } from 'react';

export const lazyRetry = (componentImport: Function) =>
  lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      localStorage.getItem('page-has-been-force-refreshed') || 'false',
    );

    try {
      const component = await componentImport();

      localStorage.setItem('page-has-been-force-refreshed', 'false');

      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        localStorage.setItem('page-has-been-force-refreshed', 'true');
        return window.location.reload();
      }
      throw error;
    }
  });

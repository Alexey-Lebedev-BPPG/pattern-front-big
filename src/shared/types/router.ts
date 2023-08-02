import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  authInactive?: boolean;
  noHeaderFooter?: boolean; // this is for displaying header and footer, if true, we don`t display footer and header
};

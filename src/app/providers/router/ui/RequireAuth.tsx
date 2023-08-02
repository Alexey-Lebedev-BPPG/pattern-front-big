import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuth = false;
  const location = useLocation();

  if (!isAuth)
    return <Navigate replace to={'/test'} state={{ from: location }} />;

  return children;
}

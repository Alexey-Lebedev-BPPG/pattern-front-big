import { Suspense, memo } from 'react';
import { useLocation } from 'react-router-dom';
import '../shared/config/i18n/i18n';
import { AppRouters } from './providers/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { SnackbarsContainer } from '@/shared/ui/Snackbars/Snackbars';

function AppUI() {
  const { pathname } = useLocation();
  const { theme } = useTheme();

  return (
    <div className={classNames('App', {}, [theme])}>
      <Suspense fallback=''>
        <AppRouters />
        <SnackbarsContainer />
      </Suspense>
    </div>
  );
}
const App = memo(AppUI);
export default App;

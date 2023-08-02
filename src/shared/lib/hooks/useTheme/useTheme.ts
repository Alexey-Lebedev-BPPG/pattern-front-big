import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localStorage';
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme = Theme.LIGHT;

    if (theme === Theme.DARK) newTheme = Theme.LIGHT;
    if (theme === Theme.LIGHT) newTheme = Theme.DARK;

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.DARK, toggleTheme };
};

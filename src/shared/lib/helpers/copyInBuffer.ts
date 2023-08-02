import { showSnackbar } from '@/shared/ui/Snackbars/Snackbars';

export const copyInBuffer = (value: string, title = 'Copied') => {
  navigator.clipboard.writeText(value);
  showSnackbar(title, 'success');
};

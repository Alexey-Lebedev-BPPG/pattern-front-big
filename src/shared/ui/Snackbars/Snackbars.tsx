import { memo } from 'react';
import './snackbars.scss';
import { toast, ToastContainer } from 'react-toastify';
import { IconButton } from '../Buttons';
import { Icon } from '../Icon';
import { HStack } from '../Stack';
import logo from '@/shared/assets/svg/logo.svg';

type SnackbarTypeT = 'success' | 'error' | 'info' | 'warning';

type ShowSnackbarT = (text: string, type: SnackbarTypeT) => void;

export const showSnackbar: ShowSnackbarT = (
  text: string,
  type: SnackbarTypeT,
) =>
  type &&
  toast[`${type}`](
    <HStack align='center' className='snackbar'>
      <p>{text}</p>
    </HStack>,
  );

export const SnackbarsContainer = memo(() => (
  <ToastContainer
    hideProgressBar
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
    position='bottom-left'
    autoClose={3000}
    newestOnTop={false}
    rtl={false}
    theme='colored'
    icon={false}
    closeButton={
      <IconButton variant='transparent'>
        <Icon Svg={logo} />
      </IconButton>
    }
  />
));

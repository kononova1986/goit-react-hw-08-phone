import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';
import Button from '@mui/material/Button';

export default function UserMenu() {
  const disaptch = useDispatch();

  return (
    <div className={css.wrapper}>
      <Button
        variant="contained"
        type="button"
        onClick={() => disaptch(logout())}
      >
        Logout
      </Button>
    </div>
  );
}

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import Button from '@mui/material/Button';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav
      style={{
        display: 'flex',
        gap: '5px',
      }}
    >
      <Button variant="contained">
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
      </Button>
      {isLoggedIn && (
        <Button variant="contained">
          <NavLink to="/contacts" className={css.link}>
            Contact
          </NavLink>
        </Button>
      )}
    </nav>
  );
};

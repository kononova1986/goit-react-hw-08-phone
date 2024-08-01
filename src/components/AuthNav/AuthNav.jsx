import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import Button from '@mui/material/Button';

export default function AuthNav() {
  return (
    <nav>
      <Button style={{ marginRight: '25px' }} variant="contained">
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </Button>
      <Button variant="contained">
        <NavLink className={css.link} to="/login">
          Log In
        </NavLink>
      </Button>
    </nav>
  );
}

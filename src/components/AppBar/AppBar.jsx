import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('🚀 ~ AppBar ~ isLoggedIn:', isLoggedIn);

  return (
    <header
      className={css.header}
      style={{
        display: 'flex',
        flex: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Navigation />
      {isLoggedIn ? (
        <>
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
    </header>
  );
}
